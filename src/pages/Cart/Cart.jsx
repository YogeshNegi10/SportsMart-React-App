import React, { useEffect } from "react";
import CartProduct from "./CartProduct";
import { useDispatch, useSelector } from "react-redux";
import cartlogo from "./empty.png";
import Layout from "../../Components/Layout/Layout";
import { calculateTotal } from "../../Redux/CartSlice";
import { NavLink, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Cart = () => {
  const { cart,totalPrice, subTotal } = useSelector((state) => state.cart);
const dispatch = useDispatch()
const navigate = useNavigate()

  useEffect(()=>{
        dispatch(calculateTotal()) 
        localStorage.setItem('cart',JSON.stringify(cart))
  },[cart])


  const checkout = () =>{
     const user = JSON.parse(localStorage.getItem('user'))
     if(user){
        navigate('/checkout')
     }else{
      toast.error('Please Login first')
      navigate('/login')
      
     }
  }

  
  return (
    <>
      <Layout>
        <div className="container mt-6 mx-auto ">
          <h1 className="mb-10 text-center text-3xl ">
            Cart Items ({cart.length})
          </h1>
          <div className="mx-auto max-w-5xl justify-center px-6 md:flex md:space-x-6 xl:px-0 ">
            {cart.length === 0 ? (
              <div className="container flex flex-col items-center">
                <img className="" src={cartlogo} width={300} alt="cart empty" />
                <h3 className=" text-2xl mb-10">Your Cart is Empty</h3>
              </div>
            ) : (
              <>
                <div className="rounded-lg md:w-2/3 ">
                  {cart.map((items) => (
                    <CartProduct key={items.id} items={items} />
                  ))}
                </div>

                <div className="mt-6 mb-16  h-full rounded-lg border bg-white p-6 shadow-md md:mt-0 md:w-1/3">
                  <div className="mb-2 flex justify-between">
                    <p className="text-gray-700">Subtotal</p>
                    <p className="text-gray-700">Rs {subTotal}</p>
                  </div>
                  <div className="flex justify-between mb-3">
                    <p className="text-gray-700">Shipping</p>
                    <p className="text-gray-700">
                      Free
                    </p>
                  </div>

                  <hr className="my-4" />
                  <div className="flex justify-between">
                    <p className="text-lg font-bold">Total</p>
                    <div className="">
                      <p className="mb-1 text-lg font-bold text-right">
                        Rs {totalPrice}
                      </p>
                      <p className="text-sm text-gray-700">including Tax</p>
                    </div>
                  </div>
                  
                  <button onClick={()=>checkout(cart)} className=" mt-6 w-full rounded-md bg-blue-500 py-1.5 font-medium text-blue-50 hover:bg-blue-600">
                    Check out
                  </button>
              
                </div>
              </>
            )}
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Cart;
