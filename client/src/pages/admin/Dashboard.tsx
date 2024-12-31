export default function Dashboard() {
  return (
    <div className="">
      <div className="p-4 ">
        <p className="text-2xl font-semibold">Good morning Admin</p>
        <span className="text-sm text-[#A0C2BC]">
          Here's what's been happening on the platform
        </span>
      </div>
      <div className="grid grid-cols-3 gap-4 p-4">
        <div className="bg-[#E7F4F1] p-6 rounded-lg w-72 flex flex-col gap-2">
          <p className="text-md ">Total Users</p>
          <p className="text-2xl font-semibold">1,235</p>
          <p className="text-md text-green-600">+5%</p>
        </div>
        <div className="bg-[#E7F4F1] p-6 rounded-lg w-72 flex flex-col gap-2">
          <p className="text-md ">Active Listing</p>
          <p className="text-2xl font-semibold">5326</p>
          <p className="text-md text-green-600">+2%</p>
        </div>
        <div className="bg-[#E7F4F1] p-6 rounded-lg w-72 flex flex-col gap-2">
          <p className="text-md "> Flagged Listing</p>
          <p className="text-2xl font-semibold">101</p>
          <p className="text-md text-red-600">-4%</p>
        </div>
      </div>
    </div>
  );
}
