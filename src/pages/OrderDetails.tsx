import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import topeImage from "../assets/topwear.jpg";

interface OrderDetails {
  _id: string | undefined;
  createdAt: Date;
  isPaid: boolean;
  isDelivered: boolean;
  paymentMethod: string;
  shippingMethos: string;
  shippingAddress: {
    city: string;
    country: string;
  };
  orderItems: {
    productId: string;
    name: string;
    price: number;
    quantity: number;
    image: string;
  }[];
}

const OrderDetails = () => {
  const { id } = useParams();
  const [orderDetails, setOrderDetails] = useState<OrderDetails | null>(null);

  useEffect(() => {
    const mockOrderDetails = {
      _id: id,
      createdAt: new Date(),
      isPaid: true,
      isDelivered: false,
      paymentMethod: "PayPal",
      shippingMethos: "Standard",
      shippingAddress: { city: "New York", country: "USA" },
      orderItems: [
        {
          productId: "1",
          name: "Product 1",
          price: 12000,
          quantity: 2,
          image: topeImage,
        },
        {
          productId: "2",
          name: "Product 2",
          price: 15000,
          quantity: 2,
          image: topeImage,
        },
      ],
    };
    setOrderDetails(mockOrderDetails);
  }, [id]);

  return (
    <div className="max-w-7xl mx-auto p-4 sm:p-6">
      <h2 className="text-2xl md:text-3xl font-bold mb-6">Order Details</h2>
      {!orderDetails ? (
        <p>No Order details found</p>
      ) : (
        <div className="p-4 sm:p-6 rounded-xl border border-gray-300">
          <div className="flex flex-col sm:flex-row justify-between mb-8">
            <div>
              <h3 className="text-lg md:text-xl font-semibold">
                Order ID: #{orderDetails._id}
              </h3>
              <p className="text-gray-500">
                {new Date(orderDetails.createdAt).toLocaleString()}
              </p>
            </div>

            <div className="flex flex-col items-start sm:items-end mt-4 sm:mt-0">
              <span
                className={`${
                  orderDetails.isPaid
                    ? "bg-green-100 text-green-700"
                    : "bg-red-100 text-red-700"
                } px-3 py-1 rounded-full text-sm font-medium mb-2`}
              >
                {orderDetails.isPaid ? "Approved" : "Pending"}
              </span>
              <span
                className={`${
                  orderDetails.isDelivered
                    ? "bg-green-100 text-green-700"
                    : "bg-orange-100 text-orange-600"
                } px-3 py-1 rounded-full text-sm font-medium mb-2`}
              >
                {orderDetails.isDelivered ? "Delivered" : "Pending"}
              </span>
            </div>
          </div>

          {/* Customer Payment Shipping Info  */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mb-8">
            <div>
              <h4 className="text-lg  mb-4">Payment Info</h4>
              <p>
                Payment Method:{"   "}
                <span className="text-sky-800">
                  {orderDetails.paymentMethod}
                </span>
              </p>
              <p>
                Status:{" "}
                <span className="text-sky-800">
                  {orderDetails.isPaid ? "Paid" : "Unpaid"}
                </span>
              </p>
            </div>
            <div>
              <h4 className="text-lg  mb-4">Shipping Info</h4>
              <p>
                Shipping Method:{"   "}
                <span className="text-sky-800">
                  {orderDetails.shippingMethos}
                </span>
              </p>
              <p>
                Address:{" "}
                <span className="text-sky-800">
                  {`${orderDetails.shippingAddress.city}, ${orderDetails.shippingAddress.country}`}
                </span>
              </p>
            </div>
          </div>

          <div className="overflow-x-auto">
            <h4 className="text-lg font-semibold mb-4">Products</h4>
            <table className="min-w-full text-gray-600 mb-4  text-left ">
              <thead className="bg-gray-100">
                <tr>
                  <th className="py-2 px-4 ">Name</th>
                  <th className="py-2 px-4">Unit Price</th>
                  <th className="py-2 px-4">Quantity</th>
                  <th className="py-2 px-4">Total</th>
                </tr>
              </thead>

              <tbody>
                {orderDetails.orderItems.map((item) => (
                  <tr className="border-b border-gray-300  ">
                    <td className="py-2 px-4  flex items-center">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-12 h-12 object-cover rounded mr-4"
                      />
                      <Link
                        to={`/product/${item.productId}`}
                        className="nav_link"
                      >
                        {item.name}
                      </Link>
                    </td>
                    <td className="py-2 px-4">{item.price}</td>
                    <td className="py-2 px-4">{item.quantity}</td>
                    <td className="py-2 px-4">{item.price * item.quantity}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Back to Orders Link  */}

          <Link to="/my-order" className="nav_link">
            Back to My Orders
          </Link>
        </div>
      )}
    </div>
  );
};

export default OrderDetails;
