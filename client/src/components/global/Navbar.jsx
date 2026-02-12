
import { useEffect } from "react";
import { Bell, Search, Settings, User } from "lucide-react";
import logo from "../../assets/Logo.png";

const AdminNavbar = () => {
  useEffect(() => {
    const navbar = document.getElementById("navbar");
    if (!navbar) return;

    const handleScroll = () => {
      if (window.scrollY > 10) {
        navbar.classList.add("shadow-md");
      } else {
        navbar.classList.remove("shadow-md");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      id="navbar"
      className="w-full h-16 flex items-center justify-between px-10 bg-[#d7e7eb] transition-shadow duration-200"
    >
      {/* Left: Logo */}
      <div className="flex items-center gap-2">
        <img
          src={logo}
          alt="BAYBE Logo"
          className="h-8 w-auto object-contain"
        />
      </div>

      {/* Right Section */}
      <div className="flex items-center gap-4">
        {/* Search */}
        <button className="w-10 h-10 bg-white rounded-lg flex items-center justify-center shadow">
          <Search size={18} />
        </button>

        {/* Notification */}
        <button className="w-10 h-10 bg-white rounded-lg flex items-center justify-center shadow">
          <Bell size={18} />
        </button>

        {/* Settings */}
        <button className="w-10 h-10 bg-white rounded-lg flex items-center justify-center shadow">
          <Settings size={18} />
        </button>

        {/* User */}
        <div className="flex items-center gap-2 cursor-pointer">
          <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center shadow">
            <User size={18} />
          </div>
          <div className="text-sm leading-tight">
            <p className="font-medium">Name</p>
            <p className="text-gray-500 text-xs">Designation</p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default AdminNavbar;


