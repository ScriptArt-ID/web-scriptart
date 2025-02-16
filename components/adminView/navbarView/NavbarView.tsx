"use client";

import { ReactNode } from "react";
import { useState } from "react";
import { FaFileLines } from "react-icons/fa6";
import { MdDashboard } from "react-icons/md";
import { FaUserMd } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";
import Logo from "@/public/assets/images/logo.png"

interface AdminLayoutProps {
  children: ReactNode;
}

export default function NavbarView({ children }: AdminLayoutProps) {
  // State to manage the visibility of the mobile menu
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Function to toggle the menu visibility
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <div className="flex h-screen flex-col lg:flex-row">
      {/* Sidebar for desktop */}
      <div className="lg:w-64 bg-white text-gray-800 p-4 flex-col lg:block hidden">
        <Image src={Logo} width={200} height={200} alt="Logo" />
        <nav className="space-y-4">
          <Link
            href="/admin/dashboard"
            className="flex items-center space-x-2 p-3 rounded-lg text-black hover:bg-orange-600 hover:text-white transition"
          >
            <MdDashboard size={20} />
            <span>Dashboard</span>
          </Link>
          <Link
            href="/admin/testimoni"
            className="flex items-center space-x-2 p-3 rounded-lg text-black hover:bg-orange-600 hover:text-white transition"
          >
            <FaUserMd size={20} />
            <span>Testimoni</span>
          </Link>
          <Link
            href="/admin/web"
            className="flex items-center space-x-2 p-3 rounded-lg text-black hover:bg-orange-600 hover:text-white transition"
          >
            <FaFileLines size={20} />
            <span>Portofolio</span>
          </Link>
        </nav>
      </div>

      {/* Mobile Menu Button */}
      <div className="lg:hidden bg-white p-4 flex justify-between items-center">
        <Image src={Logo} width={150} height={150} alt="Logo" />
        <button 
          className="text-white"
          onClick={toggleMenu} // Toggle the menu on button click
        >
          <span className="text-2xl mx-4 text-black">☰</span>
        </button>
      </div>

      {/* Mobile Sidebar Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white text-gray-800 p-4 flex flex-col space-y-4">
          <Link
            href="/admin/dashboard"
            className="flex items-center space-x-2 p-3 rounded-lg text-black hover:bg-orange-600 hover:text-white transition"
          >
            <MdDashboard size={20} />
            <span>Dashboard</span>
          </Link>
          <Link
            href="/admin/testimoni"
            className="flex items-center space-x-2 p-3 rounded-lg text-black hover:bg-orange-600 hover:text-white transition"
          >
            <FaUserMd size={20} />
            <span>Testimoni</span>
          </Link>
          <Link
            href="/admin/web"
            className="flex items-center space-x-2 p-3 rounded-lg text-black hover:bg-orange-600 hover:text-white transition"
          >
            <FaFileLines size={20} />
            <span>Portofolio</span>
          </Link>
        </div>
      )}

      {/* Content */}
      <div className="flex-1 p-6 bg-gray-100 overflow-auto">
        {children}
      </div>
    </div>
  );
}
