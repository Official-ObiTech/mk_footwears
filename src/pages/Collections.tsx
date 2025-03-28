import { useEffect, useRef, useState } from "react";
import menProducts from "../assets/men.jpg";
import { FaFilter } from "react-icons/fa";
import FilterSideBar from "../components/Products/FilterSideBar";
import SortOptions from "../components/Products/SortOptions";
import ProductGrid from "../components/Products/ProductGrid";

interface FetchedProduct {
  _id: string;
  name: string;
  price: number;
  images: {
    url: string;
  }[];
}
[];

const Collections = () => {
  // DECLARE USE STATES
  const [products, setProducts] = useState<FetchedProduct[]>([]);
  const sideBarRef = useRef<HTMLDivElement | null>(null);
  const [isSideBarOpen, setIsSideBarOpen] = useState(false);

  // DECLARE VARIBLES

  // DECLARE FUNCTIONS
  const toggleSideNav = () => {
    setIsSideBarOpen(!isSideBarOpen);
  };

  const handleClickOutSide = (e: any) => {
    if (sideBarRef.current && !sideBarRef.current.contains(e.target)) {
      setIsSideBarOpen(false);
    }
  };

  // DECLARE MOUNT AND USE EFFECT
  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutSide);
    return () => document.removeEventListener("mousedown", handleClickOutSide);
  }, []);

  useEffect(() => {
    setTimeout(() => {
      const fetchedProduct = [
        {
          _id: "1",
          name: "Product 1",
          price: 15000,
          images: [{ url: menProducts }],
        },
        {
          _id: "2",
          name: "Product 2",
          price: 15000,
          images: [{ url: menProducts }],
        },
        {
          _id: "3",
          name: "Product 3",
          price: 15000,
          images: [{ url: menProducts }],
        },
        {
          _id: "4",
          name: "Product 4",
          price: 15000,
          images: [{ url: menProducts }],
        },
        {
          _id: "5",
          name: "Product 1",
          price: 15000,
          images: [{ url: menProducts }],
        },
        {
          _id: "6",
          name: "Product 2",
          price: 15000,
          images: [{ url: menProducts }],
        },
        {
          _id: "7",
          name: "Product 3",
          price: 15000,
          images: [{ url: menProducts }],
        },
        {
          _id: "8",
          name: "Product 4",
          price: 15000,
          images: [{ url: menProducts }],
        },
      ];
      setProducts(fetchedProduct);
    }, 1000);
  }, []);

  return (
    <div className="flex flex-col lg:flex-row container mx-auto">
      {/* Mobile Filter button  */}
      <button
        onClick={toggleSideNav}
        className="lg:hidden border space-x-4 p-2 flex justify-center items-center"
      >
        <FaFilter /> Filters
      </button>

      {/* Filter Sidebar  */}
      <div
        ref={sideBarRef}
        className={`${
          isSideBarOpen ? "translate-x-0" : "-translate-x-full"
        } inset-y-0 fixed z-30 left-0 w-64 overflow-y-auto transition-transform duration-300 lg:static lg:translate-x-0 bg-white`}
      >
        <FilterSideBar />
      </div>

      <div className="flex-grow p-4 ">
        <h2 className="text-2xl uppercase mb-4">All Collection</h2>
        {/* Sort Options  */}
        <SortOptions />

        {/* Product Grids */}
        <ProductGrid products={products.map(product => ({ ...product, _id: parseInt(product._id) }))} />
      </div>
    </div>
  );
};

export default Collections;
