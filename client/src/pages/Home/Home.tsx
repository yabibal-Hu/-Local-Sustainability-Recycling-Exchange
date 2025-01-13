import { useEffect, useState } from "react";
import ItemsPage from "../ItemsPage/ItemsPage";
import Hero from "./Hero";
import axios from "axios";
import SearchItem from "../../components/item/SearchItem";
const API_URL = import.meta.env.VITE_API_URL;

interface Item {
  _id: string;
  id: string;
  name: string;
  title: string;
  price: string;
  image: string;
  category: string;
  description: string; // Added the missing description field
}
export default function Home() {
  const [categories, setCategories] = useState("Electronics");
  const [items, setItems] = useState<Item[]>([]);
  const [search, setSearch] = useState("");
  const [searchResults, setSearchResults] = useState<Item[]>([]);
  console.log("searchResults", searchResults);
  console.log("search", search);

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
    const filteredItems =
      items &&
      items.filter((item) =>
        item?.name?.toLowerCase().includes(search.toLowerCase())
      );
    if (search !== "") {
      setSearchResults(filteredItems);
    } else {
      setSearchResults([]);
    }
  }, [search, items]);

  return (
    <div className="font-sans">
      <Hero />

      {/* Our Impact Section */}
      <section className="text-center py-12">
        <h2 className="text-2xl font-bold">Our Impact</h2>
        <p className="text-gray-600 mt-2">
          Together, we’re building a more sustainable future
        </p>
        <button className="mt-4 px-4 py-2 bg-[#38CEBC] text-white rounded-md hover:bg-[#1ACAB7]">
          Learn More
        </button>
      </section>

      {/* Categories Section */}
      <section className="py-8">
        <div className="flex flex-wrap align-center justify-center gap-2 mb-6">
          {["Electronics", "Furniture", "Clothing", "Books", "Other"].map(
            (category) => (
              <button
                key={category}
                onClick={() => setCategories(category)}
                className={` ${
                  categories === category
                    ? "bg-[#38CEBC] text-white hover:bg-[#1ACAB7]"
                    : "bg-gray-200 text-gray-600 hover:bg-gray-300"
                } px-8 py-3 text-md   rounded-full `}
              >
                {category}
              </button>
            )
          )}
        </div>
      </section>

      {/* Search Bar Section */}
      <section className="max-w-4xl mx-auto py-8 bg-gray-50 relative">
        <div className="max-w-4xl mx-auto px-4">
          <input
            onChange={(e) => setSearch(e.target.value)}
            type="text"
            placeholder="Search for items"
            className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
          />
        </div>
        <div className="w-full mx-auto px-4 mt-4 bg-gray-50 absolute  ">
          {searchResults &&
            searchResults.map((item) => (
                <SearchItem item={item} />
            ))}
        </div>
      </section>

      <ItemsPage categories={categories} />
      {/* Why Exchange Section */}
      <section className="py-12 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-center text-2xl font-bold mb-8">Why Exchange?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "Save Money",
                description:
                  "Access high-quality items at a fraction of the retail price.",
                icon: "💰",
              },
              {
                title: "Reduce Waste",
                description:
                  "Choose sustainability by giving new life to pre-loved items.",
                icon: "♻️",
              },
              {
                title: "Build Community",
                description:
                  "Connect with others who share your values and interests.",
                icon: "🤝",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="p-6 bg-white shadow-md rounded-lg text-center"
              >
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
