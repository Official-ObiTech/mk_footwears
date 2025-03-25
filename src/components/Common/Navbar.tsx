import { Link } from "react-router-dom";
import Links from "./Links";
import { HiOutlineUser } from "react-icons/hi";
import { HiBars3BottomRight, HiOutlineShoppingCart } from "react-icons/hi2";
import Search from "./SearchBar";
import CartDrawer from "../Layout/CartDrawer";
import { useState } from "react";
import { IoMdClose } from "react-icons/io";

const Navbar: React.FC = () => {
  // DECLARE VERIABLES
  const [cartDrawer, setCartDrawer] = useState(false);
  const [openNav, setOpenNav] = useState(false);

  // DECLARE FUNCTIONS
  const isCartOpen = () => {
    setCartDrawer(!cartDrawer);
  };

  const isNavbarOpen = () => {
    setOpenNav(!openNav);
  };

  const navLink = [
    {
      to: "/collections/all",
      label: "Men",
    },
    {
      to: "/",
      label: "Women",
    },
    {
      to: "/",
      label: "Shoes",
    },
    {
      to: "/",
      label: "Pams",
    },
  ];

  return (
    <>
      <nav className="backdrop-blur-3xl bg-sky-50/70 ">
        <div className="container mx-auto justify_container">
          {/* left logo  */}
          <div>
            <Link
              to="/"
              className="text-2xl font-bold text-primary hover:text-sky-950 "
            >
              MK <span className="max-sm:hidden">Footwears</span>
            </Link>
          </div>

          <div className="hidden md:flex gap-4">
            {/* navigation link content  */}
            <Links links={navLink} className="nav_link active:" />
          </div>

          <div className="flex items-center gap-4">
            <Link
              to="/admin"
              className="block border border-sky-950 text-sky-900 hover:bg-sky-900 hover:text-white px-2 rounded"
            >
              Admin
            </Link>
            {/* Profile User */}
            <Link to="/profile" className="light_link icons">
              <HiOutlineUser />
            </Link>

            {/* Shopping Cart */}
            <button onClick={isCartOpen} className="relative light_link icons">
              <HiOutlineShoppingCart />
              <span className="cart_icon">10</span>
            </button>

            {/* Search  */}
            <div className="overflow-hidden">
              <Search />
            </div>

            {/* Menu for  mobile */}
            <button
              onClick={isNavbarOpen}
              className="light_link icons md:hidden"
            >
              <HiBars3BottomRight />
            </button>
          </div>
        </div>
      </nav>

      <CartDrawer cartDrawer={cartDrawer} setCartDrawer={isCartOpen} />

      <div
        className={`fixed top-0 bg-white w-full left-0 md:w-3/4 h-full transform transition-transform duration-500 z-50 ${
          openNav ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="flex justify-end p-4">
          <button onClick={isNavbarOpen} className="icons cursor-pointer">
            <IoMdClose />
          </button>
        </div>

        <div className="p-4">
          <h2 className="text-font-semibold mb-4">Menu</h2>
          <Links
            onClick={isNavbarOpen}
            links={navLink}
            className="flex flex-col nav_link space-y-4"
          />
        </div>
      </div>
    </>
  );
};

export default Navbar;
