import { configureStore } from "@reduxjs/toolkit";
import cartReducer from '../Redux/CartSlice'
import wishListReducer from '../Redux/WishlistSlice'

const store = configureStore({
   reducer:{
   cart:cartReducer,
   wishList:wishListReducer
   }
})


export default store;