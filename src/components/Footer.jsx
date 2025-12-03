import React from 'react';
import { Link } from 'react-router-dom';
import { Leaf, Phone, Mail, MapPin, Facebook, Instagram, Youtube } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 pt-12 pb-6">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* About Column */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Leaf className="w-6 h-6 text-primary" />
              <span className="text-white font-bold text-lg">Lavaniya's Bio Farm</span>
            </div>
            <p className="text-sm mb-4">
              Premium mushroom products and cultivation training for sustainable agriculture. We combine natural farming with scientific methods.
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary transition" aria-label="Facebook">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary transition" aria-label="Instagram">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary transition" aria-label="YouTube">
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="hover:text-primary transition">Home</Link>
              </li>
              <li>
                <Link to="/products" className="hover:text-primary transition">Products</Link>
              </li>
              <li>
                <Link to="/training" className="hover:text-primary transition">Training Programs</Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-primary transition">About Us</Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-primary transition">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Products Column */}
          <div>
            <h3 className="text-white font-semibold mb-4">Our Products</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/products" className="hover:text-primary transition">Fresh Mushrooms</Link>
              </li>
              <li>
                <Link to="/products" className="hover:text-primary transition">Dried Mushrooms</Link>
              </li>
              <li>
                <Link to="/products" className="hover:text-primary transition">Grow Bags (Podha)</Link>
              </li>
              <li>
                <Link to="/products" className="hover:text-primary transition">Mushroom Spawn</Link>
              </li>
              <li>
                <Link to="/products" className="hover:text-primary transition">Cultivation Kits</Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contact Info</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <Phone className="w-4 h-4 mt-1 flex-shrink-0 text-primary" />
                <div>
                  <a href="tel:+919876543210" className="hover:text-primary transition">+91 98765 43210</a>
                  <br />
                  <a href="tel:+919876543211" className="hover:text-primary transition">+91 98765 43211</a>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="w-4 h-4 mt-1 flex-shrink-0 text-primary" />
                <a href="mailto:info@lavaniyasbiofarm.com" className="hover:text-primary transition">
                  info@lavaniyasbiofarm.com
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-1 flex-shrink-0 text-primary" />
                <span>Lavaniya's Bio Farm<br />Tamil Nadu, India</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
          <p>&copy; {currentYear} Lavaniya's Bio Farm. All rights reserved.</p>
          <div className="flex gap-6">
            <Link to="/privacy" className="hover:text-primary transition">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-primary transition">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;