import { Link } from 'react-router-dom';
const API_URL = import.meta.env.VITE_API_URL;
interface Item {
    _id: string;
    id: string;
    name: string;
    image: string;
    price: string;
}

export default function ItemCard({ item}: {item: Item}) {
  return (
      <Link to={`/item/${item._id}`}
        key={item.id}
        className="bg-white rounded-lg shadow-sm overflow-hidden "
      >
        <img
          src={`${API_URL}${item.image}`}
          alt={item.name}
          className="h-80 w-full object-cover"
        />
        <div className="p-3">
          <p className="text-sm font-medium text-gray-700">{item.name}</p>
          <p className="text-sm text-gray-500">{item.price ? `$${item.price}` : 'free'}</p>
        </div>
      </Link>
  );
}
