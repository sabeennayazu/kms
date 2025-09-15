// Suggested path: app/dashboard/courses/page.tsx

import React from 'react';
import { BookOpen, CheckSquare, Clock, Search, Briefcase, Code, Star } from 'lucide-react';
import Navbar from '../components/navbar';
import Link from 'next/link';

// Type definitions for component props
type OverviewCardProps = {
  icon: React.ReactNode;
  title: string;
  value: string;
};

type PopularCourseCardProps = {
  isJoined: boolean;
};

type CourseTableRowProps = {
  title: string;
  category: string;
  status: 'Ongoing' | 'Completed';
  level: string;
  levelType: 'Design' | 'Code';
};

type TaskItemProps = {
  date: string;
  title: string;
  time: string;
};

const CoursesPage: React.FC = () => {
  return (
    <main className="bg-blue-50 min-h-screen p-6">
      <Navbar />
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Content (Left and Center) */}
        <div className="lg:col-span-2 space-y-8">
          
          {/* Learning Overview */}
          <div>
            <div className="flex justify-between items-center mb-4">
              <h1 className="text-2xl font-bold text-gray-800">Learning Overview</h1>
             <Link href="/courses/create">
              <button className="bg-blue-600 text-white font-semibold py-2 px-4 rounded-2xl shadow-md hover:bg-blue-700 transition-colors">
                + Create New Courses
              </button>
              </Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 rounded-2xl  ">
              <OverviewCard 
                icon={<BookOpen className="text-blue-500" />} 
                title="Course Tutorial" 
                value="18/38 Courses" 
              />
              <OverviewCard 
                icon={<CheckSquare className="text-blue-500" />} 
                title="Task Completed" 
                value="5/15 Tasks" 
              />
              <OverviewCard 
                icon={<Clock className="text-blue-500" />} 
                title="Spend Hours" 
                value="18/38 Courses" 
              />
            </div>
          </div>

          {/* Popular Course */}
          <div>
            <h2 className="text-xl font-bold text-gray-800 mb-4">Popular Course</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              <PopularCourseCard isJoined={false} />
              <PopularCourseCard isJoined={true} />
              <PopularCourseCard isJoined={true} />
            </div>
          </div>

          {/* All Courses Table */}
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="flex flex-col sm:flex-row justify-between items-center mb-4 gap-4">
              <div className="flex space-x-4 border-b">
                <button className="py-2 px-4 text-blue-600 border-b-2 border-blue-600 font-semibold">All Courses</button>
                <button className="py-2 px-4 text-gray-500 hover:text-blue-600">Published</button>
                <button className="py-2 px-4 text-gray-500 hover:text-blue-600">Draft</button>
              </div>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                <input 
                  type="text" 
                  placeholder="Search Courses here"
                  className="pl-10 pr-4 py-2 border rounded-lg w-full sm:w-auto focus:outline-none focus:ring-2 focus:ring-blue-500" 
                />
              </div>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead className="text-gray-500">
                  <tr>
                    <th className="py-3 px-4 font-normal">Course Name</th>
                    <th className="py-3 px-4 font-normal">Category</th>
                    <th className="py-3 px-4 font-normal">Status</th>
                    <th className="py-3 px-4 font-normal">Level</th>
                  </tr>
                </thead>
                <tbody>
                  <CourseTableRow 
                    title="Logo Design for Industry"
                    category="5/20"
                    status="Ongoing"
                    level="Beginner"
                    levelType="Design"
                  />
                  <CourseTableRow 
                    title="Full Stack Developer"
                    category="15/15"
                    status="Completed"
                    level="Intermediate"
                    levelType="Code"
                  />
                  <CourseTableRow 
                    title="Full Stack Developer"
                    category="15/15"
                    status="Completed"
                    level="Beginner"
                    levelType="Code"
                  />
                </tbody>
              </table>
            </div>
          </div>

        </div>

        {/* Right Sidebar Content */}
        <div className="lg:col-span-1 space-y-8">
          {/* Courses Progress */}
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h2 className="text-xl font-bold text-gray-800 mb-4">Courses</h2>
            <div className="flex justify-center items-center my-6">
              <div className="relative w-48 h-48">
                 <svg className="w-full h-full" viewBox="0 0 36 36">
                  <path
                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                    fill="none" stroke="#E5E7EB" strokeWidth="3"
                  />
                  <path
                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                    fill="none" stroke="#EF4444" strokeWidth="3" strokeDasharray="50, 100"
                  />
                   <path
                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                    fill="none" stroke="#3B82F6" strokeWidth="3" strokeDasharray="33, 100" strokeDashoffset="-50"
                  />
                </svg>
              </div>
            </div>
            <div className="flex justify-around text-center">
              <div>
                <div className="flex items-center gap-2">
                  <span className="h-3 w-3 rounded-full bg-red-500"></span>
                  <p className="font-semibold">Design</p>
                </div>
                <p className="text-gray-500 text-sm">18 courses</p>
              </div>
               <div>
                <div className="flex items-center gap-2">
                  <span className="h-3 w-3 rounded-full bg-blue-500"></span>
                  <p className="font-semibold">Code</p>
                </div>
                <p className="text-gray-500 text-sm">12 courses</p>
              </div>
               <div>
                <div className="flex items-center gap-2">
                  <span className="h-3 w-3 rounded-full bg-gray-300"></span>
                  <p className="font-semibold">Data</p>
                </div>
                <p className="text-gray-500 text-sm">6 courses</p>
              </div>
            </div>
          </div>

          {/* Upcoming Tasks */}
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h2 className="text-xl font-bold text-gray-800 mb-4">Upcoming Tasks</h2>
            <div className="space-y-4">
              <TaskItem date="26 September 2025" title="Create Vintage Logo" time="10:00 AM" />
              <TaskItem date="26 September 2025" title="Create Vintage Logo" time="10:00 AM" />
              <TaskItem date="26 September 2025" title="Create Vintage Logo" time="10:00 AM" />
            </div>
          </div>
        </div>
      </div>
      
      {/* Footer */}
      <footer className="mt-8 flex justify-between items-center text-sm text-gray-500">
        <p>©2025 ........ All rights reserved.</p>
        <div className="flex space-x-4">
          <a href="#" className="hover:text-gray-800">Privacy Policy</a>
          <a href="#" className="hover:text-gray-800">Terms of Service</a>
          <a href="#" className="hover:text-gray-800">Support</a>
        </div>
      </footer>
    </main>
  );
};

// Sub-components with TypeScript props
const OverviewCard: React.FC<OverviewCardProps> = ({ icon, title, value }) => (
  <div className="bg-white p-4 rounded-lg shadow-md border border-gray-200 flex items-center gap-4">
    <div className="bg-blue-100/50 p-3 rounded-lg">{icon}</div>
    <div>
      <p className="font-bold text-gray-800 text-sm">{title}</p>
      <p className=" text-gray-500">{value}</p>
    </div>
  </div>
);

const PopularCourseCard: React.FC<PopularCourseCardProps> = ({ isJoined }) => (
  <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200">
    <div className="bg-gray-200 h-40"></div>
    <div className="p-4">
      <h3 className="font-bold text-lg">Mastering Logo Design</h3>
      <div className="flex items-center my-2">
        {[...Array(5)].map((_, i) => (
          <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
        ))}
      </div>
      <div className="flex justify-between items-center text-sm text-gray-600">
        <p>752 students</p>
        {isJoined ? (
          <button className="bg-blue-600 text-white font-semibold py-2 px-5 rounded-lg hover:bg-blue-700 transition-colors">
            Join Now
          </button>
        ) : (
          <p className="text-lg font-bold text-gray-800">$ 250</p>
        )}
      </div>
    </div>
  </div>
);

const CourseTableRow: React.FC<CourseTableRowProps> = ({ title, category, status, level, levelType }) => {
  const statusColor = status === 'Completed' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700';
  const Icon = levelType === 'Design' ? Briefcase : Code;

  return (
    <tr className="border-b hover:bg-gray-50">
      <td className="py-3 px-4">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-blue-100 rounded-md">
            <Icon className="text-blue-600" size={20} />
          </div>
          <span className="font-semibold">{title}</span>
        </div>
      </td>
      <td className="py-3 px-4 text-gray-600">{category}</td>
      <td className="py-3 px-4">
        <span className={`px-3 py-1 text-sm rounded-full font-medium ${statusColor}`}>
          {status}
        </span>
      </td>
      <td className="py-3 px-4 text-gray-600">{level}</td>
    </tr>
  );
};

const TaskItem: React.FC<TaskItemProps> = ({ date, title, time }) => (
  <div className="bg-blue-50/50 p-3 rounded-lg flex items-center justify-between">
    <div className="flex items-center gap-3">
      <div className="p-2 bg-white rounded-md border">
        <Briefcase className="text-blue-600" size={20} />
      </div>
      <div>
        <p className="text-xs text-gray-500">{date}</p>
        <p className="font-semibold text-gray-800">{title}</p>
      </div>
    </div>
    <p className="font-semibold text-blue-600 text-sm bg-blue-100 py-1 px-3 rounded-md">{time}</p>
  </div>
);

export default CoursesPage;