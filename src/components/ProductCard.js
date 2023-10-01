import React from "react";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import { useState } from "react";
import Link from "next/link";

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
    <div className="wsk-cp-product ">
      <Link href={`/product/${products.slug}`} className="wsk-cp-img">
        <img src={imageUrl} alt="Product" className="img-responsive" />
      </Link>
      <div className="wsk-cp-text">
        {/* <div className="category">
          <span>{category}</span>
        </div> */}
        <Link href={`/product/${products.slug}`}>
          <div className="sizes flex justify-center items-center mt-5">
            {products.size.includes("S") && (
              <span className="border  rounded border-pink-300 px-1 mx-1">
                S
              </span>
            )}
            {products.size.includes("M") && (
              <span className="border  rounded border-pink-300 px-1 mx-1">
                M
              </span>
            )}
            {products.size.includes("L") && (
              <span className="border rounded border-pink-300 px-1 mx-1">
                L
              </span>
            )}
            {products.size.includes("XL") && (
              <span className="border rounded border-pink-300 px-1 mx-1">
                XL
              </span>
            )}
            {products.size.includes("XXL") && (
              <span className="border rounded border-pink-300 px-1 mx-1">
                XXL
              </span>
            )}
          </div>
        </Link>
        <div className="title-product">
          <h3>{title}</h3>
        </div>
        <div className="description-prod">
          <p>{description}</p>
        </div>
        <div className="card-footer">
          <div className="wcf-left">
            <span className="price">Rs.{price}</span>
          </div>
          <div className="wcf-right">
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
              className="buy-btn"
            >
              <ShoppingBasketIcon />
            </button>
          </div>
        </div>
      </div>
      <span className="flex justify-end">
        {added && <span className="added">Added to Cart</span>}
      </span>
    </div>
  );
}

export default ProductCard;
