import { Link } from "react-router-dom";

const Admin = () => {
  const orders = [
    {
      _id: 12333,
      user: {
        name: "Mr Kay ",
      },
      totalPrice: 100000,
      status: "Processing",
    },
  ];
  return (
    <div className="max-w-7xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Admin Dashoard</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="p-4 shadow-sm rounded border border-sky-700/10">
          <h2 className="text-xl font-semibold">Revenue</h2>
          <p className="text-2xl"># 100000</p>
        </div>
        <div className="p-4 shadow-sm rounded border border-sky-700/10">
          <h2 className="text-xl font-semibold">Total Oders</h2>
          <p className="text-2xl">100</p>
          <Link
            to="/admin/orders"
            className="text-sky-600 hover:underline transition-transform translate-x-full duration-200"
          >
            Manage Orders
          </Link>
        </div>
        <div className="p-4 shadow-sm rounded border border-sky-700/10 md:col-span-2 lg:col-span-1">
          <h2 className="text-xl font-semibold">Total Product</h2>
          <p className="text-2xl">1000</p>
          <Link
            to="/admin/products"
            className="text-sky-600 hover:underline transition-transform translate-x-full duration-200"
          >
            Manage Products
          </Link>
        </div>
      </div>

      <div className="mt-6">
        <h2 className="text-2xl font-bold mb-4">Recent Order</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full text-left text-gray-500">
            <thead className="text-xs uppercase bg-gray-100">
              <tr>
                <th className="py-3 px-4">Order ID</th>
                <th className="py-3 px-4">User</th>
                <th className="py-3 px-4">Total Price</th>
                <th className="py-3 px-4">Status</th>
              </tr>
            </thead>
            <tbody>
              {orders.length > 0 ? (
                orders.map((order) => (
                  <tr
                    key={order._id}
                    className="border-b border-gray-300 cursor-pointer hover:bg-gray-50"
                  >
                    <td className="p-4">{order._id}</td>
                    <td className="p-4  whitespace-nowrap">
                      {order.user.name}
                    </td>
                    <td className="p-4">{order.totalPrice}</td>
                    <td className="p-4">{order.status}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={4} className="p-4 text-center">
                    No Order Found
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Admin;
