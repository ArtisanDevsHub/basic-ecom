import Navbar from "../components/global/Navbar";
import Footer from "../components/global/Footer";
import Sidebar from "../components/global/Sidebar";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* 📌 Sticky Navbar - Always at Top */}
      <header className="sticky top-0 z-50 bg-white shadow-sm">
        <Navbar />
      </header>

      {/* Scrollable Content Area */}
      <div className="flex flex-1">
        {/* Sidebar */}
        <aside className="w-64 bg-white border-r hidden lg:block flex-shrink-0 sticky top-16 h-[calc(100vh-8rem)] overflow-y-auto">
          <Sidebar />
        </aside>

        {/* Page Content - Only this area scrolls */}
        <main className="flex-1 pb-16">
          <Outlet />
        </main>
      </div>

      <footer className="">
        <Footer />
      </footer>
    </div>
  );
};

export default MainLayout;