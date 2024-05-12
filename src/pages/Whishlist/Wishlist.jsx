import React, { useEffect } from "react";
import wishlist from "./wishlist.png";
import WhislistComponent from "./WhislistComponent";
import { useSelector } from "react-redux";
import Layout from '../../Components/Layout/Layout'



const Wishlist = () => {
  const { wishList } = useSelector((state) => state.wishList);
    
 useEffect(()=>{
         localStorage.setItem('wishList',JSON.stringify(wishList))
 },[wishList])



  if (wishList >= 0) {
    return (
      <>
       <Layout>
        <div className="bg-gray-100 px-2 text-center w-full mt-2">
          <div className=" flex h-[400px] flex-col justify-center items-center ">
            <img src={wishlist} alt="whishlist"  />
            <p className="text-2xl font-medium text-gray-800 mt-2">
              Empty Wishlist
            </p>
            <p className="text-xl text-gray-800 mt-4">
              You have no items in your wishlist. Start adding!
            </p>
          </div>
        </div>
        </Layout>
      </>
    );
  }

  return (
    <>
      
   <Layout>
      <div className="bg-gray-100 px-10 flex flex-col  justify-center text-center w-full mt-2 p-8  ">
        <div className=" flex ">
          <h1 className=" text-left mb-6 text-2xl mt-1">Your Favourite Items</h1>
          <button className="rounded-full text-red-500 w-10 h-10 mb-6 bg-gray-200 p-0 border-0 inline-flex items-center justify-center  ml-4">
            <svg
              fill="currentColor"
              stroke-linecap="round"
              strokeLinejoin="round"
              stroke-width="2"
              className="w-5 h-5"
              viewBox="0 0 24 24"
            >
              <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
            </svg>
          </button>
        </div>
        <div className=" w-full ">
          <div className="hidden w-full sm:grid sm:grid-cols-4 grid-cols-2 py-5  border-2 font-semibold ">
            <span>Product</span>
            <span>Price</span>
            <span>Action</span>
            <span>Remove</span>
          </div>

          {wishList.map((productList) => (
            <WhislistComponent productList={productList} />
          
          ))}
        </div>
      </div>
      </Layout>
    </>
  );

};

export default Wishlist;
