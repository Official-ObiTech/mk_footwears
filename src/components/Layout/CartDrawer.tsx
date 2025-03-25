import { HiXMark } from "react-icons/hi2";
import CartContents from "../Cart/CartContents";
import { useNavigate } from "react-router-dom";

interface cartProps {
  cartDrawer: boolean;
  setCartDrawer: React.Dispatch<React.SetStateAction<boolean>>;
}

const CartDrawer: React.FC<cartProps> = ({ cartDrawer, setCartDrawer }) => {
  const navigate = useNavigate();

  const handleCheckout = () => {
    navigate("/checkout");
    setCartDrawer(false);
  };

  return (
    <div
      className={`fixed top-0 right-0 md:w-3/4  h-full bg-white shadow transform transition-transform duration-500 flex flex-col z-50 ${
        cartDrawer ? "translate-x-0" : "translate-x-full"
      }`}
    >
      {/* Close button  */}
      <div className="flex justify-end p-4 ">
        <button
          className="icons cursor-pointer"
          onClick={() => setCartDrawer(false)}
        >
          <HiXMark />
        </button>
      </div>

      {/* Cart content with scrollable are  */}
      <div className="flex-grow p-4 overflow-y-scroll">
        <h2 className="text-xl font-semibold mb-4">Your Cart</h2>
        <CartContents />
      </div>

      <div className="sticky bottom-0 p-4">
        <button
          onClick={handleCheckout}
          className="w-full rounded hover:bg-sky-900 transition bg-secondary text-secondary py-1"
        >
          Checkout
        </button>
        <p className="text-sm mt-2 tracking-tighter text-center">
          Shipping, Taxes, and Discount codes calculated at checkout
        </p>
      </div>
    </div>
  );
};

export default CartDrawer;
