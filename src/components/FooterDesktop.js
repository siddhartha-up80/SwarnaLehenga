import React from "react";

const FooterDesktop = () => {
  return (
    <div>
      <footer className="relative mt-10 bg-rose-900 px-4 pt-10 font-bold text-sm hidden md:block">
        <div className="absolute -top-6 left-1/2 h-12 w-12 -translate-x-1/2 border-4 border-rose-700 bg-white">
          <img
            className="h-full w-full bg-cover bg-center object-cover"
            src="https://images.unsplash.com/photo-1551726824-bbeab11db685?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80"
            alt=""
          />
        </div>
        <nav
          aria-label="Footer Navigation"
          className="mx-auto mb-5 flex max-w-lg justify-center flex-col gap-10 text-center sm:flex-row sm:text-left"
        >
          <a href="/about" className="font-medium text-white">
            About
          </a>
          <a
            href="https://github.com/siddhartha-up80"
            className="font-medium text-white"
            target="_blank"
          >
            Github
          </a>
          <a
            href="https://inators.netlify.app"
            target="_blank"
            className="font-medium text-white"
          >
            Portfolio
          </a>
        </nav>
        <p className="pb-5 text-center text-gray-300">
          © 2022 SwarnaLehenga | All Rights Reserved
        </p>
      </footer>
    </div>
  );
};

export default FooterDesktop;
