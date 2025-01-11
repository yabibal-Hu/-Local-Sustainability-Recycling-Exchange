import axios from "axios";
import ItemCard from "../../components/item/ItemCard";
import { useEffect, useState } from "react";
const API_URL = import.meta.env.VITE_API_URL;

// Correcting the type to reflect the response structure, assuming the API returns _id
interface Item {
  _id: string;
  id: string;
  name: string;
  title: string;
  price: string;
  image: string;
}

export default function ItemsPage() {
  const [items, setItems] = useState<Item[]>([]);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        // Type the response.data as an array of Item
        const response = await axios.get<Item[]>(`${API_URL}/api/items`);
        setItems(response.data); // Set the items from API response
      } catch (error) {
        console.error(error);
      }
    };

    fetchItems();
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 px-64 py-12">
      {/* Featured Items Section */}
      <section className="mb-12">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold text-gray-800">
            Featured items
          </h2>
          <button className="px-8 py-3 my-auto text-md bg-gray-200 text-gray-600 rounded-full hover:bg-gray-300">
            View all
          </button>
        </div>
        <div className="grid grid-cols-5 gap-8">
          {items.map((item) => (
            <ItemCard key={item._id} item={item} />
          ))}
        </div>
      </section>

      {/* Most Claimed Items Section */}
      <section className="mb-12">
        <h2 className="text-xl font-semibold text-gray-800 mb-6">
          Most claimed items
        </h2>
        <div className="grid grid-cols-5 gap-4">
          {items.map((item) => (
            <ItemCard key={item._id} item={item} />
          ))}
        </div>
      </section>

      {/* Filters Section */}
      <section className="mb-12">
        <h2 className="text-xl font-semibold text-gray-800 mb-6">All items</h2>

        <div className="flex flex-wrap gap-2 mb-6">
          {["New", "Like New", "Good", "Fair"].map((condition) => (
            <button
              key={condition}
              className="px-8 py-3 text-md bg-gray-200 text-gray-600 rounded-full hover:bg-gray-300"
            >
              {condition}
            </button>
          ))}
        </div>
        <div className="flex flex-wrap gap-2">
          {["5 miles", "10 miles", "15 miles", "20 miles", "25 miles"].map(
            (distance) => (
              <button
                key={distance}
                className="px-8 py-3 text-md bg-gray-200 text-gray-600 rounded-full hover:bg-gray-300"
              >
                {distance}
              </button>
            )
          )}
        </div>
      </section>

      {/* All Items Section */}
      <section>
        <div className="grid grid-cols-5 gap-4">
          {items.map((item) => (
            <ItemCard key={item._id} item={item} />
          ))}
        </div>
      </section>
    </div>
  );
}
