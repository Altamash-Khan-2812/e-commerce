import React, { useState } from "react";
import logo from "../../assets/images/logo.png";
import { CiHeart } from "react-icons/ci";
import { MdOutlineShoppingBag } from "react-icons/md";
import { HiMenu, HiX } from "react-icons/hi";
import Cart from "../Cart/Cart";
import { useDispatch, useSelector } from "react-redux";
import { Avatar } from "@material-tailwind/react";
import { logout } from "../../features/slices/authSlice";

const Navbar = () => {
  const totalAmount = useSelector((state) => state.cart.totalAmount);
  const user = useSelector((state) => state.user.user);
  const { name, image } = user;

  const [open, setOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const dispatch = useDispatch();

  return (
    <>
      <div className="bg-black p-2 w-full">
        <h3 className="text-white font-[inter] text-2xl font-bold text-center">
          Welcome ALL
        </h3>
      </div>

      <div className="flex justify-between items-center px-4 py-2 md:px-20">
        <div className="flex items-center">
          <img className="h-20" src={logo} alt="store" />
        </div>

        <div className="hidden md:flex items-center gap-10">
          <button
            className="text-base font-medium cursor-pointer"
            onClick={() => dispatch(logout())}
          >
            Logout
          </button>
          <div className="flex items-center gap-1">
            <CiHeart className="text-black w-6 h-6" />
            <p className="text-base font-medium">Wish List</p>
          </div>
          <div
            className="flex items-center cursor-pointer gap-1"
            onClick={handleOpen}
          >
            {totalAmount > 0 ? (
              <span className="rounded-full bg-gray-300 px-2 text-sm">
                {totalAmount}
              </span>
            ) : (
              <MdOutlineShoppingBag className="w-6 h-6" />
            )}
            <p className="text-base font-medium">Shopping Bag</p>
            {open && <Cart openModal={open} setOpen={setOpen} />}
          </div>
          <div className="flex items-center cursor-pointer pl-4">
            {image && (
              <Avatar
                src={image}
                alt="avatar"
                className="mr-2 h-8 w-8 rounded-full"
              />
            )}
            <p className="text-sm font-medium">
              Hi {name.charAt(0).toUpperCase() + name.slice(1)}
            </p>
          </div>
        </div>

        <div className="md:hidden flex items-center">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <HiX size={30} /> : <HiMenu size={30} />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden flex flex-col items-center gap-4 pb-4">
          <button
            className="text-base font-medium"
            onClick={() => dispatch(logout())}
          >
            Logout
          </button>
          <div className="flex items-center gap-2">
            <CiHeart className="text-black w-5 h-5" />
            <p className="text-base font-medium">Wish List</p>
          </div>
          <div className="flex items-center gap-2" onClick={handleOpen}>
            {totalAmount > 0 ? (
              <span className="rounded-full bg-gray-300 px-2 text-sm">
                {totalAmount}
              </span>
            ) : (
              <MdOutlineShoppingBag className="w-6 h-6" />
            )}
            <p className="text-base font-medium">Shopping Bag</p>
            {open && <Cart openModal={open} setOpen={setOpen} />}
          </div>
          <div className="flex items-center gap-2">
            {image && (
              <Avatar
                src={image}
                alt="avatar"
                className="h-8 w-8 rounded-full"
              />
            )}
            <p className="text-sm font-medium">
              Hi {name.charAt(0).toUpperCase() + name.slice(1)}
            </p>
          </div>
        </div>
      )}

      <div className="bg-black p-4 w-full flex flex-col md:flex-row justify-around items-center gap-2 md:gap-0">
        <div className="text-white text-base font-medium text-center">
          50% OFF
        </div>
        <div className="text-white text-base font-medium text-center">
          Free shipping and returns
        </div>
        <div className="text-white text-base font-medium text-center">
          Different payment methods
        </div>
      </div>
    </>
  );
};

export default Navbar;
