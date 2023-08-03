import HomePage from "@/components/HomePage";
import Head from "next/head";

import Script from "next/script";

export default function Home() {
  return (
    <div data-theme="cupcake">
      <Head>
        <title>
          Swarna Lehenga - Step Into Elegance with Swarna Lehenga - The Ultimate
          Destination for Luxurious Indian Fashion
        </title>
        <meta
          name="description"
          content="Step Into Elegance with Swarna Lehenga - The Ultimate Destination for Luxurious Indian Fashion"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HomePage></HomePage>
      {/* <Script src="https://cdn.jsdelivr.net/npm/tw-elements/dist/js/index.min.js"></Script> */}
      {/* <Script src="../path/to/flowbite/dist/flowbite.min.js"></Script> */}
      {/* <Script src="./TW-ELEMENTS-PATH/dist/js/index.min.js"></Script> */}
    </div>
  );
}
