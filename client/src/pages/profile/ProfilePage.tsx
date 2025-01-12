import axios from "axios";
import { useAuth } from "../../contexts/AuthContext";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ItemEdit from "../../components/item/ItemEdit";
import Loading from "../../components/Loading";

const API_URL = import.meta.env.VITE_API_URL;

// Define the structure of the profile
interface Profile {
  name?: string;
  profilePicture?: string;
}
interface Item {
  name: string;
  image: string;
  description: string;
  posted: string;
  price: number;
  _id: string;
}

const ProfilePage = () => {
  const { user, setProfiles } = useAuth();
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [profile, setProfile] = useState<Profile>({}); // Explicitly typed state
  const handleModalOpen = () => setIsModalOpen(true);
  const handleModalClose = () => setIsModalOpen(false);
  const { name, profilePicture } = profile;
  const id = user?.id;
  const token = user?.token;
  console.log("items", items);
  // Fetch user by id
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get(`${API_URL}/api/users/profile`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        const items = await axios.get(`${API_URL}/api/items`);
        // filter items by user id
        console.log("items", items.data);
        setItems(
          items.data.filter((item: any) => item.owner._id.toString() === id)
        );
        setProfile(response.data);
        setProfiles(response.data);
        setLoading(false);
        // sessionStorage.setItem("profile", JSON.stringify(response.data));
      } catch (error) {
        console.error(error);
      }
    };

    fetchUser();
  }, []);

  const updateProfilePicture = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = event.target.files?.[0];
    console.log("file", file);
    if (file) {
      const formData = new FormData();
      formData.append("profilePicture", file);

      try {
        const response = await axios.put(
          `${API_URL}/api/users/profile`,
          formData,
          {
            headers: {
              Authorization: `Bearer ${user?.token}`,
            },
          }
        );
        setProfile(response.data); // Update the profile with the new picture
      } catch (error) {
        console.error("Error updating profile picture:", error);
      }
    }
  };

  const logout = () => {
    sessionStorage.removeItem("token");
    window.location.href = "/";
  }
  

  return (
    <div className="flex h-screen ">
      <main className="flex-1 p-8 w-3/4">
        <div className="flex flex-col gap-2 items-center">
          <div className="relative">
            {profilePicture ? (
              <img
                src={`${API_URL}${profilePicture}`}
                alt={name || "Profile Picture"}
                className="w-24 h-24 rounded-full border"
              />
            ) : (
              <div className="w-24 h-24 rounded-full bg-gray-600 flex items-center justify-center text-white text-4xl font-semibold">
                {user?.name?.charAt(0).toUpperCase() || "U"}
              </div>
            )}
            <label
              htmlFor="profilePictureInput"
              className="absolute  bottom-0 right-0 cursor-pointer"
            >
              <img
                src="https://img.icons8.com/?size=100&id=11816&format=png&color=000000"
                alt="Edit"
                className="w-6 h-6 hover:w-7 hover:h-7"
              />
              <input
                type="file"
                id="profilePictureInput"
                accept="image/*"
                className="hidden"
                onChange={updateProfilePicture}
              />
            </label>
          </div>
          <h1 className="text-2xl font-semibold">{name || "User"}</h1>
          <p className="text-[#94BDB6]">{user?.email}</p>

          <div className="flex space-x-4">
            <button className="px-4 py-2 text-gray-700 bg-[#E7F3F1] rounded hover:bg-[#D1E8E3]">
              Edit Profile
            </button>
            <button className="px-4 py-2 text-white bg-[#38CEBC] rounded hover:bg-[#1ACAB7]">
              Settings
            </button>
            <button
              onClick={logout}
              className="px-4 py-2 flex items-center gap-2 text-gray-700 bg-[#E7F3F1] rounded hover:bg-[#D1E8E3]"
            >
              <img
                src="https://img.icons8.com/?size=100&id=64779&format=png&color=000000"
                alt=""
                className="w-6 h-6"
              />
              <p className="">logout</p>
            </button>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex mt-10 border-b">
          <button className="px-4 py-2 text-teal-600 border-b-2 border-teal-600">
            My Listings
          </button>
          <button className="px-4 py-2 text-gray-500 hover:text-teal-600">
            My Claims
          </button>
          <button className="px-4 py-2 text-gray-500 hover:text-teal-600">
            Settings
          </button>
        </div>

        {/* Listings */}
        <div className="mt-6 space-y-4">
          {items.map((item: Item, index) => (
            <>
              <div
                key={index}
                className="flex items-center justify-between p-4 bg-white rounded shadow"
              >
                <div className="flex items-center">
                  <Link to={`/item/${item._id}`}>
                    <img
                      src={API_URL + (item as { image: string }).image}
                      alt={item.name}
                      className="w-16 h-16 mr-4 rounded"
                    />
                  </Link>
                  <div>
                    <h3 className="text-lg font-medium">{item.name}</h3>
                    <p className="text-sm text-gray-500">
                      {item.description} {item.posted}
                    </p>
                  </div>
                </div>
                <span className="text-lg font-semibold text-gray-700">
                  $ {item.price}
                </span>
                <button onClick={handleModalOpen}>
                  <img
                    src="https://img.icons8.com/?size=100&id=102714&format=png&color=000000"
                    alt=""
                    className="w-16 h-16"
                  />
                </button>
              </div>
              {isModalOpen && (
                <ItemEdit itemId={item._id} onClose={handleModalClose} />
              )}
            </>
          ))}
          {loading && <div className=" w-24 h-24 mx-auto"><Loading /></div>}
        </div>
      </main>
    </div>
  );
};

export default ProfilePage;
