import { useState } from "react";
import allImages from "../../assets/shoeoffice.jpg";

const EditProduct = () => {
  const [productData, setProductData] = useState({
    name: "",
    description: "",
    price: 0,
    countInStock: 0,
    sku: "",
    category: "",
    brand: "",
    sizes: [],
    colors: [],
    collections: "",
    material: "",
    gender: "",
    images: [
      {
        url: allImages,
      },
      {
        url: allImages,
      },
    ],
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProductData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleImageload = async (e) => {
    const file = await e.target.files[0];

    console.log("Uploaded file", file);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(productData);
  };

  return (
    <div className="max-w-5xl mx-auto p-6 shadow rounded overflow-y-auto">
      <h2 className="text-3xl font-bold mb-6">Edit Product</h2>
      <form onSubmit={handleSubmit}>
        {/* Name  */}
        <div className="mb-6">
          <label htmlFor="" className="block font-semibold mb-2">
            Product Name
          </label>
          <input
            type="text"
            name="name"
            value={productData.name}
            onChange={handleChange}
            className="input outline outline-gray-300  focus:border-r-2 rounded-tr rounded-br"
            required
          />
        </div>

        {/* Description  */}
        <div className="mb-6">
          <label htmlFor="" className="block font-semibold mb-2">
            Description
          </label>
          <textarea
            name="description"
            value={productData.description}
            onChange={handleChange}
            className="input outline outline-gray-300  focus:border-r-2 rounded-tr rounded-br"
            rows={4}
            required
          />
        </div>

        {/* Price  */}
        <div className="mb-6">
          <label htmlFor="" className="block font-semibold mb-2">
            Price
          </label>
          <input
            type="number"
            name="price"
            value={productData.price}
            onChange={handleChange}
            className="input outline outline-gray-300  focus:border-r-2 rounded-tr rounded-br"
          />
        </div>

        {/* Count in Stock  */}
        <div className="mb-6">
          <label htmlFor="" className="block font-semibold mb-2">
            Count in Stock
          </label>
          <input
            type="number"
            name="countInStock"
            value={productData.countInStock}
            onChange={handleChange}
            className="input outline outline-gray-300  focus:border-r-2 rounded-tr rounded-br"
          />
        </div>

        {/* SKU  */}
        <div className="mb-6">
          <label htmlFor="" className="block font-semibold mb-2">
            SKU
          </label>
          <input
            type="text"
            name="sku"
            value={productData.sku}
            onChange={handleChange}
            className="input outline outline-gray-300  focus:border-r-2 rounded-tr rounded-br"
          />
        </div>

        {/* Sizes  */}
        <div className="mb-6">
          <label htmlFor="" className="block font-semibold mb-2">
            Sizes ( comma separated)
          </label>
          <input
            type="text"
            name="sizes"
            value={productData.sizes.join(",  ")}
            onChange={(e) =>
              setProductData({
                ...productData,
                sizes: e.target.value.split(",").map((size) => size.trim()),
              })
            }
            className="input outline outline-gray-300  focus:border-r-2 rounded-tr rounded-br"
          />
        </div>

        {/* Colors  */}
        <div className="mb-6">
          <label htmlFor="" className="block font-semibold mb-2">
            Colors ( comma separated)
          </label>
          <input
            type="text"
            name="colors"
            value={productData.colors.join(",  ")}
            onChange={(e) =>
              setProductData({
                ...productData,
                colors: e.target.value.split(",").map((color) => color.trim()),
              })
            }
            className="input outline outline-gray-300  focus:border-r-2 rounded-tr rounded-br"
          />
        </div>

        {/* Imae Upload  */}
        <div className="mb-6">
          <label htmlFor="" className="block font-semibold mb-2">
            Image Upload
          </label>
          <input
            type="file"
            onChange={handleImageload}
            className="input outline outline-gray-300  focus:border-r-2 rounded-tr rounded-br"
          />
          <div className="flex gap-4 mt-4">
            {productData.images.map((image, index) => (
              <div key={index}>
                <img
                  src={image.url}
                  alt={image.altText || "Product Text"}
                  className="w-30 h-24 object-cover rounded shadow"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Button  */}
        <button
          type="submit"
          className="w-full  mt-8 bg-sky-500 hover:bg-sky-600 text-white py-2 px-4 rounded"
        >
          Update Product
        </button>
      </form>
    </div>
  );
};

export default EditProduct;
