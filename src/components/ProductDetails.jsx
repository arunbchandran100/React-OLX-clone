import React from "react";
import carImg from "../../public/car_image.png";

const ProductDetails = () => {
    return (
        <div className="max-w-4xl mx-auto p-6 mt-4 mb-4 bg-white shadow-lg rounded-lg">
            {/* Product Image */}
            <div className="flex justify-center">
                <img
                    src={carImg}
                    alt="Product"
                    className="w-full md:w-3/4 lg:w-1/2 rounded-lg"
                />
            </div>

            {/* Product Information */}
            <div className="mt-6">
                <h3 className="text-2xl font-bold text-gray-800">iPhone 16</h3>

                {/* Price & Offer Button */}
                <div className="flex justify-between items-center mt-3 bg-gray-100 p-4 rounded-lg">
                    <p className="text-lg font-semibold text-gray-700">
                        Price: <span className="text-blue-600">$5000</span>
                    </p>
                    <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition">
                        Make Offer
                    </button>
                </div>

                {/* Seller Information */}
                <div className="mt-5 p-4 border rounded-lg">
                    <h2 className="text-lg font-semibold text-gray-800">Seller</h2>
                    <p className="text-gray-600">Name: Arun</p>
                </div>

                {/* Product Description */}
                <div className="mt-5 p-4 border rounded-lg">
                    <h2 className="text-lg font-semibold text-gray-800">Description</h2>
                    <p className="text-gray-600">Good new condition.</p>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;
