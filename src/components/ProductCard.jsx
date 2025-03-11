import React from "react";
import carImg from "../../public/car_image.png";

const ProductCard = () => {
    return (
        <div className="max-w-sm bg-white shadow-md rounded-lg overflow-hidden relative p-4">
            {/* Product Image */}
            <div className="flex justify-center">
                <img
                    src={carImg}
                    alt="Product"
                    className="w-full h-40 object-cover rounded-lg"
                />
            </div>
            {/* Product Details */}
            <div className="mt-3">
                <div className="text-lg font-bold text-gray-800">iPhone 15</div>
                <div className="text-m font-semibold text-gray-600">$ 10000</div>

                <div className="flex justify-between items-center mt-2">
                    <div className="text-s text-gray-500">Mobile</div>
                </div>
            </div>

            {/* Date at Bottom-Right */}
            <div className="absolute bottom-2 right-2 text-sm text-gray-500">
                28/02/2025
            </div>
        </div>
    );
};

export default ProductCard;
