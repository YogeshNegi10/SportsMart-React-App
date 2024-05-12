import React, { useContext, useEffect, useState } from "react";
import Layout from "../../Components/Layout/Layout";
import MyContext from "../../Context/MyContext";

const Orders = () => {
  const { loading, orders, getOrders } = useContext(MyContext);
  const userID = JSON.parse(localStorage.getItem("user")).user.uid;


  const order = orders.filter((order)=>{
           return order.userid === userID
  })


  useEffect(() => {
    getOrders();
  }, []);



  return (
    <Layout>
      <div className="container mx-auto">
      
        <h1 className=" text-center mt-6 text-4xl font-bold">
          Your Orders ({order.length})
        </h1>

        {order.length === 0 ? (
          <div className="bg-gray-100 px-2 text-center w-full mt-2">
            <div className=" flex h-[400px] flex-col justify-center items-center ">
              <p className="text-2xl font-medium text-gray-800 mt-2">
                You Have NO Orders Yet !
              </p>
              <p className="text-xl text-gray-800 mt-4">Start Shopping!</p>
            </div>
          </div>
        ) : (
          <div className="relative overflow-x-auto shadow-md sm:rounded-lg mt-10">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    Product Image
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Product name
                  </th>
                  <th scope="col" className="px-6 py-3">
                    <div className="flex items-center">Delivery Address</div>
                  </th>
                  <th scope="col" className="px-6 py-3">
                    <div className="flex items-center">Category</div>
                  </th>
                  <th scope="col" className="px-6 py-3">
                    <div className="flex items-center">quantity</div>
                  </th>
                  <th scope="col" className="px-6 py-3">
                    <div className="flex items-center">Price</div>
                  </th>
                </tr>
              </thead>
              <tbody>
                {loading ? (
                  <h1 className=" text-black font-bold p-10">lOADING...</h1>
                ) : (
                  orders
                    .filter((order) => order.userid === userID)
                    .map((product) => {
                      return (
                        <>
                          {product.cart.map((product) => {
                            return (
                              <tr key={product.id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                <th
                                  scope="row"
                                  className="px-6 py-4 w-[100px] font-medium text-gray-900 whitespace-nowrap dark:text-white"
                                >
                                  <img
                                    src={product.image}
                                    alt=""
                                    className="h-50 "
                                  />
                                </th>
                                <th
                                  scope="row"
                                  className="px-6 py-4 font-medium text-gray-900  whitespace-nowrap dark:text-white"
                                >
                                  {product.title}
                                </th>
                                <td className="px-6 py-4">
                                  {orders[0].addressInfo.address}
                                </td>
                                <td className="px-6 py-4">{product.category}</td>
                                <td className="px-6 py-4">{product.quantity}</td>
                                <td className="px-6 py-4 ">{product.price}</td>
                              </tr>
                            );
                          })}
                        </>
                      );
                    })
                )}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default Orders;
