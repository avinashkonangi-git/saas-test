"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <header className="w-full border-b bg-white relative z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/logo.png"
            alt="Logo"
            width={120}
            height={40}
            priority
          />
        </Link>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>

        {/* Navigation */}
        <nav
          className={`
            absolute md:static top-full left-0 w-full md:w-auto bg-white md:bg-transparent
            flex flex-col md:flex-row gap-5 md:gap-8 p-6 md:p-0
            ${menuOpen ? "block" : "hidden"} md:flex
          `}
        >
          
          {/* Product Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setDropdownOpen(true)}
            onMouseLeave={() => setDropdownOpen(false)}
          >
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="flex items-center gap-1 text-sm font-medium"
            >
              Product
              <span className="text-xs">▾</span>
            </button>

            {/* ✅ OVERLAY (desktop only) */}
            {dropdownOpen && (
              <div className="hidden md:block fixed inset-0 bg-black/40 z-40"></div>
            )}

            {/* ✅ LEFT-ALIGNED DROPDOWN */}
            {dropdownOpen && (
              <div className="mt-3 md:absolute md:top-full md:left-0 md:mt-3 w-full md:w-[280px] bg-white rounded-xl shadow-lg p-4 border z-50">
                
                <div className="mb-3 cursor-pointer hover:bg-gray-100 p-2 rounded">
                  <p className="text-sm font-medium">
                    Business Phone System
                  </p>
                  <p className="text-xs text-gray-500">
                    Make and receive calls
                  </p>
                </div>

                <div className="mb-3 bg-blue-50 p-2 rounded cursor-pointer">
                  <p className="text-sm font-medium text-blue-600">
                    Send and Receive SMS
                  </p>
                  <p className="text-xs text-gray-500">
                    Manage texts easily
                  </p>
                </div>

                <div className="cursor-pointer hover:bg-gray-100 p-2 rounded">
                  <p className="text-sm font-medium">
                    Automated Dialers
                  </p>
                  <p className="text-xs text-gray-500">
                    Reach prospects faster
                  </p>
                </div>

                <p className="text-blue-600 text-xs mt-3 cursor-pointer hover:underline">
                  See all features →
                </p>
              </div>
            )}
          </div>

          {/* Menu Links */}
          <Link href="#" className="text-sm">Solutions</Link>
          <Link href="#" className="text-sm">Customers</Link>
          <Link href="#" className="text-sm">Pricing</Link>
          <Link href="#" className="text-sm">Resources</Link>
        </nav>

        {/* Buttons */}
        <div className="hidden md:flex items-center gap-3">
          <button className="px-4 py-2 text-sm border border-blue-500 text-blue-600 rounded-md hover:bg-blue-50">
            Book a Demo
          </button>
          <button className="px-4 py-2 text-sm bg-blue-600 text-white rounded-md hover:bg-blue-700">
            Start Free Trial
          </button>
        </div>
      </div>
    </header>
  );
}