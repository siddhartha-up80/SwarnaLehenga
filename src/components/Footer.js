import React from 'react'

import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import CategoryIcon from "@mui/icons-material/Category";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import PersonIcon from "@mui/icons-material/Person";

import HomeIcon from "@mui/icons-material/Home";

import Link from 'next/link';

const Footer = ({ toggleCart }) => {
  return (
    <div>
      <div className="fixed z-50 w-full h-16 max-w-lg -translate-x-1/2 bg-white border bottom-0 left-1/2 dark:bg-rose-700 dark:border-rose-600 lg:hidden z-11">
        <div className="grid h-full max-w-lg grid-cols-5 mx-auto">
          <button
            data-tooltip-target="tooltip-home"
            type="button"
            className="inline-flex flex-col items-center justify-center px-5  hover:bg-rose-50 dark:hover:bg-rose-800 group"
          >
            <Link href="/">
              <HomeIcon className="text-2xl m-4"></HomeIcon>
            </Link>
            <span className="sr-only">Home</span>
          </button>
          <div
            id="tooltip-home"
            role="tooltip"
            className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-rose-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-rose-700"
          >
            Home
            <div className="tooltip-arrow" data-popper-arrow></div>
          </div>
          <button
            data-tooltip-target="tooltip-wallet"
            type="button"
            className="inline-flex flex-col items-center justify-center px-5 hover:bg-rose-50 dark:hover:bg-rose-800 group"
          >
            <Link href="/categories">
              <CategoryIcon className="text-2xl m-4"></CategoryIcon>
            </Link>

            <span className="sr-only">Wallet</span>
          </button>
          <div
            id="tooltip-wallet"
            role="tooltip"
            className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-rose-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-rose-700"
          >
            Wallet
            <div className="tooltip-arrow" data-popper-arrow></div>
          </div>
          <div className="flex items-center justify-center">
            <button
              data-tooltip-target="tooltip-new"
              type="button"
              className="inline-flex items-center justify-center w-12 h-12 font-medium bg-rose-600 rounded-full hover:bg-rose-700 group focus:ring-4 focus:ring-rose-300 focus:outline-none dark:focus:ring-rose-800"
              onClick={toggleCart}
            >
              <ShoppingCartIcon className="text-2xl m-2"></ShoppingCartIcon>
            </button>
          </div>
          <div
            id="tooltip-new"
            role="tooltip"
            className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-rose-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-rose-700"
          >
            Create new item
            <div className="tooltip-arrow" data-popper-arrow></div>
          </div>
          <button
            data-tooltip-target="tooltip-settings"
            type="button"
            className="inline-flex flex-col items-center justify-center px-5 hover:bg-rose-50 dark:hover:bg-rose-800 group"
          >
            <Link href="/favourite">
              <BookmarkIcon className="text-2xl m-4"></BookmarkIcon>
            </Link>

            <span className="sr-only">Settings</span>
          </button>
          <div
            id="tooltip-settings"
            role="tooltip"
            className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-rose-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-rose-700"
          >
            Settings
            <div className="tooltip-arrow" data-popper-arrow></div>
          </div>
          <button
            data-tooltip-target="tooltip-profile"
            type="button"
            className="inline-flex flex-col items-center justify-center px-5 hover:bg-rose-50 dark:hover:bg-rose-800 group"
          >
            <Link href="/profile">
              <PersonIcon className="text-2xl m-4"></PersonIcon>
            </Link>

            <span className="sr-only">Profile</span>
          </button>
          <div
            id="tooltip-profile"
            role="tooltip"
            className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-rose-900 shadow-sm opacity-0 tooltip dark:bg-rose-700"
          >
            Profile
            <div className="tooltip-arrow" data-popper-arrow></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer