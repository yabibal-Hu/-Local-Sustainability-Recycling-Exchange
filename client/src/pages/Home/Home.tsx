import ItemsPage from "../ItemsPage/ItemsPage";
import Hero from "./Hero";

export default function Home() {
 return (
   <div className="font-sans">
     {/* Header */}
     {/* <header className="flex justify-between items-center p-4 shadow-md">
       <div className="text-xl font-semibold">GreenGoods</div>
       <div className="flex items-center space-x-4">
         <input
           type="text"
           placeholder="Search"
           className="p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
         />
         <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
           <span className="text-gray-500">👤</span>
         </div>
       </div>
     </header> */}

     {/* Hero Section */}
     <Hero />

     {/* Our Impact Section */}
     <section className="text-center py-12">
       <h2 className="text-2xl font-bold">Our Impact</h2>
       <p className="text-gray-600 mt-2">
         Together, we’re building a more sustainable future
       </p>
       <button className="mt-4 px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600">
         Learn More
       </button>
     </section>

     {/* Categories Section */}
     <section className="py-8">
       <div className="flex flex-wrap align-center justify-center gap-2 mb-6">
         {[
           "Clothing",
           "Furniture",
           "Plants",
           "Books",
           "Electronics",
           "Kitchenware",
           "Art",
         ].map((category) => (
           <button
             key={category}
             className="px-8 py-3 text-md bg-gray-200 text-gray-600 rounded-full hover:bg-gray-300"
           >
             {category}
           </button>
         ))}
       </div>
     </section>

     {/* Search Bar Section */}
     <section className="py-8 bg-gray-50">
       <div className="max-w-4xl mx-auto px-4">
         <input
           type="text"
           placeholder="Search for items, brands, or categories"
           className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
         />
       </div>
     </section>
     <ItemsPage />
     {/* Why Exchange Section */}
     <section className="py-12 bg-gray-100">
       <div className="max-w-7xl mx-auto px-4">
         <h2 className="text-center text-2xl font-bold mb-8">Why Exchange?</h2>
         <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
           {[
             {
               title: "Save Money",
               description:
                 "Access high-quality items at a fraction of the retail price.",
               icon: "💰",
             },
             {
               title: "Reduce Waste",
               description:
                 "Choose sustainability by giving new life to pre-loved items.",
               icon: "♻️",
             },
             {
               title: "Build Community",
               description:
                 "Connect with others who share your values and interests.",
               icon: "🤝",
             },
           ].map((item) => (
             <div
               key={item.title}
               className="p-6 bg-white shadow-md rounded-lg text-center"
             >
               <div className="text-4xl mb-4">{item.icon}</div>
               <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
               <p className="text-gray-600">{item.description}</p>
             </div>
           ))}
         </div>
       </div>
     </section>
   </div>
 );
}
