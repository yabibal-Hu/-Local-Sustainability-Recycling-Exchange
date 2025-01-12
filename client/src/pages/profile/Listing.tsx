import { useEffect, useState } from "react";
import axios from "axios";
import { useAuth } from "../../contexts/AuthContext";
import { Link } from "react-router-dom";
import Loading from "../../components/Loading";
const API_URL = import.meta.env.VITE_API_URL;

export default function Listing() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const { user } = useAuth();
  const id = user?.id;
  const token = user?.token;

  interface Item {
    name: string;
    image: string;
    description: string;
    posted: string;
    price: number;
    _id: string;
  }

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get(`${API_URL}/api/users/profile`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        if (!response.data) {
          return;
        }
        const items = await axios.get(`${API_URL}/api/items`);
        // filter items by user id
        setItems(
          items.data.filter((item: any) => item.owner._id.toString() === id)
        );
        setLoading(false);
        // setProfile(response.data);
        // setProfiles(response.data);
        // sessionStorage.setItem("profile", JSON.stringify(response.data));
      } catch (error) {
        console.error(error);
      }
    };

    fetchUser();
  }, []);
  if (loading) {
    return (
      <div className="w-full h-full flex items-center justify-center">
        <div className="w-36 h-36 flex items-center justify-center">
          <Loading />
        </div>
      </div>
    );
  }

  return (
    <div>
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
            </div>
          </>
        ))}
      </div>
    </div>
  );
}
