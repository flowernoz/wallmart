import { configureStore } from '@reduxjs/toolkit'
import AddToCart from './addtoCart'
import DecrementCart from "./addtoCart";
import RemoveFromCart from "./addtoCart";

export const store = configureStore({
    reducer: {
        AddToCart,
        DecrementCart,
        RemoveFromCart        
    }
}) 