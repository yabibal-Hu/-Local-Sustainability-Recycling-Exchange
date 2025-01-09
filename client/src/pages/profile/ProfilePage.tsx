const ProfilePage = () => {
  return (
    <div className="flex h-screen ">
      {/* Sidebar */}
      {/* <Sidebar /> */}
      {/* Main Content */}
      <main className="flex-1 p-8 w-3/4">
        {/* Profile Info */}
        <div className="flex flex-col gap-2 items-center">
          <img
            src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Jane Andrews"
            className="w-24 h-24 rounded-full"
          />
          <h1 className="text-2xl font-semibold">Jane Andrews</h1>
          <p className="text-[#94BDB6]">UX designer at Acme, Inc.</p>

          <div className="flex space-x-4">
            <button className="px-4 py-2 text-gray-700 bg-[#E7F3F1] rounded hover:bg-[#D1E8E3]">
              Edit Profile
            </button>
            <button className="px-4 py-2 text-white bg-[#38CEBC] rounded hover:bg-[#1ACAB7]">
              Settings
            </button>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex mt-10 border-b">
          <button className="px-4 py-2 text-teal-600 border-b-2 border-teal-600">
            My Listings
          </button>
          <button className="px-4 py-2 text-gray-500 hover:text-teal-600">
            My Claims
          </button>
          <button className="px-4 py-2 text-gray-500 hover:text-teal-600">
            Settings
          </button>
        </div>

        {/* Listings */}
        <div className="mt-6 space-y-4">
          {[
            {
              name: "Sofa",
              price: "$1200",
              posted: "2 days ago",
              img: "https://www.housingunits.co.uk/media/catalog/product/cache/6988f987dc3394f24496d57c2f3e330c/a/d/ad3ec91cb8832946abbdc75686b5908b.jpg",
            },
            {
              name: "Jacket",
              price: "$500",
              posted: "1 day ago",
              img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5ltdqeMEFLPrBD13fjIFNMkzz62XUKuLXdg&s",
            },
            {
              name: "Shoes",
              price: "$150",
              posted: "3 days ago",
              img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQG8JXm4ppRI3gjvuNrH2EFXi9AYYKyQcD9Rg&s",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="flex items-center justify-between p-4 bg-white rounded shadow"
            >
              <div className="flex items-center">
                <img
                  src={item.img}
                  alt={item.name}
                  className="w-16 h-16 mr-4 rounded"
                />
                <div>
                  <h3 className="text-lg font-medium">{item.name}</h3>
                  <p className="text-sm text-gray-500">Posted {item.posted}</p>
                </div>
              </div>
              <span className="text-lg font-semibold text-gray-700">
                {item.price}
              </span>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default ProfilePage;
