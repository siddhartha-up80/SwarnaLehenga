import React, { useEffect, useState } from "react";

import { useRouter } from "next/router";

const MyAccount = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [user, setUser] = useState({
    email: email,
    address: "",
    name: "",
    phone: "",
    password: "",
  });

  useEffect(() => {
    if (!localStorage.getItem("token")) {
      router.push("/login");
    }

    if (localStorage.getItem("token")) {
      const details = localStorage.getItem("token").split(",");
      const email = details[1];
      setEmail(email);
    }
  }, []);

  // console.log(email)

  const handleInputChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const handleUpdate = async () => {
    try {
      const response = await fetch("/api/updateaccount", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          name: user.name,
          phone: user.phone,
          address: user.address,
          password: user.password,
        }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      console.log(data); // Log the response data for debugging

      // Handle success, e.g., show a success message to the user
      // You can also redirect the user to another page if needed
    } catch (error) {
      console.error("Error updating user:", error);
      // Handle error, e.g., show an error message to the user
    }
  };

  return (
    <div className="min-h-screen">
      <section className="text-gray-600 body-font relative">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-12">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
              Update Your Account
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
              Enter your new updated details here to continue
            </p>
          </div>
          <div className="lg:w-1/2 md:w-2/3 mx-auto">
            <div className="flex flex-wrap -m-2">
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label
                    htmlFor="name"
                    className="leading-7 text-sm text-gray-600"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={user.name}
                    onChange={handleInputChange}
                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-rose-500 focus:bg-white focus:ring-2 focus:ring-rose-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label
                    htmlFor="email"
                    className="leading-7 text-sm text-gray-600"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={user.email}
                    onChange={handleInputChange}
                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-rose-500 focus:bg-white focus:ring-2 focus:ring-rose-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div className="p-2 w-1/2">
                <div className="relative ">
                  <label
                    htmlFor="password"
                    className="leading-7 text-sm text-gray-600"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    value={user.password}
                    onChange={handleInputChange}
                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-rose-500 focus:bg-white focus:ring-2 focus:ring-rose-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div className=" p-2 w-1/2">
                <div className="relative">
                  <label
                    htmlFor="phone"
                    className="leading-7 text-sm text-gray-600"
                  >
                    Phone
                  </label>
                  <input
                    type="phone"
                    id="phone"
                    name="phone"
                    value={user.phone}
                    onChange={handleInputChange}
                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-rose-500 focus:bg-white focus:ring-2 focus:ring-rose-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div className="p-2 w-full">
                <div className="relative">
                  <label
                    htmlFor="message"
                    className="leading-7 text-sm text-gray-600"
                  >
                    Address
                  </label>
                  <textarea
                    id="message"
                    name="address"
                    value={user.address}
                    onChange={handleInputChange}
                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-rose-500 focus:bg-white focus:ring-2 focus:ring-rose-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div className="p-2 w-full">
                <button
                  className="flex mx-auto text-white bg-rose-500 border-0 py-2 px-8 focus:outline-none hover:bg-rose-600 rounded text-lg"
                  onClick={handleUpdate}
                >
                  Update
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MyAccount;
