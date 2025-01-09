import React from "react";

export default function Item() {
  return (
    <div>
      <div className="flex items-center justify-between p-5 mt-4 mx-4 bg-white rounded shadow">
        <div className="flex items-center">
          <img
            src="https://www.housingunits.co.uk/media/catalog/product/cache/6988f987dc3394f24496d57c2f3e330c/a/d/ad3ec91cb8832946abbdc75686b5908b.jpg"
            alt="Item Image"
            className="w-16 h-16 mr-4 rounded"
          />
          <div>
            <h3 className="text-lg font-medium">Sofa</h3>
            <p className="text-sm text-gray-500">Posted by John Doe</p>
          </div>
        </div>
        <span className="text-lg font-semibold text-gray-700">$1,000</span>
      </div>
    </div>
  );
}
