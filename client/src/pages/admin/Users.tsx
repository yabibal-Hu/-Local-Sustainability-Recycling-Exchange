
export default function Users() {
  return (
    <div className="min-h-screen p-8">
      {/* Page Header */}
      <div className="mb-6">
        <p className="text-2xl font-semibold text-gray-800">User Management</p>
      </div>

      {/* User Table */}
      <div className="overflow-x-auto bg-white shadow-md rounded-lg p-6">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-100 text-gray-500 text-sm uppercase tracking-wide">
              <th className="p-3 text-left">User</th>
              <th className="p-3 text-left">Posts</th>
              <th className="p-3 text-left">Warnings</th>
              <th className="p-3 text-left">Suspended</th>
              <th className="p-3 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {/* User Row */}
            <tr className="border-b hover:bg-gray-50">
              <td className="p-3 flex items-center space-x-3">
                <img
                  src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt="User"
                  className="w-10 h-10 rounded-full"
                />
                <span className="text-gray-800">John Doe</span>
              </td>
              <td className="p-3 text-gray-600">1</td>
              <td className="p-3 text-gray-600">
                <span className="px-3 py-1 text-sm bg-yellow-100 text-yellow-800 rounded-full">
                  Warn
                </span>
              </td>
              <td className="p-3 text-gray-600"><p className="bg-[#E7F3F1] px-3 py-1 rounded text-center">No</p></td>
              <td className="p-3">
                <div className="flex space-x-2">
                  <button className="px-3 py-1 rounded hover:bg-[#E7F3F1]">
                    <img
                      src="https://img.icons8.com/?size=100&id=114092&format=png&color=000000"
                      alt=""
                      className="w-6 h-6"
                    />
                  </button>
                  <button className="px-3 py-1  hover:bg-[#E7F3F1]">
                    <img
                      src="https://img.icons8.com/?size=100&id=47863&format=png&color=000000"
                      alt=""
                      className="w-6 h-6"
                    />
                  </button>
                </div>
              </td>
            </tr>
            <tr className="border-b hover:bg-gray-50">
              <td className="p-3 flex items-center space-x-3">
                <img
                  src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt="User"
                  className="w-10 h-10 rounded-full"
                />
                <span className="text-gray-800">smith jane</span>
              </td>
              <td className="p-3 text-gray-600">1</td>
              <td className="p-3 text-gray-600">
                <span className="px-3 py-1 text-sm bg-green-100 text-green-800 rounded-full">
                  normal
                </span>
              </td>
              <td className="p-3 text-gray-600"><p className="bg-[#E7F3F1] px-3 py-1 rounded text-center">Yes</p></td>
              <td className="p-3">
                <div className="flex space-x-2">
                  <button className="px-3 py-1 rounded hover:bg-[#E7F3F1]">
                    <img
                      src="https://img.icons8.com/?size=100&id=114092&format=png&color=000000"
                      alt=""
                      className="w-6 h-6"
                    />
                  </button>
                  <button className="px-3 py-1  hover:bg-[#E7F3F1]">
                    <img
                      src="https://img.icons8.com/?size=100&id=47863&format=png&color=000000"
                      alt=""
                      className="w-6 h-6"
                    />
                  </button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
