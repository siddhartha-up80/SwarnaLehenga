import HomePage from "@/components/HomePage";
import Head from "next/head";
import Product from "@/models/Product";
import mongoose from "mongoose";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import Link from "next/link";

const handleDragStart = (e) => e.preventDefault();

export default function Home({ products }) {

  // console.log(products)
  const items = products.map((product) => (
    <img
      key={product._id} // Make sure each item has a unique key
      src={product.img} // Assuming img property exists in your product model
      alt={product.title} // Assuming title property exists in your product model
      onDragStart={handleDragStart}
      role="presentation"
      className="px-1 md:min-h-[35vh] max-h-[40vh] min-w-full md:max-h-[50vh] object-top object-cover"
    />
  ));

  return (
    <>
      <Head>
        <title>
          Swarna Lehenga - Step Into Elegance with Swarna Lehenga - The Ultimate
          Destination for Luxurious Indian Fashion
        </title>
        <meta
          name="swarnalehenga"
          content="SwarnaLehenga: Step Into Elegance with Swarna Lehenga - The Ultimate Destination for Luxurious Indian Fashion"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="relative -top-12 -z-10">
        <HomePage></HomePage>
      </div>

      {/* section  */}
      <>
        <section className="text-gray-600 body-font">
          <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
            <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
              <img
                className="object-cover object-center rounded"
                alt="ethnic wear"
                src="/section2.jpg"
              />
            </div>
            <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
              <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
                Discover Timeless Elegance
                <br className="hidden lg:inline-block" />
                in Authentic Indian Ethnic Wear
              </h1>
              <p className="mb-8 leading-relaxed">
                Immerse yourself in the rich tapestry of Indian traditions with
                our exquisite collection of ethnic wear. From vibrant sarees and
                regal Anarkali suits to intricately embroidered lehengas, our
                handpicked selection showcases the artistry and cultural
                heritage of India. Each garment tells a story of craftsmanship
                and elegance, perfect for special occasions or adding a touch of
                tradition to your everyday style.
              </p>
              <div className="flex justify-center">
                <Link href="/categories">
                  <button className="inline-flex text-white bg-rose-900 border-0 py-2 px-6 focus:outline-none hover:bg-rose-600 rounded text-lg">
                    Explore Collection
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </>
      {/* section  */}

      {/* carousel  */}

      <>
        <div className=" flex justify-between flex-row items-center mb-5 mx-5">
          <span className="text-xl font-semibold">Top Fashion Deals</span>
          <span>
            <Link href="/categories">
              <button className="btn rounded-sm bg-white hover:bg-rose-900 text-black hover:text-white hover:border-none">
                View All
              </button>
            </Link>
          </span>
        </div>

        <div>
          <AliceCarousel
            mouseTracking
            items={items}
            responsive={{
              0: { items: 1 },
              1024: { items: 8 },
            }}
            autoPlayInterval={2000}
            autoPlayDirection="ltr"
            autoPlay={true}
            fadeOutAnimation={true}
            mouseTrackingEnabled={true}
            disableAutoPlayOnAction={true}
            disableDotsControls
            disableButtonsControls
          />
        </div>
      </>
      {/* carousel  */}

      {/* gallary section */}
      <>
        <section className="text-gray-600 body-font">
          <div className="container px-5 py-24 mx-auto">
            <div className="flex flex-col text-center w-full mb-20">
              <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
                Discover Timeless Elegance with Our Ethnic Enchantments
              </h1>
              <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
                Embrace the allure of our stunning Indian ethnic wear
                collection, where every piece tells a story of grace and
                sophistication. Immerse yourself in the perfect blend of
                tradition and contemporary charm, curated just for you.
              </p>
            </div>

            <div className="flex flex-wrap -m-4">
              {/* Map through the last 6 products and render each one */}
              {products.slice(-6).map((product) => (
                <div key={product._id} className="lg:w-1/3 sm:w-1/2 p-4">
                  <div className="flex relative h-full cursor-pointer">
                    <img
                      alt={product.title}
                      className="absolute inset-0 w-full h-full object-cover object-top"
                      src={product.img}
                    />
                    <div className="px-8 py-10 relative z-10 w-full border-4 border-rose-200 bg-white opacity-0 hover:opacity-100">
                      <h2 className="tracking-widest text-sm title-font font-medium text-rose-500 mb-1">
                        {product.category}
                      </h2>
                      <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                        {product.title}
                      </h1>
                      <p className="leading-relaxed">{product.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </>
      {/* gallary section */}
    </>
  );
}

export async function getServerSideProps(context) {
  if (!mongoose.connections[0].readyState) {
    await mongoose.connect(process.env.MONGO_URI);
  }
  // console.log(process.env.MONGO_URI);
  let products = await Product.find();

  // console.log(products);

  return {
    
    props: { products: JSON.parse(JSON.stringify(products)) },
  };
}
