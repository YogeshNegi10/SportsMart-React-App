import React, { useContext } from "react";
import Layout from "../../Components/Layout/Layout";
import { BiCart, BiEdit, BiShoppingBag, BiTrash, BiUser } from "react-icons/bi";
import { NavLink } from "react-router-dom";
import MyContext from "../../Context/MyContext";

const Admin = () => {
  const { product,loading,deleteProduct,editHandle } = useContext(MyContext);

  return (
    <Layout>
      <div className="container mx-auto p-3">
        <h1 className=" text-center text-black text-4xl mb-8">Admin Panel</h1>

        <div className="container gap-4  flex flex-col md:flex-row justify-around">
          <div className=" px-3 py-3 bg-white md:w-1/4 w-full md:h-[150px] rounded-md  shadow-lg ">
            <div className="  w-full rounded overflow-hidden  flex flex-col justify-center items-center">
              <BiCart size={40} />
              <div className="px-6 py-4">
                <div className="font-bold text-2xl mb-2">{product?.length}</div>
              </div>

              <p className="text-gray-700 text-base">Total Products</p>
            </div>
          </div>
          <div className=" px-3 py-3 bg-white md:w-1/4 w-full md:h-[150px] ] rounded-md  shadow-lg">
            <div className="  w-full rounded overflow-hidden  flex flex-col justify-center items-center">
              <BiShoppingBag size={40} />
              <div className="px-6 py-4">
                <div className="font-bold text-2xl mb-2">0</div>
              </div>

              <p className="text-gray-700 text-base">Total Orders</p>
            </div>
          </div>
          <div className=" px-3 py-3 bg-white md:w-1/4 w-full md:h-[150px]  rounded-md  shadow-lg">
            <div className="  w-full rounded overflow-hidden  flex flex-col justify-center items-center">
              <BiUser size={40} />
              <div className="px-6 py-4">
                <div className="font-bold text-2xl mb-2">1</div>
              </div>

              <p className="text-gray-700 text-base">Total Users</p>
            </div>
          </div>
        </div>

        {/* ___________________________________________________________________________________________________________ */}

        <div className="container mt-10 mb-10 ">
          <div className=" text-center text-2xl  ">
            <h2>Products Details</h2>
          </div>
          <div className="flex items-center justify-end  px-4">
            <NavLink to="/addProduct">
              <button className=" mt-6 md:mt-0 border-2 flex items-center gap-1 py-1 px-2 bg-blue-400 rounded-md">
                Add Products <BiCart size={20} />
              </button>
            </NavLink>
          </div>

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
                    <div className="flex items-center">Description</div>
                  </th>
                  <th scope="col" className="px-6 py-3">
                    <div className="flex items-center">Category</div>
                  </th>
                  <th scope="col" className="px-6 py-3">
                    <div className="flex items-center">Price</div>
                  </th>
                  <th scope="col" className="px-6 py-3">
                    <div className="flex items-center">Actions</div>
                  </th>
                </tr>
              </thead>
              <tbody>
                 {loading ? <h1 className=" text-black font-bold p-10">lOADING...</h1> :
                     product && product.map((product) => {
               
                  return (
                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                      <th
                        scope="row"
                        className="px-6 py-4 w-[100px] font-medium text-gray-900 whitespace-nowrap dark:text-white"
                      >
                        <img src={product.image} alt="" className="h-50 " />
                      </th>
                      <th
                        scope="row"
                        className="px-6 py-4 font-medium text-gray-900  whitespace-nowrap dark:text-white"
                      >
                       {product.title}
                      </th>
                      <td className="px-6 py-4">{product.description.substring(0,100)
}</td>
                      <td className="px-6 py-4">{product.category}</td>
                      <td className="px-6 py-4">${product.price}</td>
                      <td className="px-6 py-4 flex items-center cursor-pointer gap-4">
                        <NavLink to={'/editproduct'}><BiEdit onClick={()=>editHandle(product)}   size={20} /></NavLink>
                        <BiTrash onClick={()=>{deleteProduct(product)}} size={20} />
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Admin;

{
  /* <td className="px-6 py-4 text-right">
<a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
</td> */
}
