import React from "react";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

function ProductCard({
  imageUrl,
  category,
  title,
  description,
  price,
  products,
  addtoCart,
}) {
  const [added, setAdded] = useState(false);

  const addtoCartHandler = () => {
    setAdded(true);

    setTimeout(() => {
      setAdded(false);
    }, 2000);
  };

  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
      <Link href={`/product/${products.slug}`}>
        <div className="block">
          <Image
            height={200}
            width={200}
            src={imageUrl}
            alt="Product"
            className="w-full h-56 object-cover"
          />
        </div>
      </Link>
      <div className="p-4">
        <Link href={`/product/${products.slug}`}>
          <div className="block text-gray-700 font-bold text-xl mb-2">
            {title}
          </div>
        </Link>
        <p className="text-gray-600 text-sm mb-4">{description}</p>
        <div className="flex items-center justify-between">
          <div>
            <span className="text-xl text-gray-900 font-semibold">
              Rs.{price}
            </span>
          </div>
          <div>
            <button
              onClick={() => {
                addtoCartHandler();
                addtoCart(
                  products._id,
                  1,
                  products.price,
                  products.title,
                  products.size,
                  products.color
                );
              }}
              className="bg-rose-500 hover:bg-rose-700 text-white font-bold py-2 px-4 rounded-full"
            >
              <ShoppingBasketIcon />
            </button>
          </div>
        </div>
      </div>
      {added && (
        <div className="bg-green-400 text-white text-center py-2">
          Added to Cart
        </div>
      )}
    </div>
  );
}

export default ProductCard;
