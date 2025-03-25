import menProducts from "../../assets/men.jpg";
import pamswear from "../../assets/pans.jpg";
import AddRemoveBtn from "../Common/AddRemoveBtn";
import "../../index.css";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import ProductGrid from "./ProductGrid";
import { TbCurrencyNaira } from "react-icons/tb";

const ProductDetails = () => {
  // DECLARE STATES
  const [mainImage, setMainImage] = useState("");
  const [selectedColor, setSelectedColor] = useState("");
  const [selectedSize, setSelectedSize] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [isDisableButton, setIsDisableButton] = useState(false);

  // DECLARE VARIABLES
  // Sample product data (replace with your actual product data)
  const selectProduct = {
    name: "Sheos",
    price: 12000,
    originalPrice: 15000,
    description: "mr kay footwears is the best",
    brand: "Mk Footwears",
    material: "Skin",
    sizes: ["S", "M", "L", "XL"],
    color: ["Red", "Blue", "Black", "White"],
    images: [
      {
        url: pamswear,
        altText: "Pams wear",
      },
      {
        url: menProducts,
        altText: "woman's wear",
      },
    ],
  };

  const similarProducts = [
    {
      _id: 1,
      name: "Product 1",
      price: 15000,
      images: [{ url: menProducts }],
    },
    {
      _id: 2,
      name: "Product 2",
      price: 15000,
      images: [{ url: menProducts }],
    },
    {
      _id: 3,
      name: "Product 3",
      price: 15000,
      images: [{ url: menProducts }],
    },
    {
      _id: 4,
      name: "Product 4",
      price: 15000,
      images: [{ url: menProducts }],
    },
  ];

  // DECLARE FUNCTIONS
  // Function to handle adding the product to the cart
  const handleAddToCart = () => {
    if (!selectedColor || !selectedSize) {
      toast.error("Please select color and size! before adding to cart.", {
        duration: 1000,
      });

      return;
    }
    setIsDisableButton(true);

    setTimeout(() => {
      toast.success("Product added to cart successfully!", { duration: 1000 });
      setIsDisableButton(false);
    }, 5000);
  };

  // DECLARE EFFECTS AND ONMOUNT EVENTLISTENERS
  // Set the main image to the first image of the product when the component mounts
  useEffect(() => {
    if (selectProduct?.images?.length > 0) {
      setMainImage(selectProduct.images[0].url);
    }
  }, []);

  return (
    <div>
      <div className="max-w-6xl mx-auto p-8 rounded">
        <div className="flex flex-col md:flex-row">
          {/* Left Thumbnail */}
          <div className="hidden md:flex flex-col space-y-4 mr-6">
            {selectProduct.images.map((image, index) => (
              <img
                key={index}
                src={image.url}
                alt={image.altText || `Thumbnail ${index}`}
                className={`w-20 h-20 object-cover rounded cursor-pointer ${
                  mainImage === image.url
                    ? "ring-2 ring-sky-500 shadow-2xl"
                    : ""
                }`}
                onClick={() => setMainImage(image.url)}
              />
            ))}
          </div>

          {/* Main Image */}
          <div className="md:w-1/2">
            <div className="mb-4">
              <img
                src={mainImage}
                alt={selectProduct.images[0]?.altText}
                className="w-full h-fit object-cover rounded"
              />
            </div>
          </div>

          {/* Mobile Thumbnail  */}
          <div className="md:hidden flex overscroll-x-scroll space-x-4 mb-4">
            {selectProduct.images.map((image, index) => (
              <img
                key={index}
                src={image.url}
                alt={image.altText || `Thumbnail ${index}`}
                className={`w-20 h-20 object-cover rounded cursor-pointer ${
                  mainImage === image.url
                    ? "ring-2 ring-sky-500 shadow-2xl"
                    : ""
                }`}
                onClick={() => setMainImage(image.url)}
              />
            ))}
          </div>

          {/* Right Side */}
          <div className="md:w-1/2 md:ml-10">
            <h1 className="text-2xl md:text-3xl font-semibold mb-2">
              {selectProduct.name}
            </h1>
            <p className="text-red-700 mb-1 line-through flex items-center">
              <TbCurrencyNaira className="icons" />
              {selectProduct.originalPrice && ` ${selectProduct.originalPrice}`}
            </p>
            <p className="text-xl mb-2 flex items-center">
              <TbCurrencyNaira className="icons" /> {selectProduct.price}
            </p>
            <p className="text-gray-500 mb-4">{selectProduct.description}</p>

            <div className="mb-4">
              <p>Color:</p>
              <div className="flex gap-3 mt-2">
                {selectProduct.color.map((color) => (
                  <button
                    key={color}
                    className={`w-8 h-8 rounded-full cursor-pointer brightness-50 ${
                      selectedColor === color
                        ? "border-6 shadow-2xl border-sky-300 brightness-100 "
                        : ""
                    }`}
                    style={{
                      backgroundColor: color.toLocaleLowerCase(),
                    }}
                    onClick={() => {
                      setSelectedColor(color);
                    }}
                  ></button>
                ))}
              </div>
              <div className="flex gap-4 text-sm">
                {selectProduct.color.map((color) => (
                  <p className="mb-4 flex ">{color}</p>
                ))}
              </div>
            </div>

            <div className="mb-4">
              <p>Size:</p>
              <div className="flex gap-2 mt-2">
                {selectProduct.sizes.map((size) => (
                  <button
                    key={size}
                    className={`hover:shadow-sky-500 cursor-pointer transition-all duration-300 px-4 py-2 shadow-sm rounded ${
                      selectedSize === size ? "bg-sky-500 text-white" : ""
                    }`}
                    onClick={() => {
                      setSelectedSize(size);
                    }}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            <div className="mb-6">
              <p>Quantity:</p>
              <AddRemoveBtn quantity={quantity} />
            </div>

            <button
              onClick={handleAddToCart}
              disabled={isDisableButton}
              className={`w-full  bg-sky-500 text-white py-1.5 rounded transition-all duration-300  hover:shadow-xl hover:scale-105 mb-8 ${
                isDisableButton
                  ? "opacity-50 cursor-progress"
                  : "cursor-pointer"
              }`}
            >
              {isDisableButton ? "Adding..." : "ADD TO CART"}
            </button>

            <div>
              <h3 className="text-xl font-bold mb-4">Characteristics:</h3>
              <table className="w-full text-left text-sm">
                <tbody>
                  <tr>
                    <td className=" pb-2">Brand</td>
                    <td>{selectProduct.brand}</td>
                  </tr>
                  <tr>
                    <td>Material</td>
                    <td>{selectProduct.material}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div className="mt-20">
          <h2 className="text-2xl text-center font-semibold mb-4">
            You May Also Like
          </h2>
          <ProductGrid products={similarProducts} />
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
