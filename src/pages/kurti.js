import React from "react";
import Link from "next/link";
import Product from "@/models/Product";
import connectDb from "@/middleware/mongoose";
import mongoose from "mongoose";


const Kurti = ({ products }) => {
  return (
    <div>
<<<<<<< HEAD
      {/* {!products && (
        <div>
          <Loading />
        </div>
      )} */}
      <section className="pt-5 pb-20 mb-20 text-gray-700 dark1:text-white sm:py-16 md:py-10 h-screen">
=======
      <section className="pt-5 pb-20 mb-20 text-gray-700 dark:text-white sm:py-16 md:py-10 h-screen">
>>>>>>> parent of e8cd0b3 (Forced Dark Mode to all pages)
        <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-md text-center">
            <h2 className=" text-2xl font-bold sm:text-3xl">
              Step into the Elegance
            </h2>
          </div>
          <div className="">
            <div className="mt-10 grid grid-cols-2 gap-6 sm:grid-cols-4 sm:gap-4 md:mt-10">
              {Object.keys(products).length === 0 && (
                <div>
                  <p>Currently Out Of Stock. Stay Tuned!</p>
                </div>
              )}
              {Object.keys(products).map((item) => {
                return (
                  <Link
                    key={products[item]._id}
                    href={`/product/${products[item].slug}`}
                    className="relative flex flex-col overflow-hidden rounded-lg border"
                  >
                    <div className="aspect-square overflow-hidden">
                      <img
                        className="h-full w-full object-cover transition-all duration-300 group-hover:scale-125"
                        src={`${products[item].img}=${products[item]._id}`}
                        alt=""
                      />
                    </div>
                    <div className="absolute top-0 m-2 rounded-full bg-white">
                      <p className="rounded-full bg-rose-500 p-1 text-[8px] font-bold uppercase tracking-wide text-white sm:py-1 sm:px-3">
                        Sale
                      </p>
                    </div>
                    <div className="my-4 mx-auto flex w-10/12 flex-col items-start justify-between h-max">
                      <div className="h-[6rem]">
                        <div className="flex font-semibold text-sm">
                          {products[item].title}
                        </div>
                        <h3 className="mb-2 text-sm text-gray-400">
                          {`${products[item].desc.slice(0, 30)}...`}
                        </h3>
                      </div>

                      <div className="mb-2 flex">
                        <del className="text-xs mr-3 text-gray-400">
                          ₹799.00{" "}
                        </del>
                        <p className="mr-3 text-xs font-semibold">
                          ₹{item.price}
                        </p>
                        <p className=" text-xs text-green-500 font-semibold">
                          84% off
                        </p>
                      </div>
                      <div className="sizes mt-1">
                        {products[item].size.includes("S") && (
                          <span className="border  rounded border-pink-300 dark:border-gray-400 px-1 mx-1">
                            S
                          </span>
                        )}
                        {products[item].size.includes("M") && (
                          <span className="border  rounded border-pink-300 dark:border-gray-400 px-1 mx-1">
                            M
                          </span>
                        )}
                        {products[item].size.includes("L") && (
                          <span className="border rounded border-pink-300 dark:border-gray-400 px-1 mx-1">
                            L
                          </span>
                        )}
                        {products[item].size.includes("XL") && (
                          <span className="border rounded border-pink-300 dark:border-gray-400 px-1 mx-1">
                            XL
                          </span>
                        )}
                        {products[item].size.includes("XXL") && (
                          <span className="border rounded border-pink-300 dark:border-gray-400 px-1 mx-1">
                            XXL
                          </span>
                        )}
                      </div>
                    </div>
                    {/* <button className="group mx-auto mb-2 flex h-10 w-10/12 items-stretch overflow-hidden rounded-md text-gray-600">
                <div className="flex w-full items-center justify-center bg-gray-100 text-xs uppercase transition group-hover:bg-rose-600 group-hover:text-white">
                  Add
                </div>
                <div className="flex items-center justify-center bg-gray-200 px-5 transition group-hover:bg-rose-500 group-hover:text-white">
                  +
                </div>
              </button> */}
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export async function getServerSideProps(context) {
  if (!mongoose.connections[0].readyState) {
    await mongoose.connect(process.env.MONGO_URI);
  }
  // console.log(process.env.MONGO_URI);
  let products = await Product.find({ category: "kurti" });
  let kurti = {};
  for (let item of products) {
    if (item.title in kurti) {
      if (
        !kurti[item.title].color.includes(item.color) &&
        item.availableQty > 0
      ) {
        kurti[item.title].color.push(item.color);
      }
      if (
        !kurti[item.title].size.includes(item.size) &&
        item.availableQty > 0
      ) {
        kurti[item.title].size.push(item.size);
      }
    } else {
      kurti[item.title] = JSON.parse(JSON.stringify(item));
      if (item.availableQty > 0) {
        kurti[item.title].color = [item.color];
        kurti[item.title].size = [item.size];
      }
    }
  }

  return {
    props: { products: JSON.parse(JSON.stringify(kurti)) },
  };
}

export default Kurti;
