import "@/styles/globals.css";
import PageContainer from "@/components/PageContainer";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
// import LoadingBar from "react-top-loading-bar";

export default function App({ Component, pageProps }) {
  // to not display navbar page container component on homepage url/ :  {!isHomePage && ( .......
  const router = useRouter();

  const isHomePage = router.pathname === "/";

  // cart state
  const [cart, setCart] = useState({});
  const [subTotal, setSubTotal] = useState(0);
  const [user, setUser] = useState({ value: null });
  const [key, setKey] = useState();
  // const [progress, setProgress] = useState(0);

  // to get cart from local storage and update it
  useEffect(() => {
    // router.events.on("routeChangeStart", () => {
    //   setProgress(40);
    // });

    // router.events.on("routeChangeComplete", () => {
    //   setProgress(100);
    // });

    try {
      if (localStorage.getItem("cart")) {
        setCart(JSON.parse(localStorage.getItem("cart")));
        saveCart(JSON.parse(localStorage.getItem("cart")));
      }
    } catch (error) {
      console.log(error);
      console.error(error);
      localStorage.clear();
    }

    const token = localStorage.getItem("token");
    if (token) {
      setUser({ value: token });
      setKey(Math.random());
    }
  }, [router.query]);

  // save cart item to local storage
  const saveCart = (myCart) => {
    localStorage.setItem("cart", JSON.stringify(myCart));

    // subtotal calculation
    let subt = 0;
    let keys = Object.keys(myCart);
    for (let i = 0; i < keys.length; i++) {
      subt += myCart[keys[i]].price * myCart[keys[i]].quantity;
      console.log(keys[i].price);
    }
    setSubTotal(subt);
    // console.log(subTotal);
    // console.log(myCart[keys[i].price * myCart[keys[i]].quantity]);
  };

  // add to cart function
  const addtoCart = (itemCode, quantity, price, productName, size, variant) => {
    let newCart = cart;
    if (itemCode in cart) {
      newCart[itemCode].quantity = cart[itemCode].quantity + quantity;
    } else {
      newCart[itemCode] = { quantity: 1, price, productName, size, variant };
    }
    setCart(newCart);
    saveCart(newCart);
    console.log("item added successfully");
  };

  const test = () => {
    console.log("working properly");
  };

  // buynow button working
  const buyNow = (itemCode, quantity, price, productName, size, variant) => {
    let newCart = {
      itemCode: { quantity: 1, price, productName, size, variant },
    };

    setCart(newCart);
    saveCart(newCart);
    saveCart(newCart);
    console.log("item added successfully");

    router.push("/checkout");
  };

  // clear cart items
  const clearCart = () => {
    setCart({});
    saveCart({});
    console.log("cart cleared");
  };

  // remove cart items
  const removefromCart = (
    itemCode,
    quantity,
    price,
    productName,
    size,
    variant
  ) => {
    let newCart = JSON.parse(JSON.stringify(cart));
    if (itemCode in cart) {
      newCart[itemCode].quantity = cart[itemCode].quantity - quantity;
    }
    // if quantity is equal to zero then
    if (newCart[itemCode]["quantity"] <= 0) {
      delete newCart[itemCode];
    }
    setCart(newCart);
    saveCart(newCart);
  };

  const logout = () => {
    localStorage.removeItem("token");
    setUser({ value: null });
    setKey(Math.random());
    router.push("/");
  };

  return (
    <>
      {!isHomePage && (
        // pagecontainer is the navbar component which contains the all the pages component passed as props: component and pageprops
        <>
          {/* <LoadingBar
            color="#fff"
            progress={progress}
            waitingTime={400}
            onLoaderFinished={() => setProgress(0)}
          /> */}
          {key && (
            <div>
              {" "}
              <PageContainer
                buyNow={buyNow}
                Component={Component}
                pageProps={pageProps}
                cart={cart}
                addtoCart={addtoCart}
                removefromCart={removefromCart}
                clearCart={clearCart}
                subTotal={subTotal}
                test={test}
                key={key}
                user={user}
                logout={logout}
              >
                <Component
                  {...pageProps}
                  buyNow={buyNow}
                  cart={cart}
                  addtoCart={addtoCart}
                  removefromCart={removefromCart}
                  clearCart={clearCart}
                  subTotal={subTotal}
                  test={test}
                  key={key}
                  user={user}
                  logout={logout}
                />
              </PageContainer>
            </div>
          )}
        </>
      )}

      {isHomePage && (
        <Component
          {...pageProps}
          buyNow={buyNow}
          cart={cart}
          addtoCart={addtoCart}
          removefromCart={removefromCart}
          clearCart={clearCart}
          subTotal={subTotal}
          test={test}
          key={key}
          user={user}
          logout={logout}
        />
      )}
    </>
  );
}
