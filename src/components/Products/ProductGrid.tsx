import { TbCurrencyNaira } from "react-icons/tb";
import { Link } from "react-router-dom";

interface gridProps {
  _id: number;
  name: string;
  price: number;
  images: { url: string; altText?: string }[];
}

interface ProductGrids {
  products: gridProps[]
}
const ProductGrid: React.FC<ProductGrids> = ({ products }) => {
  return (
    <div className="grid grid-cols-4 max-sm:grid-cols-2 gap-6  ">
      {products.map((product, index) => (
        <Link
          key={index}
          to={`/product/${product._id}`}
          className="block hover:scale-105 hover:shadow-2xl transition-all duration-300 bg-sky-50/70 rounded"
        >
          <div className="border border-sky-100 rounded p-4">
            <div className="w-full h-80 mb-4 ">
              <img
                src={product.images[0].url}
                alt={product.images[0].altText || product.name}
                className="w-full h-full object-cover rounded"
              />
            </div>
            <h3 className="text-gray-600 mb-2">{product.name}</h3>
            <p className="text-gray-500 font-medium text-sm tracking-tighter flex items-center">
              <TbCurrencyNaira className="icons" /> {product.price}
            </p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default ProductGrid;
