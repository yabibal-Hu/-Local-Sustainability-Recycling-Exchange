import React from 'react'
import { Link } from 'react-router-dom';
interface Item {
  id: number;
  title: string;
  image: string;
  price: string;
}

export default function ItemCard({ item}: {item: Item}) {
  return (
      <Link to="/chat"
        key={item.id}
        className="bg-white rounded-lg shadow-sm overflow-hidden "
      >
        <img
          src={item.image}
          alt={item.title}
          className="h-80 w-full object-cover"
        />
        <div className="p-3">
          <p className="text-sm font-medium text-gray-700">{item.title}</p>
          <p className="text-sm text-gray-500">{item.price}</p>
        </div>
      </Link>
  );
}
