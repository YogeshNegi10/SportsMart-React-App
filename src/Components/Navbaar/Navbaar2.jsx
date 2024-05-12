import React, { useState } from "react";
import { BiCart, BiCricketBall, BiFootball, BiHeart,  BiLogOut, BiLogoProductHunt, BiShoppingBag, BiUser, BiX } from "react-icons/bi";
import { useSelector } from "react-redux";
import { Link, NavLink,  useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Navbaar2 = () => {
  const navigate = useNavigate();
  const [show,setShow] = useState(false)
  const { cart } = useSelector((state) => state.cart);
  const user = JSON.parse(localStorage.getItem("user"));

  const logOut = () => {
    localStorage.clear("user");
    toast.success("LogOut Successfully");
    navigate("/login");
  };
  return (
    <>
      {/* -------------------------------------------------SideBaar------------------------------------------ */}

     <div className=" flex overflow-hidden relative  z-30 bg-blue-200 md:hidden ">
        <div
          className={` -translate-x-full fixed top-0 left-0 bg-[#303036] text-white w-60 h-full overflow-y-auto transition-transform transform ${
            show ? " translate-x-0" : ""
          }  ease-in-out duration-300`}
          id="sidebar"
        >
          <div className="flex flex-col flex-1 overflow-y-auto h-full">
          <nav className="flex flex-col flex-1 overflow-y-auto bg-gradient-to-b from-gray-700 to-blue-500 px-2 py-4 gap-4 ">
                    <div>
                        <h1  className="flex items-center text-2xl px-4 py-2 text-gray-100 hover:bg-gray-700">
                           SportsMart
                        </h1>
                    </div>
                    <div className="flex flex-col flex-1 gap-2"> 
                        <Link to={'/'}  onClick={()=>setShow(!show)} className="flex items-center px-4 py-2 mt-2 text-gray-100 hover:bg-gray-400 hover:bg-opacity-25 rounded-2xl">
                            <svg className=" mr-2" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" >
                                <path fill="currentColor" fill-rule="evenodd" d="M11.293 3.293a1 1 0 0 1 1.414 0l6 6l2 2a1 1 0 0 1-1.414 1.414L19 12.414V19a2 2 0 0 1-2 2h-3a1 1 0 0 1-1-1v-3h-2v3a1 1 0 0 1-1 1H7a2 2 0 0 1-2-2v-6.586l-.293.293a1 1 0 0 1-1.414-1.414l2-2z" clip-rule="evenodd" />
                            </svg>
                            Home
                        </Link>
                       
                        {user && user ? (
                    <div onClick={logOut} className="flex cursor-pointer items-center px-4 py-2 mt-2 text-gray-100 hover:bg-gray-400 hover:bg-opacity-25 rounded-2xl">
                  <BiLogOut
                    size={23}
                    className=" cursor-pointer mr-2 "
                    Logout
                  />
                  Logout
                  </div>
                ) : (
                  <Link
                    to={"/login"}
                    onClick={()=>setShow(!show)}
                    className="flex items-center px-4 py-2 mt-2 text-gray-100 hover:bg-gray-400 hover:bg-opacity-25 rounded-2xl"
                  
                  >
               
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 hover:text-gray-200 mr-2"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    
                    </svg>
                    LogIn
                  </Link>
                )}
                        
                {user?.user?.email === "yogeshnegi97@gmail.com" ? 
                        <Link to={'/Admin'}  onClick={()=>setShow(!show)} className="flex items-center px-4 py-2 mt-2 text-gray-100 hover:bg-gray-400 hover:bg-opacity-25 rounded-2xl">
                        <BiUser size={25} className=" mr-2"/>
                            Admin
                          
                        </Link> :''}



                        { user && user?.user.email !== "yogeshnegi97@gmail.com" ? 
                        <Link to={'/orders'}  onClick={()=>setShow(!show)} className="flex items-center px-4 py-2 mt-2 text-gray-100 hover:bg-gray-400 hover:bg-opacity-25 rounded-2xl">
                        <BiShoppingBag size={25} className=" mr-2"/>
                            Orders
                        </Link> : ''}

                        { user && user?.user.email !== "yogeshnegi97@gmail.com" ?
                        <Link  to={'/wishList'}  onClick={()=>setShow(!show)}  className="flex items-center px-4 py-2 mt-2 text-gray-100 hover:bg-gray-400 hover:bg-opacity-25 rounded-2xl">
                        <BiHeart size={25} className=" mr-2"/>
                            WishList
                            
                        </Link>:''}

                        <Link  to={'/products/Allproducts'} onClick={()=>setShow(!show)}  className="flex items-center px-4 py-2 mt-2 text-gray-100 hover:bg-gray-400 hover:bg-opacity-25 rounded-2xl">
                        <BiLogoProductHunt size={25} className=" mr-2"/>
                           All Products
                        </Link>
                        <Link  to={'/products/Football'} onClick={()=>setShow(!show)}   className="flex items-center px-4 py-2 mt-2 text-gray-100 hover:bg-gray-400 hover:bg-opacity-25 rounded-2xl">
                        <BiFootball size={25} className=" mr-2"/>
                           Football
                        </Link>
                        <Link  to={'/products/Cricket'} onClick={()=>setShow(!show)}   className="flex items-center px-4 py-2 mt-2 text-gray-100 hover:bg-gray-400 hover:bg-opacity-25 rounded-2xl">
                        <BiCricketBall size={25} className=" mr-2"/>
                          Cricket
                        </Link>
                       
                    </div>
                </nav>
            </div>



        </div>
     </div>


     
     {/* --------------------------------------------navbar---------------------------------------- */}
      <div className="flex flex-wrap place-items-center py-2 shadow-sm bg-[#ffffff]">
    
        <section className="relative mx-auto w-full">
          <nav className="flex justify-start  text-black  ">
            <div className="px-5 xl:px-12 py-6 flex w-full items-center">
              <NavLink to={"/"}>
                <h1 className="text-4xl font-bold font-heading"> Sports Mart</h1>
              </NavLink>

              <ul className="hidden md:flex   px-4 mx-auto font-semibold font-heading space-x-12 ">
                <li>
                  <NavLink
                    to={"/products/Allproducts"}
                    className="hover:text-blue-400"
                    href="#"
                  >
                    All Products
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to={"/products/Football"}
                    className="hover:text-blue-400"
                    href="#"
                  >
                    Football
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to={"/products/Cricket"}
                    className="hover:text-blue-400"
                    href="#"
                  >
                    Cricket
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to={"/products/Accessories"}
                    className="hover:text-blue-400"
                    href="#"
                  >
                    Accessories
                  </NavLink>
                </li>
              </ul>

              <div className="hidden xl:flex items-center space-x-5  ">
                {user && user?.user.email !== "yogeshnegi97@gmail.com" ? (
                  <ul>
                    <li>
                      <NavLink
                        to={"/orders"}
                        className="hover:text-blue-400"
                        href="#"
                      >
                        Orders
                      </NavLink>
                    </li>
                  </ul>
                ) : (
                  ""
                )}

                {user?.user?.email === "yogeshnegi97@gmail.com" ? (
                  <ul>
                    <li>
                      <NavLink
                        to={"/admin"}
                        className="hover:text-blue-400"
                        href="#"
                      >
                        Admin
                      </NavLink>
                    </li>
                  </ul>
                ) : (
                  ""
                )}

                {user && user?.user?.email !== "yogeshnegi97@gmail.com" ? (
                  <NavLink
                    to={"/wishlist"}
                    className="hover:text-blue-400"
                    href="#"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                      />
                    </svg>
                  </NavLink>
                ) : (
                  ""
                )}
                <NavLink
                  to={"/cart"}
                  className="flex items-center hover:text-blue-400"
                  href="#"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>

                  <span className="flex absolute -mt-5 ml-4">
                    {cart.length === 0 ? (
                      ""
                    ) : (
                      <>
                        <span className="animate-ping absolute  -top-5     inline-flex h-3 w-3 rounded-full bg-pink-400 opacity-75"></span>
                        <span className="relative -top-5 text-sm  justify-center items-center flex rounded-full h-5 w-5 bg-pink-500 ">
                          {cart.length}
                        </span>
                      </>
                    )}
                  </span>
                </NavLink>

                {user && user ? (
                  <BiLogOut
                    size={23}
                    className=" cursor-pointer"
                    onClick={logOut}
                  />
                ) : (
                  <NavLink
                    to={"/login"}
                    className="flex items-center hover:text-blue-400"
                  
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 hover:text-blue-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </NavLink>
                )}
              </div>
            </div>

           
            <div
              
                  className="flex items-center xl:hidden  hover:text-blue-400 mr-4"
                  
                >
                <NavLink to={'/cart'}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>

                  <span className="flex absolute -mt-5 ml-4">
                    {cart.length === 0 ? (
                      ""
                    ) : (
                      <>
                        <span className="animate-ping absolute  -top-5     inline-flex h-3 w-3 rounded-full bg-pink-400 opacity-75"></span>
                        <span className="relative -top-5 text-sm  justify-center items-center flex rounded-full h-5 w-5 bg-pink-500 ">
                          {cart.length}
                        </span>
                      </>
                    )}
                  </span>
                  </NavLink>
              </div>
                
            <a className="navbar-burger self-center mr-4 xl:hidden" href="#">
              <svg
                onClick={()=>setShow(!show)}
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 hover:text-blue-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </a>
          </nav>
        </section>
      </div>
    </>
  );
};

export default Navbaar2;





// flex flex-wrap place-items-center py-2 shadow-sm bg-[#ffffff]