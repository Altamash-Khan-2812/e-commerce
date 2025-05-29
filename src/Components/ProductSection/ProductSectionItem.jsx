import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Tooltip,
  Button,
} from "@material-tailwind/react";
import { useDispatch } from "react-redux";
import { addToCart } from "../../features/slices/CartSlice";

const ProductSectionItem = ({
  id,
  img,
  text,
  name,
  size,
  price,
  color,
  totalPrice,
}) => {
  const dispatch = useDispatch();
  const defaultColor = color[0];
  const defaultSize = size[0];

  return (
    <div className="w-96 border-1 border-gray-200 shadow-md rounded-lg overflow-hidden relative">
      <div className="h-[350px] mb-3">
        <img
          src={img}
          alt={name}
          className="w-full h-full object-cover shadow-md"
        />
      </div>
      <div className="px-3">
        <p className="text-xl md:text-3xl leading-none font-normal text-gray-900 mb-4">
          {name}
        </p>
        <p className="leading-[1.3] tracking-normal text-gray-950 mb-3 text-lg">
          {text}
        </p>
        <p className="text-md mb-3">Size left : {defaultSize}</p>
        <div className="flex items-center gap-2 mb-5">
          <p className="text-md">Color : </p>
          <span
            className="block h-3 w-3 rounded-full mt-1"
            style={{ backgroundColor: defaultColor }}
          ></span>
        </div>
        <button className="w-full bg-green-600 hover:bg-green-700 text-lg cursor-pointer text-white font-medium px-4 py-2 mb-2 rounded-sm">
          Add to Cart
        </button>
      </div>
      <span className="font-medium bg-red-600 text-white px-15 shadow-md uppercase absolute top-5 -right-10 rotate-45">
        sale
      </span>
    </div>
  );
};

export default ProductSectionItem;
