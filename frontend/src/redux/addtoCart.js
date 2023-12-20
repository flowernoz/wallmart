import { createSlice } from "@reduxjs/toolkit";

export const addToCart = createSlice({
  name: "addToCart",
  initialState: [],
  reducers: {
    AddToCart: (state, action) => {
      const newItem = action.payload.product;
      const id = newItem.id;
      const find = state.find((item) => item.id === id);
      const items = [...state, newItem];
      const newData = state.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      );
      localStorage.setItem("cart", JSON.stringify(find ? newData : items));
      return find ? newData : items;
    },

    DecrementCart: (state, action) => {
      const dec = state.map((item) => {
        if (item.id === action.payload.id) {
          return {
            ...item,
            quantity: item.quantity <= 1 ? 1 : item.quantity - 1,
          };
        } else {
          return item;
        }
      });
      return dec;
    },

    RemoveCart: (state, action) => {
      let id = action.payload.id;
      return (state = state.filter((i) => i.id !== id));
    },
  },
});

export const { AddToCart, DecrementCart, RemoveCart } = addToCart.actions;
export default addToCart.reducer;
