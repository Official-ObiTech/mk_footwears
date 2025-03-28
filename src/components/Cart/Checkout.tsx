import { useNavigate } from "react-router-dom";
import cartImage from "../../assets/topwear.jpg";
import { useState } from "react";
import PaypalButton from "./PaypalButton";
import { TbCurrencyNaira } from "react-icons/tb";

interface ShippingAddress {
  firstName: string;
  lastName: string;
  address: string;
  city: string;
  postalCode: string;
  country: string;
  phone: string;
}

const Checkout = () => {
  // DECLARE USE STATE
  const navigate = useNavigate();
  const [checkoutId, setCheckoutId] = useState<number | null>(null);
  const [shippingAddress, setShippingAddress] = useState<ShippingAddress>({
    firstName: "",
    lastName: "",
    address: "",
    city: "",
    postalCode: "",
    country: "",
    phone: "",
  });

  // DECLARE VARIBLES
  const cart = {
    products: [
      {
        name: "Shoes",
        size: "M",
        color: "Black",
        price: 120,
        image: cartImage,
      },
      {
        name: "Pams",
        size: "L",
        color: "White",
        price: 1600,
        image: cartImage,
      },
    ],

    totalPrice: 1800,
  };

  //DECLARE FUNCTIONS
  const handleCreateCheckout = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setCheckoutId(904);
    navigate("/order-confirmation");
  };

  const handlePaymentSuccess = (details: any) => {
    console.log("Payment Success", details);
    navigate("/order-confirmation");
  };

  return (
    <div className="grid grid-cols-1  lg:grid-cols-2 gap-8 mx-w-7xl mx-auto py-10 px-6 tracking-tighter">
      <div className="rounded p-6">
        <h2 className="text-2xl uppercase mb-6">Checkout</h2>
        <form onSubmit={handleCreateCheckout}>
          <h3 className="text-lg mb-4"> Contact Details</h3>
          <div className="mb-4">
            <label className="block">Email</label>
            <input
              type="email"
              className="input focus:border-r-2 rounded-tr rounded-br outline-gray-300 outline"
              value="mrkay@gmail.com"
            />
          </div>
          <h3 className="text-lg mb-4"> Delivery</h3>
          <div className="mb-4 grid grid-cols-2 gap-4">
            <div>
              <label className="block">First Name</label>
              <input
                type="text"
                className="input focus:border-r-2 rounded-tr rounded-br outline-gray-300 outline"
                value={shippingAddress.firstName}
                onChange={(e) =>
                  setShippingAddress({
                    ...shippingAddress,
                    firstName: e.target.value,
                  })
                }
              />
            </div>
            <div>
              <label className="block">Last Name</label>
              <input
                type="text"
                className="input focus:border-r-2 rounded-tr rounded-br outline-gray-300 outline"
                value={shippingAddress.lastName}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setShippingAddress({
                    ...shippingAddress,
                    lastName: e.target.value,
                  })
                }
              />
            </div>
          </div>
          <div className="mb-4">
            <label className="block">Address </label>
            <input
              type="text"
              className="input focus:border-r-2 rounded-tr rounded-br outline-gray-300 outline"
              value={shippingAddress.address}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setShippingAddress({
                  ...shippingAddress,
                  address: e.target.value,
                })
              }
              required
            />
          </div>

          <div className="mb-4 grid grid-cols-2 gap-4">
            <div>
              <label className="block">City</label>
              <input
                type="text"
                className="input focus:border-r-2 rounded-tr rounded-br outline-gray-300 outline"
                value={shippingAddress.city}
                onChange={(e) =>
                  setShippingAddress({
                    ...shippingAddress,
                    city: e.target.value,
                  })
                }
              />
            </div>
            <div>
              <label className="block">Postal Code</label>
              <input
                type="text"
                className="input focus:border-r-2 rounded-tr rounded-br outline-gray-300 outline"
                value={shippingAddress.postalCode}
                onChange={(e) =>
                  setShippingAddress({
                    ...shippingAddress,
                    postalCode: e.target.value,
                  })
                }
              />
            </div>
          </div>

          <div className="mb-4">
            <label className="block">Country </label>
            <input
              type="text"
              className="input focus:border-r-2 rounded-tr rounded-br outline-gray-300 outline"
              value={shippingAddress.country}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setShippingAddress({
                  ...shippingAddress,
                  country: e.target.value,
                })
              }
              required
            />
          </div>

          <div className="mb-4">
            <label className="block">Phone Number </label>
            <input
              type="tel"
              className="input focus:border-r-2 rounded-tr rounded-br outline-gray-300 outline"
              value={shippingAddress.phone}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setShippingAddress({
                  ...shippingAddress,
                  phone: e.target.value,
                })
              }
              required
            />
          </div>

          <div className="mt-6 ">
            {!checkoutId ? (
              <button
                type="submit"
                className="w-full  bg-sky-500 text-white py-1.5 rounded transition-all duration-300  hover:shadow-xl hover:scale-105 mb-8"
              >
                Continue to Payment
              </button>
            ) : (
              <div>
                <h3 className="text-lg mb-4">Pay with Paypal</h3>
                <PaypalButton
                  amount={(100).toString()}
                  onSuccess={handlePaymentSuccess}
                  onError={(_e) => alert("Payment failed. Try again")}
                />
              </div>
            )}
          </div>
        </form>
      </div>

      {/* Right Sections */}
      <div className="p-8 rounded-xl bg-sky-950/5">
        <h3 className="text-lg mb-4">Order Summary</h3>
        <div className="border-t border-gray-300 py-4 mb-4">
          {cart.products.map((product, index) => (
            <div
              key={index}
              className="flex items-start justify-between py-2 border-b border-gray-300"
            >
              <div className="flex items-start">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-20 h-24 object-cover mr-4"
                />
                <div>
                  <h3 className="text-md">{product.name}</h3>
                  <p className="text-gray-500">Size: {product.size}</p>
                  <p className="text-gray-500">Color: {product.color}</p>
                </div>
              </div>
              <p className="text-xl flex items-center">
                {" "}
                <TbCurrencyNaira className="icons" />{" "}
                {product.price?.toLocaleString()}
              </p>
            </div>
          ))}
        </div>

        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg">Subtotal</h3>
          <p className="text-xl flex items-center">
            {" "}
            <TbCurrencyNaira className="icons" />{" "}
            {cart.totalPrice?.toLocaleString()}
          </p>
        </div>

        <div className="flex justify-between text-lg items-center mb-4">
          <p>Shipping</p>
          <p>Free</p>
        </div>

        <div className="flex justify-between text-lg items-center mt-4 border-t border-gray-300 pt-4">
          <p>Total</p>
          <p className="text-xl flex items-center">
            {" "}
            <TbCurrencyNaira className="icons" />{" "}
            {cart.totalPrice?.toLocaleString()}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
