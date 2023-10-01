import React from "react";
import Link from "next/link";
import Product from "@/models/Product";
import connectDb from "@/middleware/mongoose";
import mongoose from "mongoose";

const Categories = ({ categories }) => {
  return (
    <div className="min-h-screen">
      <section className="text-gray-600 body-font bg- mb-14">
        <div className="px-5 py-5 mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {categories.map((category) => (
              <Link href={`/${category}`} key={category}>
                <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                  <div className="relative">
                    <img
                      src={`https://source.unsplash.com/random/1080x1920/?${category}`}
                      alt={category}
                      className="w-full object-cover h-96 md:h-80 lg:h-96"
                    />
                  </div>
                  <div className="p-4">
                    <div className="block text-gray-700 font-bold text-xl mb-2">
                      {category}
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

  let categories = await Product.distinct("category"); // Fetch unique categories

  return {
    props: { categories },
  };
}

export default Categories;
