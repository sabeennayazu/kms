"use client";

import { Icon } from "@iconify/react";
import Navbar from "./components/navbar";
import {
  BookOpenCheck,
  Calendar,
  Users,
  User,
  Bell,
} from "lucide-react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

export default function Page() {
  const studentsData = [
    { month: "Jan", value: 200 },
    { month: "Feb", value: 300 },
    { month: "Mar", value: 450 },
    { month: "Apr", value: 600 },
    { month: "May", value: 800 },
    { month: "Jun", value: 1000 },
  ];

  const progressData = [
    { month: "Jan", value: 30 },
    { month: "Feb", value: 40 },
    { month: "Mar", value: 55 },
    { month: "Apr", value: 70 },
    { month: "May", value: 50 },
    { month: "Jun", value: 90 },
    { month: "Jul", value: 80 },
  ];

  return (
    <div className="bg-blue-50 min-h-screen p-6">
    
      <Navbar />  

      {/* Stats cards */}
      <div className="grid grid-cols-4 gap-4 mb-6">
        <div className="bg-pink-100 p-4 rounded-md shadow-md flex flex-col gap-1 hover:shadow-2xl transition-shadow">
          <p className="font-medium flex items-center gap-2">
            <Calendar size={18} /> Attendance
          </p>
          <h2 className="text-2xl font-bold">85%</h2>
          <span className="text-sm text-gray-500">This Year</span>
        </div>
        <div className="bg-pink-100 p-4 rounded-md shadow-md flex flex-col gap-1 hover:shadow-2xl transition-shadow">
          <p className="font-medium flex items-center gap-2">
            <Icon icon="wpf:books" width="22" height="22" /> Courses
          </p>
          <h2 className="text-2xl font-bold">12</h2>
          <span className="text-sm text-gray-500">Added this year</span>
        </div>
        <div className="bg-pink-100 p-4 rounded-md shadow-md flex flex-col gap-1 hover:shadow-2xl transition-shadow">
          <p className="font-medium flex items-center gap-2">
            <BookOpenCheck size={18} /> Examinations
          </p>
          <h2 className="text-2xl font-bold">4</h2>
          <span className="text-sm text-gray-500">Upcoming</span>
        </div>
        <div className="bg-pink-100 p-4 rounded-md shadow-md flex flex-col gap-1 hover:shadow-2xl transition-shadow">
          <p className="font-medium flex items-center gap-2">
            <Users size={18} /> Mentors
          </p>
          <h2 className="text-2xl font-bold">8</h2>
          <span className="text-sm text-gray-500">Total Mentors</span>
        </div>
      </div>

      {/* Graphs */}
      <div className="grid grid-cols-2 gap-6 mb-6">
        <div className="bg-white p-4 rounded-md shadow-md hover:shadow-2xl transition-shadow">
          <h3 className="font-medium mb-2">Total Students</h3>
          <p className="text-lg font-semibold">1000</p>
          <div className="h-40">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={studentsData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="value" stroke="#3b82f6" />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-2xl transition-shadow">
          <h3 className="font-medium mb-2">Monthly Progress</h3>
          <div className="h-40">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={progressData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="value" stroke="#10b981" />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="grid grid-cols-3 gap-6">
        {/* Popular Courses */}
        <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-2xl transition-shadow">
          <h3 className="font-medium mb-3">Popular Courses</h3>
          <ul className="space-y-2">
            {["UI/UX Courses", "Marketing", "Data Science"].map((course) => (
              <li
                key={course}
                className="flex justify-between items-center border-b pb-1"
              >
                <span>{course}</span>
                <button className="bg-green-100 text-green-700 px-2 py-1 text-sm rounded">
                  View Courses
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Top Instructors */}
        <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-2xl transition-shadow">
          <h3 className="font-medium mb-3">Top Instructors</h3>
          <ul className="space-y-2">
            {["Thomas", "Catherine", "Smith"].map((name) => (
            
              <li key={name} className="flex justify-between">
               <User size={20} />
                <span className="">{name}</span>
                <span className="text-yellow-500">★ 4.5</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Community Groups */}
        <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-2xl transition-shadow">
          <h3 className="font-medium mb-3">Community Groups</h3>
          <ul className="space-y-2">
            {[1, 2, 3].map((i) => (
              <li key={i} className="flex justify-between">
                <span>Data Science</span>
                <button className="bg-gray-100 px-2 py-1 text-sm rounded">
                  Join Group
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
