import Product from "@/models/Product";
import React from "react";
import mongoose from "mongoose";
import Order from "@/models/Order";
import User from "@/models/User";

const Allorders = ({
  products,
  categoryData,
  orders,
  users,
  totalAmount,
  saree,
  kurti,
  lehenga,
}) => {

console.log('====================================');
console.log(orders);
console.log('====================================');
  return (
    <>
      <div className="flex justify-center items-center h-screen p-5">
        <div className="overflow-x-auto">
          <div className="overflow-x-auto ">
            <span className="text-xl text-center mb-2 flex justify-center">
              All Orders
            </span>
            <table className="table">
              {/* head */}
              <thead>
                <tr>
                  <th></th>
                  <th>Email</th>
                  <th>Address</th>
                  <th>Products</th>
                  <th>Amount</th>
                </tr>
              </thead>
              <tbody>

               
                
                {
                  orders.map((item, index)=>{
                      return (
                        <tr>
                          <th>{index+1}</th>
                          <td>{item?.email}</td>
                          <td>{item?.address}</td>
                          <td>{item?.products.length}</td>
                          <td>Rs. {item?.amount}</td>
                        </tr>
                      );
                  })
                }
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export async function getServerSideProps(context) {
  if (!mongoose.connections[0].readyState) {
    await mongoose.connect(
      "mongodb+srv://rebel:7017614925@cluster0.ihexdsa.mongodb.net/?retryWrites=true&w=majority"
    );
  }

  let categories = await Product.distinct("category");

  // Fetch the last product for each category
  const categoryData = await Promise.all(
    categories.map(async (category) => {
      const lastProduct = await Product.findOne({ category }).sort({
        _id: -1,
      });

      // Extract only necessary information from lastProduct
      const simplifiedLastProduct = {
        title: lastProduct.title,
        img: lastProduct.img,
        // Add other necessary fields...
      };

      return { name: category, lastProduct: simplifiedLastProduct };
    })
  );

  let products = await Product.find();

  let saree = await Product.find({ category: "saree" });
  let kurti = await Product.find({ category: "kurti" });
  let lehenga = await Product.find({ category: "lehenga" });

  let orders = await Order.find();

  let users = await User.find();

  let totalAmount = 0;
  orders.forEach((order) => {
    totalAmount += order.amount;
  });

  return {
    props: {
      categoryData,
      products: JSON.parse(JSON.stringify(products)),
      orders: JSON.parse(JSON.stringify(orders)),
      users: JSON.parse(JSON.stringify(users)),
      totalAmount: totalAmount,
      saree: JSON.parse(JSON.stringify(saree)),
      kurti: JSON.parse(JSON.stringify(kurti)),
      lehenga: JSON.parse(JSON.stringify(lehenga)),
    },
  };
}

export default Allorders;
