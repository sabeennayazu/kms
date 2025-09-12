"use client";

import Navbar from "../components/navbar";


export default function CoursesPage() {
  

  return (
    <main className="flex-1 p-6 overflow-y-auto">
      {/* Header */}
      <Navbar />

      {/* Learning Overview */}
      <div className="grid grid-cols-3 gap-4 mb-6">
        <div className="bg-white p-4 rounded-xl shadow-sm border">
          <h3 className="font-medium">Course Tutorial</h3>
          <p className="text-gray-500 text-sm">18/36 Courses</p>
        </div>
        <div className="bg-white p-4 rounded-xl shadow-sm border">
          <h3 className="font-medium">Task Completed</h3>
          <p className="text-gray-500 text-sm">5/15 Tasks</p>
        </div>
        <div className="bg-white p-4 rounded-xl shadow-sm border">
          <h3 className="font-medium">Spend Hours</h3>
          <p className="text-gray-500 text-sm">18/36 Courses</p>
        </div>
      </div>

      {/* Courses Section */}
      <div className="grid grid-cols-4 gap-6">
        {/* Left Content */}
        <div className="col-span-3 space-y-6">
          {/* Popular Courses */}
          <div>
            <h2 className="font-semibold mb-3">Popular Course</h2>
            <div className="grid grid-cols-3 gap-4">
              {[1, 2, 3].map((c) => (
                <div
                  key={c}
                  className="bg-white border rounded-xl shadow-sm overflow-hidden"
                >
                  <div className="bg-gray-300 h-28" />
                  <div className="p-3">
                    <h4 className="font-medium">Mastering Logo Design</h4>
                    <p className="text-gray-500 text-sm">752 students</p>
                    <p className="text-blue-600 font-semibold mt-1">$250</p>
                    <button className="mt-2 w-full bg-blue-600 text-white py-1.5 rounded-md text-sm">
                      Join Now
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Courses Table */}
          <div>
            <div className="flex justify-between items-center mb-3">
              <div className="flex gap-6">
                <span className="text-blue-600 border-b-2 border-blue-600 pb-1 cursor-pointer">
                  All Courses
                </span>
                <span className="text-gray-500 cursor-pointer">Published</span>
                <span className="text-gray-500 cursor-pointer">Draft</span>
              </div>
              <input
                type="text"
                placeholder="Search Courses here"
                className="px-3 py-1 border rounded-md text-sm focus:ring focus:ring-blue-500"
              />
            </div>

            <div className="bg-white border rounded-xl shadow-sm overflow-hidden">
              <table className="w-full text-left text-sm">
                <thead className="bg-gray-100 text-gray-700 font-medium">
                  <tr>
                    <th className="p-3">Course Name</th>
                    <th className="p-3">Category</th>
                    <th className="p-3">Status</th>
                    <th className="p-3">Level</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-t">
                    <td className="p-3 flex items-center gap-2">
                      <span className="text-blue-600">📘</span> Logo Design for
                      Industry
                    </td>
                    <td className="p-3">5/20</td>
                    <td className="p-3">
                      <span className="px-2 py-1 text-xs rounded-md bg-blue-100 text-blue-600">
                        Ongoing
                      </span>
                    </td>
                    <td className="p-3">Beginner</td>
                  </tr>
                  <tr className="border-t">
                    <td className="p-3 flex items-center gap-2">
                      <span className="text-green-600">💻</span> Full Stack
                      Developer
                    </td>
                    <td className="p-3">15/15</td>
                    <td className="p-3">
                      <span className="px-2 py-1 text-xs rounded-md bg-green-100 text-green-600">
                        Completed
                      </span>
                    </td>
                    <td className="p-3">Intermediate</td>
                  </tr>
                  <tr className="border-t">
                    <td className="p-3 flex items-center gap-2">
                      <span className="text-green-600">💻</span> Full Stack
                      Developer
                    </td>
                    <td className="p-3">15/15</td>
                    <td className="p-3">
                      <span className="px-2 py-1 text-xs rounded-md bg-green-100 text-green-600">
                        Completed
                      </span>
                    </td>
                    <td className="p-3">Beginner</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Right Sidebar */}
        <div className="space-y-6">
          {/* Pie Chart Placeholder */}
          <div className="bg-white border rounded-xl shadow-sm p-4 h-56 flex items-center justify-center">
            <p className="text-gray-500">[Pie Chart]</p>
          </div>

          {/* Upcoming Tasks */}
          <div className="bg-white border rounded-xl shadow-sm p-4">
            <h3 className="font-medium mb-3">Upcoming Tasks</h3>
            {[1, 2, 3].map((t) => (
              <div
                key={t}
                className="flex justify-between items-center p-2 border rounded-md mb-2"
              >
                <div>
                  <p className="text-sm font-medium">Create Vintage Logo</p>
                  <p className="text-xs text-gray-500">
                    26 September 2025 - 10:00 AM
                  </p>
                </div>
                <span className="px-2 py-1 text-xs bg-blue-100 text-blue-600 rounded-md">
                  Task
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-6 text-center text-gray-500 text-xs">
        ©2025 .......... All rights reserved. | Privacy Policy | Terms of
        Service | Support
      </footer>
    </main>
  );
}
