"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FaArrowRight, FaPhone, FaTruck, FaClock, FaShieldAlt } from "react-icons/fa";

export default function Hero() {
  return (
    <section className="relative bg-black min-h-[700px] flex items-center overflow-hidden">
      {/* Radial gradient overlay for depth */}
      <div className="absolute inset-0 bg-gradient-radial from-freight-purple-900/15 via-black to-black" />

      {/* Animated gold glow accents */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-freight-gold-500/30 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-0 left-0 w-[700px] h-[700px] bg-freight-gold-600/25 rounded-full blur-3xl" />

      {/* Animated background pattern */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      {/* Animated truck graphic with shadow */}
      <motion.div
        className="absolute right-0 top-1/2 -translate-y-1/2 opacity-5 drop-shadow-[0_0_100px_rgba(253,185,39,0.3)]"
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 0.05 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      >
        <FaTruck className="text-white text-[400px]" />
      </motion.div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-4xl">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center bg-freight-gold-600 text-white px-4 py-2 rounded-full mb-6 shadow-xl border-2 border-freight-gold-500"
          >
            <FaTruck className="mr-2" />
            <span className="text-sm font-bold">
              Richmond's Most Reliable Freight Service
            </span>
          </motion.div>

          {/* Main heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight"
          >
            Fast, Reliable
            <span className="block text-freight-gold-500 drop-shadow-[0_0_25px_rgba(253,185,39,0.5)]">
              Freight Shipping
            </span>
          </motion.h1>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-freight-purple-100 mb-8 max-w-2xl leading-relaxed"
          >
            Same-day and next-day freight delivery in Richmond, VA and
            surrounding areas. Professional service you can count on.
          </motion.p>

          {/* CTA buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 mb-12"
          >
            <Link
              href="/estimate"
              className="inline-flex items-center justify-center bg-freight-gold-600 text-black px-8 py-4 rounded-lg font-bold text-lg hover:bg-black hover:text-white transition-all shadow-2xl hover:shadow-[0_0_30px_rgba(253,185,39,0.6)] hover:scale-105 group border-2 border-freight-gold-500"
            >
              Get Free Estimate
              <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
            <a
              href="tel:8049877178"
              className="inline-flex items-center justify-center bg-white text-freight-purple-800 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-freight-purple-50 transition-all border-2 border-white shadow-xl hover:shadow-2xl"
            >
              <FaPhone className="mr-2" />
              Call Chris: (804) 987-7178
            </a>
          </motion.div>

          {/* Trust indicators */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-3xl"
          >
            <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm p-4 rounded-lg">
              <FaClock className="text-freight-gold-400 text-3xl flex-shrink-0" />
              <div>
                <div className="text-2xl font-bold text-white">Same Day</div>
                <div className="text-freight-purple-200 text-sm">
                  Delivery Available
                </div>
              </div>
            </div>
            <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm p-4 rounded-lg">
              <FaShieldAlt className="text-freight-gold-400 text-3xl flex-shrink-0" />
              <div>
                <div className="text-2xl font-bold text-white">Insured</div>
                <div className="text-freight-purple-200 text-sm">
                  Fully Licensed
                </div>
              </div>
            </div>
            <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm p-4 rounded-lg col-span-2 md:col-span-1">
              <FaTruck className="text-freight-gold-400 text-3xl flex-shrink-0" />
              <div>
                <div className="text-2xl font-bold text-white">24/7</div>
                <div className="text-freight-purple-200 text-sm">
                  Emergency Service
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Decorative wave at bottom */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto"
        >
          <path
            d="M0 0L60 10C120 20 240 40 360 46.7C480 53 600 47 720 43.3C840 40 960 40 1080 46.7C1200 53 1320 67 1380 73.3L1440 80V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0V0Z"
            fill="white"
          />
        </svg>
      </div>
    </section>
  );
}
