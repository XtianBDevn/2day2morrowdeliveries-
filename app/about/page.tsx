"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  FaTruck,
  FaShieldAlt,
  FaClock,
  FaHandshake,
  FaAward,
  FaUsers,
  FaMapMarkedAlt,
  FaCheckCircle,
  FaArrowRight,
} from "react-icons/fa";

const stats = [
  { number: "1000+", label: "Deliveries Completed" },
  { number: "50+", label: "Business Partners" },
  { number: "24/7", label: "Emergency Support" },
  { number: "100%", label: "Satisfaction Rate" },
];

const values = [
  {
    icon: FaClock,
    title: "Reliability",
    description:
      "We understand that time is money. Our commitment to on-time delivery means your business keeps moving forward without delays.",
  },
  {
    icon: FaShieldAlt,
    title: "Safety First",
    description:
      "Every shipment is handled with care and fully insured. Your freight's safety is our top priority from pickup to delivery.",
  },
  {
    icon: FaHandshake,
    title: "Integrity",
    description:
      "Transparent pricing, honest communication, and reliable service. We build lasting relationships based on trust.",
  },
  {
    icon: FaAward,
    title: "Excellence",
    description:
      "We don't just meet expectations—we exceed them. Quality service and professional handling on every delivery.",
  },
];

const whyChoose = [
  "Licensed and fully insured commercial freight carrier",
  "Experienced team with years of local delivery expertise",
  "Modern fleet maintained to the highest standards",
  "Real-time tracking and communication",
  "Competitive pricing with no hidden fees",
  "Flexible scheduling to meet your needs",
  "Dedicated customer support",
  "Emergency and same-day service available",
];

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-black min-h-[500px] flex items-center overflow-hidden">
        {/* Radial gradient overlay for depth */}
        <div className="absolute inset-0 bg-gradient-radial from-freight-purple-800/30 via-black to-black" />

        {/* Animated red glow accents */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-freight-gold-600/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-freight-gold-500/5 rounded-full blur-3xl" />

        <div className="container mx-auto px-4 py-20 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              About{" "}
              <span className="text-freight-gold-500 drop-shadow-[0_0_25px_rgba(255,107,107,0.5)]">
                2Day2Morrow
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-freight-purple-100 leading-relaxed">
              Richmond's trusted freight delivery partner, committed to moving your
              business forward with reliable, professional service.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  Founded in Richmond, Virginia, 2Day2Morrow Deliveries was built on a
                  simple principle: local businesses deserve freight delivery services
                  they can count on.
                </p>
                <p>
                  We saw a gap in the market for a delivery service that combines the
                  reliability of large carriers with the personal touch of a local
                  business. That's why we created 2Day2Morrow—to be the freight partner
                  Richmond businesses can trust.
                </p>
                <p>
                  Today, we proudly serve businesses across the greater Richmond area,
                  handling everything from same-day urgent deliveries to scheduled
                  freight services. Our commitment to excellence and customer
                  satisfaction drives everything we do.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-6"
            >
              {stats.map((stat, index) => (
                <div
                  key={stat.label}
                  className="bg-gradient-to-br from-freight-purple-900 to-black p-8 rounded-2xl text-center shadow-2xl"
                >
                  <div className="text-4xl md:text-5xl font-bold text-freight-gold-500 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-white font-semibold">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our Values
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The principles that guide every delivery we make
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all p-8 text-center group hover:scale-105"
              >
                <div className="bg-freight-gold-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-freight-gold-600 transition-colors">
                  <value.icon className="text-4xl text-freight-gold-600 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {value.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Why Choose 2Day2Morrow?
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                We're more than just a delivery service—we're your logistics partner.
              </p>

              <div className="space-y-4">
                {whyChoose.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    className="flex items-start gap-4"
                  >
                    <FaCheckCircle className="text-freight-gold-600 text-xl flex-shrink-0 mt-1" />
                    <span className="text-gray-700 text-lg">{item}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-freight-purple-900 to-black p-12 rounded-2xl shadow-2xl text-white"
            >
              <FaTruck className="text-6xl text-freight-gold-500 mb-6" />
              <h3 className="text-3xl font-bold mb-4">
                Your Local Freight Experts
              </h3>
              <p className="text-freight-purple-100 mb-6 leading-relaxed">
                We know Richmond's roads, businesses, and logistics challenges. Our
                local expertise means faster deliveries and better service for your
                business.
              </p>
              <div className="flex items-center gap-4 mb-4">
                <FaMapMarkedAlt className="text-2xl text-freight-gold-500" />
                <div>
                  <div className="font-bold">Serving Richmond & Surrounding Areas</div>
                  <div className="text-freight-purple-200 text-sm">
                    Henrico • Chesterfield • Mechanicsville • Ashland
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <FaUsers className="text-2xl text-freight-gold-500" />
                <div>
                  <div className="font-bold">Professional Team</div>
                  <div className="text-freight-purple-200 text-sm">
                    Experienced, licensed, and dedicated
                  </div>
                </div>
              </div>
            </motion.div>
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
              Ready to Work With Us?
            </h2>
            <p className="text-xl text-freight-purple-100 mb-8">
              Experience the 2Day2Morrow difference. Contact us today for a free
              estimate and discover why Richmond businesses trust us with their
              freight.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/estimate"
                className="inline-flex items-center justify-center bg-freight-gold-600 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-freight-gold-700 transition-all shadow-xl hover:shadow-2xl hover:scale-105 border-2 border-freight-gold-500 group"
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
