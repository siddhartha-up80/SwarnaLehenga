import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { BiSearchAlt2 } from "react-icons/Bi";
import { BiCartAlt } from "react-icons/Bi";

const Navbar = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const toggleDarkMode = () => setIsDarkMode(!isDarkMode);

  return (
    <>
      <header className="p-2 dark:text-white shadow-md text-gray-800 hidden lg:block">
        <div className="container flex justify-between h-10 mx-auto">
          {/* <ul className="items-stretch hidden space-x-3 lg:flex">
            <li className="flex">
              <Link
                rel="noopener noreferrer"
                href="#"
                className="flex items-center px-4 -mb-1 border-b-2 border-transparent text-pink-600 border-pink-600"
              >
                Lehenga
              </Link>
            </li>
            <li className="flex">
              <Link
                rel="noopener noreferrer"
                href="#"
                className="flex items-center px-4 -mb-1 border-b-2 border-transparent"
              >
                Kurti
              </Link>
            </li>
            <li className="flex">
              <Link
                rel="noopener noreferrer"
                href="#"
                className="flex items-center px-4 -mb-1 border-b-2 border-transparent"
              >
                Saree
              </Link>
            </li>
          </ul> */}
          <Link
            rel="noopener noreferrer"
            href="#"
            aria-label="Back to homepage"
            className="flex items-center p-2"
          >
            <Image
              src="/logo.png"
              alt="Indian Lehenga Logo"
              width={200}
              height={200}
              className="mt-5 w-auto h-auto"
            />
          </Link>
          <div className="flex items-center md:space-x-4">
            <div className="my-3 w-[80vw] lg:w-[55vw] xl:w-[25vw] 2xl:w-[34vw]">
              <form
                className="input-group flex items-stretch m-2"
                action="/search"
              >
                <input
                  name="query"
                  type="search"
                  className="form-control relative flex-auto min-w-0 block mx-2 px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-pink-600 focus:outline-none"
                  placeholder="Step Into Elegance"
                  aria-label="Search"
                  aria-describedby="button-addon2"
                />
                <button
                  type="submit"
                  className="btn px-6 py-2.5 bg-pink-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-pink-700 hover:shadow-lg focus:bg-pink-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-pink-800 active:shadow-lg transition duration-150 ease-in-out flex items-center"
                  id="button-addon2"
                >
                  {" "}
                  <BiSearchAlt2></BiSearchAlt2>
                </button>
              </form>
            </div>
            {/* <button
              type="button"
              className="hidden px-6 py-2 font-semibold rounded lg:block bg-pink-600 text-gray-50"
            >
              Log in

            </button> */}
            <Link href="#">
              <BiCartAlt className="text-4xl text-pink-600"></BiCartAlt>
            </Link>
          </div>
          <button title="Open menu" type="button" className="p-4 lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6 text-gray-800"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
        </div>
      </header>

      <div className="lg:hidden bg-white shadow-md pb-2">
        <div className="flex items-center flex-col justify-between">
          <div className="justify-start w-full px-2 my-2">
            Swarna Lehenga
          </div>
          <Link href="/">
            <div className="flex items-center justify-center">
              <div className="w-max">
                <form className="input-group flex" action="/search">
                  <input
                    name="query"
                    type="search"
                    className="form-control relative flex-auto min-w-0 w-[20rem] block px-3 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-pink-600 focus:outline-none"
                    placeholder="Step Into Elegance"
                    aria-label="Search"
                    aria-describedby="button-addon2"
                  />
                  <button
                    type="submit"
                    className="btn px-6 py-2.5 bg-pink-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-pink-700 hover:shadow-lg focus:bg-pink-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-pink-800 active:shadow-lg transition duration-150 ease-in-out flex items-center"
                    id="button-addon2"
                  >
                    <BiSearchAlt2></BiSearchAlt2>
                  </button>
                </form>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;
