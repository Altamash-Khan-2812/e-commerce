import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import ProductCard from "./ProductCard";
import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Button,
} from "@material-tailwind/react";
import Error from "../Error/Error";
import {
  filterProducts,
  filterGender,
  sortByPrice,
  filterByColor,
  filterBySize,
} from "../../features/slices/productSlice";

const FilteredProducts = () => {
  const products = useSelector((state) => state.products.filteredProducts);
  const error = useSelector((state) => state.products.error);
  const { type } = useParams();
  const dispatch = useDispatch();

  const genderButtons = ["male", "female"];
  const colorButtons = [
    "red",
    "green",
    "purple",
    "yellow",
    "orange",
    "blue",
    "black",
    "brown",
  ];
  const sizeButtons = ["S", "M", "L", "XL"];

  return (
    <div>
      <div className="pt-16">
        <div className="pl-14">
          <h1 className="text-4xl font-[inter] text-gray-600 font-bold tracking-normal leading-none">
            {type}
          </h1>
          <div className="flex items-center justify-between py-8">
            <div className="flex items-center gap-2">
              {genderButtons.map((item, index) => {
                return (
                  <div key={index}>
                    <button
                      onClick={() => dispatch(filterGender(item))}
                      className="py-2 px-5 border-1 rounded-sm hover:bg-gray-100 cursor-pointer text-md text-gray-900"
                    >
                      {item}
                    </button>
                  </div>
                );
              })}
              <button
                onClick={() => dispatch(sortByPrice())}
                className="py-2 px-5 border-1 rounded-sm hover:bg-gray-100 cursor-pointer text-md text-gray-900"
              >
                High Price
              </button>
              <Menu>
                <MenuHandler>
                  <Button
                    className="text-md py-2 px-5 text-gray-900 cursor-pointer bg-transparent font-normal border-1 hover:bg-gray-100 rounded-sm"
                    ripple={false}
                  >
                    Select a color
                  </Button>
                </MenuHandler>
                <MenuList className="flex flex-col border-none px-4 rounded-sm focus:border-1">
                  {colorButtons.map((item, index) => {
                    return (
                      <MenuItem
                        style={{ color: item }}
                        key={index}
                        className="pl-2 pr-25 py-2 font-semibold hover:bg-gray-100 rounded-sm"
                        onClick={() => dispatch(filterByColor(item))}
                      >
                        {item}
                      </MenuItem>
                    );
                  })}
                </MenuList>
              </Menu>
              <Menu>
                <MenuHandler>
                  <Button
                    className="text-md py-2 px-5 text-gray-900 cursor-pointer bg-transparent font-normal border-1 hover:bg-gray-100 rounded-sm"
                    ripple={false}
                    disabled={type === "Bags"}
                  >
                    Select a size
                  </Button>
                </MenuHandler>
                <MenuList className="flex flex-col border-none px-4 rounded-sm focus:border-1">
                  {sizeButtons.map((item, index) => {
                    return (
                      <MenuItem
                        key={index}
                        className="pl-2 pr-25 py-2 font-semibold hover:bg-gray-100 rounded-sm"
                        onClick={() => dispatch(filterBySize(item))}
                      >
                        {item}
                      </MenuItem>
                    );
                  })}
                </MenuList>
              </Menu>
            </div>

            <div className="pr-14">
              <button onClick={() => dispatch(filterProducts(type))} className="py-2 px-5 border-1 rounded-sm hover:bg-gray-100 cursor-pointer text-md text-gray-900">
                Clear Filter
              </button>
            </div>
          </div>
        </div>
        {error ? (
          <Error />
        ) : (
          <div className="grid grid-cols-4 justify-items-center py-8 gap-y-10 gap-x-10 p-5">
            {products
              .filter((product) => product.type === type)
              .map((product, index) => {
                return (
                  <div key={index}>
                    <ProductCard
                      props={product}
                      id={product.id}
                      name={product.name}
                      text={product.text}
                      img={product.img}
                      price={product.price}
                      color={product.color}
                    />
                  </div>
                );
              })}
          </div>
        )}
      </div>
    </div>
  );
};

export default FilteredProducts;
