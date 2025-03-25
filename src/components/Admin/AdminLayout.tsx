import { useState } from "react";
import { FaBars } from "react-icons/fa";
import AdminSideNav from "./AdminSideNav";
import { Outlet } from "react-router-dom";

const AdminLayout = () => {
  const [isSideNavOpen, setIsSideNavOpen] = useState(false);
  const toggleSideNav = () => {
    setIsSideNavOpen(!isSideNavOpen);
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row relative">
      {/* Mobile Side Nav Button  */}
      <div className="flex md:hidden items-center p-4 bg-sky-900 text-white z-10">
        <button className="icons" onClick={toggleSideNav}>
          <FaBars />
        </button>
        <h1 className="ml-4 text-xl font-medium">Admin Dashboard</h1>
      </div>

      {/* Overlay for Mobile Side Nav  */}
      {isSideNavOpen && (
        <div
          onClick={toggleSideNav}
          className="fixed inset-0 z-10 bg-sky-800/20 md:hidden"
        />
      )}

      {/* Side Nav  */}
      <div
        className={`bg-sky-900 w-64 min-h-screen text-white absolute md:relative transform ${
          isSideNavOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 md:translate-x-0 md:static md:block z-20`}
      >
        <AdminSideNav />
      </div>

      {/* Main Content  */}
      <div className="flex-grow p-6 overflow-auto">
        <Outlet />
      </div>
    </div>
  );
};

export default AdminLayout;
