import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const AddProducts = () => {
  return (
    <>
      <Navbar />
      <div className="flex justify-center items-center min-h-screen bg-gray-100 p-6">
        <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-lg">
          {/* Heading */}
          <h1 className="text-2xl font-bold text-gray-800 mb-4 text-center">
            Add Product
          </h1>

          {/* Input Fields */}
          <div className="space-y-4">
            <input
              type="text"
              placeholder="Title"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            />

            <input
              type="text"
              placeholder="Category"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            />

            <input
              type="text"
              placeholder="Price"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            />

            <textarea
              placeholder="Description"
              rows="3"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 resize-none"
            ></textarea>

            <input
              type="file"
              className="w-full border rounded-md px-4 py-2 cursor-pointer file:bg-blue-500 file:text-white file:px-3 file:py-2 file:rounded-md file:border-none file:cursor-pointer hover:file:bg-blue-600"
            />
          </div>

          {/* Submit Button */}
          <button className="w-full bg-blue-500 text-white font-bold py-2 mt-4 rounded-md hover:bg-blue-600 transition">
            Submit
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AddProducts;
