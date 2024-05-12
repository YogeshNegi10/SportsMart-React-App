import { createSlice } from "@reduxjs/toolkit";



const wishListSlice = createSlice({

      name:'wishList',
      initialState:{
         wishList: JSON.parse(localStorage.getItem('wishList')) || [],
      },
      reducers:{

         addTowishList: (state,action)=>{
               state.wishList.push({...action.payload,quantity:1})
         },
         removeFromwishList: (state,action)=>{
              state.wishList = state.wishList.filter((product)=>product.id != action.payload)
         }

      }
})


export const {addTowishList,removeFromwishList}  = wishListSlice.actions;

export default wishListSlice.reducer;