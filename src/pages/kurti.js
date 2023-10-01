import React from "react";
import Link from "next/link";
import Product from "@/models/Product";
import connectDb from "@/middleware/mongoose";
import mongoose from "mongoose";
import ProductCard from "@/components/ProductCard";

const Kurti = ({ products, addtoCart }) => {
  return (
    <div>
      <section className="pt-5 pb-20 mb-20 text-gray-700 dark1:text-white sm:py-16 md:py-10">
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
                  <>
                    <div
                      key={products[item]._id}
                      className="relative flex flex-col  "
                    >
                      {/* test */}
                      <ProductCard
                        imageUrl={`${products[item].img}=${products[item]._id}`}
                        title={products[item].title}
                        products={products[item]}
                        description={`${products[item].desc.slice(0, 50)} ...`}
                        price={products[item].price}
                        addtoCart={addtoCart}
                      />
                      {/* test */}
                    </div>
                  </>
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
