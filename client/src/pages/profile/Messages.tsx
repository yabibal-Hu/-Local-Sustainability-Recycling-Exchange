import { Link } from "react-router-dom";

export default function Messages() {
  return (
    <div>
      <div className="p-4 ">
        <p className="text-2xl font-semibold text-center">
          {" "}
          List of Conversations
        </p>
      </div>
      <div className="flex-1 p-4 overflow-y-auto bg-gray-50">
        <div className="flex items-start space-x-4 mb-4">
          <Link
            to="/chat"
            className="w-10 h-10 my-auto bg-gray-300 rounded-full"
          ></Link>
          <div>
            <p className="font-medium">Sarah</p>
            <p className="p-2 bg-green-100 text-sm text-gray-800 rounded-lg max-w-md">
              Hi, I'm interested in the shoes. Are they still available?
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
