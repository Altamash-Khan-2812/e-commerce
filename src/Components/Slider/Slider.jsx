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
          const isActive = parseInt(item.id) === slideIndex;

          return (
            <div
              key={item.id}
              className={`${
                isActive ? "opacity-100 scale-100" : "hidden"
              } duration-700 ease-in-out`}
            >
              {isActive && (
                <img
                  className="w-full h-[300px] md:h-[500px] lg:h-[700px] object-cover"
                  src={item.img}
                  alt={`Slide ${item.id}`}
                />
              )}
              <div className="absolute top-20 md:top-36 lg:top-44 inset-x-0 text-center px-4">
                {isActive && (
                  <p className="text-white text-xl md:text-3xl lg:text-4xl font-[inter] font-bold">
                    {item.text}
                  </p>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* DOT SLIDE */}
      <div className="flex justify-center absolute bottom-8 inset-x-0">
        {sliderData.map((_, index) => (
          <div className="mx-1" key={index}>
            <div
              onClick={() => dispatch(dotSlide(index))}
              className={`${
                index === slideIndex ? "bg-green-600" : "bg-white"
              } rounded-full w-3 h-3 md:w-4 md:h-4 lg:w-5 lg:h-5 cursor-pointer`}
            ></div>
          </div>
        ))}
      </div>

      {/* NEXT & PREVIOUS BUTTONS */}
      <button
        className="absolute top-1/2 right-2 md:right-4 transform -translate-y-1/2 bg-white rounded-full p-2 md:p-3 hover:bg-green-600 hover:text-white"
        onClick={() => dispatch(nextSlide(slideIndex + 1))}
      >
        <IoIosArrowForward size={20} />
      </button>
      <button
        className="absolute top-1/2 left-2 md:left-4 transform -translate-y-1/2 bg-white rounded-full p-2 md:p-3 hover:bg-green-600 hover:text-white"
        onClick={() => dispatch(prevSlide(slideIndex - 1))}
      >
        <IoIosArrowBack size={20} />
      </button>
    </div>
  );
};

export default Slider;
