import React from 'react'
import Link from 'next/link';

const Saree = () => {
  return (
    <div>
      {/* <section className="text-gray-600 body-font dark:text-white">
        <div className=" px-5 py-5 mx-auto">
          <div className="flex flex-wrap justify-center m-4 gap-10 gap-x-20">
            <div className="card w-[20rem] max-h-[26rem] dark:bg-rose-800 glass">
              <figure>
                <img
                  src="https://source.unsplash.com/random/1080×1920/?saree"
                  alt="car!"
                />
              </figure>
              <div className="card-body dark:text-white">
                <h2 className="card-title">Life hack</h2>
                <p>How to park your car at your garage?</p>
                <div className="card-actions justify-end">
                  <button className="btn btn-primary">Learn now!</button>
                </div>
              </div>
            </div>

            <div className="card w-[20rem] max-h-[26rem] glass">
              <figure>
                <img
                  src="https://source.unsplash.com/random/1080×1920/?saree"
                  alt="car!"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">Life hack</h2>
                <p>How to park your car at your garage?</p>
                <div className="card-actions justify-end">
                  <button className="btn btn-primary">Learn now!</button>
                </div>
              </div>
            </div>
            <div className="card w-[20rem] max-h-[26rem] glass">
              <figure>
                <img
                  src="https://source.unsplash.com/random/1080×1920/?saree"
                  alt="car!"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">Life hack</h2>
                <p>How to park your car at your garage?</p>
                <div className="card-actions justify-end">
                  <button className="btn btn-primary bg-rose-700">
                    Learn now!
                  </button>
                </div>
              </div>
            </div>
            <div className="card w-[20rem] max-h-[26rem] glass">
              <figure>
                <img
                  src="https://source.unsplash.com/random/1080×1920/?saree"
                  alt="car!"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">Life hack</h2>
                <p>How to park your car at your garage?</p>
                <div className="card-actions justify-end">
                  <button className="btn btn-primary">Learn now!</button>
                </div>
              </div>
            </div>
            <div className="card w-[20rem] max-h-[26rem] glass">
              <figure>
                <img
                  src="https://source.unsplash.com/random/1080×1920/?saree"
                  alt="car!"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">Life hack</h2>
                <p>How to park your car at your garage?</p>
                <div className="card-actions justify-end">
                  <button className="btn btn-primary">Learn now!</button>
                </div>
              </div>
            </div>
            <div className="card w-[20rem] max-h-[26rem] glass">
              <figure>
                <img
                  src="https://source.unsplash.com/random/1080×1920/?saree"
                  alt="car!"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">Life hack</h2>
                <p>How to park your car at your garage?</p>
                <div className="card-actions justify-end">
                  <button className="btn btn-primary">Learn now!</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      <section class="bg-white pt-5 pb-12 text-gray-700 sm:py-16 lg:py-20">
        <div class="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
          <div class="mx-auto max-w-md text-center">
            <h2 class="font-serif text-2xl font-bold sm:text-3xl">
              Step into the Elegance
            </h2>
          </div>

          <div class="mt-10 grid grid-cols-2 gap-6 sm:grid-cols-4 sm:gap-4 lg:mt-16">
            <article class="relative flex flex-col overflow-hidden rounded-lg border">
              <div class="aspect-square overflow-hidden">
                <img
                  class="h-full w-full object-cover transition-all duration-300 group-hover:scale-125"
                  src="https://source.unsplash.com/random/1080×1920/?saree"
                  alt=""
                />
              </div>
              <div class="absolute top-0 m-2 rounded-full bg-white">
                <p class="rounded-full bg-rose-500 p-1 text-[8px] font-bold uppercase tracking-wide text-white sm:py-1 sm:px-3">
                  Sale
                </p>
              </div>
              <div class="my-4 mx-auto flex w-10/12 flex-col items-start justify-between">
                <div class="mb-2 flex">
                  <p class="mr-3 text-sm font-semibold">$99.00</p>
                  <del class="text-xs text-gray-400"> $79.00 </del>
                </div>
                <h3 class="mb-2 text-sm text-gray-400">Fresh Apples</h3>
              </div>
              <button class="group mx-auto mb-2 flex h-10 w-10/12 items-stretch overflow-hidden rounded-md text-gray-600">
                <div class="flex w-full items-center justify-center bg-gray-100 text-xs uppercase transition group-hover:bg-rose-600 group-hover:text-white">
                  Add
                </div>
                <div class="flex items-center justify-center bg-gray-200 px-5 transition group-hover:bg-rose-500 group-hover:text-white">
                  +
                </div>
              </button>
            </article>

            <article class="relative flex flex-col overflow-hidden rounded-lg border">
              <div class="aspect-square overflow-hidden">
                <img
                  class="h-full w-full object-cover transition-all duration-300 group-hover:scale-125"
                  src="https://source.unsplash.com/random/1080×1920/?saree"
                  alt=""
                />
              </div>
              <div class="absolute top-0 m-2 rounded-full bg-white">
                <p class="rounded-full bg-rose-500 p-1 text-[8px] font-bold uppercase tracking-wide text-white sm:py-1 sm:px-3">
                  Sale
                </p>
              </div>
              <div class="my-4 mx-auto flex w-10/12 flex-col items-start justify-between">
                <div class="mb-2 flex">
                  <p class="mr-3 text-sm font-semibold">$99.00</p>
                  <del class="text-xs text-gray-400"> $79.00 </del>
                </div>
                <h3 class="mb-2 text-sm text-gray-400">Fresh Apples</h3>
              </div>
              <button class="group mx-auto mb-2 flex h-10 w-10/12 items-stretch overflow-hidden rounded-md text-gray-600">
                <div class="flex w-full items-center justify-center bg-gray-100 text-xs uppercase transition group-hover:bg-rose-600 group-hover:text-white">
                  Add
                </div>
                <div class="flex items-center justify-center bg-gray-200 px-5 transition group-hover:bg-rose-500 group-hover:text-white">
                  +
                </div>
              </button>
            </article>

            <article class="relative flex flex-col overflow-hidden rounded-lg border">
              <div class="aspect-square overflow-hidden">
                <img
                  class="h-full w-full object-cover transition-all duration-300 group-hover:scale-125"
                  src="https://source.unsplash.com/random/1080×1920/?saree"
                  alt=""
                />
              </div>

              <div class="my-4 mx-auto flex w-10/12 flex-col items-start justify-between">
                <div class="mb-2 flex">
                  <p class="mr-3 text-sm font-semibold">$99.00</p>
                  <del class="text-xs text-gray-400"> $79.00 </del>
                </div>
                <h3 class="mb-2 text-sm text-gray-400">Fresh Apples</h3>
              </div>
              <button class="group mx-auto mb-2 flex h-10 w-10/12 items-stretch overflow-hidden rounded-md text-gray-600">
                <div class="flex w-full items-center justify-center bg-gray-100 text-xs uppercase transition group-hover:bg-rose-600 group-hover:text-white">
                  Add
                </div>
                <div class="flex items-center justify-center bg-gray-200 px-5 transition group-hover:bg-rose-500 group-hover:text-white">
                  +
                </div>
              </button>
            </article>

            <article class="relative flex flex-col overflow-hidden rounded-lg border">
              <div class="aspect-square overflow-hidden">
                <img
                  class="h-full w-full object-cover transition-all duration-300 group-hover:scale-125"
                  src="https://source.unsplash.com/random/1080×1920/?saree"
                  alt=""
                />
              </div>

              <div class="my-4 mx-auto flex w-10/12 flex-col items-start justify-between">
                <div class="mb-2 flex">
                  <p class="mr-3 text-sm font-semibold">$99.00</p>
                  <del class="text-xs text-gray-400"> $79.00 </del>
                </div>
                <h3 class="mb-2 text-sm text-gray-400">Fresh Apples</h3>
              </div>
              <button class="group mx-auto mb-2 flex h-10 w-10/12 items-stretch overflow-hidden rounded-md text-gray-600">
                <div class="flex w-full items-center justify-center bg-gray-100 text-xs uppercase transition group-hover:bg-rose-600 group-hover:text-white">
                  Add
                </div>
                <div class="flex items-center justify-center bg-gray-200 px-5 transition group-hover:bg-rose-500 group-hover:text-white">
                  +
                </div>
              </button>
            </article>

            <article class="relative flex flex-col overflow-hidden rounded-lg border">
              <div class="aspect-square overflow-hidden">
                <img
                  class="h-full w-full object-cover transition-all duration-300 group-hover:scale-125"
                  src="https://source.unsplash.com/random/1080×1920/?saree"
                  alt=""
                />
              </div>

              <div class="my-4 mx-auto flex w-10/12 flex-col items-start justify-between">
                <div class="mb-2 flex">
                  <p class="mr-3 text-sm font-semibold">$99.00</p>
                  <del class="text-xs text-gray-400"> $79.00 </del>
                </div>
                <h3 class="mb-2 text-sm text-gray-400">Fresh Apples</h3>
              </div>
              <button class="group mx-auto mb-2 flex h-10 w-10/12 items-stretch overflow-hidden rounded-md text-gray-600">
                <div class="flex w-full items-center justify-center bg-gray-100 text-xs uppercase transition group-hover:bg-rose-600 group-hover:text-white">
                  Add
                </div>
                <div class="flex items-center justify-center bg-gray-200 px-5 transition group-hover:bg-rose-500 group-hover:text-white">
                  +
                </div>
              </button>
            </article>

            <article class="relative flex flex-col overflow-hidden rounded-lg border">
              <div class="aspect-square overflow-hidden">
                <img
                  class="h-full w-full object-cover transition-all duration-300 group-hover:scale-125"
                  src="https://source.unsplash.com/random/1080×1920/?saree"
                  alt=""
                />
              </div>

              <div class="my-4 mx-auto flex w-10/12 flex-col items-start justify-between">
                <div class="mb-2 flex">
                  <p class="mr-3 text-sm font-semibold">$99.00</p>
                  <del class="text-xs text-gray-400"> $79.00 </del>
                </div>
                <h3 class="mb-2 text-sm text-gray-400">Fresh Apples</h3>
              </div>
              <button class="group mx-auto mb-2 flex h-10 w-10/12 items-stretch overflow-hidden rounded-md text-gray-600">
                <div class="flex w-full items-center justify-center bg-gray-100 text-xs uppercase transition group-hover:bg-rose-600 group-hover:text-white">
                  Add
                </div>
                <div class="flex items-center justify-center bg-gray-200 px-5 transition group-hover:bg-rose-500 group-hover:text-white">
                  +
                </div>
              </button>
            </article>

            <article class="relative flex flex-col overflow-hidden rounded-lg border">
              <div class="aspect-square overflow-hidden">
                <img
                  class="h-full w-full object-cover transition-all duration-300 group-hover:scale-125"
                  src="https://source.unsplash.com/random/1080×1920/?saree"
                />
              </div>

              <div class="my-4 mx-auto flex w-10/12 flex-col items-start justify-between">
                <div class="mb-2 flex">
                  <p class="mr-3 text-sm font-semibold">$99.00</p>
                  <del class="text-xs text-gray-400"> $79.00 </del>
                </div>
                <h3 class="mb-2 text-sm text-gray-400">Fresh Apples</h3>
              </div>
              <button class="group mx-auto mb-2 flex h-10 w-10/12 items-stretch overflow-hidden rounded-md text-gray-600">
                <div class="flex w-full items-center justify-center bg-gray-100 text-xs uppercase transition group-hover:bg-rose-600 group-hover:text-white">
                  Add
                </div>
                <div class="flex items-center justify-center bg-gray-200 px-5 transition group-hover:bg-rose-500 group-hover:text-white">
                  +
                </div>
              </button>
            </article>

            <article class="relative flex flex-col overflow-hidden rounded-lg border">
              <div class="aspect-square overflow-hidden">
                <img
                  class="h-full w-full object-cover transition-all duration-300 group-hover:scale-125"
                  src="https://source.unsplash.com/random/1080×1920/?saree"
                  alt=""
                />
              </div>
              <div class="absolute top-0 m-2 rounded-full bg-white">
                <p class="rounded-full bg-rose-500 p-1 text-[8px] font-bold uppercase tracking-wide text-white sm:py-1 sm:px-3">
                  Sale
                </p>
              </div>
              <div class="my-4 mx-auto flex w-10/12 flex-col items-start justify-between">
                <div class="mb-2 flex">
                  <p class="mr-3 text-sm font-semibold">$99.00</p>
                  <del class="text-xs text-gray-400"> $79.00 </del>
                </div>
                <h3 class="mb-2 text-sm text-gray-400">Fresh Apples</h3>
              </div>
              <button class="group mx-auto mb-2 flex h-10 w-10/12 items-stretch overflow-hidden rounded-md text-gray-600">
                <div class="flex w-full items-center justify-center bg-gray-100 text-xs uppercase transition group-hover:bg-rose-600 group-hover:text-white">
                  Add
                </div>
                <div class="flex items-center justify-center bg-gray-200 px-5 transition group-hover:bg-rose-500 group-hover:text-white">
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

export default Saree