"use client";

import Link from "next/link";
import { useState } from "react";
import { FaPhone, FaTruck, FaBars, FaTimes } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/#services", label: "Services" },
    { href: "/#coverage", label: "Coverage Area" },
    { href: "/#about", label: "About" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="bg-gradient-to-br from-freight-purple-600 to-freight-purple-700 p-3 rounded-lg shadow-lg group-hover:shadow-xl transition-shadow">
              <FaTruck className="text-white text-2xl" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-freight-purple-700">
                2Day2Morrow
              </h1>
              <p className="text-xs text-freight-gold-600 font-semibold">
                Deliveries
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-gray-700 hover:text-freight-purple-600 font-medium transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="tel:8049877178"
              className="flex items-center gap-2 text-freight-purple-900 hover:text-freight-gold-600 font-bold transition-colors"
            >
              <FaPhone className="text-freight-purple-900" />
              <span>(804) 987-7178</span>
            </a>
            <Link
              href="/estimate"
              className="bg-freight-gold-600 text-black px-6 py-3 rounded-lg font-bold hover:bg-black hover:text-white transition-all shadow-lg hover:shadow-xl hover:scale-105 border-2 border-freight-gold-600"
            >
              Get Estimate
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-2xl text-gray-700 hover:text-freight-purple-600 transition-colors"
          >
            {mobileMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-gray-200 overflow-hidden"
          >
            <nav className="container mx-auto px-4 py-4 flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-gray-700 hover:text-freight-purple-600 font-medium py-2 transition-colors"
                >
                  {link.label}
                </Link>
              ))}
              <a
                href="tel:8049877178"
                className="flex items-center gap-2 text-freight-purple-900 font-bold py-2 hover:text-freight-gold-600 transition-colors"
              >
                <FaPhone className="text-freight-purple-900" />
                <span>(804) 987-7178</span>
              </a>
              <Link
                href="/estimate"
                onClick={() => setMobileMenuOpen(false)}
                className="bg-freight-gold-600 text-black px-6 py-3 rounded-lg font-bold text-center hover:bg-black hover:text-white transition-colors border-2 border-freight-gold-600"
              >
                Get Estimate
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
