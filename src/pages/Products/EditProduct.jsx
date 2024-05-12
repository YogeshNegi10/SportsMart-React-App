import React from 'react'
import Layout from '../../Components/Layout/Layout'
import { useContext } from 'react';
import MyContext from '../../Context/MyContext';

const EditProduct = () => {
  const { products, setProducts, updateProduct } = useContext(MyContext);
 
  return (
   <Layout>
     <div className="  flex justify-center  mb-10 w-full  p-8 ">
        <div className="max-w-md mx-auto m-6 w-full  bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="text-2xl py-4 px-6 bg-gray-900 text-white text-center font-bold uppercase">
            Edit Product
          </div>
          <div className="py-4 px-6">
            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2" for="name">
                Product Image Url
              </label>
              <input
                onChange={(e) =>
                  setProducts({ ...products, image: e.target.value })
                }
                value={products.image}
                className="shadow text-sm appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                name="image"
                type="url"
                required
                placeholder="Enter image Url"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2" for="name">
                Product Name
              </label>
              <input
                onChange={(e) =>
                  setProducts({ ...products, title: e.target.value })
                }
                value={products.title}
                className=" text-sm shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                name="title"
                type="text"
                placeholder="Enter Product Name"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2" for="email">
                Product Price
              </label>
              <input
                onChange={(e) =>
                  setProducts({ ...products, price: e.target.value })
                }
                value={products.price}
                className="text-sm shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                name="price"
                type="text"
                placeholder="Enter Product Price"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2" for="email">
                Product Catagory
              </label>
              <input
                onChange={(e) =>
                  setProducts({ ...products, category: e.target.value })
                }
                value={products.category}
                className="text-sm shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                name="category"
                type="text"
                placeholder="Enter Product Catagory"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2" for="email">
                Product Description
              </label>
              <textarea
                className="h-40 text-sm shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                 name=""
                  id=""
                  
                  onChange={(e) =>
                  setProducts({ ...products, description: e.target.value })
                }
                  ></textarea>
            </div>

            <div className="flex items-center justify-center m-6">
              <button
                onClick={() => updateProduct()}
                className="bg-gray-900 text-white py-1 px-8 rounded hover:bg-gray-800 focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Save
              </button>
            </div>
          </div>
        </div>
     </div>
     </Layout>
 
  )
}

export default EditProduct