import Hero from "../components/Layout/Hero";
import GenderCollection from "../components/Products/GenderCollection";
import NewArrivals from "../components/Products/NewArrivals";
import ProductDetails from "../components/Products/ProductDetails";
import ProductGrid from "../components/Products/ProductGrid";
import menProducts from "../assets/men.jpg";
import FeatureCollection from "../components/Products/FeatureCollection";
import Features from "../components/Products/Features";

const Home: React.FC = () => {
  // DECLARE VARIBLES
  const placeholderProducts = [
    {
      _id: 1,
      name: "Product 1",
      price: 15000,
      images: [{ url: menProducts }],
    },
    {
      _id: 2,
      name: "Product 2",
      price: 15000,
      images: [{ url: menProducts }],
    },
    {
      _id: 3,
      name: "Product 3",
      price: 15000,
      images: [{ url: menProducts }],
    },
    {
      _id: 4,
      name: "Product 4",
      price: 15000,
      images: [{ url: menProducts }],
    },
    {
      _id: 5,
      name: "Product 1",
      price: 15000,
      images: [{ url: menProducts }],
    },
    {
      _id: 6,
      name: "Product 2",
      price: 15000,
      images: [{ url: menProducts }],
    },
    {
      _id: 7,
      name: "Product 3",
      price: 15000,
      images: [{ url: menProducts }],
    },
    {
      _id: 8,
      name: "Product 4",
      price: 15000,
      images: [{ url: menProducts }],
    },
  ];
  return (
    <div>
      <Hero />
      <GenderCollection />
      <NewArrivals />

      {/* Best Selected Products  */}
      <h2 className="text-3xl font-bold text-center my-8">Best Seller</h2>
      <ProductDetails />

      <div className="container mx-auto ">
        <h2 className="text-3xl text-center font-bold mb-4">
          Top Wears for Women
        </h2>
        <ProductGrid products={placeholderProducts} />
      </div>

      <FeatureCollection />
      <Features />
    </div>
  );
};

export default Home;
