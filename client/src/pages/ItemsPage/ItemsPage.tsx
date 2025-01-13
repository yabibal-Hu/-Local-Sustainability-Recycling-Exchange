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
  category: string;
}
type ItemsPageProps = {
  categories: string;
};


 const ItemsPage: React.FC<ItemsPageProps> = ({ categories }) => {
  const [items, setItems] = useState<Item[]>([]);
  const [filteredItems, setFilteredItems] = useState<Item[]>([]);
console.log("categories", categories)
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

  useEffect(() => {
    setFilteredItems(
      items.filter((item) => item.category === categories)
    );
  },[categories, items]);

  return (
    <div className="min-h-screen bg-gray-50 px-64 py-12">
      {/* Featured Items Section */}
      <section className="mb-12">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold text-gray-800">
            Featured items
          </h2>
          {/* <button className="px-8 py-3 my-auto text-md bg-gray-200 text-gray-600 rounded-full hover:bg-gray-300">
            View all
          </button> */}
        </div>
        <div className="grid grid-cols-4 gap-4">
          {filteredItems.map((item) => (
            <ItemCard key={item._id} item={item} />
          ))}
        </div>
      </section>

      {/* Most Claimed Items Section */}
      <section className="mb-12">
        <h2 className="text-xl font-semibold text-gray-800 mb-6">
          Most claimed items
        </h2>
        <div className="grid grid-cols-4 gap-4">
          {items.map((item) => (
            <ItemCard key={item._id} item={item} />
          ))}
        </div>
      </section>

      {/* Filters Section */}
      <section className="mb-4">
        <h2 className="text-xl font-semibold text-gray-800 ">All items</h2>

        {/* <div className="flex flex-wrap gap-2 mb-6"></div>
        <div className="flex flex-wrap gap-2"></div> */}
      </section>

      {/* All Items Section */}
      <section>
        <div className="grid grid-cols-4 gap-4">
          {items.map((item) => (
            <ItemCard key={item._id} item={item} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default ItemsPage;