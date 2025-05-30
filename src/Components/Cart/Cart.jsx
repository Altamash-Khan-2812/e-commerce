import React from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";
import { useDispatch, useSelector } from "react-redux";
import { Tooltip } from "@material-tailwind/react";
import { removeFromCart } from "../../features/slices/CartSlice";

const Cart = ({ openModal, setOpen }) => {
  const dispatch = useDispatch()
  const cart = useSelector((state) => state.cart.cart);
  const totalPrice = useSelector((state) => state.cart.totalPrice);
  

  return (
    <div>
      {cart.length > 0 ? (
        <Dialog
          open={openModal}
          handler={() => setOpen(false)}
          animate={{
            mount: { scale: 1, y: 0 },
            unmount: { scale: 0.9, y: -100 },
          }}
          className="w-1/2 mx-auto absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 border-0 outline-0"
        >
          <DialogHeader>Shopping Bag</DialogHeader>
          <DialogBody className="flex flex-col justify-center items-start">
            {cart.map((item, index) => {
              return (
                <div key={index}>
                  <div className="grid grid-cols-2 py-4">
                    <div>
                      <img
                        className="h-[125px] rounded-md"
                        src={item.img}
                        alt={item.name}
                      />
                      <div className="flex flex-col items-start">
                        <h4 className="text-black text-base font-[inter] font-bold tracking-normal leading-none pt-2">
                          {item.name}
                        </h4>
                      </div>
                      <div className="max-w-xs">
                        <p className="text-black text-xs font-[inter] tracking-normal leading-none pt-2">
                          {item.text}
                        </p>
                      </div>
                    </div>
                    <div>
                      <p className="text-black text-sm font-[inter] tracking-normal leading-none pt-2">
                        Selected size: <span className="ml-2">{item.size}</span>
                      </p>
                      <p className="text-black text-sm font-[inter] tracking-normal leading-none pt-2">
                        Selected color:{" "}
                        <span
                          className="ml-2  rounded-full px-2"
                          style={{ backgroundColor: item.color }}
                        ></span>
                      </p>
                       <p className="text-black text-sm font-[inter] tracking-normal leading-none pt-2">
                        Amount: <span className="ml-2">{item.amount}</span>
                      </p>
                       <p className="text-black text-sm font-[inter] tracking-normal leading-none pt-2">
                        Single Item Price: <span className="ml-2">{item.price}$</span>
                      </p>
                       <p className="text-black text-sm font-[inter] tracking-normal leading-none pt-2">
                        Total Item Prices: <span className="ml-2">{item.totalPrice}$</span>
                      </p>
                      <div className="pt-4">
                         <Tooltip content="Remove from the cart" placement="bottom">
                            <Button size="sm" className="bg-red-500" ripple={true} variant="filled" onClick={() => dispatch(removeFromCart(item))}>Remove</Button>
                         </Tooltip>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </DialogBody>
          <DialogFooter className="flex justify-between items-center">
            <p className="text-black text-base font-[inter] tracking-normal leading-none pt-2">
              Total Price of All Products: <span className="ml-2">{totalPrice}$</span>
            </p>
          </DialogFooter>
        </Dialog>
      ) : (
        <Dialog
          open={openModal}
          handler={() => setOpen(false)}
          animate={{
            mount: { scale: 1, y: 0 },
            unmount: { scale: 0.9, y: -100 },
          }}
          className="w-1/2 mx-auto absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 border-0 outline-0"
        >
          <DialogHeader>Shopping Bag</DialogHeader>
          <DialogBody>
            <div>
              <h1 className="text-black text-3xl font-[inter] font-bold tracking-normal leading-none py-4">
                Your bag is empty
              </h1>
              <p className="text-black text-base font-[inter] tracking-normal leading-none">
                Add some products
              </p>
            </div>
          </DialogBody>
        </Dialog>
      )}
    </div>
  );
};

export default Cart;
