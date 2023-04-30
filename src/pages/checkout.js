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
      <div className="dark:text-white">
        <div className="flex flex-col items-center border-b py-4 sm:flex-row sm:px-10 lg:px-20 xl:px-32">
          <a
            href="#"
            className="text-2xl font-bold text-rose-800 dark:text-white"
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
                  <span className="font-semibold text-rose-900 dark:text-white">
                    Shop
                  </span>
                </li>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 text-rose-400 dark:text-white"
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
                  <span className="font-semibold text-rose-900 dark:text-white">
                    Shipping
                  </span>
                </li>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 text-rose-400 dark:text-white"
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
                    className="flex h-6 w-6 items-center justify-center rounded-full bg-rose-400 text-xs font-semibold dark:text-white text-white"
                    href="#"
                  >
                    3
                  </a>
                  <span className="font-semibold text-rose-500 dark:text-white">
                    Payment
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="grid  lg:grid-cols-2 dark:text-white">
          <div className="md:mt-10 px-4 pt-8 lg:mt-0">
            <p className="text-xl font-medium">Basic Details</p>
            <p className="text-rose-400 dark:text-white">
              Provide your basic details and proceed further
            </p>
            <div className="">
              <label
                htmlFor="email"
                className="mt-4 mb-2 block text-sm font-medium"
              >
                Email
              </label>
              <div className="relative">
                <input
                  type="emial"
                  id="email"
                  name="email"
                  className="w-full rounded-md border px-4 py-3 pl-11 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                  placeholder="your.email@gmail.com"
                />
                <div className="pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 text-rose-400 dark:text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                    />
                  </svg>
                </div>
              </div>
              <label
                htmlFor="card-holder"
                className="mt-4 mb-2 block text-sm font-medium"
              >
                Full Name
              </label>
              <div className="relative">
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full rounded-md border  px-4 py-3 pl-4 text-sm uppercase shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                  placeholder="Your full name here"
                />
                <div className="pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3"></div>
              </div>
              <label
                htmlFor="card-no"
                className="mt-4 mb-2 block text-sm font-medium"
              >
                Phone
              </label>
              <div className="flex">
                <div className="relative w-7/12 flex-shrink-0">
                  <input
                    type="phone"
                    id="phone"
                    name="phone"
                    className="w-full rounded-md border  px-2 py-3 pl-4 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                    placeholder=""
                  />
                </div>
              </div>
              <label
                htmlFor="address"
                className="mt-4 mb-2 block text-sm font-medium"
              >
                Address
              </label>
              <div className="flex flex-col sm:flex-row gap-2">
                <div className="relative flex-shrink-0 sm:w-7/12">
                  <input
                    type="text"
                    id="address"
                    name="address"
                    className="w-full rounded-md border  px-4 py-3 pl-4 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                    placeholder="Address"
                  />
                  <div className="pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3"></div>
                </div>
                <select
                  type="text"
                  name="state"
                  className="w-full rounded-md border px-4 py-3 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                >
                  <option value="State">State</option>
                </select>
                <input
                  type="text"
                  name="city"
                  className="flex-shrink-0 rounded-md border  px-4 py-3 text-sm shadow-sm outline-none sm:w-1/6 focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                  placeholder="city"
                />{" "}
                <input
                  type="text"
                  name="pincode"
                  className="flex-shrink-0 rounded-md border px-4 py-3 text-sm shadow-sm outline-none sm:w-1/6 focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                  placeholder="pincode"
                />
              </div>
            </div>
          </div>

          {/* payment details */}

          <div className="md:mt-10 mb-12 h-full  px-4 pt-8 lg:mt-0">
            <p className="text-xl font-medium">Payment Details</p>
            <p className="text-rose-400 dark:text-white">
              Complete your order by providing your payment details.
            </p>
            <div className="">
              <label
                htmlFor="email"
                className="mt-4 mb-2 block text-sm font-medium"
              >
                Email
              </label>
              <div className="relative">
                <input
                  type="text"
                  id="email"
                  name="email"
                  className="w-full rounded-md border  px-4 py-3 pl-11 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                  placeholder="your.email@gmail.com"
                />
                <div className="pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 text-rose-400 dark:text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                    />
                  </svg>
                </div>
              </div>
              <label
                htmlFor="card-holder"
                className="mt-4 mb-2 block text-sm font-medium"
              >
                Card Holder
              </label>
              <div className="relative">
                <input
                  type="text"
                  id="card-holder"
                  name="card-holder"
                  className="w-full rounded-md border  px-4 py-3 pl-11 text-sm uppercase shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                  placeholder="Your full name here"
                />
                <div className="pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 text-rose-400 dark:text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5zm6-10.125a1.875 1.875 0 11-3.75 0 1.875 1.875 0 013.75 0zm1.294 6.336a6.721 6.721 0 01-3.17.789 6.721 6.721 0 01-3.168-.789 3.376 3.376 0 016.338 0z"
                    />
                  </svg>
                </div>
              </div>
              <label
                htmlFor="card-no"
                className="mt-4 mb-2 block text-sm font-medium"
              >
                Card Details
              </label>
              <div className="flex">
                <div className="relative w-7/12 flex-shrink-0">
                  <input
                    type="text"
                    id="card-no"
                    name="card-no"
                    className="w-full rounded-md border  px-2 py-3 pl-11 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                    placeholder="xxxx-xxxx-xxxx-xxxx"
                  />
                  <div className="pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3">
                    <svg
                      className="h-4 w-4 text-rose-400 dark:text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      viewBox="0 0 16 16"
                    >
                      <path d="M11 5.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-1z" />
                      <path d="M2 2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H2zm13 2v5H1V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1zm-1 9H2a1 1 0 0 1-1-1v-1h14v1a1 1 0 0 1-1 1z" />
                    </svg>
                  </div>
                </div>
                <input
                  type="text"
                  name="credit-expiry"
                  className="w-full rounded-md border  px-2 py-3 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                  placeholder="MM/YY"
                />
                <input
                  type="text"
                  name="credit-cvc"
                  className="w-1/6 flex-shrink-0 rounded-md border  px-2 py-3 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                  placeholder="CVC"
                />
              </div>
              <label
                htmlFor="billing-address"
                className="mt-4 mb-2 block text-sm font-medium"
              >
                Billing Address
              </label>
              <div className="flex flex-col sm:flex-row gap-2">
                <div className="relative flex-shrink-0 sm:w-7/12">
                  <input
                    type="text"
                    id="billing-address"
                    name="billing-address"
                    className="w-full rounded-md border  px-4 py-3 pl-11 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                    placeholder="Street Address"
                  />
                  <div className="pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3">
                    <img
                      className="h-4 w-4 object-contain"
                      src="https://flagpack.xyz/_nuxt/4c829b6c0131de7162790d2f897a90fd.svg"
                      alt=""
                    />
                  </div>
                </div>
                <select
                  type="text"
                  name="billing-state"
                  className="w-full rounded-md border  px-4 py-3 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                >
                  <option value="State">State</option>
                </select>
                <input
                  type="text"
                  name="billing-zip"
                  className="flex-shrink-0 rounded-md border  px-4 py-3 text-sm shadow-sm outline-none sm:w-1/6 focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                  placeholder="ZIP"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 py-2 flex justify-center flex-wrap mb-14">
          {/* shopping cart review */}
          <div className="sidebar h-full w-full flex md:justify-center justify-between px-10 items-center flex-wrap">
            <div className="flex flex-col max-w-3xl p-6 space-y-4 sm:p-10 text-gray-800 dark:text-white ">
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
                          src="https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?ixlib=rb-1.2.1&amp;ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&amp;auto=format&amp;fit=crop&amp;w=1350&amp;q=80"
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
                                ${cart[k].price * cart[k].quantity}
                              </p>
                            </div>
                            <div className="text-right">
                              <p className="text-lg font-semibold">
                                ${cart[k].price}
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
                  <p className="text-sm font-medium text-rose-900 dark:text-white">
                    Subtotal
                  </p>
                  <p className="font-semibold text-rose-900 dark:text-white">
                    ${subTotal}
                  </p>
                </div>
                <div className="flex items-center justify-between">
                  <p className="text-sm font-medium text-rose-900 dark:text-white">
                    Shipping
                  </p>
                  <p className="font-semibold text-rose-900 dark:text-white">
                    $8.00
                  </p>
                </div>
              </div>
              <div>
                <div className="">
                  <p className="text-sm font-medium text-rose-900 dark:text-white">
                    Total
                  </p>
                  <p className="text-2xl font-semibold text-rose-900 dark:text-white">
                    ${subTotal !== 0 ? subTotal + 8 : 0}
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
