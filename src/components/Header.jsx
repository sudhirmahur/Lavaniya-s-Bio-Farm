import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Leaf, Menu, X, ShoppingBag, Phone } from 'lucide-react';
import logo from '../assets/logo1.png';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Products', path: '/products' },
    { name: 'About', path: '/about' },
    { name: 'Training', path: '/training' },
    { name: 'Contact', path: '/contact' },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  return (
    <>
      <header
        className={`fixed w-full top-0 z-50 transition-all duration-300 ${
          scrolled 
            ? "backdrop-blur-xl bg-white/95 shadow-lg border-b border-green-100/50" 
            : "bg-white"
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo Section - Left Side */}
            <NavLink to="/" className="flex items-center gap-2 sm:gap-3 group flex-shrink-0">
              <div className="relative">
                <div className="  sm:p-2  transition-all duration-300">
                  <img src={logo} className="w-13 h-13 sm:w-15 sm:h-15 lg:w-15 lg:h-15 object-contain" alt="Lavaniya's Bio Farm" />
                </div>
              </div>
              <div>
                <span className="text-sm sm:text-base lg:text-xl font-bold bg-gradient-to-r from-green-800 to-emerald-700 bg-clip-text text-transparent block leading-tight">
                  Lavaniya's Bio Farm
                </span>
                <span className="hidden sm:flex text-xs text-green-600/80 font-medium items-center gap-1 mt-0.5">
                  <Leaf className="w-2.5 h-2.5" />
                  Premium Organic Mushrooms
                </span>
              </div>
            </NavLink>

            {/* Right Side - Navigation + Buttons */}
            <div className="flex items-center gap-1">
              {/* Desktop Navigation */}
              <nav className="hidden md:flex items-center gap-1">
                {navLinks.map((link) => (
                  <NavLink
                    key={link.path}
                    to={link.path}
                    end
                    className={({ isActive }) =>
                      `px-3 lg:px-4 py-2 text-sm lg:text-base font-semibold rounded-lg transition-all duration-300 ${
                        isActive
                          ? "bg-gradient-to-r from-green-600 to-emerald-600 text-white"
                          : "text-gray-700 hover:text-green-700 hover:bg-green-50"
                      }`
                    }
                  >
                    {link.name}
                  </NavLink>
                ))}
              </nav>

              {/* Desktop CTA Buttons */}
              <div className="hidden md:flex items-center gap-1 ml-2">
                <a
                  href="tel:+1234567890"
                  className="hidden lg:flex items-center gap-2 px-3 py-2 text-sm font-semibold text-green-700 hover:text-green-800 hover:bg-green-50 rounded-lg transition-all"
                >
                  <Phone className="w-4 h-4" />
                  <span>Call</span>
                </a>
                <a 
                  href="https://wa.me/1234567890" 
                  className="flex items-center gap-2 px-4 lg:px-5 py-2 text-sm lg:text-base font-semibold text-white bg-gradient-to-r from-green-600 to-emerald-600 hover:from-emerald-600 hover:to-green-600 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg"
                >
                  <ShoppingBag className="w-4 h-4" />
                  <span>Shop</span>
                </a>
              </div>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden p-2 rounded-lg hover:bg-green-50 transition-all ml-2"
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? (
                  <X className="w-6 h-6 text-gray-700" />
                ) : (
                  <Menu className="w-6 h-6 text-gray-700" />
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-40 md:hidden transition-all duration-300 ${
          mobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
        onClick={() => setMobileMenuOpen(false)}
      />

      {/* Mobile Navigation Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-full sm:w-80 bg-white shadow-2xl z-50 md:hidden transform transition-transform duration-300 ${
          mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Mobile Header */}
          <div className="flex items-center justify-between p-4 sm:p-6 border-b border-green-100">
            <div className="flex items-center gap-3">
              <div className="bg-gradient-to-br from-green-500 to-emerald-600 p-2 rounded-xl">
                <Leaf className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="text-base sm:text-lg font-bold text-green-800">Menu</h3>
                <p className="text-xs text-green-600">Explore our offerings</p>
              </div>
            </div>
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 rounded-xl hover:bg-red-50 transition-colors"
            >
              <X className="w-6 h-6 text-gray-700" />
            </button>
          </div>

          {/* Mobile Navigation Links */}
          <nav className="flex-1 overflow-y-auto p-4 sm:p-6">
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  end
                  onClick={() => setMobileMenuOpen(false)}
                  className={({ isActive }) =>
                    `px-4 sm:px-5 py-3 sm:py-4 rounded-xl text-sm sm:text-base font-semibold transition-all duration-300 ${
                      isActive
                        ? "bg-gradient-to-r from-green-600 to-emerald-600 text-white shadow-lg"
                        : "text-gray-700 hover:bg-green-50"
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              ))}
            </div>
          </nav>

          {/* Mobile CTA Section */}
          <div className="p-4 sm:p-6 border-t border-green-100 space-y-3">
            <a
              href="tel:+1234567890"
              className="flex items-center justify-center gap-2 w-full px-4 sm:px-6 py-3 sm:py-4 text-sm font-semibold text-green-700 bg-white border-2 border-green-600 rounded-xl hover:bg-green-50 transition-all"
            >
              <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
              <span>Call Us Now</span>
            </a>
            <a
              href="https://wa.me/1234567890"
              className="flex items-center justify-center gap-2 w-full px-4 sm:px-6 py-3 sm:py-4 text-sm sm:text-base font-semibold text-white bg-gradient-to-r from-green-600 to-emerald-600 hover:from-emerald-600 hover:to-green-600 rounded-xl transition-all shadow-lg"
            >
              <ShoppingBag className="w-4 h-4 sm:w-5 sm:h-5" />
              Shop Our Products
            </a>
          </div>
        </div>
      </div>
    </>
  );
}