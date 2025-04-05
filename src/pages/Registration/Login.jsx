import React, { useContext, useState } from "react";
import Layout from "../../Components/Layout/Layout";
import { NavLink, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../Firebase/Firebase";
import { toast } from "react-toastify";
import MyContext from "../../Context/MyContext";
import { Circles, ColorRing } from "react-loader-spinner";
import { FirebaseError } from 'firebase/app'

const Login = () => {
  const { loading, setLoading } = useContext(MyContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
 
  const handleSignIn = async (e) => {
    e.preventDefault();
     setLoading(true)
    try {
      const user = await signInWithEmailAndPassword(auth, email, password,);

      localStorage.setItem("user", JSON.stringify(user));
      setLoading(false);
      toast.success("SignIn Successfull ");

      navigate("/");
    } catch (error) {

  
  if (error instanceof FirebaseError) {
                
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode, errorMessage)
                toast.error(errorMessage)
                setLoading(false); 
          
             } else {
              setLoading(false); 
                console.log('Error:', error);
  };

}
  return (
    <Layout>
      <div class="  flex justify-center mt-20 mb-10 w-full">
        <form onSubmit={handleSignIn}>
          <div class="bg-white px-10 py-8 rounded-xl w-screen shadow-xl max-w-sm relative">
            <div class="space-y-4">
              <h1 class="text-center text-2xl font-semibold text-gray-600">
                Login
              </h1>
              <hr />
              <div class="flex items-center border-2 py-2 px-3 rounded-md mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                  />
                </svg>

                <input
                  type="email"
                  name="email"
                  onChange={(e) => setEmail(e.target.value)}
                  className="pl-2 outline-none border-none w-full"
                  placeholder="Email"
                  required
                />
              </div>

              <div class="flex items-center border-2 py-2 px-3 rounded-md">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5 text-gray-400"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                    clip-rule="evenodd"
                  />
                </svg>

                <input
                  onChange={(e) => setPassword(e.target.value)}
                  class="pl-2 outline-none border-none w-full"
                  type="password"
                  name="password"
                  id=""
                  placeholder="Password"
                  required
                />
              </div>
            </div>
            {loading ? (
              <div className="absolute top-1/3 left-40">
                <ColorRing
                  visible={true}
                  height="60"
                  width="60"
                  ariaLabel="color-ring-loading"
                  wrapperStyle={{}}
                  wrapperClass="color-ring-wrapper"
                  colors={[
                    "#e15b64",
                    "#f47e60",
                    "#f8b26a",
                    "#abbd81",
                    "#849b87",
                  ]}
                />
              </div>
            ) : (
              ""
            )}

            <button
              type="submit"
              value="login"
              id="login"
              class="mt-6 w-full shadow-xl bg-gradient-to-tr from-blue-600 to-red-400 hover:to-red-700 text-indigo-100 py-2 rounded-md text-lg tracking-wide transition duration-1000"
            >
              Login
            </button>
            <hr />
            <div class="flex justify-center items-center mt-4">
              <p class="inline-flex items-center text-gray-700 font-medium text-xs text-center">
                <span class="ml-2">
                  You don't have an account ?{" "}
                  <NavLink
                    to={"/register"}
                    class="text-xs ml-2 text-blue-500 font-semibold"
                  >
                    Register now &rarr;
                  </NavLink>
                </span>
              </p>
            </div>
          </div>
        </form>
      </div>
    </Layout>
  )

  };

}
export default Login
