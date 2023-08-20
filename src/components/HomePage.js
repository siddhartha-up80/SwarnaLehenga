import React, { useState } from "react";
import Link from "next/link";
// import Loading from "./loading/Loading";

const HomePage = () => {
  // const [loading, setLoading] = useState("hidden");

  // const loader = () => {
  //   if (loading == "hidden") {
  //     setLoading("block");
  //   } else {
  //     setLoading("hidden");
  //   }
  // };

  return (
    <div className="" data-theme="cupcake">
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage: `url("https://source.unsplash.com/random/1080×1920/?saree")`,
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold dark:text-white">
              Step Into The Elegance
            </h1>
            <p className="mb-5 dark:text-white">
              The Ultimate Destination for Luxurious Indian Fashion
            </p>
            <Link
              href="/saree"
              // onClick={() => {
              //   loader();
              // }}
            >
              <button
                className="btn bg-rose-800 hover:bg-red-900 dark:text-white"
                // onClick={() => {
                //   loader();
                // }}
              >
                Get Started
              </button>
            </Link>
            {/* <div className={`absolute left-60 right-40 mt-10 ${loading}`}>
              <Loading />
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
