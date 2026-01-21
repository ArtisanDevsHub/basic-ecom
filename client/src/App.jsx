import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Home from "./home/Home";
import UserSignup from "./user-signup/UserSignup";
import AddCategory from "./create-category/CreateCategory";
import AdminLayout from "./layouts/AdminLayout";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<UserSignup />} />

        {/* Redirect old route */}
        <Route
          path="/addCategory"
          element={<Navigate to="/admin/add-category" replace />}
        />

        {/* Admin Routes */}
        <Route path="/admin" element={<AdminLayout />}>
          <Route path="add-category" element={<AddCategory />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
