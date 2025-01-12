import React from "react";
import { Link } from "react-router-dom";
const API_URL = import.meta.env.VITE_API_URL;

type ItemsPageProps = {
  item: {
    _id: string;
    id: string;
    name: string;
    title: string;
    price: string;
    image: string;
    category: string;
    description: string;
  };
};

const SearchItem: React.FC<ItemsPageProps> = ({ item }) => {
  return (
    <div>
      <div className="space-y-2 py-1">
        <Link to={`/item/${item._id}`}>
          <div className="flex items-center justify-between p-2 bg-white rounded shadow border border-[#b9f3e9]">
            <div className="flex items-center">
              <img
                src={API_URL + (item as { image: string }).image}
                alt={item.name}
                className="w-12 h-12 mr-4 rounded"
              />
              <div>
                <h3 className="text-lg font-medium">{item.name}</h3>
                <p className="text-sm text-gray-500">{item.description}</p>
              </div>
            </div>
            <span className="text-lg font-semibold text-gray-700">
              $ {item.price}
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default SearchItem;
