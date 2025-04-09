import React, { useEffect, useState } from "react";
import MyContext from "./MyContext";
import {
  QuerySnapshot,
  Timestamp,
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  onSnapshot,
  query,
  setDoc,
} from "firebase/firestore";
import { toast } from "react-toastify";
import { firedb } from "../Firebase/Firebase";
import { useSelector } from "react-redux";

const MyState = ({ children }) => {
  const [mode, setMode] = useState("light");
  const [loading, setLoading] = useState(false);

  // ------------------------------------------- Adding Products ---------------------------------------

  const [products, setProducts] = useState({
    image: "",
    title: "",
    price: "",
    category: "",
    description: "",
    time: Timestamp.now(),
    date: new Date().toLocaleString("en-US", {
      month: "short",
      day: "2-digit",
      year: "numeric",
    }),
  });

  const addProducts = async () => {
    setLoading(true);
    if (
      products.title === "" ||
      products.price === "" ||
      products.category === "" ||
      products.description === ""
    ) {
      return toast.error("All fields are Required");
    }
    try {
      const productRef = collection(firedb, "products");
      await addDoc(productRef, products);
      toast.success("Added Successfully");
      setTimeout(() => {
        window.location.href = "/admin";
      }, 800);
      getProducts();
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  //  ------------------------------------------------------- Getting Products ----------------------------

  const [product, setProduct] = useState([]);

  const getProducts = async () => {
    setLoading(true);
    try {
      const q = query(collection(firedb, "products"));

      const data = onSnapshot(q, (QuerySnapshot) => {
        let productArray = [];

        QuerySnapshot.forEach((doc) => {
          productArray.push({ ...doc.data(), id: doc.id });
        });
        setProduct(productArray);
        setLoading(false);
      });

      return data;
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  // ------------------------------------------------------------- getting Orders---------------------

  const [orders, setOrders] = useState([]);

  const getOrders = async () => {
    setLoading(true);
    try {
      const result = await getDocs(collection(firedb, "order"));

      let OrderArray = [];

      result.forEach((doc) => {
        OrderArray.push(doc.data());
        setLoading(false);
      });
      setOrders(OrderArray);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    getProducts();
    getOrders();
  }, []);

  //  --------------------------------------------- Updating Products -----------------------------------

  const editHandle = (product) => {
    setProducts(product);
  };

  const updateProduct = async () => {
    setLoading(true);
    try {
      await setDoc(doc(firedb, "products", products.id), products);
      toast.success("Product Update Successfully");
      setTimeout(() => (window.location.href = "/admin"), 800);
      getProducts();
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  //  ------------------------------------------ Delete Products --------------------------------------

  const deleteProduct = async (item) => {
    setLoading(true);
    try {
      await deleteDoc(doc(firedb, "products", item.id));
      toast.success("Product Deleted Successfully");
      getProducts();
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  // --------------------------------------------------------- RazorPay ---------------------------------

  const [fullname, setFullname] = useState("");
  const [address, setaddress] = useState("");
  const [pincode, setPincode] = useState("");
  const [phoneNumber, setphoneNumber] = useState("");
  
  const {cart, totalPrice} = useSelector((state)=>state.cart)

  const BuyNow = async () => {

   
    if (
      fullname === "" ||
      address === "" ||
      pincode === "" ||
      phoneNumber === ""
    ) {
      toast.error("All fields are Required");
    }

    const addressInfo = {
      fullname,
      address,
      pincode,
      phoneNumber,
      date: new Date().toLocaleString("en-US", {
        month: "short",
        day: "2-digit",
        year: "numeric",
      }),
    };

    


    const options = {
      key: "rzp_test_6l2W6xFbW0RhEv",
      key_secret: "kKYDHQFTlxr4IuZuueByi5us",
      amount: parseInt(totalPrice),
      currency: "INR",
      order_receipt: "order_receipt" + fullname,
      name: "SportsMart",
      description: "For test purpose",
      handler: function(response) {
        toast.success("payment Successfull");
        // window.location.href = '/orders'
        const paymentId = response.razorpay_payment_id

        const orderInfo = {
          cart,
          addressInfo,
          date: new Date().toLocaleString("en-US", {
            month: "short",
            day: "2-digit",
            year: "numeric",
          }),
    
          email:JSON.parse(localStorage.getItem('user')).user.email,
          userid:JSON.parse(localStorage.getItem('user')).user.uid,
          paymentId
        }
    

        try {
            const orderRef = collection(firedb,'order')
            addDoc(orderRef,orderInfo)

        } catch (error) {
          console.log(error)
        }

      },
      theme: {
        color: "#3399cc",
      },
    };



    const pay = new window.Razorpay(options);
    pay.open()

  };

 

  function resetCart (){
     localStorage.removeItem('cart')
  }


 
  return (
    <MyContext.Provider
      value={{
        mode,
        setMode,
        products,
        setProducts,
        addProducts,
        product,
        loading,
        getProducts,
        deleteProduct,
        editHandle,
        updateProduct,
        setFullname,
        setPincode,
        setaddress,
        setphoneNumber,
        BuyNow,
        orders,
        getOrders,
        setLoading,
        getProducts 
      }}
    >
      {children}
    </MyContext.Provider>
  );
};

export default MyState;


