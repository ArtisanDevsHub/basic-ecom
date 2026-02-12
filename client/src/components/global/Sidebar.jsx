import { NavLink } from "react-router-dom";
import {
  LayoutGrid,
  FileText,
  PlusSquare,
  ShoppingBag,
  MessageSquare,
  BarChart2,
  Users,
  Settings,
} from "lucide-react";

const Sidebar = () => {
  const linkClass = ({ isActive }) =>
    `flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition
     ${isActive ? "bg-red-400 text-white" : "text-gray-700 hover:bg-gray-100"}`;

  return (
    <aside className="h-full px-4 py-6 bg-white">
      {/* MAIN MENU */}
      <p className="text-xs text-gray-400 uppercase mb-4">Main Menu</p>

      <nav className="space-y-1">
        <NavLink to="/admin" end className={linkClass}>
          <LayoutGrid size={20} />
          Overview
        </NavLink>

        <NavLink to="/admin/categories" className={linkClass}>
          <FileText size={20} />
          Category List
        </NavLink>

        <NavLink to="/admin/add-category" className={linkClass}>
          <PlusSquare size={20} />
          Add New Category
        </NavLink>

        <NavLink to="/admin/products" className={linkClass}>
          <ShoppingBag size={20} />
          Products Lists
        </NavLink>

        <NavLink to="/admin/product-details" className={linkClass}>
          <FileText size={20} />
          Products Details
        </NavLink>

        <NavLink to="/admin/add-product" className={linkClass}>
          <PlusSquare size={20} />
          Add New Products
        </NavLink>

        <NavLink to="/admin/messages" className={linkClass}>
          <MessageSquare size={20} />
          Messages
        </NavLink>

        <NavLink to="/admin/reports" className={linkClass}>
          <BarChart2 size={20} />
          Report Center
        </NavLink>
      </nav>

      {/* PREFERENCES */}
      <p className="text-xs text-gray-400 uppercase mt-8 mb-4">Preferences</p>

      <nav className="space-y-1">
        <NavLink to="/admin/users" className={linkClass}>
          <Users size={20} />
          Users
        </NavLink>

        <NavLink to="/admin/product-category" className={linkClass}>
          <Settings size={20} />
          Products Category
        </NavLink>
      </nav>
    </aside>
  );
};

export default Sidebar;
