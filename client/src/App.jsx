import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import AdminLayout from "./layouts/AdminLayout";

// Pages
import Home from "./components/global/Home";
import HomeNewArrivals from "./home/NewArrivals";
import UserSignup from "./pages/UserSignup";
import AddCategory from "./pages/CreateCategory";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Home />} />
          
       
        <Route element={<MainLayout />}>
          <Route path="/categories" element={<HomeNewArrivals />} />
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
