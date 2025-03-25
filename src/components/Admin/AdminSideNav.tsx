import {
  FaBoxOpen,
  FaClipboardList,
  FaSignOutAlt,
  FaStore,
  FaUser,
} from "react-icons/fa";
import { Link, NavLink, useNavigate } from "react-router-dom";

const AdminSideNav = () => {
  const navigate = useNavigate();

  const handleLogOut = () => {
    navigate("/");
  };
  return (
    <div className="p-6">
      <div className="mb-6 border-b">
        <Link to="/" className="text-3xl tracking-tighter font-bold">
          Mr Footwears
        </Link>
      </div>
      <h2 className="text-xl font-medium mb-6 text-center">Admin Dashoard</h2>
      <nav className="flex flex-col space-y-2">
        <NavLink
          to="/admin/users"
          className={({ isActive }) =>
            isActive
              ? "flex items-center space-x-2 px-4 py-3 rounded bg-sky-950 "
              : "flex items-center space-x-2 px-4 py-3 rounded hover:bg-sky-950 text-gray-300"
          }
        >
          <FaUser />
          <span>User</span>
        </NavLink>
        <NavLink
          to="/admin/products"
          className={({ isActive }) =>
            isActive
              ? "flex items-center space-x-2 px-4 py-3 rounded bg-sky-950 "
              : "flex items-center space-x-2 px-4 py-3 rounded hover:bg-sky-950 text-gray-300"
          }
        >
          <FaBoxOpen />
          <span>Products</span>
        </NavLink>
        <NavLink
          to="/admin/orders"
          className={({ isActive }) =>
            isActive
              ? "flex items-center space-x-2 px-4 py-3 rounded bg-sky-950 "
              : "flex items-center space-x-2 px-4 py-3 rounded hover:bg-sky-950 text-gray-300"
          }
        >
          <FaClipboardList />
          <span>Orders</span>
        </NavLink>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "flex items-center space-x-2 px-4 py-3 rounded bg-sky-950 "
              : "flex items-center space-x-2 px-4 py-3 rounded hover:bg-sky-950 text-gray-300"
          }
        >
          <FaStore />
          <span>Shop</span>
        </NavLink>
      </nav>

      <div className="mt-6">
        <button
          className="bg-red-400 w-full items-center flex justify-center py-1 space-x-2 rounded text-white hover:bg-red-600"
          onClick={handleLogOut}
        >
          <FaSignOutAlt />
          <span>Log Out</span>
        </button>
      </div>
    </div>
  );
};

export default AdminSideNav;
