import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import AdminLayout from "./layouts/AdminLayout";

// Pages
import Home from "./components/global/Home";
import CategoryHomePage from "./pages/CategoryHomePage";
import UserSignup from "./pages/UserSignup";
import AddCategory from "./pages/CreateCategory";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Home />} />
          
        {/* Public Routes with MainLayout (Navbar + Sidebar + Footer) */}
        <Route element={<MainLayout />}>
          <Route path="/categories" element={<CategoryHomePage />} />
        </Route>

        {/* Standalone Pages (No Layout) */}
        <Route path="/signup" element={<UserSignup />} />

        {/* Admin Routes */}
        <Route path="/admin" element={<AdminLayout />}>
          <Route path="add-category" element={<AddCategory />} />
        </Route>

        {/* Redirects */}
        <Route
          path="/addCategory"
          element={<Navigate to="/admin/add-category" replace />}
        />
      </Routes>
    </BrowserRouter>
  );
}
