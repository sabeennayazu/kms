import type { Metadata } from "next";
import Link from "next/link";
import {
  Home,
  Calendar,
  BookOpen,
  Users,
  HelpCircle,
  LogOut,
} from "lucide-react";
import "./globals.css";

export const metadata: Metadata = {
  title: "Student Dashboard",
  description: "Dashboard UI with sidebar",
};

const links = [
  { name: "Dashboard", href: "/", icon: Home },
  { name: "Attendance", href: "/attendance", icon: Calendar },
  { name: "Examination", href: "/examination", icon: BookOpen },
  { name: "Courses", href: "/courses", icon: BookOpen },
  { name: "Mentor", href: "/mentor", icon: Users },
  { name: "Support", href: "/support", icon: HelpCircle },
];

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased bg-gray-50">
        <div className="flex min-h-screen">
          {/* Sidebar */}
          <aside className="w-64 bg-white shadow-md flex flex-col justify-between">
            <div>
              <div className="p-6 text-xl font-semibold" >Dashboard</div>
              <nav className="space-y-2 px-4">
                {links.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="flex items-center gap-2 p-2 rounded-md hover:bg-blue-200"
                  >
                    <link.icon size={18} /> {link.name}
                  </Link>
                ))}
              </nav>
            </div>
            <button className="flex items-center gap-2 p-4 text-red-500 hover:bg-gray-100">
              <LogOut size={18} /> Log Out
            </button>
          </aside>

          {/* Main content */}
          <main className="flex-1 p-6 overflow-y-auto">{children}</main>
        </div>
      </body>
    </html>
  );
}
