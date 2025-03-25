import { RiDeleteBin3Line } from "react-icons/ri";
import AddRemoveBtn from "../Common/AddRemoveBtn";

interface productProps {
  productId: number;
  name: string;
  size: string;
  color: string;
  quantity: number;
  price: number;
  image: string;
}

const CartContents: React.FC = () => {
  const cartProduct: productProps[] = [
    {
      productId: 1,
      name: "Leg",
      size: "L",
      color: "Red",
      quantity: 2,
      price: 15000,
      image: "../src/assets/react.svg",
    },
    {
      productId: 2,
      name: "Leg",
      size: "L",
      color: "Red",
      quantity: 2,
      price: 15000,
      image: "../src/assets/react.svg",
    },
    {
      productId: 3,
      name: "Leg",
      size: "L",
      color: "Red",
      quantity: 2,
      price: 15000,
      image: "../src/assets/react.svg",
    },
    {
      productId: 4,
      name: "Leg",
      size: "L",
      color: "Red",
      quantity: 2,
      price: 15000,
      image: "../src/assets/react.svg",
    },
    {
      productId: 5,
      name: "Leg",
      size: "L",
      color: "Red",
      quantity: 2,
      price: 15000,
      image: "../src/assets/react.svg",
    },
    {
      productId: 6,
      name: "Leg",
      size: "L",
      color: "Red",
      quantity: 2,
      price: 15000,
      image: "../src/assets/react.svg",
    },
  ];
  return (
    <div>
      {cartProduct.map((product, index) => (
        <div
          key={index}
          className="flex items-start justify-between py-4 border-b border-gray-300"
        >
          <div className="flex items-start">
            <img
              src={product.image}
              alt={product.name}
              className="w-20 h-20 object-cover mr-4 rounded"
            />
          </div>
          <div>
            <h3>{product.name}</h3>
            <p className="text-sm text-gray-500">
              Size: {product.size} | Color: {product.color}
            </p>

            <AddRemoveBtn quantity={product.quantity} />
          </div>

          <div className="text-right">
            <p># {product.price.toLocaleString()}</p>
            <button className="icons text-red-300 hover:text-red-500 cursor-pointer mt-8 ">
              <RiDeleteBin3Line />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CartContents;
