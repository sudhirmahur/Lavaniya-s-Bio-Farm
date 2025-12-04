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
        className={`fixed w-full top-0 z-50 transition-all duration-500 ${
          scrolled 
            ? "backdrop-blur-xl bg-white/95 shadow-xl shadow-green-100/50 border-b border-green-100/50" 
            : "bg-gradient-to-b from-white to-white/80"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20 lg:h-24">
            {/* Logo Section */}
            <NavLink to="/" className="flex items-center gap-2 sm:gap-3 group relative z-10 flex-shrink-0">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-green-400 to-emerald-600 rounded-2xl blur-lg opacity-0 group-hover:opacity-30 transition-opacity duration-500" />
                <div className="relative bg-gradient-to-br from-green-50 to-emerald-50 p-1.5 sm:p-2 rounded-xl sm:rounded-2xl ring-2 ring-green-200/50 group-hover:ring-green-400/60 transition-all duration-300 group-hover:scale-105 group-hover:rotate-3">
                  <img src={logo} className="w-10 h-10 sm:w-12 sm:h-12 lg:w-16 lg:h-16 object-contain" alt="Lavaniya's Bio Farm" />
                </div>
              </div>
              <div className="hidden sm:block">
                <span className="text-base sm:text-lg lg:text-2xl font-bold bg-gradient-to-r from-green-800 via-green-700 to-emerald-700 bg-clip-text text-transparent block leading-tight group-hover:from-green-700 group-hover:to-emerald-600 transition-all duration-300">
                  Lavaniya's Bio Farm
                </span>
                <span className="text-xs lg:text-sm text-green-600/80 font-medium flex items-center gap-1.5 mt-0.5">
                  <Leaf className="w-3 h-3" />
                  Premium Organic Mushrooms
                </span>
              </div>
              <div className="block sm:hidden">
                <span className="text-sm font-bold bg-gradient-to-r from-green-800 to-emerald-700 bg-clip-text text-transparent">
                  Lavaniya's
                </span>
              </div>
            </NavLink>

            {/* Desktop Navigation - Hidden on mobile/tablet, shown on medium+ screens */}
            <nav className="hidden md:flex items-center gap-1 lg:gap-2">
              {navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  end
                  className={({ isActive }) =>
                    `px-3 lg:px-5 xl:px-6 py-2 lg:py-2.5 text-sm lg:text-base font-semibold rounded-lg lg:rounded-xl transition-all duration-300 relative group overflow-hidden ${
                      isActive
                        ? "text-white"
                        : "text-gray-700 hover:text-green-700"
                    }`
                  }
                >
                  {({ isActive }) => (
                    <>
                      <span className={`absolute inset-0 rounded-lg lg:rounded-xl transition-all duration-300 ${
                        isActive 
                          ? "bg-gradient-to-r from-green-600 to-emerald-600 scale-100" 
                          : "bg-gradient-to-r from-green-500 to-emerald-500 scale-0 group-hover:scale-100"
                      }`} />
                      <span className="relative z-10">{link.name}</span>
                      {!isActive && (
                        <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-green-600 transition-all duration-300 group-hover:w-3/4" />
                      )}
                    </>
                  )}
                </NavLink>
              ))}
            </nav>

            {/* CTA Button - Desktop/Tablet */}
            <div className="hidden md:flex items-center gap-1 lg:gap-2 flex-shrink-0">
              <a
                href="tel:+1234567890"
                className="hidden lg:flex items-center gap-2 px-3 lg:px-4 py-2 text-sm font-semibold text-green-700 hover:text-green-800 transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span>Call Us</span>
              </a>
              <a href="https://wa.me/1234567890" className="relative px-4 lg:px-6 py-2 lg:py-3 text-sm lg:text-base font-semibold text-white rounded-lg lg:rounded-xl overflow-hidden group shadow-lg shadow-green-600/30 hover:shadow-xl hover:shadow-green-600/40 transition-all duration-300">
                <span className="absolute inset-0 bg-gradient-to-r from-green-600 to-emerald-600" />
                <span className="absolute inset-0 bg-gradient-to-r from-emerald-600 to-green-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <span className="relative flex items-center gap-2">
                  <ShoppingBag className="w-4 h-4" />
                  <span className="hidden lg:inline">Shop Now</span>
                  <span className="lg:hidden">Shop</span>
                </span>
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden relative p-2 sm:p-3 rounded-lg sm:rounded-xl hover:bg-green-50 transition-all duration-300 group flex-shrink-0"
              aria-label="Toggle menu"
            >
              <div className="relative w-6 h-6">
                <Menu 
                  className={`absolute inset-0 w-6 h-6 text-gray-700 transition-all duration-300 ${
                    mobileMenuOpen ? 'opacity-0 rotate-180 scale-0' : 'opacity-100 rotate-0 scale-100'
                  }`}
                />
                <X 
                  className={`absolute inset-0 w-6 h-6 text-gray-700 transition-all duration-300 ${
                    mobileMenuOpen ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 -rotate-180 scale-0'
                  }`}
                />
              </div>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-40 md:hidden transition-all duration-500 ${
          mobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
        onClick={() => setMobileMenuOpen(false)}
      />

      {/* Mobile Navigation Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-full sm:w-80 bg-gradient-to-br from-white via-green-50/30 to-emerald-50/50 shadow-2xl z-50 md:hidden transform transition-all duration-500 ease-out ${
          mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Mobile Header */}
          <div className="flex items-center justify-between p-4 sm:p-6 border-b border-green-100">
            <div className="flex items-center gap-3">
              <div className="bg-gradient-to-br from-green-500 to-emerald-600 p-2 rounded-xl">
                <Leaf className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
              </div>
              <div>
                <h3 className="text-base sm:text-lg font-bold text-green-800">Menu</h3>
                <p className="text-xs text-green-600">Explore our offerings</p>
              </div>
            </div>
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 rounded-xl hover:bg-red-50 transition-colors group"
            >
              <X className="w-6 h-6 text-gray-700 group-hover:text-red-600 transition-colors" />
            </button>
          </div>

          {/* Mobile Navigation Links */}
          <nav className="flex-1 overflow-y-auto p-4 sm:p-6">
            <div className="flex flex-col gap-2">
              {navLinks.map((link, index) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  end
                  onClick={() => setMobileMenuOpen(false)}
                  className={({ isActive }) =>
                    `group relative px-4 sm:px-5 py-3 sm:py-4 rounded-xl sm:rounded-2xl text-sm sm:text-base font-semibold transition-all duration-300 transform hover:scale-105 ${
                      isActive
                        ? "bg-gradient-to-r from-green-600 to-emerald-600 text-white shadow-lg shadow-green-600/30"
                        : "text-gray-700 hover:bg-white hover:shadow-md"
                    }`
                  }
                  style={{
                    transitionDelay: mobileMenuOpen ? `${index * 50}ms` : '0ms'
                  }}
                >
                  {({ isActive }) => (
                    <>
                      <span className="relative z-10 flex items-center justify-between">
                        {link.name}
                        <span className={`w-2 h-2 rounded-full transition-all duration-300 ${
                          isActive ? 'bg-white scale-100' : 'bg-green-600 scale-0 group-hover:scale-100'
                        }`} />
                      </span>
                      {!isActive && (
                        <span className="absolute inset-0 border-2 border-green-600/0 group-hover:border-green-600/20 rounded-xl sm:rounded-2xl transition-all duration-300" />
                      )}
                    </>
                  )}
                </NavLink>
              ))}
            </div>
          </nav>

          {/* Mobile CTA Section */}
          <div className="p-4 sm:p-6 border-t border-green-100 space-y-3 bg-gradient-to-t from-white to-transparent">
            <a
              href="tel:+1234567890"
              className="flex items-center justify-center gap-2 w-full px-4 sm:px-6 py-3 sm:py-4 text-sm font-semibold text-green-700 bg-white border-2 border-green-600 rounded-xl sm:rounded-2xl hover:bg-green-50 transition-all duration-300 shadow-md hover:shadow-lg"
            >
              <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
              <span>Call Us Now</span>
            </a>
            <button className="relative w-full px-4 sm:px-6 py-3 sm:py-4 text-sm sm:text-base font-semibold text-white rounded-xl sm:rounded-2xl overflow-hidden group shadow-lg shadow-green-600/30 hover:shadow-xl hover:shadow-green-600/40 transition-all duration-300">
              <span className="absolute inset-0 bg-gradient-to-r from-green-600 to-emerald-600" />
              <span className="absolute inset-0 bg-gradient-to-r from-emerald-600 to-green-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <span className="relative flex items-center justify-center gap-2">
                <ShoppingBag className="w-4 h-4 sm:w-5 sm:h-5" />
                Shop Our Products
              </span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}