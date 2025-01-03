import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="sticky top-0 z-50 bg-white">
      <div className="bg-[#2C1F2E]">Header</div>
      <div className="flex justify-between p-4 mx-6 border-b border-gray-300">
        <Link to="/" className="flex items-center space-x-4">
          <img
            src="https://img.icons8.com/?size=100&id=Obw9pL79dFc9&format=png&color=000000"
            className="w-12 h-12"
            alt=""
          />
          <p className="text-2xl font-semibold text-gray-800">EcoExchange</p>
        </Link>
        <div className="flex items-center space-x-10">
          <div>
            <div className="relative w-full rounded my-4">
              <input
                type="search"
                placeholder="Search in messages"
                className=" w-full rounded-lg  focus:ring-0 focus:outline-none bg-[#E7F3F1] py-3 pr-4 pl-12 text-sm placeholder:text-[#94BDB6]"
              />
              <div className="absolute inset-y-0 left-4 flex items-center pr-3">
                <img
                  className="h-5 w-5 text-gray-400"
                  src="https://img.icons8.com/ios-glyphs/30/94BDB6/search--v1.png"
                  alt="Search Icon"
                />
              </div>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <Link to="/admin">
              <img
                src="https://img.icons8.com/?size=100&id=t09p4mXljOwV&format=png&color=000000"
                alt=""
                className="w-10 h-10 bg-[#E7F3F1] rounded-lg p-2"
              />
            </Link>
            <Link to="">
              <img
                src="https://img.icons8.com/?size=100&id=vO7OEBzN3y9a&format=png&color=000000"
                alt=""
                className="w-10 h-10 bg-[#E7F3F1] rounded-lg p-2"
              />
            </Link>
            <Link to="/profile">
              <img
                src="https://img.icons8.com/?size=100&id=2oRq7VXjDba7&format=png&color=000000"
                alt=""
                className="w-10 h-10 bg-[#E7F3F1] rounded-lg p-2"
              />
            </Link>
          </div>
          <div>
            <img
              src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
              className=" h-10 w-10 rounded-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
