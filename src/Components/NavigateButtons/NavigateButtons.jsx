import React from "react";
import clothes from "../../assets/images/clothes.jpg";
import { useDispatch } from "react-redux";
import {
  filterProducts,
  productSlice,
} from "../../features/slices/productSlice";
import { Link } from "react-router-dom";

const NavigateButtons = () => {
  const dispatch = useDispatch();
  const buttons = [
    "Hoodies",
    "Dresses",
    "Suits",
    "Shoes",
    "T-Shirts",
    "Jeans",
    "Jackets",
    "Bags",
  ];

  return (
    <div>
      <div className="flex items-center justify-center py-8">
        {buttons.map((button, index) => {
          return (
            <div key={index} className="mr-4">
              <Link to={"/filteredProducts/" + button}>
                <button
                  className="border rounded-sm px-5 py-2 bg-gray-100 text-gray-600 hover:bg-green-600 cursor-pointer hover:text-white hover:font-medium"
                  onClick={() => dispatch(filterProducts(button))}
                >
                  {button}
                </button>
              </Link>
            </div>
          );
        })}
      </div>
      <div className="bg-green-600 p-2 w-[55%] mx-auto rounded-md">
        <h3 className="text-red-600 text-center text-lg font-[inter] font-bold tracking-normal leading-none">
          SALES UPTO 50%
        </h3>
      </div>

      <div className="flex items-center justify-center py-4">
        <img
          src={clothes}
          className="h-[600px] w-[70%] rounded-md shadow-lg shadow-gray-600"
        />
      </div>
    </div>
  );
};

export default NavigateButtons;
