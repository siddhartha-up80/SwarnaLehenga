import React, { useRef } from "react";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import CloseIcon from "@mui/icons-material/Close";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import Link from "next/link";

const Checkout = ({ cart, clearCart, addtoCart, removefromCart, subTotal }) => {
  const ref = useRef();
    // console.log(subTotal);
  return (
    <>
      <div className="dark1:text-white">
        <div className="flex flex-col items-center border-b py-4 sm:flex-row sm:px-10 lg:px-20 xl:px-32">
          <a
            href="#"
            className="text-2xl font-bold text-rose-800 dark1:text-white"
          >
            checkout
          </a>
          <div className="mt-4 py-2 text-xs sm:mt-0 sm:ml-auto sm:text-base">
            <div className="relative">
              <ul className="relative flex w-full items-center justify-between space-x-2 sm:space-x-4">
                <li className="flex items-center space-x-3 text-left sm:space-x-4">
                  <a
                    className="flex h-6 w-6 items-center justify-center rounded-full bg-emerald-200 text-xs font-semibold text-emerald-700"
                    href="#"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </a>
                  <span className="font-semibold text-rose-900 dark1:text-white">
                    Shop
                  </span>
                </li>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 text-rose-400 dark1:text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
                <li className="flex items-center space-x-3 text-left sm:space-x-4">
                  <a
                    className="flex h-6 w-6 items-center justify-center rounded-full bg-rose-600 text-xs font-semibold text-white ring ring-rose-600 ring-offset-2"
                    href="#"
                  >
                    2
                  </a>
                  <span className="font-semibold text-rose-900 dark1:text-white">
                    Shipping
                  </span>
                </li>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 text-rose-400 dark1:text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
                <li className="flex items-center space-x-3 text-left sm:space-x-4">
                  <a
                    className="flex h-6 w-6 items-center justify-center rounded-full bg-rose-400 text-xs font-semibold dark1:text-white text-white"
                    href="#"
                  >
                    3
                  </a>
                  <span className="font-semibold text-rose-500 dark1:text-white">
                    Payment
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        

        <div className="mt-6 py-2 flex justify-center flex-wrap mb-14">
          {/* shopping cart review */}
          <div className="sidebar h-full w-full flex md:justify-center justify-between px-10 items-center flex-wrap">
            <div className="flex flex-col max-w-3xl p-6 space-y-4 sm:p-10 text-gray-800 dark1:text-white ">
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
                        <img
                          className="flex-shrink-0 object-cover w-20 h-20 border-transparent rounded outline-none sm:w-32 sm:h-32 bg-gray-500"
                          src="imagelink"
                          alt="Polaroid camera"
                        />

                        <div className="flex flex-col justify-between w-full pb-4">
                          <div className="flex justify-between w-full pb-2 space-x-2">
                            <div className="space-y-1">
                              <h3 className="text-lg font-semibold leading-snug sm:pr-8">
                                {cart[k].productName}
                              </h3>
                              <p className="">
                                Items:{" "}
                                <span className="font-semibold">
                                  {cart[k].quantity}
                                </span>
                              </p>
                              <p className="">
                                Rs.{cart[k].price * cart[k].quantity}
                              </p>
                            </div>
                            <div className="text-right">
                              <p className="text-lg font-semibold">
                                Rs.{cart[k].price}
                              </p>
                            </div>
                          </div>
                          <div className="flex text-lg divide-x">
                            <button
                              type="button"
                              className="flex items-center px-2 py-1 pl-0 space-x-1"
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

              <div className="flex justify-center space-x-4">
                {!Object.keys(cart).length == 0 && (
                  <button
                    type="button"
                    className="px-6 py-2 border rounded-md bg-rose-900"
                    onClick={() => {
                      clearCart();
                    }}
                  >
                    <span className="text-white">
                      Clear Cart
                      <DeleteOutlineIcon></DeleteOutlineIcon>
                    </span>
                  </button>
                )}
              </div>
            </div>

            <div className="mx-auto">
              <div>
                <div className="flex items-center justify-between ">
                  <p className="text-sm font-medium text-rose-900 dark1:text-white">
                    Subtotal
                  </p>
                  <p className="font-semibold text-rose-900 dark1:text-white">
                    Rs.{subTotal}
                  </p>
                </div>
                <div className="flex items-center justify-between">
                  <p className="text-sm font-medium text-rose-900 dark1:text-white">
                    Shipping
                  </p>
                  <p className="font-semibold text-rose-900 dark1:text-white">
                    Rs.8.00
                  </p>
                </div>
              </div>
              <div>
                <div className="">
                  <p className="text-sm font-medium text-rose-900 dark1:text-white">
                    Total
                  </p>
                  <p className="text-2xl font-semibold text-rose-900 dark1:text-white">
                    Rs.{subTotal !== 0 ? subTotal + 8 : 0}
                  </p>
                </div>
                <Link href="/order">
                  <button className="mt-4 mb-8 h-10 w-full rounded-md bg-rose-900 px-6 py-3 font-medium text-white">
                    Place Order
                  </button>
                </Link>
              </div>
            </div>
          </div>
          {/* shopping cart review end */}
        </div>
      </div>
    </>
  );
};

export default Checkout;
