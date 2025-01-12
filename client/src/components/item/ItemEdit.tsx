import axios from "axios";
import { useState, useEffect } from "react";
import { useAuth } from "../../contexts/AuthContext";

const API_URL = import.meta.env.VITE_API_URL;

type ItemData = {
  name?: string;
  description?: string;
  category?: string;
  condition?: string;
  price?: string;
  distance?: string;
  image?: File | null; // Update to store the file object
};

interface ItemEditProps {
  itemId: string; // Item ID to edit
  onClose: () => void;
}

const allowedConditions = ["New", "Used", "Good", "Fair", "Poor"];

export default function ItemEdit({ itemId, onClose }: ItemEditProps) {
  const { user } = useAuth();
  const token = user?.token || "";
  const [itemData, setItemData] = useState<ItemData>({ image: null });
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false); // Add loading state
  const [success, setSuccess] = useState<boolean>(false); // Add success state

  // Fetch the existing item data when the component mounts
  useEffect(() => {
    const fetchItemData = async () => {
      try {
        const response = await axios.get(`${API_URL}/api/items/${itemId}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setItemData(response.data);
      } catch (err) {
        setError("Failed to fetch item data. Please try again later.");
        console.error(err);
      }
    };

    fetchItemData();
  }, [itemId, token]);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setItemData((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      const file = files[0];
      setItemData((prev) => ({ ...prev, image: file })); // Store the file object
    }
  };

  const handleEditItem = async (e: React.FormEvent) => {
    e.preventDefault();

    // Basic validation
    if (
      !itemData.name ||
      !itemData.price ||
      !itemData.category ||
      !itemData.image
    ) {
      setError("Please fill in all required fields.");
      return;
    }

    try {
      setError(null);
      setLoading(true); // Set loading to true

      // Create FormData
      const formData = new FormData();
      formData.append("name", itemData.name || "");
      formData.append("description", itemData.description || "");
      formData.append("category", itemData.category || "");
      formData.append("condition", itemData.condition || "");
      formData.append("price", itemData.price || "");
      formData.append("distance", itemData.distance || "");
      if (itemData.image) {
        formData.append("image", itemData.image); // Append the file
      }

      // Send data to the backend to update the item
      await axios.put(`${API_URL}/api/items/${itemId}`, formData, {
        headers: {
          "Content-Type": "multipart/form-data", // Required for file uploads
          Authorization: `Bearer ${token}`,
        },
      });

      setSuccess(true); // Set success state
      setLoading(false); // Set loading to false

      // After successful update, refresh the page
      setTimeout(() => {
        window.location.reload(); // Reload the page
      }, 1500);

      onClose(); // Close the modal on successful submission
    } catch (err) {
      setError("Failed to update the item. Please try again later.");
      setLoading(false); // Set loading to false in case of error
      console.error(err);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="p-6 w-full max-w-lg bg-white rounded-lg shadow-lg relative">
        <h2 className="text-xl font-semibold mb-4 text-center">Edit Item</h2>
        {error && <p className="text-red-500 mb-4 text-center">{error}</p>}
        {success && (
          <p className="text-green-500 mb-4 text-center">
            Item updated successfully!
          </p>
        )}
        <form onSubmit={handleEditItem} className="space-y-4">
          {[
            { label: "Name", name: "name", type: "text" },
            { label: "Description", name: "description", type: "text" },
            { label: "Price", name: "price", type: "text" },
            { label: "Distance", name: "distance", type: "text" },
          ].map((field) => (
            <div key={field.name} className="flex flex-col">
              <label
                htmlFor={field.name}
                className="text-sm font-medium text-gray-700 mb-1"
              >
                {field.label}
              </label>
              <input
                id={field.name}
                name={field.name}
                type={field.type}
                value={(
                  itemData[field.name as keyof ItemData] ?? ""
                ).toString()}
                onChange={handleInputChange}
                className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#1ACAB7]"
                required={field.name === "name" || field.name === "price"}
              />
            </div>
          ))}
          <div className="flex flex-col">
            <label
              htmlFor="category"
              className="text-sm font-medium text-gray-700 mb-1"
            >
              Category
            </label>
            <select
              id="category"
              name="category"
              value={itemData.category || ""}
              onChange={handleInputChange}
              className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#1ACAB7]"
              required
            >
              <option value="" disabled>
                Select a category
              </option>
              <option value="Electronics">Electronics</option>
              <option value="Furniture">Furniture</option>
              <option value="Clothing">Clothing</option>
              <option value="Books">Books</option>
              <option value="Other">Other</option>
            </select>
          </div>
          <div className="flex flex-col">
            <label
              htmlFor="condition"
              className="text-sm font-medium text-gray-700 mb-1"
            >
              Condition
            </label>
            <select
              id="condition"
              name="condition"
              value={itemData.condition || ""}
              onChange={handleInputChange}
              className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#1ACAB7]"
              required
            >
              <option value="" disabled>
                Select a condition
              </option>
              {allowedConditions.map((condition) => (
                <option key={condition} value={condition}>
                  {condition}
                </option>
              ))}
            </select>
          </div>
          <div className="flex flex-col">
            <label
              htmlFor="image"
              className="text-sm font-medium text-gray-700 mb-1"
            >
              Image
            </label>
            <input
              id="image"
              name="image"
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#1ACAB7]"
            />
          </div>
          <div className="flex justify-end space-x-4">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 rounded border border-gray-300 text-gray-700 hover:bg-gray-100"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={loading}
              className="bg-[#38CEBC] text-white px-4 py-2 rounded hover:bg-[#1ACAB7]"
            >
              {loading ? "Updating..." : "Update Item"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
