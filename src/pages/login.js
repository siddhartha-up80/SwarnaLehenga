import React, { useState } from "react";
import Link from "next/link";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/router";

const Login = () => {
  const router = useRouter();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const handleChange = (e) => {
    if (e.target.name == "email") {
      setEmail(e.target.value);
    } else if (e.target.name == "password") {
      setPassword(e.target.value);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = { email, password };
    let res = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    let response = await res.json();
    console.log(response);

    setEmail("");

    setPassword("");
    if (response.success) {
      localStorage.setItem("token", response.token)
      toast.success("You are successfully logged in, Step Into the Elegance!", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });

      setTimeout(() => {
        router.push(`${process.env.NEXT_PUBLIC_HOST}/saree`);
      }, 1000);
    } else {
      toast.error(response.error, {
        position: "top-right", 
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  };

  return (
    <div>
      <section className="min-h-screen flex items-stretch text-white ">
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
        {/* Same as */}
        <ToastContainer />
        <div className="lg:flex w-1/2 hidden bg-gray-500 bg-no-repeat bg-cover relative items-center bg-[url(https://source.unsplash.com/random/?saree)]">
          <div className="absolute bg-black opacity-60 inset-0 z-0"></div>
          <div className="w-full px-24 z-10">
            <h1 className="text-5xl font-bold text-left tracking-wide">
              Keep it special
            </h1>
            <p className="text-3xl my-4">
              Capture your personal memory in unique way, anywhere.
            </p>
          </div>
        </div>
        <div className="lg:w-1/2 w-full flex flex-col items-center justify-center text-center md:px-16 px-0 z-0 ">
          {/* login component start */}
          <div
            className="
          flex flex-col
          bg-white
          shadow-md
          px-4
          sm:px-6
          md:px-8
          lg:px-10
          py-8
          rounded-3xl
          w-50
          max-w-md
        "
          >
            <div className="font-medium self-center text-xl sm:text-3xl text-gray-800">
              Login to your account
            </div>
            <div className="mt-4 self-center text-xl sm:text-sm text-gray-800">
              Enter your credentials
            </div>

            <div className="mt-10">
              <form onSubmit={handleSubmit}>
                <div className="flex flex-col mb-5">
                  <label
                    htmlFor="email"
                    className="mb-1 text-xs tracking-wide text-gray-600"
                  >
                    E-Mail Address:
                  </label>
                  <div className="relative">
                    <div
                      className="
                    inline-flex
                    items-center
                    justify-center
                    absolute
                    left-0
                    top-0
                    h-full
                    w-10
                    text-gray-400
                  "
                    >
                      <i className="fas fa-at text-rose-500"></i>
                    </div>

                    <input
                      id="email"
                      type="email"
                      name="email"
                      className="
                    text-sm
                    placeholder-gray-500
                    pl-10
                    pr-4
                    rounded-2xl
                    border border-gray-400
                    w-full
                    py-2
                    focus:outline-none focus:border-rose-400
                    bg-pink-50 text-black
                  "
                      value={email}
                      onChange={handleChange}
                      placeholder="Enter your email"
                    />
                  </div>
                </div>
                <div className="flex flex-col mb-6">
                  <label
                    htmlFor="password"
                    className="mb-1 text-xs sm:text-sm tracking-wide text-gray-600"
                  >
                    Password:
                  </label>
                  <div className="relative">
                    <div
                      className="
                    inline-flex
                    items-center
                    justify-center
                    absolute
                    left-0
                    top-0
                    h-full
                    w-10
                    text-gray-400
                  "
                    >
                      <span>
                        <i className="fas fa-lock text-rose-500"></i>
                      </span>
                    </div>

                    <input
                      id="password"
                      type="password"
                      name="password"
                      className="
                    text-sm
                    placeholder-gray-500
                    pl-10
                    pr-4
                    rounded-2xl
                    border border-gray-400
                    w-full
                    py-2
                    focus:outline-none focus:border-rose-400
                    bg-pink-50 text-black
                  "
                      value={password}
                      onChange={handleChange}
                      placeholder="Enter your password"
                    />
                  </div>
                </div>

                <div className="flex w-full flex-col gap-4">
                  <Link
                    href="/forgot"
                    className="text-xs ml-2 text-rose-500 font-semibold flex justify-end"
                  >
                    Forgot Password ?
                  </Link>
                  <button
                    type="submit"
                    className="
                  flex
                  
                  items-center
                  justify-center
                  focus:outline-none
                  text-white text-sm
                  sm:text-base
                  bg-rose-500
                  hover:bg-rose-600
                  rounded-2xl
                  py-2
                  w-full
                  transition
                  duration-150
                  ease-in
                "
                  >
                    <span className="mr-2 uppercase">Sign In</span>
                    <span>
                      <svg
                        className="h-6 w-6"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </span>
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div className="flex justify-center items-center mt-6">
            <Link
              href="/signup"
              className="
            inline-flex
            items-center
           
            font-medium
            text-xs text-center
          "
            >
              <span className="ml-2 text-rose-400">
                Not having an account?
                <div className="text-xs ml-2 text-rose-500 font-semibold">
                  Register now
                </div>
              </span>
            </Link>
          </div>

          {/* login component end */}
        </div>
      </section>
    </div>
  );
};

export default Login;
