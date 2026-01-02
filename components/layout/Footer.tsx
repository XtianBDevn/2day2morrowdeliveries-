import Link from "next/link";
import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaTruck,
  FaClock,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-freight-purple-900 to-freight-purple-800 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-freight-gold-500 p-3 rounded-lg">
                <FaTruck className="text-white text-2xl" />
              </div>
              <div>
                <h3 className="text-xl font-bold">2Day2Morrow</h3>
                <p className="text-freight-gold-400 font-semibold text-sm">
                  Deliveries
                </p>
              </div>
            </div>
            <p className="text-freight-purple-200 leading-relaxed">
              Fast, reliable freight shipping serving Richmond, VA and
              surrounding areas. Your trusted partner for same-day and next-day
              deliveries.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-freight-purple-200 hover:text-white transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/#services"
                  className="text-freight-purple-200 hover:text-white transition-colors"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/#coverage"
                  className="text-freight-purple-200 hover:text-white transition-colors"
                >
                  Coverage Area
                </Link>
              </li>
              <li>
                <Link
                  href="/estimate"
                  className="text-freight-purple-200 hover:text-white transition-colors"
                >
                  Get Estimate
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-freight-purple-200 hover:text-white transition-colors"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <FaPhone className="text-freight-gold-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-freight-purple-200 text-sm">Call us:</p>
                  <a
                    href="tel:8049877178"
                    className="text-white font-semibold hover:text-freight-gold-400 transition-colors"
                  >
                    (804) 987-7178
                  </a>
                  <p className="text-freight-purple-300 text-sm mt-1">
                    Ask for Chris Wallace
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <FaEnvelope className="text-freight-gold-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-freight-purple-200 text-sm">Email:</p>
                  <a
                    href="mailto:info@2day2morrowdeliveries.com"
                    className="text-white hover:text-freight-gold-400 transition-colors"
                  >
                    info@2day2morrowdeliveries.com
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <FaMapMarkerAlt className="text-freight-gold-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-freight-purple-200 text-sm">Location:</p>
                  <p className="text-white">Richmond, VA</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="text-lg font-bold mb-4">Business Hours</h4>
            <div className="flex items-start gap-3 mb-4">
              <FaClock className="text-freight-gold-400 mt-1 flex-shrink-0" />
              <div className="space-y-2">
                <div>
                  <p className="text-white font-semibold">Mon - Fri</p>
                  <p className="text-freight-purple-200 text-sm">7:00 AM - 6:00 PM</p>
                </div>
                <div>
                  <p className="text-white font-semibold">Saturday</p>
                  <p className="text-freight-purple-200 text-sm">8:00 AM - 2:00 PM</p>
                </div>
                <div>
                  <p className="text-white font-semibold">Sunday</p>
                  <p className="text-freight-purple-200 text-sm">Closed</p>
                </div>
              </div>
            </div>
            <p className="text-freight-gold-400 text-sm font-semibold">
              24/7 Emergency Service Available
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-freight-purple-700 mt-8 pt-8 text-center">
          <p className="text-freight-purple-300 text-sm">
            &copy; {new Date().getFullYear()} 2Day2Morrow Deliveries. All
            rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
