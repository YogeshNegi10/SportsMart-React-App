import { createSlice } from "@reduxjs/toolkit";


const cartSlice = createSlice({

      name:'cart',
      initialState:{
         cart: JSON.parse(localStorage.getItem('cart')) || [],
         totalPrice:0,
         subTotal:0

      },
      reducers:{

         addToCart: (state,action)=>{

            const itemIndex = state.cart.findIndex(
                  (item) => item.id === action.payload.id
                );
          
                if (itemIndex >= 0) {
                  state.cart[itemIndex].quantity += 1;
                 
                } else {
                  state.cart.push({ ...action.payload, quantity: 1 });
                 
                }
             
         },
         removeFromCart: (state,action)=>{
              state.cart = state.cart.filter((product)=>product.id != action.payload)
         },

         increment: (state, action) => {
            state.cart = state.cart.map((item) => {
              if (item.id === action.payload) {
                return { ...item, quantity: item.quantity + 1 };
              }
              return item;
            });
          },
          decrement: (state, action) => {
            state.cart = state.cart.map((item) => {
              if (item.id === action.payload) {
                if (item.quantity === 1) {
                  return { ...item, quantity: (item.quantity = 1) };
                }
      
                return { ...item, quantity: item.quantity - 1 };
              }
              return item;
            });
          },
          calculateTotal: (state) => {
            state.totalPrice = state.cart.reduce((cardTotal, item) => {
              cardTotal += item.quantity * item.price;
              return cardTotal
            }, 0);
      
            
            state.subTotal = state.cart.reduce((subTotal, item) => {
              subTotal += item.quantity * item.price;
      
              return subTotal;
            }, 0);
          },
      

      }
})


export const {addToCart,removeFromCart,increment,decrement,calculateTotal}  = cartSlice.actions;

export default cartSlice.reducer;