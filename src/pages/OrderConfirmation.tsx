import imagetop from "../assets/topwear.jpg";

const OrderConfirmation = () => {
  const checkout = {
    _id: "123456789",
    createdAt: new Date(),
    checkoutItems: [
      {
        productId: "1",
        name: "Product 1",
        color: "Red",
        size: "M",
        quantity: 2,
        price: 15000,
        image: imagetop,
      },
      {
        productId: "2",
        name: "Product 2",
        color: "Blue",
        size: "S",
        quantity: 2,
        price: 11000,
        image: imagetop,
      },
    ],

    shippingAddress: {
      address: "123 Main St",
      city: "New York",
      country: "USA",
    },
  };

  const calculateEstimatedDelivery = (createdAt:  number | string | Date ) => {
    const orderDate = new Date(createdAt);
    orderDate.setDate(orderDate.getDate() + 15);
    return orderDate.toLocaleDateString();
  };

  return (
    <div className="max-w-4xl mx-auto p-6 my-8 ">
      <h1 className="text-4xl font-bold text-center text-sky-600 py-4">
        Thanks You for making order!
      </h1>
      {checkout && (
        <div className="p-6 rounded border border-gray-300">
          <div className="flex justify-between mb-20">
            {/* Order Id and Date */}
            <div>
              <h2 className="text-xl font-semibold">
                Order ID: {checkout._id}
              </h2>
              <p className="text-gray-500">
                Order date: {new Date(checkout.createdAt).toLocaleDateString()}
              </p>
            </div>

            {/* Estimated Delivery  */}
            <div>
              <p className="text-sky-800 text-sm">
                Estimated Delivery:{" "}
                {calculateEstimatedDelivery(checkout.createdAt)}
              </p>
            </div>
          </div>

          <div className="mb-20">
            {checkout.checkoutItems.map((item) => (
              <div key={item.productId} className="flex items-center mb-4">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-16 h-16 object-cover rounded mr-4"
                />

                <div>
                  <h4 className="text-md font-semibold">{item.name}</h4>
                  <p className="text-sm text-gray-500">
                    {item.color} | {item.size}
                  </p>
                </div>
                <div className="ml-auto text-right">
                  <p className="text-md">{item.price}</p>
                  <p className="text-sm text-gray-500">
                    Quantity: {item.quantity}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-2 gap-8">
            <div>
              <h4 className="text-lg font-semibold mb-2">Payment</h4>
              <p className="text-gray-600">PayPal</p>
            </div>

            {/* Delivery Info  */}
            <div>
              <h4 className="text-lg font-semibold mb-2">Delivery</h4>
              <p className="text-gray-600">
                {checkout.shippingAddress.address}
              </p>
              <p className="text-gray-600">
                {checkout.shippingAddress.city},{" "}
                {checkout.shippingAddress.country}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default OrderConfirmation;
