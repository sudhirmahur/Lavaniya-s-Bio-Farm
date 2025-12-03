// src/routes/AppRoutes.jsx
import React, { Suspense, lazy } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

/* Lazy-loaded pages */
const Home = lazy(() => import("../pages/home/Home"));
const Products = lazy(() => import("../pages/products/Products"));
const ProductDetail = lazy(() => import("../pages/products/ProductDetail"));
const About = lazy(() => import("../pages/about/About"));
const Training = lazy(() => import("../pages/training/Training"));
const Contact = lazy(() => import("../pages/contact/Contact"));

function LoadingFallback() {
  return (
    <div className="w-full py-20 flex items-center justify-center">
      <div className="text-center">
        <div className="animate-spin rounded-full h-10 w-10 border-4 border-primary border-t-transparent mx-auto" />
        <p className="mt-3 text-sm text-muted">Loading...</p>
      </div>
    </div>
  );
}

export default function AppRoutes() {
  return (
    <Suspense fallback={<LoadingFallback />}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:slug" element={<ProductDetail />} />
        <Route path="/about" element={<About />} />
        <Route path="/training" element={<Training />} />
        <Route path="/contact" element={<Contact />} />

        <Route path="/home" element={<Navigate to="/" replace />} />

        <Route
          path="*"
          element={
            <div className="min-h-[60vh] flex items-center justify-center">
              <div className="text-center">
                <h2 className="text-2xl font-semibold">Page not found</h2>
                <p className="mt-2 text-sm text-muted">We couldn't find that page.</p>
                <a className="inline-block mt-4 px-4 py-2 bg-primary text-white rounded" href="/">
                  Go to home
                </a>
              </div>
            </div>
          }
        />
      </Routes>
    </Suspense>
  );
}
