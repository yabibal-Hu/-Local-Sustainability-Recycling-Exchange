import { Link, useLocation } from "react-router-dom";

export default function Sidebar() {
  const isActive = useLocation().pathname.split("/")[2];
  return (
    <aside className="w-1/4 flex flex-col px-10 py-10 bg-gray-50 h-screen fixed">
      <div className="flex items-center mb-8">
        <img
          src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="Jane"
          className="w-12 h-12 rounded-full"
        />
        <h2 className="ml-4 text-lg font-medium">Jane</h2>
      </div>
      <nav>
        <ul className="space-y-4">
          <Link
            to="/home"
            className={`flex items-center gap-2 p-4 rounded-lg hover:bg-[#eff7f5] hover:text-gray-600 ${
              isActive === "home" ? "bg-[#E7F3F1] text-gray-600" : ""
            }`}
          >
            <img
              src="https://img.icons8.com/?size=100&id=OXVih02dFZ53&format=png&color=000000"
              alt=""
              className="w-6 h-6"
            />
            <span className="ml-2">Home</span>
          </Link>
          <Link
            to="/profile/messages"
            className={`flex items-center gap-2 p-4 rounded-lg hover:bg-[#eff7f5] hover:text-gray-600 ${
              isActive === "messages" ? "bg-[#E7F3F1] text-gray-600" : ""
            }`}
          >
            <img
              src="https://img.icons8.com/?size=100&id=pxwMA3mOFcdW&format=png&color=000000"
              alt=""
              className="w-6 h-6"
            />
            <span className="ml-2">Messages</span>
          </Link>
          <Link
            to="/profile/listing"
            className={`flex items-center gap-2 p-4 rounded-lg hover:bg-[#eff7f5] hover:text-gray-600 ${
              isActive === "listing" ? "bg-[#E7F3F1] text-gray-600" : ""
            }`}
          >
            <img
              src="https://img.icons8.com/?size=100&id=bLM2wAzB8B24&format=png&color=000000"
              alt=""
              className="w-6 h-6"
            />
            <span className="ml-2">Listings</span>
          </Link>
          <Link
            to="/profile/claims"
            className={`flex items-center gap-2 p-4 rounded-lg hover:bg-[#eff7f5] hover:text-gray-600 ${
              isActive === "claims" ? "bg-[#E7F3F1] text-gray-600" : ""
            }`}
          >
            <img
              src="https://img.icons8.com/?size=100&id=dYlE5wUzIeEx&format=png&color=000000"
              alt=""
              className="w-6 h-6"
            />
            <span className="ml-2">Claims</span>
          </Link>
          <Link
            to="/profile/help"
            className={`flex items-center gap-2 p-4 rounded-lg hover:bg-[#eff7f5] hover:text-gray-600 ${
              isActive === "help" ? "bg-[#E7F3F1] text-gray-600" : ""
            }`}
          >
            <img
              src="https://img.icons8.com/?size=100&id=CtviHbVsMacY&format=png&color=000000"
              alt=""
              className="w-6 h-6"
            />
            <span className="ml-2">Help</span>
          </Link>
          <Link
            to="/profile/"
            className={`flex items-center gap-2 p-4 rounded-lg hover:bg-[#eff7f5] hover:text-gray-600 ${
              isActive === "" ? "bg-[#E7F3F1] text-gray-600" : ""
            }`}
          >
            <img
              src="https://img.icons8.com/?size=100&id=2oRq7VXjDba7&format=png&color=000000"
              alt=""
              className="w-6 h-6"
            />
            <span className="ml-2">Profile</span>
          </Link>
        </ul>
      </nav>
      <button className="flex items-center mx-auto w-fit px-4 py-2 mt-6  rounded hover:bg-[#eff7f5]">
        <img
          src="https://img.icons8.com/?size=100&id=37787&format=png&color=000000"
          alt=""
          className="w-6 h-6"
        />
        <span className="ml-2">New Listing</span>
      </button>
    </aside>
  );
}
