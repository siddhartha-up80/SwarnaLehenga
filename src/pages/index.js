import HomePage from "@/components/HomePage";
import Head from "next/head";
import Product from "@/models/Product";
import mongoose from "mongoose";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

const handleDragStart = (e) => e.preventDefault();

export default function Home({ products }) {

  const items = products.map((product) => (
    <img
      key={product._id} // Make sure each item has a unique key
      src={product.img} // Assuming img property exists in your product model
      alt={product.title} // Assuming title property exists in your product model
      onDragStart={handleDragStart}
      role="presentation"
      className="px-1 min-h-[35vh]"
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

      {/* carousel  */}

      <>
        <div className=" flex justify-between flex-row items-center mb-5 mx-5">
          <span className="text-xl font-semibold">Top Fashion Deals</span>
          <span>
            <button className="btn rounded-sm bg-white hover:bg-rose-900 text-black hover:text-white hover:border-none">
              View All
            </button>
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

      

      <></>
    </>
  );
}

export async function getServerSideProps(context) {
  if (!mongoose.connections[0].readyState) {
    await mongoose.connect(
      "mongodb+srv://rebel:7017614925@cluster0.ihexdsa.mongodb.net/?retryWrites=true&w=majority"
    );
  }
  // console.log(process.env.MONGO_URI);
  let products = await Product.find();

  // console.log(products);

  return {
    // props: { products: JSON.parse(JSON.stringify(saree)) },
    // props: { products: JSON.parse(products) },
    props: { products: JSON.parse(JSON.stringify(products)) },
  };
}
