import { Bell, Search, Settings, User } from "lucide-react";

const AdminNavbar = () => {
  return (
    <header className="w-full h-16 flex items-center justify-between px-6 bg-[#d7e7eb]">

      {/* Left: Logo */}
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center text-white font-bold">
          B
        </div>
        <span className="text-lg font-semibold text-red-500">
          BAYBE
        </span>
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
