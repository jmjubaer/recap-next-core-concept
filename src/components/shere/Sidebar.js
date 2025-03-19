"use client"
import Link from "next/link";
import { useState } from "react";
import { FiHome, FiUser, FiSettings, FiMenu } from "react-icons/fi";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="flex">
      {/* Sidebar */}
      <div className={`bg-gray-900 text-white h-screen p-5 transition-all ${isOpen ? "w-64" : "w-16"}`}>
        <button
          className="text-white mb-5 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <FiMenu size={24} />
        </button>
        <ul className="space-y-4">
          <li>
            <Link href="/" className="flex items-center gap-3 hover:text-gray-400">
              <FiHome size={20} />
              {isOpen && <span>Home</span>}
            </Link>
          </li>
          <li>
            <Link href="/profile" className="flex items-center gap-3 hover:text-gray-400">
              <FiUser size={20} />
              {isOpen && <span>Profile</span>}
            </Link>
          </li>
          <li>
            <Link href="/settings" className="flex items-center gap-3 hover:text-gray-400">
              <FiSettings size={20} />
              {isOpen && <span>Settings</span>}
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
