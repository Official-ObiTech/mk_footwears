import { BrowserRouter, Route, Routes } from "react-router-dom";
import UserLayout from "./components/Layout/UserLayout";
import Home from "./pages/Home";
import { Toaster } from "sonner";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Profile from "./pages/Profile";
import Collections from "./pages/Collections";
import ProductDetails from "./components/Products/ProductDetails";
import Checkout from "./components/Cart/Checkout";
import OrderConfirmation from "./pages/OrderConfirmation";
import OrderDetails from "./pages/OrderDetails";
import MyOrder from "./components/Products/MyOrder";
import AdminLayout from "./components/Admin/AdminLayout";
import Admin from "./pages/Admin";
import UserManagement from "./components/Admin/UserManagement";
import ProductManagement from "./components/Admin/ProductManagement";
import OrderManagement from "./components/Admin/OrderManagement";
import ShopManagement from "./components/Admin/ShopManagement";
import EditProduct from "./components/Admin/EditProduct";

function App() {
  return (
    <>
      <BrowserRouter>
        <Toaster position="top-right" richColors />
        <Routes>
          {/* User Layout */}
          <Route path="/" element={<UserLayout />}>
            {/* User Pages  */}
            <Route index element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/collections/:collection" element={<Collections />} />
            <Route path="/product/:id" element={<ProductDetails />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/order-confirmation" element={<OrderConfirmation />} />
            <Route path="/order/:id" element={<OrderDetails />} />
            <Route path="/my-order" element={<MyOrder />} />
          </Route>

          {/* Admin Layout */}
          <Route path="/admin" element={<AdminLayout />}>
            <Route index element={<Admin />} />
            <Route path="/admin/users" element={<UserManagement />} />
            <Route path="/admin/products" element={<ProductManagement />} />
            <Route path="/admin/products/:id/edit" element={<EditProduct />} />
            <Route path="/admin/orders" element={<OrderManagement />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
