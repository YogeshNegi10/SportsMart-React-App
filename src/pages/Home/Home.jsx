import { Link, NavLink } from "react-router-dom";
import Footer from "../../Components/Footer/Footer";
import Navbaar from "../../Components/Navbaar/Navbaar";
import MyContext from "../../Context/MyContext";
import { useContext } from "react";
import { BiLoader } from "react-icons/bi";
import { addToCart } from "../../Redux/CartSlice";
import { useDispatch } from "react-redux";
import nike from '../../assests/nike.png'
import puma from '../../assests/puma.png'
import addidas from '../../assests/addidas.png'
import { toast } from "react-toastify";

const Home = () => {
  const { loading, product } = useContext(MyContext);
  const dispatch = useDispatch()

  const add = (product) =>{

      dispatch(addToCart(product))
      toast.success('Added To Cart')
  }
  return (
    <>
      <Navbaar />

      <div className=" h-screen  bg-[url('https://img.freepik.com/premium-photo/close-up-soccer-player-who-kicks-ball_207634-4089.jpg?w=740')] bg-cover bg-fixed">
        <div className=" absolute left-24 top-56 text-white">
          <div className="mb-10">
            <h1 className=" text-6xl  leading mb-4 font-medium">
              Raining Offers For{" "}
            </h1>
            <span className=" text-6xl font-medium">Hot Summer</span>
          </div>

          <span className="  text-2xl">25% Off On All Products</span>
          <div className=" mt-10 flex gap-4">
            <NavLink to={"/products/Allproducts"}>
              <button className=" bg-white text-black px-4 py-4 rounded-sm font-medium">
                Shop Now
              </button>
            </NavLink>
            <button className=" bg-transparent text-white border hover:bg-white hover:text-black transition-all duration-200 ease-out px-4 py-4 rounded-sm font-medium">
              Find More
            </button>
          </div>
        </div>
      </div>
      {/* <-------------------------------------------------------Brands------------------------------------------> */}

      <div className="brands bg-white  ">
        <div className="w-2/3 mx-auto flex items-center gap-6 md:gap-0  justify-between">
          <div className=" h-24 w-24 mt-8 ">
            <img
              src={nike}
              alt=""
            />
          </div>
          <div className=" h-24 w-24 mt-8 ">
            <img
              src={addidas}
              alt=""
            />
          </div>
          <div className=" h-24 w-24 mt-8 ">
            <img
              src={puma}
              alt=""
            />
          </div>
          <div className=" h-24 w-24 mt-8 ">
            <img
              src={nike}
              alt=""
            />
          </div>
        </div>
      </div>

      {/* 
<----------------------------------------------------- Cards------------------------------------------> */}

      <div className="py-16 bg-white  ">
        <div className="container mx-auto px-4 ">
          <h2 className="text-4xl font-bold mb-10">
            Introducing Our Latest Product
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white relative h-[450px] rounded-md shadow-2xl">
              <div className="relative overflow-hidden h-full">
                <img
                  className="object-cover w-full h-full"
                  src="https://img.freepik.com/free-vector/football-background-design_1176-204.jpg?t=st=1715417108~exp=1715420708~hmac=81f5402c96bab6c873e561adb7edda72497c0b25bce8698200b83ea2be609eae&w=360"
                  alt="Product"
                />
                <div className="absolute inset-0 bg-black opacity-40"></div>
              </div>

              <div className=" absolute  flex items-center justify-end right-4 bottom-5  mt-4">
                <NavLink to={"/products/Football"}>
                  {" "}
                  <button className="  bg-gray-900 text-white py-2 px-4 rounded-full font-bold hover:bg-gray-800">
                    Shop Now
                  </button>
                </NavLink>
              </div>

              <div className=" absolute top-56 left-8 text-white">
                <h2 className=" mb-2 text-2xl">20% Off On Football Items</h2>
                <p className="">
                  
"Kick off your savings with 20% off on all football gear!"
                </p>
              </div>
            </div>
            <div className="bg-white  relative h-[450px] rounded-md shadow-2xl">
              <div className="relative overflow-hidden h-full">
                <img
                  className="object-cover w-full h-full"
                  src="https://img.freepik.com/free-vector/cricket-championship-with-ball-wicket-with-helmet-cricket-stadium-freehand-sketch-graphic-design-vector-illustration_460848-11912.jpg?t=st=1715416986~exp=1715420586~hmac=1964ce0c14bd2189af71a93a79009e71c16fe790c4fcd2520bd02f66786f82b3&w=740"
                  alt="Product"
                />
                <div className="absolute inset-0 bg-black opacity-40"></div>
              </div>

              <div className=" absolute  flex items-center justify-end right-4 bottom-5  mt-4">
                <NavLink to={"/products/Cricket"}>
                  <button className="  bg-gray-900 text-white py-2 px-4 rounded-full font-bold hover:bg-gray-800">
                    Shop Now
                  </button>
                </NavLink>
              </div>

              <div className=" absolute top-56 left-8 text-white">
                <h2 className=" mb-2 text-2xl">40% Off On Cricket Items</h2>
                <p className="">
                 
"Hit a six with savings! Grab 40% off on all cricket gear now!"
                </p>
              </div>
            </div>
            <div className="bg-white relative h-[450px] rounded-md shadow-2xl">
              <div className="relative overflow-hidden h-full">
                <img
                  className="object-cover w-full h-full"
                  src="https://img.freepik.com/free-vector/cardboard-box-full-sport-equipments-white_1308-39926.jpg?t=st=1715417167~exp=1715420767~hmac=a6ebe46c018ed212221b6d6603496397391f345b85e77c6df86c23ac112afd54&w=740"
                  alt="Product"
                />
                <div className="absolute inset-0 bg-black opacity-40"></div>
              </div>

              <div className=" absolute  flex items-center justify-end right-4 bottom-5  mt-4">
                <Link to={"/products/Accessories"}>
                  <button className="  bg-gray-900 text-white py-2 px-4 rounded-full font-bold hover:bg-gray-800">
                    Shop Now
                  </button>
                </Link>
              </div>

              <div className=" absolute top-56 left-8 text-white">
                <h2 className=" mb-2 text-2xl">
                  Flat 30% Off On any sports Accessories
                </h2>
                <p className="">
                 
"Elevate your game with 30% off on all sports accessories! Don't miss out!"
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ___________________________________________________Featured Products _______________________________ */}

      <div className="text-center p-10">
        <h1 className=" font-medium text-4xl mb-2">Featured Products</h1>
      </div>

      <div className="w-full mx-auto  px-16 ">
      {loading ? <div className=" flex justify-center "><BiLoader cla size={30}/></div> : ''}
        <section
          id="Projects"
          className="w-fit mx-auto grid grid-cols-1 lg:grid-cols-4 md:grid-cols-3 justify-items-center justify-center  gap-y-20 gap-x-24 mt-6 mb-5 "
        >

        
          {product && product?.map((product) => {
            return (
              <div key={product.id} className="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
                <NavLink to={`/product/${product.id}`}>
                  <img
                    src={product.image}
                    alt="Product"
                    className="h-80 w-72 object-cover rounded-t-xl"
                  />
                  </NavLink>
                  <div className="px-4 py-3 w-72">
                    <span className="text-gray-400 mr-3 uppercase text-xs">
                      Brand
                    </span>
                    <p className="text-lg font-bold text-black truncate block capitalize">
                      {product.title}
                    </p>
                    <div className="flex items-center">
                      <p className="text-lg font-semibold text-black cursor-auto my-3">
                        ${product.price}
                      </p>
                      <del>
                        <p className="text-sm text-gray-600 cursor-auto ml-2">
                        
                        </p>
                      </del>
                      <div className="ml-auto">
                        <svg

                          onClick={()=>add(product)}
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          fill="currentColor"
                          className="bi bi-bag-plus cursor-pointer"
                          viewBox="0 0 16 16"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M8 7.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0v-1.5H6a.5.5 0 0 1 0-1h1.5V8a.5.5 0 0 1 .5-.5z"
                          />
                          <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
                        </svg>
                      </div>
                    </div>
                  </div>
                
              </div>
            );
          })}
        </section>
      </div>

      {/* __________________________________Special Edition Banner _________________________________ */}

      <div className=" mt-16 container relative mx-auto h-[450px] bg-[url('https://img.freepik.com/premium-photo/soccer-objects-macro-high-quality-photoshoot_950002-87707.jpg?w=740')] bg-cover bg-fixed  ">
        <div className=" absolute left-10 top-24 text-white ">
          <h3 className="mb-4">Limited Time Offer</h3>

          <h2 className=" mb-3 text-5xl">Special Edition</h2>
          <div className=" w-2/3 mb-4">
            <p className="">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Repellendus asperiores, voluptate odio inventore ex cumque
              eligendi pariatur
            </p>
          </div>

          <span className=" text-1xl ">
            Buy This Football at 20% discount,Use Code OFF20
          </span>
          <div className=" mt-4">
            <NavLink to={'/products/Allproducts'}><button className=" bg-white text-black px-4 py-2 rounded-sm font-medium">
              Shop Now
            </button>
            </NavLink>
          </div>
        </div>
      </div>

      {/* ___________________________________________Our Features--------------------------------- */}

      {/* ________________________________________________________________________________ */}

      <div className=" mt-20 border-t border-b  bg-white mx-auto  text-black  px-14 py-10">
        <h2 className=" tracking-wider text-2xl font-semibold">
          SALE UPTO 20% OFF FOR ALL Sports Accessories iTEMS,ON ALL BRANDS
        </h2>
      </div>
      {/* ________________________________________________________________________ */}
      <Footer />
    </>
  );
};

export default Home;
