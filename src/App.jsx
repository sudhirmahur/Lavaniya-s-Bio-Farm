// src/App.jsx
import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import AppRoutes from "./routes/AppRoutes"; // <- new central routes file
import "./styles/globals.css";

export default function App() {
  return (
    <>
    <div className="min-h-screen bg-cream text-slate-900 py-16 ">
      <Header  />

      <main className="container mx-auto px-4 py-8">
        <AppRoutes />
      </main>

      
    </div>
    <Footer />
    </>
  );
}
