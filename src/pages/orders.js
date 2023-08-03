import React, { useEffect } from 'react'
import mongoose from "mongoose";
// import Product from "@/models/Product";
import Order from '@/models/Order';
import { useRouter } from "next/router";



const Orders = () => {

  const router = useRouter();

  useEffect(() => {
    if (!localStorage.getItem("token")) {
      router.push("/saree");
    }
  }, []);

    const tableData = [
      { name: "Product A", quantity: 10, color: "Blue", size: "Medium" },
      { name: "Product B", quantity: 5, color: "Green", size: "Small" },
      { name: "Product C", quantity: 20, color: "Red", size: "Large" },
      { name: "Product D", quantity: 8, color: "Yellow", size: "Small" },
    ];


  return (
    <div className="container mx-auto h-screen md:py-14 pt-5 pb-20 px-8 md:px-14 ">
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
              <th className="px-4 py-2 bg-rose-700 text-white">Name</th>
              <th className="px-4 py-2 bg-rose-700 text-white">Quantity</th>
              <th className="px-4 py-2 bg-rose-700 text-white">Color</th>
              <th className="px-4 py-2 bg-rose-700 text-white">Size</th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((item, index) => (
              <tr key={index} className={index % 2 === 0 ? "bg-gray-100" : ""}>
                <td className="px-4 py-2">{item.name}</td>
                <td className="px-4 py-2">{item.quantity}</td>
                <td className="px-4 py-2">{item.color}</td>
                <td className="px-4 py-2">{item.size}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {/* orders table */}
    </div>
  );
}

// export async function getServerSideProps(context) {
//   if (!mongoose.connections[0].readyState) {
//     await mongoose.connect(
//       "mongodb+srv://rebel:7017614925@cluster0.ihexdsa.mongodb.net/?retryWrites=true&w=majority"
//     );
//   }

//   // console.log(process.env.MONGO_URI);
//   let orders = await Order.find({ });
  

 

//   return {
//     props: {
//      orders : orders,
//     },
//   };
// }



export default Orders