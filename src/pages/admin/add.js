import React from 'react'

const Add = () => {
const [file, setFile] = React.useState();

const [formData, setFormData] = React.useState({
  title: "",
  slug: "",
  desc: "",
  img: "",
  category: "",
  size: "",
  color: "",
  price: "",
  availableQty: "",
  filename: "",
});

const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const data = new FormData();

    if (file) {
      data.append("file", file);
    }

    for (const key in formData) {
      data.append(key, formData[key]);
    }

    const response = await fetch("/api/addproducts", {
      method: "POST",
      body: data,
    });

    if (response.status === 201) {
      console.log("Form submitted successfully!");
    } else {
      console.error("Form submission failed.");
    }
  } catch (error) {
    console.error("Error submitting the form:", error);
  }
};

const handleInputChange = (e) => {
  const { name, value } = e.target;
  setFormData({
    ...formData,
    [name]: value,
  });
};


  return (
    <div className="flex justify-center items-center h-full">
      <section className="p-6 bg-gray-50 text-gray-900 m-5 shadow-md">
        <form
          novalidate=""
          onSubmit={handleSubmit}
          className="container flex flex-col mx-auto space-y-12"
          encType="multipart/form-data"
        >
          <fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm bg-gray-50">
            <div className="space-y-2 col-span-full lg:col-span-1">
              <p className="font-medium">Add Products</p>
              <p className="text-xs">
                Add all the products by filling form and add an image or link
              </p>
            </div>
            <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
              <div className="col-span-full sm:col-span-3">
                <label for="firstname" className="text-sm">
                  Product Title
                </label>
                <input
                  id="title"
                  type="text"
                  placeholder=""
                  value={formData.title}
                  onChange={handleInputChange}
                  name="title"
                  className="w-full rounded-md focus:ring focus:ri focus:ri border-gray-300 text-gray-900"
                />
              </div>
              <div className="col-span-full sm:col-span-3">
                <label for="lastname" className="text-sm">
                  Product Price
                </label>
                <input
                  id="price"
                  type="number"
                  placeholder=""
                  value={formData.price}
                  onChange={handleInputChange}
                  name="price"
                  className="w-full rounded-md focus:ring focus:ri focus:ri border-gray-300 text-gray-900"
                />
              </div>
              <div className="col-span-full sm:col-span-3">
                <label for="email" className="text-sm">
                  Category
                </label>
                <input
                  id="category"
                  type="text"
                  placeholder=""
                  value={formData.category}
                  onChange={handleInputChange}
                  name="category"
                  className="w-full rounded-md focus:ring focus:ri focus:ri border-gray-300 text-gray-900"
                />
              </div>
              <div className="col-span-full">
                <label for="address" className="text-sm">
                  Description
                </label>
                <input
                  id="description"
                  type="text"
                  placeholder=""
                  value={formData.desc}
                  onChange={handleInputChange}
                  name="desc"
                  className="w-full rounded-md focus:ring focus:ri focus:ri border-gray-300 text-gray-900"
                />
              </div>
              <div className="col-span-full sm:col-span-2">
                <label for="size" className="text-sm">
                  Size
                </label>
                <input
                  id="size"
                  type="text"
                  placeholder=""
                  value={formData.size}
                  onChange={handleInputChange}
                  name="size"
                  className="w-full rounded-md focus:ring focus:ri focus:ri border-gray-300 text-gray-900"
                />
              </div>
              <div className="col-span-full sm:col-span-2">
                <label for="color" className="text-sm">
                  Color
                </label>
                <input
                  id="color"
                  type="text"
                  placeholder=""
                  value={formData.color}
                  onChange={handleInputChange}
                  name="color"
                  className="w-full rounded-md focus:ring focus:ri focus:ri border-gray-300 text-gray-900"
                />
              </div>
              <div className="col-span-full sm:col-span-2">
                <label for="zip" className="text-sm">
                  Available Quantity
                </label>
                <input
                  id="quantity"
                  type="number"
                  placeholder=""
                  value={formData.availableQty}
                  onChange={handleInputChange}
                  name="availableQty"
                  className="w-full rounded-md focus:ring focus:ri focus:ri border-gray-300 text-gray-900"
                />
              </div>
            </div>
          </fieldset>
          <fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm bg-gray-50">
            <div className="space-y-2 col-span-full lg:col-span-1">
              <p className="font-medium">Add Product Image</p>
              <p className="text-xs">Upload Image or Add URL</p>
            </div>
            <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
              <div className="col-span-full sm:col-span-3">
                <label for="website" className="text-sm">
                  Image URL
                </label>
                <input
                  id="imageurl"
                  type="text"
                  placeholder="https://"
                  value={formData.img}
                  onChange={handleInputChange}
                  name="img"
                  className="w-full rounded-md focus:ring focus:ri focus:ri border-gray-300 text-gray-900"
                />
              </div>

              <div className="col-span-full">
                <label for="bio" className="text-sm">
                  Product Image
                </label>
                <div className=" flex items-center justify-start gap-2">
                  <div className="flex items-center justify-start gap-2">
                    <img
                      src="https://source.unsplash.com/30x30/?random"
                      alt=""
                      className="w-10 h-10 rounded-full bg-gray-500 bg-gray-300"
                    />
                    <input
                      id="imagefile"
                      type="file"
                      accept="image/*"
                      onChange={(e) => setFile(e.target.files[0])}
                      className="w-full rounded-md focus:ring focus:ri focus:ri border-gray-300 text-gray-900"
                    />
                    <button
                      type="submit"
                      className="px-4 py-2 border rounded-md border-gray-800 justify-start flex"
                    >
                      Submit
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </fieldset>
        </form>
      </section>
    </div>
  );
}

export default Add