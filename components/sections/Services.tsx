"use client";

import { motion } from "framer-motion";
import {
  FaTruck,
  FaBoxes,
  FaClock,
  FaWarehouse,
  FaShippingFast,
  FaTools,
} from "react-icons/fa";

const services = [
  {
    icon: FaShippingFast,
    title: "Same-Day Delivery",
    description:
      "Need it today? We've got you covered with our same-day freight delivery service across Richmond and surrounding areas.",
    color: "from-orange-500 to-orange-600",
  },
  {
    icon: FaClock,
    title: "Next-Day Service",
    description:
      "Guaranteed next-day delivery for your freight shipments. Reliable, on-time service you can count on.",
    color: "from-blue-500 to-blue-600",
  },
  {
    icon: FaBoxes,
    title: "Palletized Freight",
    description:
      "Specialized handling for palletized freight. Expert loading, securing, and transport of your palletized goods.",
    color: "from-emerald-500 to-emerald-600",
  },
  {
    icon: FaTruck,
    title: "LTL Shipping",
    description:
      "Less-than-truckload shipping solutions for smaller shipments. Cost-effective and efficient freight transport.",
    color: "from-purple-500 to-purple-600",
  },
  {
    icon: FaWarehouse,
    title: "Warehousing",
    description:
      "Short-term and long-term warehousing solutions. Secure storage for your freight with easy access.",
    color: "from-indigo-500 to-indigo-600",
  },
  {
    icon: FaTools,
    title: "Specialized Equipment",
    description:
      "Transport of specialized equipment and oversized freight. Custom solutions for unique shipping needs.",
    color: "from-red-500 to-red-600",
  },
];

export default function Services() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
          >
            Our Services
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-600 max-w-2xl mx-auto"
          >
            Comprehensive freight shipping solutions tailored to your needs
          </motion.p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              variants={itemVariants}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow"
            >
              <div
                className={`inline-flex p-4 rounded-lg bg-gradient-to-br ${service.color} mb-4`}
              >
                <service.icon className="text-white text-3xl" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="text-center mt-12"
        >
          <a
            href="/estimate"
            className="inline-block bg-freight-gold-500 text-black px-8 py-4 rounded-lg font-semibold text-lg hover:bg-freight-gold-600 transition-all shadow-lg hover:shadow-xl hover:scale-105"
          >
            Get a Free Quote
          </a>
        </motion.div>
      </div>
    </section>
  );
}
