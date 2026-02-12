import { Outlet } from "react-router-dom";
import Navbar from "../components/global/Navbar";
import Sidebar from "../components/global/Sidebar";

const AdminLayout = () => {
  return (
    <div className="w-full h-screen flex flex-col bg-gray-100">
      {/* Navbar - FULL WIDTH */}
      <Navbar />

      {/* Below Navbar */}
      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar */}
        <aside className="w-64 bg-white border-r flex-shrink-0">
          <Sidebar />
        </aside>

        {/* Page Content */}
        <main className="flex-1 overflow-y-auto p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;