import ItemCard from "../../components/item/ItemCard";

export default function ItemsPage() {
  const items = [
    {
      id: 1,
      title: "Bike",
      price: "$200",
      image:
        "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    {
      id: 2,
      title: "Desk",
      price: "$50",
      image:
        "https://images.pexels.com/photos/374074/pexels-photo-374074.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    {
      id: 3,
      title: "Clothing",
      price: "Free",
      image:
        "https://images.pexels.com/photos/3965542/pexels-photo-3965542.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    {
      id: 4,
      title: "Plant",
      price: "$10",
      image:
        "https://images.pexels.com/photos/1022928/pexels-photo-1022928.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    {
      id: 5,
      title: "Art",
      price: "$30",
      image:
        "https://images.pexels.com/photos/102127/pexels-photo-102127.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 px-64 py-12">
      {/* Featured Items Section */}
      <section className="mb-12">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold text-gray-800">
            Featured items
          </h2>
          <button className="px-8 py-3 my-auto text-md bg-gray-200 text-gray-600 rounded-full hover:bg-gray-300">
            View all
          </button>
        </div>
        <div className="grid grid-cols-5 gap-8">
          {items.map((item) => (
            <ItemCard key={item.id} item={item} />
          ))}
        </div>
      </section>

      {/* Most Claimed Items Section */}
      <section className="mb-12">
        <h2 className="text-xl font-semibold text-gray-800 mb-6">
          Most claimed items
        </h2>
        <div className="grid grid-cols-5 gap-4">
          {items.map((item) => (
            <ItemCard key={item.id} item={item} />
          ))}
        </div>
      </section>

      {/* Filters Section */}
      <section className="mb-12">
        <h2 className="text-xl font-semibold text-gray-800 mb-6">All items</h2>
        
        <div className="flex flex-wrap gap-2 mb-6">
          {["New", "Like New", "Good", "Fair"].map((condition) => (
            <button
              key={condition}
              className="px-8 py-3 text-md bg-gray-200 text-gray-600 rounded-full hover:bg-gray-300"
            >
              {condition}
            </button>
          ))}
        </div>
        <div className="flex flex-wrap gap-2">
          {["5 miles", "10 miles", "15 miles", "20 miles", "25 miles"].map(
            (distance) => (
              <button
                key={distance}
                className="px-8 py-3 text-md bg-gray-200 text-gray-600 rounded-full hover:bg-gray-300"
              >
                {distance}
              </button>
            )
          )}
        </div>
      </section>

      {/* All Items Section */}
      <section>
        <div className="grid grid-cols-5 gap-4">
          {items.map((item) => (
            <ItemCard key={item.id} item={item} />
          ))}
        </div>
      </section>
    </div>
  );
}
