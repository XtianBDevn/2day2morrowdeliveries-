"use client";

import { motion } from "framer-motion";
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock } from "react-icons/fa";
import { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: "" });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitStatus({
          type: "success",
          message: data.message,
        });
        // Reset form
        setFormData({
          name: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
        });
      } else {
        setSubmitStatus({
          type: "error",
          message: data.error || "Something went wrong. Please try again.",
        });
      }
    } catch (error) {
      setSubmitStatus({
        type: "error",
        message: "Failed to send message. Please try again later.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-freight-purple-900 via-freight-purple-800 to-freight-purple-900 py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Get In <span className="text-freight-gold-500">Touch</span>
            </h1>
            <p className="text-xl text-freight-purple-100">
              Have questions about our freight delivery services? We're here to help!
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <div className="bg-white rounded-2xl shadow-2xl p-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Send Us a Message
                </h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-bold text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-freight-gold-500 focus:border-freight-gold-500 transition-all"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="email" className="block text-sm font-bold text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-freight-gold-500 focus:border-freight-gold-500 transition-all"
                      />
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-sm font-bold text-gray-700 mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-freight-gold-500 focus:border-freight-gold-500 transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-bold text-gray-700 mb-2">
                      Subject *
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      required
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-freight-gold-500 focus:border-freight-gold-500 transition-all"
                    >
                      <option value="">Select a subject</option>
                      <option value="quote">Request a Quote</option>
                      <option value="service">Service Inquiry</option>
                      <option value="support">Customer Support</option>
                      <option value="partnership">Partnership Opportunity</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-bold text-gray-700 mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={6}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-freight-gold-500 focus:border-freight-gold-500 transition-all resize-none"
                      placeholder="Tell us how we can help you..."
                    />
                  </div>

                  {submitStatus.type && (
                    <div
                      className={`p-4 rounded-lg ${
                        submitStatus.type === "success"
                          ? "bg-green-50 text-green-800 border-2 border-green-200"
                          : "bg-red-50 text-red-800 border-2 border-red-200"
                      }`}
                    >
                      {submitStatus.message}
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full bg-freight-gold-600 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-freight-gold-700 transition-all shadow-xl hover:shadow-2xl hover:scale-105 border-2 border-freight-gold-500 ${
                      isSubmitting ? "opacity-50 cursor-not-allowed" : ""
                    }`}
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </button>
                </form>
              </div>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-8">
                  Contact Information
                </h2>

                <div className="space-y-6">
                  {/* Phone */}
                  <div className="flex items-start gap-4 bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                    <div className="bg-freight-gold-100 p-4 rounded-lg">
                      <FaPhone className="text-freight-gold-600 text-2xl" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-2">Phone</h3>
                      <a
                        href="tel:8049877178"
                        className="text-freight-purple-900 hover:text-freight-gold-600 font-semibold text-lg transition-colors"
                      >
                        (804) 987-7178
                      </a>
                      <p className="text-gray-600 text-sm mt-1">
                        Ask for Chris Wallace
                      </p>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-start gap-4 bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                    <div className="bg-freight-gold-100 p-4 rounded-lg">
                      <FaEnvelope className="text-freight-gold-600 text-2xl" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-2">Email</h3>
                      <a
                        href="mailto:info@2day2morrowdeliveries.com"
                        className="text-freight-purple-900 hover:text-freight-gold-600 font-semibold transition-colors"
                      >
                        info@2day2morrowdeliveries.com
                      </a>
                    </div>
                  </div>

                  {/* Location */}
                  <div className="flex items-start gap-4 bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                    <div className="bg-freight-gold-100 p-4 rounded-lg">
                      <FaMapMarkerAlt className="text-freight-gold-600 text-2xl" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-2">Location</h3>
                      <p className="text-gray-700">
                        Richmond, VA
                        <br />
                        Serving the Greater Richmond Area
                      </p>
                    </div>
                  </div>

                  {/* Hours */}
                  <div className="flex items-start gap-4 bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                    <div className="bg-freight-gold-100 p-4 rounded-lg">
                      <FaClock className="text-freight-gold-600 text-2xl" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-2">Business Hours</h3>
                      <div className="space-y-1 text-gray-700">
                        <p><strong>Mon - Fri:</strong> 7:00 AM - 6:00 PM</p>
                        <p><strong>Saturday:</strong> 8:00 AM - 2:00 PM</p>
                        <p><strong>Sunday:</strong> Closed</p>
                      </div>
                      <p className="text-freight-gold-600 font-semibold mt-3">
                        24/7 Emergency Service Available
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick CTA */}
              <div className="bg-gradient-to-br from-freight-purple-900 to-freight-purple-800 p-8 rounded-2xl text-white">
                <h3 className="text-2xl font-bold mb-4">Need an Immediate Quote?</h3>
                <p className="text-freight-purple-100 mb-6">
                  Get a fast, competitive estimate for your freight delivery needs.
                </p>
                <a
                  href="/estimate"
                  className="inline-block bg-freight-gold-600 text-white px-8 py-4 rounded-lg font-bold hover:bg-freight-gold-700 transition-all shadow-xl hover:shadow-2xl hover:scale-105 border-2 border-freight-gold-500"
                >
                  Get Free Estimate
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}
