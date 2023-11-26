import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";

const Orders = () => {
  const router = useRouter();
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      router.push("/login"); // Redirect to login if token is not available
      return;
    }

    const email = token.split(",")[1];

    // Fetch orders using the email from localStorage
    fetch(`/api/orders/${email}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          setOrders(data.orders);
        } else {
          console.error(data.error);
        }
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  // console.log(orders)

  return (
    <div className="container mx-auto h-screen md:py-14 pt-5 pb-20 px-8 md:px-14">
      {/* orders table */}
      <div>
        <h1 className="text-3xl  lg:text-4xl font-semibold leading-7 lg:leading-9 text-rose-800">
          My Orders
        </h1>
      </div>
      <div className="overflow-x-auto mt-10">
        <table className="w-full text-center border-collapse border border-gray-200 mt-5">
          <thead>
            <tr>
              <th className="px-4 py-2 bg-rose-700 text-white">Product Name</th>
              <th className="px-4 py-2 bg-rose-700 text-white">Quantity</th>
              {/* Add additional headers as needed */}
            </tr>
          </thead>
          <tbody>
            {orders.map((order, orderIndex) => (
              <React.Fragment key={orderIndex}>
                {order.products.map((product, productIndex) => (
                  <tr
                    key={`${orderIndex}-${productIndex}`}
                    className={
                      (orderIndex + productIndex) % 2 === 0 ? "bg-gray-100" : ""
                    }
                  >
                    <td className="px-4 py-2">{product.productId}</td>
                    <td className="px-4 py-2">{product.quantity}</td>
                    {/* Add additional cells for other product properties */}
                  </tr>
                ))}
              </React.Fragment>
            ))}
          </tbody>
        </table>

        {/* <span className="mt-3 flex">
          <span>Total: {" "}</span>
          <span className="font-semibold ml-1">{" "} Rs.{orders[0].amount}</span>
        </span> */}
      </div>
      {/* orders table */}
    </div>
  );
};

export default Orders;
