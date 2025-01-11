import axios from "axios";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const API_URL = import.meta.env.VITE_API_URL;

interface Item {
  category?: string;
  condition?: string;
  distance?: number;
  featured?: boolean;
  isClaimed?: boolean;
  createdAt?: string;
  description?: string;
  image?: string;
  name?: string;
  price?: number;
}

interface User {
  name?: string;
  email?: string;
}

export default function ItemDetail() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [item, setItem] = useState<Item | null>(null);
  const [user, setUser] = useState<User>({});
  const [isImageModalOpen, setIsImageModalOpen] = useState(false);

  useEffect(() => {
    axios
      .get(`${API_URL}/api/items/${id}`)
      .then((response) => {
        setItem(response.data);
        setUser(response.data.owner || {});
      })
      .catch((error) => {
        console.error(error);
      });
  }, [id]);

  return (
    <div className="m-16 mt-8 p-6 bg-gray-50 rounded-lg shadow-lg">
      {/* Item Header */}
      <div className="flex items-center justify-between p-6 bg-white rounded-md shadow-sm">
        <div className="flex items-center">
          <img
            src={API_URL + (item?.image || "https://via.placeholder.com/250")}
            alt={item?.name || "Item Image"}
            className="w-32 h-32 object-cover rounded-lg shadow cursor-pointer"
            onClick={() => setIsImageModalOpen(true)} // Open modal on click
          />
          <div className="ml-6">
            <h2 className="text-2xl font-bold text-gray-800">
              {item?.name || "Item Name"}
            </h2>
            <p className="text-sm text-gray-500">
              Posted by{" "}
              <span className="font-semibold">{user.name || "Unknown"}</span>
            </p>
          </div>
        </div>
        <div className="flex items-center">
          <span className="text-2xl font-semibold text-green-600 mr-4">
            ${item?.price || "0"}
          </span>
          <button
            className="flex items-center p-2 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-600"
            onClick={() => navigate("/chat")}
          >
            <img
              src="https://img.icons8.com/?size=100&id=81271&format=png&color=000000"
              alt=""
              className="w-6 h-6 mr-2"
            />
            Message
          </button>
        </div>
      </div>

      {/* Image Modal */}
      {isImageModalOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50"
          onClick={() => setIsImageModalOpen(false)} // Close modal on background click
        >
          <div className="relative bg-white rounded-lg p-4 shadow-lg">
            <button
              className="absolute top-2 right-2 text-white bg-red-600 rounded-full p-2"
              onClick={() => setIsImageModalOpen(false)}
            >
              ✕
            </button>
            <img
              src={API_URL + (item?.image || "https://via.placeholder.com/250")}
              alt={item?.name || "Item Image"}
              className="max-w-screen-sm max-h-screen object-contain"
            />
          </div>
        </div>
      )}

      {/* Item Details */}
      <div className="mt-6">
        <h3 className="text-lg font-medium text-gray-700">Details</h3>
        <div className="grid grid-cols-2 gap-4 mt-4">
          <div>
            <p className="text-gray-500">
              <span className="font-semibold text-gray-700">Category:</span>{" "}
              {item?.category || "N/A"}
            </p>
            <p className="text-gray-500">
              <span className="font-semibold text-gray-700">Condition:</span>{" "}
              {item?.condition || "N/A"}
            </p>
            <p className="text-gray-500">
              <span className="font-semibold text-gray-700">Distance:</span>{" "}
              {item?.distance || "0"} km
            </p>
          </div>
          <div>
            <p className="text-gray-500">
              <span className="font-semibold text-gray-700">Featured:</span>{" "}
              {item?.featured ? "Yes" : "No"}
            </p>
            <p className="text-gray-500">
              <span className="font-semibold text-gray-700">Claimed:</span>{" "}
              {item?.isClaimed ? "Yes" : "No"}
            </p>
            <p className="text-gray-500">
              <span className="font-semibold text-gray-700">Posted On:</span>{" "}
              {item?.createdAt
                ? new Date(item.createdAt).toLocaleDateString()
                : "N/A"}
            </p>
          </div>
        </div>
      </div>

      {/* Description */}
      <div className="mt-6">
        <h3 className="text-lg font-medium text-gray-700">Description</h3>
        <p className="mt-2 text-gray-600">
          {item?.description || "No description available."}
        </p>
      </div>

      {/* Owner Contact */}
      <div className="mt-6 p-4 bg-white rounded-md shadow-sm">
        <h3 className="text-lg font-medium text-gray-700">Owner Information</h3>
        <p className="mt-2 text-gray-500">
          <span className="font-semibold text-gray-700">Name:</span>{" "}
          {user.name || "N/A"}
        </p>
        <p className="text-gray-500">
          <span className="font-semibold text-gray-700">Email:</span>{" "}
          {user.email || "N/A"}
        </p>
      </div>
    </div>
  );
}
