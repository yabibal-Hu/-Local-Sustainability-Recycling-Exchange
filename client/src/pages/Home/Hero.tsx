import { useState } from "react";
import blog from "/assets/imgs/blog.jpg";
import ItemPost from "../../components/item/ItemPost";
export default function Hero() {

  const [isModalOpen, setIsModalOpen] = useState(false);
   const handleModalOpen = () => setIsModalOpen(true);
   const handleModalClose = () => setIsModalOpen(false);

  return (
    <section className="bg-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-4 md:flex md:items-center">
        <div className="md:w-1/2 space-y-4">
          <h1 className="text-3xl font-bold">The future of shopping is here</h1>
          <p className="text-gray-600">
            Exchanging is the new buying. Save money, reduce waste, and build
            community.
          </p>
          <div className="space-x-4">
            <button className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600">
              Start Exchanging Today!
            </button>
            <button
              onClick={handleModalOpen}
              className="px-4 py-2 bg-white border rounded-md hover:bg-gray-100"
            >
              Post an Item
            </button>
          </div>
        </div>
        <div className="md:w-1/2 mt-6 md:mt-0">
          <img
            src={blog}
            alt="Shopping Illustration"
            className="w-full rounded-lg shadow-md"
          />
        </div>
      </div>
      {isModalOpen && <ItemPost onClose={handleModalClose} />}
    </section>
  );
}
