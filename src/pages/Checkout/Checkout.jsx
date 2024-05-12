import React, { useContext, useEffect } from "react";
import Layout from "../../Components/Layout/Layout";
import MyContext from "../../Context/MyContext";
import { useSelector } from "react-redux";

const Checkout = () => {
  const { setFullname, setPincode, setaddress, setphoneNumber,BuyNow } =useContext(MyContext);
  const {cart} = useSelector((state)=>state.cart)

 
  
  return (
    <Layout>
      <div className="container mx-auto p-10">
        <div className="max-w-md mx-auto bg-white rounded-xl overflow-hidden md:max-w-xl">
          <div className="md:flex">
            <div className="w-full px-6 py-8 md:p-8">
              <h2 className="text-2xl font-bold text-gray-800">Checkout</h2>
              <p className="mt-4 text-gray-600">
                Please fill out the form below to complete your purchase.
              </p>
              <form className="mt-6">
                <div className="mb-6">
                  <label className="block text-gray-800 font-bold mb-2" for="name">
                    Full name
                  </label>
                  <input
                      onChange={(e)=>setFullname(e.target.value)}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="name"
                    type="text"
                    placeholder="Enter Full Name"
                  />
                </div>
                <div className="mb-6">
                  <label
                    className="block text-gray-800 font-bold mb-2"
                    for="address"
                  >
                    Address
                  </label>
                  <input
                  onChange={(e)=>setaddress(e.target.value)}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="address"
                    type="text"
                    placeholder="Enter Full address"
                  />
                </div>
                <div className="mb-6">
                  <label
                    className="block text-gray-800 font-bold mb-2"
                    for="address"
                  >
                    Pincode
                  </label>
                  <input
                  onChange={(e)=>setPincode(e.target.value)}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="pincode"
                    type="text"
                    placeholder="Enter Pincode"
                  />
                </div>
                <div className="mb-6">
                  <label
                    className="block text-gray-800 font-bold mb-2"
                    for="address"
                  >
                    Mobile Number
                  </label>
                  <input
                    onChange={(e)=>setphoneNumber(e.target.value)}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="number"
                    type="text"
                    placeholder="Enter Mobile Number"
                  />
                </div>

                <button
                onClick={()=>BuyNow()}
                  className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  type="button"
                >
                  CheckOut
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Checkout;
