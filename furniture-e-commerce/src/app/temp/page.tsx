import React from "react";

const Temp = () => {
  return (
    <div className="font-sans pl-[25%]">
      <div className="grid lg:grid-cols-3 gap-10">
        <div className="lg:col-span-2 bg-white divide-y p-4 shadow-md rounded-lg">
          {[1, 2].map((item) => (
            <div key={item} className="flex items-start gap-4 py-4 sm:flex-row flex-col">
              <div className="w-32 h-auto shrink-0">
                <img
                  src={`https://readymadeui.com/images/product${item === 1 ? "6" : "8"}.webp`}
                  className="w-full aspect-[112/149] object-contain"
                  alt="Product"
                />
              </div>
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 w-full">
                <div className="flex-1">
                  <h3 className="text-base font-bold text-gray-800 mb-1">Black T-Shirt</h3>
                  <div className="space-y-1">
                    <h6 className="text-sm text-gray-800">
                      Size: <strong className="ml-2">7.5</strong>
                    </h6>
                    <h6 className="text-sm text-gray-800">
                      Color: <strong className="ml-2">Black</strong>
                    </h6>
                  </div>
                  <div className="mt-6">
                    <button
                      type="button"
                      className="text-red-500 text-sm font-semibold flex items-center gap-2"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-4 fill-current"
                        viewBox="0 0 24 24"
                      >
                        <path d="M19 7a1 1 0 0 0-1 1v11.191A1.92 1.92 0 0 1 15.99 21H8.01A1.92 1.92 0 0 1 6 19.191V8a1 1 0 0 0-2 0v11.191A3.918 3.918 0 0 0 8.01 23h7.98A3.918 3.918 0 0 0 20 19.191V8a1 1 0 0 0-1-1Zm1-3h-4V2a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v2H4a1 1 0 0 0 0 2h16a1 1 0 0 0 0-2ZM10 4V3h4v1Z" />
                        <path d="M11 17v-7a1 1 0 0 0-2 0v7a1 1 0 0 0 2 0Zm4 0v-7a1 1 0 0 0-2 0v7a1 1 0 0 0 2 0Z" />
                      </svg>
                      Remove
                    </button>
                  </div>
                </div>
                <div className="ml-auto text-right flex flex-col items-end">
                  <button
                    type="button"
                    className="px-5 py-2.5 rounded-lg text-white text-sm font-medium border bg-blue-700 hover:bg-blue-800"
                  >
                    Add to Cart
                  </button>
                  <div className="mt-4 text-right">
                    <h4 className="text-sm text-gray-500 line-through">$22.5</h4>
                    <h4 className="text-base font-bold text-gray-800">$18.5</h4>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Temp;
