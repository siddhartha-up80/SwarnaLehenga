import React from "react";
import Link from "next/link";
import Product from "@/models/Product";
import connectDb from "@/middleware/mongoose";
import mongoose from "mongoose";

const Categories = ({ categoryData }) => {
  return (
    <div className="min-h-screen">
      {/* image section */}
      <img
        className="object-cover object-right-bottom md:object-center rounded w-screen md:h-[80vh]"
        alt="ethnic wear"
        src="/design.png"
      />
      {/* image section */}

      <span className="absolute top-[45vh] text-white text-4xl uppercase font-light left-5 hidden">
        Categories
      </span>

      {/* categories section */}
      <section className="text-rose-600 body-font bg- mb-14">
        <div className="text-center my-8 leading-relaxed">
          <h2 className="text-3xl sm:text-4xl font-medium leading-relaxed text-gray-900">
            Explore Our Diverse Categories
          </h2>
          <p className="mt-2 text-base text-gray-600">
            Find the perfect style that resonates with your essence.
          </p>
        </div>

        <div className="px-5 py-5 mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {categoryData.map((category, index) => (
              <Link href={`/${category.name}`} key={category.name}>
                <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                  <div className="relative">
                    <img
                      src={category.lastProduct.img}
                      alt={category.name}
                      className="w-full object-cover h-96 md:h-80 lg:h-96"
                    />
                  </div>
                  <div className="p-4">
                    <div className="block text-gray-700 font-bold text-xl mb-2 uppercase">
                      {category.name}
                    </div>
                    <p className="text-gray-600 text-sm mb-4">
                      Step Into The Elegance
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export async function getServerSideProps(context) {
  if (!mongoose.connections[0].readyState) {
    await mongoose.connect(
      "mongodb+srv://rebel:7017614925@cluster0.ihexdsa.mongodb.net/?retryWrites=true&w=majority"
    );
  }

  let categories = await Product.distinct("category");

  // Fetch the last product for each category
   const categoryData = await Promise.all(
     categories.map(async (category) => {
       const lastProduct = await Product.findOne({ category }).sort({
         _id: -1,
       });

       // Extract only necessary information from lastProduct
       const simplifiedLastProduct = {
         title: lastProduct.title,
         img: lastProduct.img,
         // Add other necessary fields...
       };

       return { name: category, lastProduct: simplifiedLastProduct };
     })
   );

  return {
    props: { categoryData },
  };
}

export default Categories;
