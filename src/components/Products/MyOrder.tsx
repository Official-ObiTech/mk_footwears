import { useEffect, useState } from "react";
import productImage from "../../assets/topwear.jpg";
import { useNavigate } from "react-router-dom";

const MyOrder = () => {
  const [orders, setOrders] = useState([]);
  const navigate = useNavigate();

  const handleRowClick = (orderId: string) => {
    navigate(`/order/${orderId}`);
  };

  useEffect(() => {
    setTimeout(() => {
      // Simulate fetchin order
      const mockOrder = [
        {
          _id: "12344",
          createdAt: new Date(),
          shippingAddress: {
            city: "Abuja",
            country: "Nigeria",
          },
          orderItems: [{ name: "product 1", image: productImage }],
          totalPrice: 150000,
          isPaid: true,
        },
        {
          _id: "13564",
          createdAt: new Date(),
          shippingAddress: {
            city: "Abuja",
            country: "Nigeria",
          },
          orderItems: [{ name: "product 2", image: productImage }],
          totalPrice: 150000,
          isPaid: false,
        },
      ];

      setOrders(mockOrder);
    }, 1000);
  }, []);
  return (
    <div className="max-w-7xl mx-auto p-4 sm:p-6">
      <h2 className="text-xl sm:text-2xl font-bold mb-6">My Orders</h2>
      <div className="relative shadow-sm sm:rounded overflow-hidden">
        <table className="min-w-full text-left ">
          <thead className="bg-sky-950/10 text-xs uppercase ">
            <tr>
              <th className="py-2 px-4 sm:py-3">Image</th>
              <th className="py-2 px-4 sm:py-3">Order ID</th>
              <th className="py-2 px-4 sm:py-3">Shipping Address</th>
              <th className="py-2 px-4 sm:py-3">Items</th>
              <th className="py-2 px-4 sm:py-3">Price</th>
              <th className="py-2 px-4 sm:py-3">Status</th>
            </tr>
          </thead>
          <tbody>
            {orders.length > 0 ? (
              orders.map((order) => (
                <tr
                  key={order._id}
                  onClick={() => handleRowClick(order._id)}
                  className="border-b border-gray-200 cursor-pointer"
                >
                  <td className="p-2 sm:p-4">
                    <img
                      src={order.orderItems[0].image}
                      alt={order.orderItems[0].name}
                      className="w-12 h-12 sm:w-12 sm:h-12 object-cover rounded"
                    />
                  </td>
                  <td className="p-2 sm:p-4">
                    {new Date(order.createdAt).toLocaleDateString()}
                    {"  "}
                    {new Date(order.createdAt).toLocaleTimeString()}
                  </td>
                  <td className="p-2 sm:p-4">
                    {order.shippingAddress
                      ? `${order.shippingAddress.city}, ${order.shippingAddress.country}`
                      : "N/A"}
                  </td>
                  <td className="p-2 sm:p-4">{order.orderItems.length}</td>
                  <td className="p-2 sm:p-4">{order.totalPrice}</td>
                  <td className="p-2 sm:p-4">
                    <span
                      className={`${
                        order.isPaid ? "bg-green-300 " : "bg-orange-200"
                      } , px-4 py-1 rounded`}
                    >
                      {order.isPaid ? "Paid" : "Pending"}
                    </span>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={7} className="p-4 text-center text-gray-500">
                  You have no order{" "}
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyOrder;
