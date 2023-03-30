import React, { useRef } from "react";
import Footer from "./Footer";

import { BiCartAlt } from "react-icons/bi";
import Link from "next/link";
import { TbCategory } from "react-icons/tb";

import { TbBookmark } from "react-icons/tb";
import { TbUserCircle } from "react-icons/tb";
import { TfiClose } from "react-icons/tfi";
import {
  AiOutlinePlusCircle,
  AiOutlineMinusCircle,
  AiOutlineDelete,
} from "react-icons/ai";

const PageContainer = ({
  Component,
  pageProps,
  cart,
  addtoCart,
  removefromCart,
  clearCart,
  subTotal,
  test,
}) => {
  const toggleCart = () => {
    if (ref.current.classList.contains("translate-x-full")) {
      ref.current.classList.remove("translate-x-full");
      ref.current.classList.add("translate-x-0");
    } else if (!ref.current.classList.contains("translate-x-full")) {
      ref.current.classList.remove("translate-x-0");
      ref.current.classList.add("translate-x-full");
    }
  };
  const ref = useRef();
  return (
    <div>
      <div className="drawer h-full dark:text-white ">
        <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col">
          <div className="w-full navbar flex justify-between bg-rose-600 text-white">
            <div className="flex flex-col">
              <div className="flex font-mono w-full">
                <div className="flex-none lg:hidden">
                  <label
                    htmlFor="my-drawer-3"
                    className="btn btn-square btn-ghost"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      className="inline-block w-6 h-6 stroke-current"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 6h16M4 12h16M4 18h16"
                      ></path>
                    </svg>
                  </label>
                </div>
                <Link className="flex mt-2.5 text-lg" href="/">
                  <div>Swarna Lehenga</div>
                </Link>
              </div>
              <div className="lg:hidden flex mb-3 justify-center items-center w-[94vw]">
                <input
                  type="text"
                  placeholder="Type here"
                  className="input w-[94vw] flex h-10  text-black dark:bg-white"
                />
              </div>
            </div>

            <div className="lg:flex hidden">
              <input
                type="text"
                placeholder="Type here"
                className="input w-full lg:w-[30rem] text-black"
              />
            </div>
            <div className="flex-none lg:flex hidden">
              <div className="flex gap-5">
                <div className="dropdown dropdown-hover ">
                  <label tabIndex={0} className="flex gap-2">
                    <Link href="/categories">Categories</Link>
                    <TbCategory className="mt-1"></TbCategory>
                  </label>

                  <ul
                    tabIndex={0}
                    className="dropdown-content menu p-2 shadow bg-rose-500 rounded-box w-[8rem]"
                  >
                    <li>
                      <Link href="/lehenga">Lehenga</Link>
                    </li>
                    <li>
                      <Link href="/saree">Saree</Link>
                    </li>
                    <li>
                      <Link href="/kurti">Kurti</Link>
                    </li>
                  </ul>
                </div>
                <div className="flex gap-2">
                  <Link href="/favourite">Favourite</Link>
                  <TbBookmark className="mt-1"></TbBookmark>
                </div>
                <div className="flex gap-2">
                  <Link href="/profile">Profile</Link>
                  <TbUserCircle className="mt-1"></TbUserCircle>
                </div>
              </div>

              <div className="ml-8 mr-3 flex cursor-pointer">
                <BiCartAlt
                  onClick={toggleCart}
                  className="text-2xl mr-2"
                ></BiCartAlt>
              </div>
            </div>

            {/* shopping cart side */}
            <div
              ref={ref}
              className="sidebar lg:absolute fixed lg:top-0 bottom-20 right-0 bg-rose-50 dark:bg-rose-400 transition-transform translate-x-full transform rounded-b-xl lg:h-[90vh] shadow-md z-10"
            >
              <TfiClose
                className="text-red-600 rounded-full border-2 p-1 text-3xl absolute top-0 right-0 border-red-600 m-4 cursor-pointer"
                onClick={toggleCart}
              ></TfiClose>

              <div className="flex flex-col max-w-3xl p-6 space-y-4 sm:p-10 text-gray-800 dark:text-white">
                <h2 className="text-xl font-semibold">Your cart</h2>
                <ul className="flex flex-col divide-y divide-gray-300">
                  {/* to display no itmes in the cart message  */}
                  {Object.keys(cart).length == 0 && (
                    <div className="mb-10">No Items in the cart</div>
                  )}

                  {/* mapping cart items  */}
                  {Object.keys(cart).map((k) => {
                    return (
                      <li key={k} className="flex flex-col py-6 sm:flex-row sm:justify-between">
                        <div className="flex w-full space-x-2 sm:space-x-4">
                          <img
                            className="flex-shrink-0 object-cover w-20 h-20 border-transparent rounded outline-none sm:w-32 sm:h-32 bg-gray-500"
                            src="https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?ixlib=rb-1.2.1&amp;ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&amp;auto=format&amp;fit=crop&amp;w=1350&amp;q=80"
                            alt="Polaroid camera"
                          />
                          <div className="flex flex-col justify-between w-full pb-4">
                            <div className="flex justify-between w-full pb-2 space-x-2">
                              <div className="space-y-1">
                                <h3 className="text-lg font-semibold leading-snug sm:pr-8">
                                  Polaroid camera
                                </h3>
                                <p className="">
                                  Items:{" "}
                                  <span className="font-semibold">1</span>
                                </p>
                                <p className="">75.50€</p>
                              </div>
                              <div className="text-right">
                                <p className="text-lg font-semibold">59.99€</p>
                              </div>
                            </div>
                            <div className="flex text-lg divide-x">
                              <button
                                type="button"
                                className="flex items-center px-2 py-1 pl-0 space-x-1"
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 512 512"
                                  className="w-4 h-4 fill-current"
                                >
                                  <path d="M96,472a23.82,23.82,0,0,0,23.579,24H392.421A23.82,23.82,0,0,0,416,472V152H96Zm32-288H384V464H128Z"></path>
                                  <rect
                                    width="32"
                                    height="200"
                                    x="168"
                                    y="216"
                                  ></rect>
                                  <rect
                                    width="32"
                                    height="200"
                                    x="240"
                                    y="216"
                                  ></rect>
                                  <rect
                                    width="32"
                                    height="200"
                                    x="312"
                                    y="216"
                                  ></rect>
                                  <path d="M328,88V40c0-13.458-9.488-24-21.6-24H205.6C193.488,16,184,26.542,184,40V88H64v32H448V88ZM216,48h80V88H216Z"></path>
                                </svg>
                                <span>Remove</span>
                              </button>
                              <div className="flex items-center flex-row px-2 py-1 space-x-1">
                                <AiOutlineMinusCircle className="cursor-pointer"></AiOutlineMinusCircle>
                                <span>1</span>
                                <AiOutlinePlusCircle className="cursor-pointer"></AiOutlinePlusCircle>
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>
                    );
                  })}
                </ul>
                <div className="space-y-1 text-right">
                  <p>
                    Total amount:
                    <span className="font-semibold">357 €</span>
                  </p>
                  {!Object.keys(cart).length == 0 && (
                    <p className="text-sm ">
                      Not including taxes and shipping costs
                    </p>
                  )}
                </div>
                <div className="flex justify-end space-x-4">
                  <button
                    type="button"
                    className="px-6 py-2 border rounded-md border-rose-600"
                    onClick={toggleCart}
                  >
                    Back <span className="sr-only sm:not-sr-only">to shop</span>
                  </button>

                  {!Object.keys(cart).length == 0 && (
                    <button
                      type="button"
                      className="px-6 py-2 border rounded-md border-rose-600"
                      onClick={() => {
                        clearCart();
                        setTimeout(()=> toggleCart(),500)
                      }}
                    >
                      <span>
                        <AiOutlineDelete></AiOutlineDelete>
                      </span>
                    </button>
                  )}

                  {!Object.keys(cart).length == 0 && (
                    <button
                      type="button"
                      className="px-6 py-2 border rounded-md bg-rose-600 text-gray-50 border-rose-600"
                    >
                      <Link href="/checkout">
                        <span className="sr-only sm:not-sr-only">
                          Continue to{" "}
                        </span>
                        Checkout
                      </Link>
                    </button>
                  )}
                </div>
              </div>
            </div>
            {/* end of shopping cart  */}
          </div>

          {/* page content passed as component */}
          <div className="page-container">
            <Component
              {...pageProps}
              cart={cart}
              addtoCart={addtoCart}
              removefromCart={removefromCart}
              clearCart={clearCart}
              subTotal={subTotal}
              test={test}
            ></Component>
          </div>
          {/* end of page content */}

          {/* bottom navigation */}
          <div className="">
            <Footer toggleCart={toggleCart}></Footer>
          </div>
          {/* end of bottom navigation */}
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer-3" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 bg-rose-900 text-white">
            <li>
              <Link href="/lehenga">Lehenga</Link>
            </li>
            <li>
              <Link href="/saree">Saree</Link>
            </li>
            <li>
              <Link href="/kurti">Kurti</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PageContainer;
