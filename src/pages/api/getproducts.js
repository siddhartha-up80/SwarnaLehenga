import Product from "@/models/Product";
import connectDb from "@/middleware/mongoose";

// to tell whether the size and color is present or not 
const handler = async (req, res) => {
  let products = await Product.find();
  let saree = {};
  for (let item of products) {
    if (item.title in saree) {

                if (!saree[item.title].color.includes(item.color) && item.availableQty > 0) {
                        saree[item.title].color.push(item.color)
                } 
                if (!saree[item.title].size.includes(item.size) && item.availableQty > 0) {
                        saree[item.title].size.push(item.size)
                }
                        
    } else {
      saree[item.title] = JSON.parse(JSON.stringify(item));
      if (item.availableQty > 0) {
        saree[item.title].color = [item.color];
        saree[item.title].size = [item.size];
      }
    }
  }
  res.status(200).json({ saree });
};

export default connectDb(handler);
