import Product from "@/models/Product";
import connectDb from "@/middleware/mongoose";

const handler = async (req, res) => {
  if (req.method == "POST") {
    const data = await req.formData();
    const file = data.get("file");

    let image = "";

    if (file) {
      const byteData = await file.arrayBuffer();
      const buffer = Buffer.from(byteData);
      const path = `public/productimages/${file.name}`;

      image = file.name;
      await writeFile(path, buffer);
    }

    for (let i = 0; i < req.body.length; i++) {
      let p = new Product({
        title: req.body[i].title,
        slug: req.body[i].slug,
        desc: req.body[i].desc,
        img: req.body[i].img || `/productimages/${image}`,
        category: req.body[i].category,
        size: req.body[i].size,
        color: req.body[i].color,
        price: req.body[i].price,
        availableQty: req.body[i].availableQty,
      });

      await p.save();
    }
    res.status(200).json([{ sucess: "success" }]);
  } else {
    res.status(404).json({ error: "this method is not allowed" });
  }
};

export default connectDb(handler);
