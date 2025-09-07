import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Student Dashboard",
  description: "Dashboard UI with sidebar",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased bg-gray-50">{children}</body>
    </html>
  );
}
