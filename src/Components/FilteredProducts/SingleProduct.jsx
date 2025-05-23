import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Tooltip } from "@material-tailwind/react";
import { addToCart } from "../../features/slices/CartSlice";

const SingleProduct = () => {
  const product = useSelector((state) => state.products.singleProduct);
  const productSize = product[0].size ? product[0].size[0] : "";
  const productColor = product[0] ? product[0].color[0] : "";
  const [size, setSize] = useState(productSize);
  const [color, setColor] = useState(productColor);
  const dispatch = useDispatch();

  return (
    <div>
      {product.map((item, index) => {
        return (
          <div className="flex justify-center items-center py-10" key={index}>
            <div className="pl-44 grow-2">
              <img
                src={item.img}
                alt={item.name}
                className="h-[850px] rounded-lg"
              />
            </div>

            <div className="grow-[3]">
              <div className="max-w-lg">
                <h5 className="text-2xl font-[inter] font-bold tracking-normal leading-none pb-4">
                  {item.name}
                </h5>
                <p className="text-orange-700 text-xl font-[inter] font-bold tracking-normal leading-none pb-4">
                  15% OFF
                </p>
                <p className="text-gray-600 text-xl font-[inter] font-bold tracking-normal leading-none pb-4">
                  {item.text}
                </p>
                <div className="pb-4">
                  {product[0].size ? (
                    <div>
                      <label
                        htmlFor="size"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Pick a size
                      </label>
                      <select
                        id="size"
                        name="size"
                        value={size}
                        onChange={(e) => setSize(e.target.value)}
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      >
                        {product[0].size.map((size, index) => {
                          return (
                            <option key={index} value={size}>
                              {size}
                            </option>
                          );
                        })}
                      </select>
                    </div>
                  ) : (
                    ""
                  )}
                </div>
                <div className="pb-4">
                  <label
                    htmlFor="color"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Pick a color
                  </label>
                  <select
                    id="color"
                    name="color"
                    value={color}
                    onChange={(e) => setColor(e.target.value)}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  >
                    {product[0].color.map((color, index) => {
                      return (
                        <option key={index} value={color}>
                          {color}
                        </option>
                      );
                    })}
                  </select>
                </div>
                <Tooltip
                  content="Add to Cart"
                  placement="bottom"
                  className="p-2"
                >
                  <button
                    className="border rounded-sm px-5 py-2 bg-gray-100 text-gray-600 cursor-pointer"
                    onClick={() =>
                      dispatch(
                        addToCart({
                          id: item.id,
                          name: item.name,
                          size: size,
                          color: color,
                          price: item.price,
                          amount: 1,
                          totalPrice: item.price,
                        })
                      )
                    }
                  >
                    Add to Cart
                  </button>
                </Tooltip>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default SingleProduct;
