"use client";

import { useState } from "react";
import { Search, Plus, Bell, UserCircle } from "lucide-react";

export default function Navbar() {
  const [search, setSearch] = useState("");

  return (
    <nav className="w-full flex items-center justify-between shadow-sm rounded-2xl px-6 py-3 mb-4 bg-white">
      {/* Left - Search */}
      <div className="flex-1 max-w-sm">
        <div className="relative">
          <Search className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
          <input
            type="text"
            placeholder="Search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-2xs pl-9 pr-3 py-1.5 text-sm bg-gray-100 rounded-full focus:outline-none focus:ring-2 focus:ring-gray-300"
          />
        </div>
      </div>

      {/* Right - Create, Bell, User */}
      <div className="flex items-center gap-4 ml-6">
        <button className="flex items-center gap-1 bg-blue-600 text-white text-sm px-4 py-1.5 rounded-full hover:bg-blue-700 transition">
          Create <Plus className="w-4 h-4" />
        </button>
        <Bell className="w-5 h-5 text-gray-700 cursor-pointer hover:text-blue-600 transition" />
        <div className="w-9 h-9 flex items-center justify-center rounded-full bg-gray-800 cursor-pointer">
          <UserCircle className="w-6 h-6 text-white" />
        </div>
      </div>
    </nav>
  );
}
