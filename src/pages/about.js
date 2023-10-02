import React from "react";
import Head from "next/head";

const About = () => {
  return (
    <div className="min-h-screen">
      <Head>
        <title>About Swarna Lehenga</title>
        <meta
          name="description"
          content="Swarnalehenga: Learn more about Swarna Lehenga - The Ultimate Destination for Luxurious Indian Fashion"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="bg-rose-900">
        <header className=" py-4 mt-10">
          <div className="container mx-auto text-white text-center">
            <h1 className="text-3xl font-semibold">About Swarna Lehenga</h1>
            <p className="mt-2">Step Into Elegance with Swarna Lehenga</p>
          </div>
        </header>

        <main className="container mx-auto py-8">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold mb-4">
              Welcome to Swarna Lehenga
            </h2>
            <p className="text-gray-700">
              Swarna Lehenga is your ultimate destination for luxurious Indian
              fashion. We offer a wide range of elegant Lehengas that will make
              you look and feel like a queen on any special occasion.
            </p>
            <p className="text-gray-700 mt-4">
              Our commitment to quality and craftsmanship ensures that each
              piece is a work of art. With Swarna Lehenga, you can step into
              elegance and embrace the beauty of Indian tradition.
            </p>
            <div className="mt-8">
              <h3 className="text-xl font-semibold">Personal Project</h3>
              <p className="text-gray-700 mt-2">
                Swarna Lehenga was founded by Siddhartha Singh, a visionary in
                the world of fashion. With a passion for creating exquisite
                Indian attire, Siddhartha has brought the beauty of Swarna
                Lehenga to life.
              </p>
            </div>
            <div className="mt-8">
              <h3 className="text-xl font-semibold">Visit Our Website</h3>
              <p className="text-gray-700 mt-2">
                Explore our collection and discover the perfect Ethnic Wear for your
                special occasion. Visit our website at{" "}
                <a
                  href="https://inators.netlify.app"
                  className="text-rose-600 hover:underline"
                  target="_blank"
                  rel="noreferrer"
                >
                  https://swarnalehenga.vercel.app
                </a>{" "}
                to start your journey into elegance.
              </p>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default About;
