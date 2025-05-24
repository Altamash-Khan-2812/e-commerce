import React, { useState } from "react";
import logo from "../../assets/images/logo.png";
import { CiHeart } from "react-icons/ci";
import { MdOutlineShoppingBag } from "react-icons/md";
import Cart from "../Cart/Cart";
import { useSelector } from "react-redux";

const Navbar = () => {
  const totalAmount = useSelector(state => state.cart.totalAmount);
  
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };
  return (
    <>
      <div className="bg-black p-2 w-full">
        <h3 className="text-white font-[inter] text-2xl font-bold tracking-normal leading-none text-center">
          Welcome ALL
        </h3>
      </div>
      <div className="flex justify-around items-center">
        <div>
          <img className="h-28 w-full" src={logo} alt="store" />
        </div>
        <div className="flex flex-row items-center gap-4">
          <button className=" font-[inter] text-base font-medium tracking-normal leading-none text-center mr-4">
            Logout
          </button>
          <div className="flex flex-row items-center gap-0.5">
            <CiHeart className="text-black w-6 h-6" />
            <p className=" font-[inter] text-base font-medium tracking-normal leading-none text-center mr-2">
              Wish List
            </p>
          </div>
          <div
            className="flex flex-row items-center cursor-pointer gap-0.5"
            onClick={handleOpen}
          >
          {totalAmount > 0 ? <span className="rounded-full bg-gray-300 px-2 font-[inter] text-sm mr-1">{totalAmount}</span> : <MdOutlineShoppingBag className="w-6 h-6" />}
          
            
            <p className=" font-[inter] text-base font-medium tracking-normal leading-none text-center mr-2">
              Shopping Bag
            </p>
            <div>{open && <Cart openModal={open} setOpen={setOpen} />}</div>
          </div>
        </div>
      </div>
      <div className="bg-black p-4 w-full flex   justify-around">
        <div className="text-white font-[inter] text-base font-medium tracking-normal leading-none text-center mr-2">
          50& OFF
        </div>
        <div className="text-white font-[inter] text-base font-medium tracking-normal leading-none text-center mr-2">
          Free shipping and returns
        </div>
        <div className="text-white font-[inter] text-base font-medium tracking-normal leading-none text-center mr-2">
          Different payment methods
        </div>
      </div>
    </>
  );
};

export default Navbar;
