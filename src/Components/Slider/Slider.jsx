import React from "react";
import {
  nextSlide,
  prevSlide,
  dotSlide,
} from "../../features/slices/sliderSlice";
import { useDispatch, useSelector } from "react-redux";
import { sliderData } from "../../assets/data/dummyData";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";

const Slider = () => {
  const dispatch = useDispatch();
  const slideIndex = useSelector((state) => state.slider.value);

  return (
    <div className="relative pb-4">
      {/* SLIDE IMAGE SECTION */}
      <div>
        {sliderData.map((item) => {
          return (
            <div
              key={item.id}
              className={
                parseInt(item.id) === slideIndex
                  ? "opacity-100 duration-700 ease-in-out scale-100"
                  : "hidden"
              }
            >
              <div>
                {parseInt(item.id) === slideIndex && (
                  <img className="h-[850px] w-full" src={item.img} />
                )}
              </div>

              <div className="absolute top-44 mx-auto inset-x-1/4 text-center">
                <p className="text-white text-4xl font-[inter] font-bold tracking-normal leading-none">
                  {parseInt(item.id) === slideIndex && item.text}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      {/* DOT SLIDE */}
      <div className="flex absolute bottom-12 left-[45%]">
        {sliderData.map((dot, index) => {
          return (
            <div className="mr-4" key={index}>
              <div
                className={
                  index === slideIndex
                    ? "bg-green-600 rounded-full p-4 cursor-pointer"
                    : "bg-white rounded-full p-4 cursor-pointer"
                }
                onClick={() => dispatch(dotSlide(index))}
              ></div>
            </div>
          );
        })}
      </div>

      {/* NEXT & PREVIOUS BUTTONS */}
      <div>
        <button
          className="absolute top-[50%] right-4 bg-white rounded-full p-2 cursor-pointer hover:bg-green-600 hover:text-white"
          onClick={() => dispatch(nextSlide(slideIndex + 1))}
        >
          <IoIosArrowForward />
        </button>
        <button
          className="absolute top-[50%] left-4 bg-white rounded-full p-2 cursor-pointer hover:bg-green-600 hover:text-white"
          onClick={() => dispatch(prevSlide(slideIndex - 1))}
        >
          <IoIosArrowBack />
        </button>
      </div>
    </div>
  );
};

export default Slider;
