import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: [],
    amount: 0,
    totalAmount: 0,
    totalPrice: 0,
  },
  reducers: {
    addToCart(state, action) {
      const productId = action.payload;
      try {
        const exist = state.cart.find(
          (product) =>
            product.id === productId.id &&
            product.size === productId.size &&
            product.color === productId.color
        );
        if (exist) {
          exist.amount++;
          exist.totalPrice += productId.price;
          state.totalAmount++;
          state.totalPrice += productId.price;
        } else {
          state.cart.push({
            id: productId.id,
            price: productId.price,
            size: productId.size,
            amount: 1,
            totalPrice: productId.price,
            name: productId.name,
            color: productId.color,
            img: productId.img,
            text: productId.text,
          });
          state.totalAmount++;
          state.totalPrice += productId.price;
        }
      } catch (err) {
        return err;
      }
    },
    removeFromCart(state, action) {
      const productId = action.payload;
      try {
        const exist = state.cart.find(
          (item) =>
            item.id === productId.id &&
            item.size === productId.size &&
            item.color === productId.color
        );

        if (exist.amount === 1) {
          state.cart = state.cart.filter((item) => {
            return !(
              item.id === productId.id &&
              item.size === productId.size &&
              item.color === productId.color
            );
          });
          state.totalAmount--;
        } else {
          exist.amount--;
          exist.totalPrice -= productId.price;
          state.totalAmount--;
        }
        state.totalPrice -= productId.price;
      } catch (err) {
        return err;
      }
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;
