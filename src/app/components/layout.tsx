"use client";

import { ReactNode } from "react";
import Link from "next/link";
import { Home, Calendar, BookOpen, Users, HelpCircle, LogOut } from "lucide-react";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-md flex flex-col justify-between">
        <div>
          <div className="p-6 text-xl font-semibold">Dashboard</div>
          <nav className="space-y-2 px-4">
            <Link href="/" className="flex items-center gap-2 p-2 rounded-md hover:bg-blue-200 ">
              <Home size={18}/> Dashboard
            </Link>
            <Link href="/attendance" className="flex items-center gap-2 p-2 rounded-lg hover:bg-blue-200">
              <Calendar size={18}/> Attendance
            </Link>
            <Link href="/examination" className="flex items-center gap-2 p-2 rounded-lg hover:bg-blue-200">
              <BookOpen size={18}/> Examination
            </Link>
            <Link href="/courses" className="flex items-center gap-2 p-2 rounded-lg hover:bg-blue-200">
              <BookOpen size={18}/> Courses
            </Link>
            <Link href="/mentor" className="flex items-center gap-2 p-2 rounded-lg hover:bg-blue-200">
              <Users size={18}/> Mentor
            </Link>
            <Link href="/support" className="flex items-center gap-2 p-2 rounded-lg hover:bg-blue-200">
              <HelpCircle size={18}/> Support
            </Link>
          </nav>
        </div>
        <button className="flex items-center gap-2 p-4 text-red-500 hover:bg-gray-100">
          <LogOut size={18}/> Log Out
        </button>
      </aside>

      {/* Main content */}
      <main className="flex-1 p-6 overflow-y-auto">{children}</main>
    </div>
  );
}
