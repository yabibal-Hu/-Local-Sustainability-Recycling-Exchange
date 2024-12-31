import { Link, useLocation } from "react-router-dom";

export default function Sidebar() {
  const isActive = useLocation().pathname.split("/")[2];
  return (
    <div className="w-1/4 flex flex-col px-10 py-10 bg-gray-50 justify-between h-screen fixed">
      <div className="flex flex-col gap-2">
        <Link
          to="/admin"
          className={`flex items-center gap-2 p-4 rounded-lg hover:bg-[#eff7f5] hover:text-gray-600 ${
            isActive === "dashboard" ? "bg-[#E7F3F1] text-gray-600" : ""
          }`}
        >
          <img
            src="https://img.icons8.com/?size=100&id=i6fZC6wuprSu&format=png&color=000000"
            alt=""
            className="w-6 h-6"
          />
          <p>Dashboard</p>
        </Link>
        <Link
          to="/admin/users"
          className={`flex items-center gap-2 p-4 rounded-lg hover:bg-[#eff7f5] hover:text-gray-600 ${
            isActive === "users" ? "bg-[#E7F3F1] text-gray-600" : ""
          }`}
        >
          <img
            src="https://img.icons8.com/?size=100&id=cykh8BZMTKkb&format=png&color=000000"
            alt=""
            className="w-6 h-6"
          />
          <p>Users</p>
        </Link>
        <Link to="">
          <img src="" alt="" />
          <p></p>
        </Link>
        <Link to="">
          <img src="" alt="" />
          <p></p>
        </Link>
      </div>
      <div className="mb-32">
        <button className="flex items-center gap-4 px-12 py-3 mx-auto rounded-lg hover:bg-[#E7F3F1] hover:text-gray-600">
          <img
            src="https://img.icons8.com/?size=100&id=100038&format=png&color=000000"
            alt=""
            className="w-6 h-6"
          />
          <p className="">Log out</p>
        </button>
      </div>
    </div>
  );
}
