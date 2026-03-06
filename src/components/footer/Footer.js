import React from "react";
import "./Footer.css";
import spinlogo from "../../images/spinlogo.png";
import staticlogo from "../../images/staticlog.png";

function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-16 pb-8 border-t border-gray-700">

      <div className="max-w-6xl mx-auto px-6">

        {/* TOP SECTION */}
        <div className="grid md:grid-cols-3 gap-12">

          {/* LEFT COLUMN */}
          <div>
            <div className="footerLogo mb-6">
              <div className="logoWrapper">
                <div className="spinContainer">
                  <img src={spinlogo} alt="Spin Logo" className="spinLogo" />
                </div>
                <div className="staticContainer">
                  <img src={staticlogo} alt="Static Logo" />
                </div>
              </div>
            </div>

            <p className="text-sm font-medium mb-2">
              We find buyers. You close deals.
            </p>

            <p className="text-sm text-gray-500">
              Simple. Clear. Built for lean teams.
            </p>
          </div>

          {/* CENTER COLUMN */}
          <div>
            <h3 className="font-semibold text-white mb-6">
              Quick Links
            </h3>

            <ul className="space-y-3 text-sm">
              <li><a href="/" className="hover:text-white transition">Home</a></li>
              <li><a href="/services" className="hover:text-white transition">Services</a></li>
              <li><a href="/about" className="hover:text-white transition">About</a></li>
              <li><a href="/faq" className="hover:text-white transition">FAQ</a></li>
              <li><a href="/contact" className="hover:text-white transition">Contact</a></li>
              <li><a href="/instant-quote" className="hover:text-white transition">Instant Quote</a></li>
            </ul>
          </div>

          {/* RIGHT COLUMN */}
          <div>
            <h3 className="font-semibold text-white mb-6">
              Contact Info
            </h3>

            <div className="space-y-4 text-sm">

              <div>
                <p className="font-medium text-white text-lg">support@myscivo.com</p>
                <p className="text-gray-400 text-xs">
                  For general questions, support, or account inquiries
                </p>
              </div>

              <div>
                <p className="font-medium text-white text-lg">Office Hours</p>
                <p className="text-gray-400 text-xs">
                  Mon–Fri, 9:00 AM – 5:00 PM (Pacific)
                </p>
                <p className="text-[#19a38c] text-xs">
                  AI Receptionist: Handles inquiries 24/7
                </p>
              </div>

            </div>
          </div>

        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 my-10"></div>

        {/* BOTTOM SECTION */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 text-sm text-gray-400">
          <div>
            <p className="text-xs text-gray-400">SCIVO LLC © 2026 ALL RIGHTS RESERVED</p>
          </div>
          <div className="flex flex-wrap gap-6">
            <a href="/privacy" className="hover:text-white transition">Privacy & Cookies</a>
            <a href="/terms" className="hover:text-white transition">Terms & Conditions</a>
            <a href="/blog" className="hover:text-white transition">Blog</a>
            <a href="/sitemap" className="hover:text-white transition">Sitemap</a>
          </div>
        </div>

      </div>
    </footer>
  );
}

export default Footer;
