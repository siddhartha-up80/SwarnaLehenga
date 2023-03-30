import React from 'react'
import Link from 'next/link';
const HomePage = () => {
  return (
    <div className="dark:text-white">
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
            <Link href="/lehenga">
              <button className="btn bg-rose-800 hover:bg-red-900 dark:text-white">
                Get Started
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage