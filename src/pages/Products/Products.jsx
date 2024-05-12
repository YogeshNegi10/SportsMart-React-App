import React, { useContext, useEffect, useState } from "react";
import Layout from "../../Components/Layout/Layout";
import { BiStar } from "react-icons/bi";
import { NavLink, useParams } from "react-router-dom";
// import { products } from "../../api";
import { useDispatch } from "react-redux";
import { addToCart } from "../../Redux/CartSlice";
import MyContext from "../../Context/MyContext";
import { toast } from "react-toastify";


const Products = () => {
const {loading,product,getProducts } = useContext(MyContext)
  const { name } = useParams();
  const [Products, setProduct] = useState(product);
  const [price, setPrice] = useState(20);
  const [search, setSearch] = useState("");
  const [length, setlength] = useState("");


  const dispatch = useDispatch();
  const add = (product) =>{
    dispatch(addToCart(product))
    toast.success("Added To Cart")
  }

  function fetchProduct() {
    const filterProducts = product.filter(
      (product) => product.category === name
    );

    if (name === "Allproducts") {
      setProduct(product);
      setlength(product.length);
    } else {
      setProduct(filterProducts);
      setlength(filterProducts.length);
    }
  }

  const filterItems = () => {
    const filterpriceproducts = product.filter(
      (product) => product.price < price
    );

    setProduct(filterpriceproducts);
  };
 
  useEffect(() => {
    fetchProduct();
  }, [name]);


  useEffect(()=>{
    window.scroll(0,0)
    
  },[])

  return (
    <Layout>
      <div className="flex flex-col md:flex-row  " >
        <div className="sidebar md:w-1/3 h-full order-2 md:order-1  px-5 py-8 md:py-14">
          <div className="search w-full flex justify-center md:justify-start  mb-10">
            <input
              onChange={(e) => setSearch(e.target.value)}
              type="text"
              className="h-[40px] outline-none border px-2"
              placeholder="Search Products..."
            />
          </div>

          <div className="filterByPrice ">
            <h2 className=" text-2xl font-bold ">Filter By Price</h2>
            <div className="filterInput my-2 ">
              <input
                onChange={(e) => setPrice(e.target.value)}
                type="range"
                id="price-range"
                className="w-50 accent-indigo-600"
                min="0"
                max="20000"
              ></input>
            </div>
            <div className=" flex justify-between my-4">
              <button
                onClick={() => filterItems()}
                className=" bg-blue-500 px-4 text-white"
              >
                Filter
              </button>
             
              <span>$20 - ${price}</span>
            </div>
          </div>

          <div className="catagories my-9 md:my-10">
            <h2 className=" text-2xl mb-6 font-bold">Catagories</h2>
            <ul className="flex flex-col gap-4">
              <NavLink to={"/products/Allproducts"}>
                <li>All Products</li>
              </NavLink>
              <NavLink to={"/products/Football"}>
                <li>Football</li>
              </NavLink>
              <NavLink to={"/products/Cricket"}>
                <li>Cricket</li>
              </NavLink>
              <NavLink to={"/products/Accessories"}>
                <li>Accessories</li>
              </NavLink>
            </ul>
          </div>

          {/* ---------------------------------------------------------Bestsellers ---------------------------- */}

          <div className="BestSeller hidden md:block">
            <h2 className="text-2xl my-8 font-bold">Our BestSeller</h2>
          {  product.filter((product)=>product).slice(0,8).map((product)=>{
            return(
              <NavLink to={`/product/${product.id}`} key={product.id}>
              <div className="flex items-center gap-4  mb-4">
                <div className=" w-24 h-24 ">
                  <img
                    className=""
                    src={product.image}
                    alt=""
                  />
                </div>
                <div>
                  <div className=" titile">{product.title.substring(0,30)}</div>
                  <div className="ratings flex">
                    <BiStar />
                    <BiStar />
                    <BiStar />
                    <BiStar />
                    <BiStar />
                  </div>
                  <div className=" price">${product.price}</div>
                </div>
              </div>
            </NavLink>
            )
          })}
            
          </div>
        </div>

        {/* -------------------------------------------------------------------------------------- */}

        <div className=" bg-white order-1 md:order-2 right rounded-sm  w-full mt-2 md:mt-16 p-10 md:p-20">
          <div className=" mb-8">
            <h2 className=" font-bold text-2xl">Home / {name} </h2>
          </div>
          <div>
            <h2>Showing all {length} Results</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3   gap-6   mt-10">
          {loading ? <h1>Loading....</h1> : ''}
            {Products && Products.filter((product) => {
              if (!search) {
                return product;
              } else {
                return product.title
                  .toLowerCase()
                  .includes(search.toLowerCase());
              }
            }).map((product) => {
              return (
                <div  key={product.id} className="min-h-32 max-w-[200px] dark:bg-gray-900 dark:text-gray-100 border dark:border-0 mx-auto relative rounded-md hover:shadow-xl cursor-pointer duration-200 mb-4 ">
                  {/* <span className="bg-blue-600 text-white px-2 py-1 absolute top-0 right-0 text-xs  md:tex t-sm rounded-bl-md">
                    5.5 % discount
                  </span> */}
                  <div className="overflow-hidden p-2 rounded-md h-42 w-42 object-cover">
                    <img
                      alt="Iphone 14+"
                      loading="lazy"
                      className=""
                      src={product.image}
                    />
                  </div>
                  <div className="px-2 py-3">
                    <h5 className="text-base font-semibold text-center">
                      {product.title}
                    </h5>
                    <p className="text-center text-xs font-semibold flex justify-center gap-2 my-2">
                      <del className="text-gray-500">20000$</del>
                      <span>${product.price}</span>
                    </p>
                    <div className="text-xs flex justify-between flex-wrap mt-1">
                      <button
                        onClick={() =>add(product)}
                        className="flex items-center px-2 py-1  gap-x-2 bg-blue-600 border-2 border-blue-600 hover:bg-transparent rounded text-white hover:text-inherit"
                      >
                        Add to cart
                        <svg
                          stroke="currentColor"
                          fill="currentColor"
                          stroke-width="0"
                          viewBox="0 0 576 512"
                          height="1em"
                          width="1em"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M504.717 320H211.572l6.545 32h268.418c15.401 0 26.816 14.301 23.403 29.319l-5.517 24.276C523.112 414.668 536 433.828 536 456c0 31.202-25.519 56.444-56.824 55.994-29.823-.429-54.35-24.631-55.155-54.447-.44-16.287 6.085-31.049 16.803-41.548H231.176C241.553 426.165 248 440.326 248 456c0 31.813-26.528 57.431-58.67 55.938-28.54-1.325-51.751-24.385-53.251-52.917-1.158-22.034 10.436-41.455 28.051-51.586L93.883 64H24C10.745 64 0 53.255 0 40V24C0 10.745 10.745 0 24 0h102.529c11.401 0 21.228 8.021 23.513 19.19L159.208 64H551.99c15.401 0 26.816 14.301 23.403 29.319l-47.273 208C525.637 312.246 515.923 320 504.717 320zM403.029 192H360v-60c0-6.627-5.373-12-12-12h-24c-6.627 0-12 5.373-12 12v60h-43.029c-10.691 0-16.045 12.926-8.485 20.485l67.029 67.029c4.686 4.686 12.284 4.686 16.971 0l67.029-67.029c7.559-7.559 2.205-20.485-8.486-20.485z"></path>
                        </svg>
                      </button>
                      <NavLink to={`/product/${product.id}`}>
                        <button className="flex items-center px-2 py-1  gap-x-2 bg-blue-600 border-2 border-blue-600 hover:bg-transparent rounded text-white hover:text-inherit">
                          View
                          <svg
                            stroke="currentColor"
                            fill="currentColor"
                            stroke-width="0"
                            viewBox="0 0 448 512"
                            height="1em"
                            width="1em"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z"></path>
                          </svg>
                        </button>
                      </NavLink>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div className=" mt-20  bg-white mx-auto border-t border-b  text-black  px-14 py-10">
        <h2 className=" tracking-wider text-2xl font-semibold">
          SALE UPTO 20% OFF FOR ALL CLOTHES & fASHION iTEMS,ON ALL BRANDS
        </h2>
      </div>
    </Layout>
  );
};

export default Products;


