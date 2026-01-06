"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  FaTruck,
  FaClock,
  FaBoxes,
  FaWarehouse,
  FaShippingFast,
  FaHandshake,
  FaShieldAlt,
  FaCheckCircle,
  FaArrowRight,
} from "react-icons/fa";

const services = [
  {
    icon: FaShippingFast,
    title: "Same-Day Delivery",
    description:
      "Need it there today? Our same-day delivery service ensures your freight arrives when you need it most. Perfect for urgent shipments and time-sensitive deliveries.",
    features: [
      "Pickup within 2 hours",
      "Real-time tracking",
      "Direct delivery - no stops",
      "Priority handling",
    ],
  },
  {
    icon: FaClock,
    title: "Next-Day Delivery",
    description:
      "Reliable next-day freight delivery across the Richmond area. Schedule your pickup today and your shipment will be delivered by end of business tomorrow.",
    features: [
      "Guaranteed delivery time",
      "Flexible pickup windows",
      "SMS notifications",
      "Proof of delivery",
    ],
  },
  {
    icon: FaTruck,
    title: "Scheduled Freight",
    description:
      "Plan ahead with our scheduled freight service. Perfect for regular shipments and recurring deliveries with predictable timing.",
    features: [
      "Recurring delivery options",
      "Volume discounts",
      "Dedicated account manager",
      "Custom scheduling",
    ],
  },
  {
    icon: FaBoxes,
    title: "LTL (Less Than Truckload)",
    description:
      "Cost-effective shipping for smaller freight loads. Share truck space with other shipments to save on costs without sacrificing quality.",
    features: [
      "Competitive pricing",
      "Secure packaging",
      "No minimum weight",
      "Careful handling",
    ],
  },
  {
    icon: FaWarehouse,
    title: "FTL (Full Truckload)",
    description:
      "Dedicated truck for your large shipments. When you need the entire truck, we provide exclusive service for maximum efficiency.",
    features: [
      "Dedicated vehicle",
      "Faster transit times",
      "Reduced handling",
      "Priority service",
    ],
  },
  {
    icon: FaHandshake,
    title: "White Glove Service",
    description:
      "Premium handling for your most valuable freight. Our white glove service includes special care, inside delivery, and setup assistance.",
    features: [
      "Inside delivery",
      "Unpacking service",
      "Debris removal",
      "Assembly available",
    ],
  },
];

const whyChooseUs = [
  {
    icon: FaShieldAlt,
    title: "Fully Insured",
    description: "All shipments are fully insured for your peace of mind.",
  },
  {
    icon: FaCheckCircle,
    title: "Licensed & Certified",
    description: "Properly licensed and certified for commercial freight delivery.",
  },
  {
    icon: FaClock,
    title: "On-Time Guarantee",
    description: "We guarantee on-time delivery or your money back.",
  },
  {
    icon: FaHandshake,
    title: "Professional Team",
    description: "Experienced drivers and handlers who care about your freight.",
  },
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-freight-purple-900 via-freight-purple-800 to-freight-purple-900 py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Our <span className="text-freight-gold-500">Services</span>
            </h1>
            <p className="text-xl text-freight-purple-100 mb-8">
              Professional freight delivery solutions tailored to your needs. From same-day
              shipping to scheduled freight, we've got you covered.
            </p>
            <Link
              href="/estimate"
              className="inline-flex items-center bg-freight-gold-600 text-black px-8 py-4 rounded-lg font-bold text-lg hover:bg-black hover:text-white transition-all shadow-xl hover:shadow-2xl hover:scale-105 border-2 border-freight-gold-600 group"
            >
              Get Free Estimate
              <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Comprehensive Freight Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Choose the service that best fits your delivery needs
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all p-8 group hover:scale-105"
              >
                <div className="bg-freight-gold-100 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:bg-freight-gold-600 transition-colors">
                  <service.icon className="text-3xl text-freight-gold-600 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>
                <ul className="space-y-3">
                  {service.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center gap-3 text-gray-700"
                    >
                      <FaCheckCircle className="text-freight-gold-500 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Why Choose 2Day2Morrow?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We're committed to providing the best freight delivery experience
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="bg-freight-purple-900 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 shadow-xl">
                  <item.icon className="text-3xl text-freight-gold-500" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-freight-purple-900 via-freight-purple-800 to-freight-purple-900">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-freight-purple-100 mb-8">
              Contact us today for a free estimate and experience the 2Day2Morrow
              difference.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/estimate"
                className="inline-flex items-center justify-center bg-freight-gold-600 text-black px-8 py-4 rounded-lg font-bold text-lg hover:bg-black hover:text-white transition-all shadow-xl hover:shadow-2xl hover:scale-105 border-2 border-freight-gold-600 group"
              >
                Get Free Estimate
                <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <a
                href="tel:8049877178"
                className="inline-flex items-center justify-center bg-white text-freight-purple-900 px-8 py-4 rounded-lg font-bold text-lg hover:bg-freight-purple-50 transition-all shadow-xl hover:shadow-2xl border-2 border-white"
              >
                Call (804) 987-7178
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
