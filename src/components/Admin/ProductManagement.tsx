import { Link } from "react-router-dom";

const ProductManagement = () => {
  const products = [
    {
      _id: 123343,
      name: "Pams",
      price: 120000,
      sku: 2454345,
    },
  ];

  const handleDelete = (productId: number) => {
    if (window.confirm("Do you really want to delete this product?")) {
      console.log("Product Deleted:", productId);
    }
  };

  return (
    <div className="max-w-7xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-8">Product Management</h2>
      <div className="overflow-x-auto shadow sm:rounded">
        <table className="min-w-full text-left text-gray-500">
          <thead className="text-xs uppercase bg-gray-100">
            <tr>
              <th className="py-3 px-4">Name</th>
              <th className="py-3 px-4">Price</th>
              <th className="py-3 px-4">SKU</th>
              <th className="py-3 px-4">Actions</th>
            </tr>
          </thead>
          <tbody>
            {products.length > 0 ? (
              products.map((product) => (
                <tr
                  key={product._id}
                  className="border-b border-gray-300 cursor-pointer hover:bg-gray-50"
                >
                  <td className="p-4 font-medium whitespace-nowrap">
                    {product.name}
                  </td>
                  <td className="p-4">{product.price}</td>
                  <td className="p-4">{product.sku}</td>

                  <td className="p-4">
                    <Link
                      to={`/admin/products/${product._id}/edit`}
                      className="bg-yellow-500 text-white px-2 py-1 rounded mr-2 hover:bg-yellow-600"
                    >
                      Edit
                    </Link>
                    <button
                      className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600"
                      onClick={() => handleDelete(product._id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={4} className="p-4 text-center">
                  No Product Found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProductManagement;
