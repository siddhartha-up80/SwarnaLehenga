import React, { useRef, useState } from "react";
import Footer from "./Footer";
import Link from "next/link";

// material ui icons
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import CategoryIcon from "@mui/icons-material/Category";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import PersonIcon from "@mui/icons-material/Person";
import CloseIcon from "@mui/icons-material/Close";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { set } from "mongoose";

const PageContainer = ({
  Component,
  pageProps,
  cart,
  addtoCart,
  removefromCart,
  clearCart,
  subTotal,
  test,
  buyNow,
  user,
  key,
  logout
}) => {
  const [dropdown, setDropdown] = useState(false);
  const toggleDropdown = () => {
    setDropdown(!dropdown);
  };

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
      <div className="drawer h-full dark:text-white">
        <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col">
          <div className="w-full  pt-0 mt-0 h-0 min-h-[3rem]  flex justify-between bg-rose-600 dark:bg-rose-900 md:dark:bg-gray-800  text-white">
            <div className="flex flex-col">
              <div className="flex font-mono w-full">
                <div className="flex lg:hidden">
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
                <Link className="flex mt-2.5 ml-2 text-lg" href="/">
                  <div>Swarna Lehenga</div>
                </Link>
              </div>
              {/* <div className="lg:hidden flex justify-center items-center w-[94vw]">
                <input
                  type="text"
                  placeholder="Type here"
                  className="input w-[94vw] flex h-10  text-black dark:bg-white"
                />
              </div> */}
            </div>

            <div className="lg:flex hidden mt-2">
              <input
                type="text"
                placeholder="Type here"
                className="input w-full lg:w-[30rem] h-8 text-black bg-white"
              />
            </div>
            <div className="flex-none lg:flex hidden">
              <div className="flex gap-5 mt-2.5">
                <div className="dropdown dropdown-hover ">
                  <label tabIndex={0} className="flex gap-2">
                    <Link href="/categories">Categories</Link>
                    <CategoryIcon className="mt-1"></CategoryIcon>
                  </label>

                  <ul
                    tabIndex={0}
                    className="dropdown-content menu p-2 shadow bg-rose-500 dark:bg-gray-500 rounded-box w-[8rem]"
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
                  <BookmarkIcon className="mt-1"></BookmarkIcon>
                </div>
                {user.value && (
                  <div
                    className="cursor-pointer"
                    onMouseOver={toggleDropdown}
                    onMouseLeave={toggleDropdown}
                  >
                    <div className="dropdown dropdown-hover">
                      <span>User</span>

                      <PersonIcon className="mt-1"></PersonIcon>
                      <ul
                        tabIndex={0}
                        className="dropdown-content menu shadow bg-rose-500 dark:bg-gray-500 rounded-box absolute w-[8rem]"
                      >
                        <li>
                          <Link href="/profile">Account</Link>
                        </li>
                        <li>
                          <Link href="/order">Orders</Link>
                        </li>
                        <li>
                          <span onClick={logout}>Logout</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                )}
                {!user.value && (
                  <div className="flex gap-2">
                    <Link href="/login">
                      <button className="px-2 font-bold">Login</button>
                    </Link>
                  </div>
                )}
              </div>

              <div className="ml-8 mr-3 flex cursor-pointer mt-2.5">
                <ShoppingCartIcon
                  onClick={toggleCart}
                  className="text-2xl mr-2"
                ></ShoppingCartIcon>
              </div>
            </div>

            {/* shopping cart side */}
            <div
              ref={ref}
              className={`sidebar lg:absolute fixed lg:top-0 bottom-20 right-0 bg-white dark:bg-rose-900 md:dark:bg-gray-700 dark:text-white transition-transform transform translate-x-full translate-x-0'} md:rounded-b-xl rounded-xl lg:h-[90vh] shadow-md z-10 overflow-y-scroll`}
            >
              <CloseIcon
                className="text-red-600 rounded-full border-2 p-1 text-3xl absolute top-0 right-0 border-red-600 m-4 cursor-pointer"
                onClick={toggleCart}
              ></CloseIcon>

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
                      <li
                        key={k}
                        className="flex flex-col py-6 sm:flex-row sm:justify-between"
                      >
                        <div className="flex w-full space-x-2 sm:space-x-4">
                          {/* <img
                            className="flex-shrink-0 object-cover w-20 h-20 border-transparent rounded outline-none sm:w-32 sm:h-32 bg-gray-500"
                            src="https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?ixlib=rb-1.2.1&amp;ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&amp;auto=format&amp;fit=crop&amp;w=1350&amp;q=80"
                            alt="Polaroid camera"
                          /> */}
                          <div className="flex flex-col justify-between w-full pb-4">
                            <div className="flex justify-between w-full pb-2 space-x-2">
                              <div className="space-y-1">
                                <h3 className="text-lg font-semibold leading-snug sm:pr-8">
                                  <span>{cart[k].productName}</span>{" "}
                                  <span>{cart[k].size}</span>
                                </h3>
                                <p className="">
                                  Items:{" "}
                                  <span className="font-semibold">
                                    {cart[k].quantity}
                                  </span>
                                </p>
                                <p className="">₹{cart[k].price}</p>
                              </div>
                              <div className="text-right">
                                <p className="text-lg font-semibold">
                                  ₹{cart[k].price * cart[k].quantity}
                                </p>
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
                                <RemoveIcon
                                  onClick={() => {
                                    removefromCart(
                                      k,
                                      1,
                                      cart[k].price,
                                      cart[k].productName,
                                      cart[k].size,
                                      cart[k].variant
                                    );
                                  }}
                                  className="cursor-pointer"
                                ></RemoveIcon>
                                <span>{cart[k].quantity}</span>
                                <AddIcon
                                  onClick={() => {
                                    addtoCart(
                                      k,
                                      1,
                                      cart[k].price,
                                      cart[k].productName,
                                      cart[k].size,
                                      cart[k].variant
                                    );
                                  }}
                                  className="cursor-pointer"
                                ></AddIcon>
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
                    <span className="">₹{subTotal}</span>
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
                    className="px-6 py-2 border rounded-md border-rose-600 dark:bg-white dark:text-black"
                    onClick={toggleCart}
                  >
                    Back <span className="sr-only sm:not-sr-only">to shop</span>
                  </button>

                  {!Object.keys(cart).length == 0 && (
                    <button
                      type="button"
                      className="px-6 py-2 border rounded-md border-rose-600 dark:bg-white dark:text-black"
                      onClick={() => {
                        clearCart();
                        setTimeout(() => toggleCart(), 500);
                      }}
                    >
                      <span className="">
                        <DeleteOutlineIcon></DeleteOutlineIcon>
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
              buyNow={buyNow}
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
