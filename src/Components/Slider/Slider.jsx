import React from "react";
import {
  nextSlide,
  prevSlide,
  dotSlide,
} from "../../features/slices/sliderSlice";
import { useDispatch } from "react-redux";

const Slider = () => {
  const dispatch = useDispatch();
  return (
    <div>
      <button>Next</button>
      <button>Prev</button>
    </div>
  );
};

export default Slider;
