interface Orders {
  _id: number;
  user: {
    name: string;
  };
  totalPrice: number;
  status: string;
}
[];
const OrderManagement = () => {
  const orders: Orders[] = [
    {
      _id: 1235765,
      user: {
        name: "Mr Kay",
      },
      totalPrice: 15000,
      status: "Processing",
    },
  ];

  const handleStatusChange = (orderId: number, status: string) => {
    console.log({ id: orderId, status });
  };

  return (
    <div className="max-w-7xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-6">Order Management</h2>

      <div className="overflow-x-auto shadow-sm sm:rounded-xl">
        <table className="min-w-full text-left text-gray-500">
          <thead className="text-xs uppercase bg-gray-100">
            <tr>
              <th className="py-3 px-4">Order ID</th>
              <th className="py-3 px-4">Customer</th>
              <th className="py-3 px-4">Total Price</th>
              <th className="py-3 px-4">Status</th>
              <th className="py-3 px-4">Actions</th>
            </tr>
          </thead>
          <tbody>
            {orders.length > 0 ? (
              orders.map((order) => (
                <tr
                  key={order._id}
                  className="border-b border-gray-300 cursor-pointer hover:bg-gray-50"
                >
                  <td className="p-whitespace-nowrap4 font-medium whitespace-nowrap">
                    {order._id}
                  </td>
                  <td className="p-4 whitespace-nowrap">{order.user.name}</td>
                  <td className="p-4 whitespace-nowrap">
                    # {order.totalPrice}
                  </td>
                  <td className="p-4 ">
                    <select
                      className="border border-gray-300 rounded outline-none focus:border-sky-500"
                      value={order.status}
                      onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
                        handleStatusChange(order._id, e.target.value)
                      }
                    >
                      <option value="Processing">Processing</option>
                      <option value="Shipped">Shipped</option>
                      <option value="Delivered">Delivered</option>
                      <option value="Cancelled">Cancelled</option>
                    </select>
                  </td>
                  <td className="p-4">
                    <button
                      className="bg-sky-500 text-white px-4 py-2 rounded hover:bg-sky-600"
                      onClick={() => handleStatusChange(order._id, "Delivered")}
                    >
                      Mark as Delivered
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={4} className="p-4 text-center">
                  No Orders Found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default OrderManagement;
