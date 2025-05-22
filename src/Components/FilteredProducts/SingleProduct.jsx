import React from "react";
import { useSelector } from "react-redux";

const SingleProduct = () => {
  const product = useSelector((state) => state.products.singleProduct);
  console.log("singleProduct", product);

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
                <h5 className="text-2xl font-[inter] font-bold tracking-normal leading-none">
                  {item.name}
                </h5>
                <p className="text-orange"></p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default SingleProduct;
