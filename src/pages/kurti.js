import React from 'react'
import Link from 'next/link';

const Kurti = () => {
  return (
    <div>
      <section className="bg-white pt-5 pb-12 text-gray-700 sm:py-16 md:py-10">
        <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-md text-center">
            <h2 className=" text-2xl font-bold sm:text-3xl">
              Step into the Elegance
            </h2>
          </div>

          <div className="mt-10 grid grid-cols-2 gap-6 sm:grid-cols-4 sm:gap-4 md:mt-10">
            <article className="relative flex flex-col overflow-hidden rounded-lg border">
              <div className="aspect-square overflow-hidden">
                <img
                  className="h-full w-full object-cover transition-all duration-300 group-hover:scale-125"
                  src="https://source.unsplash.com/random/?ethnic=1"
                  alt=""
                />
              </div>
              <div className="absolute top-0 m-2 rounded-full bg-white">
                <p className="rounded-full bg-rose-500 p-1 text-[8px] font-bold uppercase tracking-wide text-white sm:py-1 sm:px-3">
                  Sale
                </p>
              </div>
              <div className="my-4 mx-auto flex w-10/12 flex-col items-start justify-between">
                <div className="mb-2 flex">
                  <p className="mr-3 text-sm font-semibold">$99.00</p>
                  <del className="text-xs text-gray-400"> $79.00 </del>
                </div>
                <h3 className="mb-2 text-sm text-gray-400">Latest Trending</h3>
              </div>
              <button className="group mx-auto mb-2 flex h-10 w-10/12 items-stretch overflow-hidden rounded-md text-gray-600">
                <div className="flex w-full items-center justify-center bg-gray-100 text-xs uppercase transition group-hover:bg-rose-600 group-hover:text-white">
                  Add
                </div>
                <div className="flex items-center justify-center bg-gray-200 px-5 transition group-hover:bg-rose-500 group-hover:text-white">
                  +
                </div>
              </button>
            </article>

            <article className="relative flex flex-col overflow-hidden rounded-lg border">
              <div className="aspect-square overflow-hidden">
                <img
                  className="h-full w-full object-cover transition-all duration-300 group-hover:scale-125"
                  src="https://source.unsplash.com/random/?ethnic=2"
                  alt=""
                />
              </div>
              <div className="absolute top-0 m-2 rounded-full bg-white">
                <p className="rounded-full bg-rose-500 p-1 text-[8px] font-bold uppercase tracking-wide text-white sm:py-1 sm:px-3">
                  Sale
                </p>
              </div>
              <div className="my-4 mx-auto flex w-10/12 flex-col items-start justify-between">
                <div className="mb-2 flex">
                  <p className="mr-3 text-sm font-semibold">$99.00</p>
                  <del className="text-xs text-gray-400"> $79.00 </del>
                </div>
                <h3 className="mb-2 text-sm text-gray-400">Latest Trending</h3>
              </div>
              <button className="group mx-auto mb-2 flex h-10 w-10/12 items-stretch overflow-hidden rounded-md text-gray-600">
                <div className="flex w-full items-center justify-center bg-gray-100 text-xs uppercase transition group-hover:bg-rose-600 group-hover:text-white">
                  Add
                </div>
                <div className="flex items-center justify-center bg-gray-200 px-5 transition group-hover:bg-rose-500 group-hover:text-white">
                  +
                </div>
              </button>
            </article>

            <article className="relative flex flex-col overflow-hidden rounded-lg border">
              <div className="aspect-square overflow-hidden">
                <img
                  className="h-full w-full object-cover transition-all duration-300 group-hover:scale-125"
                  src="https://source.unsplash.com/random/?ethnic=3"
                  alt=""
                />
              </div>

              <div className="my-4 mx-auto flex w-10/12 flex-col items-start justify-between">
                <div className="mb-2 flex">
                  <p className="mr-3 text-sm font-semibold">$99.00</p>
                  <del className="text-xs text-gray-400"> $79.00 </del>
                </div>
                <h3 className="mb-2 text-sm text-gray-400">Latest Trending</h3>
              </div>
              <button className="group mx-auto mb-2 flex h-10 w-10/12 items-stretch overflow-hidden rounded-md text-gray-600">
                <div className="flex w-full items-center justify-center bg-gray-100 text-xs uppercase transition group-hover:bg-rose-600 group-hover:text-white">
                  Add
                </div>
                <div className="flex items-center justify-center bg-gray-200 px-5 transition group-hover:bg-rose-500 group-hover:text-white">
                  +
                </div>
              </button>
            </article>

            <article className="relative flex flex-col overflow-hidden rounded-lg border">
              <div className="aspect-square overflow-hidden">
                <img
                  className="h-full w-full object-cover transition-all duration-300 group-hover:scale-125"
                  src="https://source.unsplash.com/random/?ethnic=4"
                  alt=""
                />
              </div>

              <div className="my-4 mx-auto flex w-10/12 flex-col items-start justify-between">
                <div className="mb-2 flex">
                  <p className="mr-3 text-sm font-semibold">$99.00</p>
                  <del className="text-xs text-gray-400"> $79.00 </del>
                </div>
                <h3 className="mb-2 text-sm text-gray-400">Latest Trending</h3>
              </div>
              <button className="group mx-auto mb-2 flex h-10 w-10/12 items-stretch overflow-hidden rounded-md text-gray-600">
                <div className="flex w-full items-center justify-center bg-gray-100 text-xs uppercase transition group-hover:bg-rose-600 group-hover:text-white">
                  Add
                </div>
                <div className="flex items-center justify-center bg-gray-200 px-5 transition group-hover:bg-rose-500 group-hover:text-white">
                  +
                </div>
              </button>
            </article>

            <article className="relative flex flex-col overflow-hidden rounded-lg border">
              <div className="aspect-square overflow-hidden">
                <img
                  className="h-full w-full object-cover transition-all duration-300 group-hover:scale-125"
                  src="https://source.unsplash.com/random/?ethnic=5"
                  alt=""
                />
              </div>

              <div className="my-4 mx-auto flex w-10/12 flex-col items-start justify-between">
                <div className="mb-2 flex">
                  <p className="mr-3 text-sm font-semibold">$99.00</p>
                  <del className="text-xs text-gray-400"> $79.00 </del>
                </div>
                <h3 className="mb-2 text-sm text-gray-400">Latest Trending</h3>
              </div>
              <button className="group mx-auto mb-2 flex h-10 w-10/12 items-stretch overflow-hidden rounded-md text-gray-600">
                <div className="flex w-full items-center justify-center bg-gray-100 text-xs uppercase transition group-hover:bg-rose-600 group-hover:text-white">
                  Add
                </div>
                <div className="flex items-center justify-center bg-gray-200 px-5 transition group-hover:bg-rose-500 group-hover:text-white">
                  +
                </div>
              </button>
            </article>

            <article className="relative flex flex-col overflow-hidden rounded-lg border">
              <div className="aspect-square overflow-hidden">
                <img
                  className="h-full w-full object-cover transition-all duration-300 group-hover:scale-125"
                  src="https://source.unsplash.com/random/?ethnic=6"
                  alt=""
                />
              </div>

              <div className="my-4 mx-auto flex w-10/12 flex-col items-start justify-between">
                <div className="mb-2 flex">
                  <p className="mr-3 text-sm font-semibold">$99.00</p>
                  <del className="text-xs text-gray-400"> $79.00 </del>
                </div>
                <h3 className="mb-2 text-sm text-gray-400">Latest Trending</h3>
              </div>
              <button className="group mx-auto mb-2 flex h-10 w-10/12 items-stretch overflow-hidden rounded-md text-gray-600">
                <div className="flex w-full items-center justify-center bg-gray-100 text-xs uppercase transition group-hover:bg-rose-600 group-hover:text-white">
                  Add
                </div>
                <div className="flex items-center justify-center bg-gray-200 px-5 transition group-hover:bg-rose-500 group-hover:text-white">
                  +
                </div>
              </button>
            </article>

            <article className="relative flex flex-col overflow-hidden rounded-lg border">
              <div className="aspect-square overflow-hidden">
                <img
                  className="h-full w-full object-cover transition-all duration-300 group-hover:scale-125"
                  src="https://source.unsplash.com/random/?ethnic=7"
                />
              </div>

              <div className="my-4 mx-auto flex w-10/12 flex-col items-start justify-between">
                <div className="mb-2 flex">
                  <p className="mr-3 text-sm font-semibold">$99.00</p>
                  <del className="text-xs text-gray-400"> $79.00 </del>
                </div>
                <h3 className="mb-2 text-sm text-gray-400">Latest Trending</h3>
              </div>
              <button className="group mx-auto mb-2 flex h-10 w-10/12 items-stretch overflow-hidden rounded-md text-gray-600">
                <div className="flex w-full items-center justify-center bg-gray-100 text-xs uppercase transition group-hover:bg-rose-600 group-hover:text-white">
                  Add
                </div>
                <div className="flex items-center justify-center bg-gray-200 px-5 transition group-hover:bg-rose-500 group-hover:text-white">
                  +
                </div>
              </button>
            </article>

            <article className="relative flex flex-col overflow-hidden rounded-lg border">
              <div className="aspect-square overflow-hidden">
                <img
                  className="h-full w-full object-cover transition-all duration-300 group-hover:scale-125"
                  src="https://source.unsplash.com/random/?ethnic=8"
                  alt=""
                />
              </div>
              <div className="absolute top-0 m-2 rounded-full bg-white">
                <p className="rounded-full bg-rose-500 p-1 text-[8px] font-bold uppercase tracking-wide text-white sm:py-1 sm:px-3">
                  Sale
                </p>
              </div>
              <div className="my-4 mx-auto flex w-10/12 flex-col items-start justify-between">
                <div className="mb-2 flex">
                  <p className="mr-3 text-sm font-semibold">$99.00</p>
                  <del className="text-xs text-gray-400"> $79.00 </del>
                </div>
                <h3 className="mb-2 text-sm text-gray-400">Latest Trending</h3>
              </div>
              <button className="group mx-auto mb-2 flex h-10 w-10/12 items-stretch overflow-hidden rounded-md text-gray-600">
                <div className="flex w-full items-center justify-center bg-gray-100 text-xs uppercase transition group-hover:bg-rose-600 group-hover:text-white">
                  Add
                </div>
                <div className="flex items-center justify-center bg-gray-200 px-5 transition group-hover:bg-rose-500 group-hover:text-white">
                  +
                </div>
              </button>
            </article>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Kurti