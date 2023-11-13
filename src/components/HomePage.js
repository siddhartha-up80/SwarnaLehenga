import React from 'react'
import Link from 'next/link';
const HomePage = () => {
  return (
    <div className="dark:text-white ">
      <div
        className="hero min-h-screen "
        style={{
          backgroundImage: `url("https://source.unsplash.com/random/1080×1920/?saree")`,
        }}
      >
        <div className="hero-overlay bg-opacity-60 "></div>
        <div className="hero-content text-center text-neutral-content z-10 relative">
          <div className="max-w-[40vw]">
            <h1 className="mb-5 text-5xl font-bold dark:text-white text-center flex justify-center items-center">
              Step Into The Elegance
            </h1>
            <p className="mb-5 dark:text-white">
              The Ultimate Destination for Luxurious Indian Fashion
            </p>
            <Link href="/saree">
             
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage