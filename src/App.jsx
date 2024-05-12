import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home/Home";
import Cart from "./pages/Cart/Cart";

import Admin from "./pages/Admin/Admin";
import MyState from "./Context/MyState";
import Products from "./pages/Products/Products";
import Login from "./pages/Registration/Login";
import Registration from "./pages/Registration/Registration";
import Wishlist from "./pages/Whishlist/Wishlist";
import Product from "./pages/Products/Product";
import AddProduct from "./pages/Products/AddProduct";
import EditProduct from "./pages/Products/EditProduct";
import Orders from "./pages/Orders/Orders";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Checkout from "./pages/Checkout/Checkout";

const App = () => {
  return (
    <>
      <MyState>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products/:name" element={<Products />} />
            <Route path="/product/:id" element={<Product />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Registration />} />

            <Route path="/checkout" element={<Checkout />} />

            <Route path="/cart" element={<Cart />} />
            <Route path="/*" element={<Error />} />
            
            <Route
              path="/orders"
              element={
                <ProtectedRoute>
                  <Orders />
                </ProtectedRoute>
              }
            />
            <Route
              path="/addproduct"
              element={
                <ProtectedRouteForAdmin>
                  <AddProduct />
                </ProtectedRouteForAdmin>
              }
            />

            <Route
              path="/wishlist"
              element={
                <ProtectedRoute>
                  <Wishlist />
                </ProtectedRoute>
              }
            />

            <Route
              path="/editproduct"
              element={
                <ProtectedRouteForAdmin>
                  <EditProduct />
                </ProtectedRouteForAdmin>
              }
            />

            <Route
              path="/admin"
              element={
                <ProtectedRouteForAdmin>
                  <Admin />
                </ProtectedRouteForAdmin>
              }
            />
            <Route
              path="/order"
              element={
                <ProtectedRoute>
                  <Orders />
                </ProtectedRoute>
              }
            />
          </Routes>
        </BrowserRouter>
      </MyState>
      <ToastContainer autoClose={1000}
 />
    </>
  );
};

const ProtectedRoute = ({ children }) => {
  const user = JSON.parse(localStorage.getItem("user"));
  if (user.user.email !== "yogeshnegi97@gmail.com") {
    return children;
  } else {
    return <Navigate to={"/login"} />;
  }
};
const ProtectedRouteForAdmin = ({ children }) => {
  const admin = JSON.parse(localStorage.getItem("user"));
  if (admin.user.email === "yogeshnegi97@gmail.com") {
    return children;
  } else {
    return <Navigate to={"/login"} />;
  }
};

export default App;
