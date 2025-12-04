import { useState, useEffect } from "react";
import {
  CheckCircle,
  Sprout,
  Award,
  ChevronRight,
  Leaf,
  Star,
  TrendingUp,
  Shield,
  Zap,
} from "lucide-react";
import { Link } from "react-router-dom";

const Hero = ({ setCurrentPage }) => {
  const [currentImage, setCurrentImage] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const images = [
    "https://images.unsplash.com/photo-1628773822503-930a7eaecf80?w=800&h=600&fit=crop",
    "https://images.unsplash.com/photo-1614971195389-731954c46fcd?w=800&h=600&fit=crop",
    "https://images.unsplash.com/photo-1615485500704-8e990f9900f7?w=800&h=600&fit=crop",
    "https://images.unsplash.com/photo-1595599512948-b9831e5fc11c?w=800&h=600&fit=crop",
    "https://images.unsplash.com/photo-1509358271058-acd22cc93898?w=800&h=600&fit=crop",
  ];

  const stats = [
    { icon: Sprout, value: "100%", label: "Natural", color: "green" },
    { icon: Award, value: "5+", label: "Years", color: "emerald" },
    { icon: Star, value: "1000+", label: "Customers", color: "green" },
    { icon: TrendingUp, value: "50+", label: "Products", color: "emerald" },
  ];

  const features = [
    { icon: Shield, text: "Certified Organic" },
    { icon: Leaf, text: "Eco-Friendly" },
    { icon: Zap, text: "Fast Delivery" },
  ];

  const words = ["Premium", "Organic", "Fresh", "Natural", "Healthy"];
  const [currentWord, setCurrentWord] = useState(0);

  useEffect(() => {
    setIsVisible(true);
    const imageTimer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 4000);

    const wordTimer = setInterval(() => {
      setCurrentWord((prev) => (prev + 1) % words.length);
    }, 2500);

    return () => {
      clearInterval(imageTimer);
      clearInterval(wordTimer);
    };
  }, []);

  return (
    <section className="relative bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 pt-20 md:pt-24 lg:pt-28 pb-12 md:pb-16 lg:pb-20 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-green-500/10 rounded-full blur-3xl animate-pulse"></div>
      <div
        className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-emerald-600/10 rounded-full blur-3xl animate-pulse"
        style={{ animationDelay: "1s" }}
      ></div>
      <div
        className="absolute top-1/2 left-1/2 w-64 h-64 bg-teal-500/10 rounded-full blur-3xl animate-pulse"
        style={{ animationDelay: "2s" }}
      ></div>

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-green-500/20 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${5 + Math.random() * 10}s`,
            }}
          ></div>
        ))}
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 ">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <div
            className={`space-y-4 md:space-y-6 transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            {/* Badge */}
            <div className="inline-flex items-center bg-gradient-to-r from-green-100 to-emerald-100 text-green-700 px-4 py-2 rounded-full text-xs md:text-sm font-semibold shadow-md hover:shadow-lg transition-all cursor-pointer hover:scale-105">
              <Leaf className="w-3 h-3 md:w-4 md:h-4 mr-2 animate-pulse" />
              Premium Organic Mushrooms
            </div>

            {/* Animated Heading */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-4xl font-bold text-gray-900 leading-tight">
              <span className="inline-block animate-fadeIn">Discover</span>{" "}
              <span className="relative inline-block">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-600 animate-gradient">
                  {words[currentWord]}
                </span>
              </span>
              <br />
              <span className="text-gray-900 mt-2 block">Mushrooms at</span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-700 via-emerald-600 to-teal-600">
                Lavaniya's Bio Farm
              </span>
            </h1>

            {/* Description */}
            <p
              className="text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed max-w-xl animate-fadeIn"
              style={{ animationDelay: "0.2s" }}
            >
              Welcome to Lavaniya’s Bio Farm At Lavaniya’s Bio Farm, we combine
              natural farming practices with scientific methods to deliver
              premium-quality mushrooms and support sustainable agriculture. We
              focus on purity, nutrition, and high productivity.
            </p>

            {/* Features Pills */}
            <div
              className="flex flex-wrap gap-2 md:gap-3 animate-fadeIn"
              style={{ animationDelay: "0.4s" }}
            >
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div
                    key={index}
                    className="flex items-center gap-1.5 bg-white/80 backdrop-blur-sm px-3 py-1.5 rounded-full text-xs md:text-sm text-gray-700 shadow-md hover:shadow-lg transition-all hover:scale-105 cursor-pointer"
                  >
                    <Icon className="w-3 h-3 md:w-4 md:h-4 text-green-600" />
                    {feature.text}
                  </div>
                );
              })}
            </div>

            {/* CTA Buttons */}
            <div
              className="flex flex-col sm:flex-row gap-3 pt-2 animate-fadeIn"
              style={{ animationDelay: "0.6s" }}
            >
              <Link to="/products">
                <button
                  className="group bg-gradient-to-r from-green-600 to-emerald-600 text-white px-6 md:px-8 py-3 md:py-3.5 rounded-xl font-semibold hover:from-green-700 hover:to-emerald-700 transition-all flex items-center justify-center gap-2 shadow-lg hover:shadow-2xl transform hover:scale-105 text-sm md:text-base"
                >
                  Shop Products
                  <ChevronRight className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </Link>
               <Link to="/about">
              <button
                onClick={() => setCurrentPage?.("training")}
                className="group border-2 border-green-600 text-green-700 px-6 md:px-8 py-3 md:py-3.5 rounded-xl font-semibold hover:bg-green-600 hover:text-white transition-all shadow-md hover:shadow-xl transform hover:scale-105 text-sm md:text-base"
              >
                Learn Cultivation
              </button>
              </Link>
            </div>

            {/* Stats Grid */}
            <div
              className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 pt-4 animate-fadeIn"
              style={{ animationDelay: "0.8s" }}
            >
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <div
                    key={index}
                    className="group relative text-center p-4 md:p-5 rounded-2xl bg-gradient-to-br from-white/90 to-white/70 backdrop-blur-sm shadow-lg hover:shadow-2xl transition-all transform hover:scale-105 cursor-pointer overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 to-emerald-500/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    <Icon className="w-6 h-6 md:w-7 md:h-7 mx-auto mb-2 text-green-600 relative z-10 group-hover:scale-110 transition-transform" />
                    <div className="font-bold text-xl md:text-2xl text-gray-900 relative z-10">
                      {stat.value}
                    </div>
                    <div className="text-xs md:text-sm text-gray-600 relative z-10">
                      {stat.label}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Image Gallery */}
          <div
            className={`relative transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-10"
            }`}
          >
            {/* Main Image Container */}
            <div className="relative h-[400px] sm:h-[400px] lg:h-[500px] rounded-3xl overflow-hidden shadow-xl  lg:mb-20">
              {images.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt={`Mushroom ${index + 1}`}
                  className={`absolute inset-0 w-full h-full object-cover transition-all duration-1000 ${
                    index === currentImage
                      ? "opacity-100 scale-100"
                      : "opacity-0 scale-110"
                  }`}
                />
              ))}

              {/* Image Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>

              {/* Image Counter */}

              {/* <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-full text-sm font-semibold text-gray-900 shadow-lg">
                {currentImage + 1} / {images.length}
              </div> */}

              {/* Thumbnail Navigation */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
                {images.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImage(index)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      index === currentImage
                        ? "bg-white w-8"
                        : "bg-white/50 hover:bg-white/75"
                    }`}
                  ></button>
                ))}
              </div>
            </div>

            {/* Floating Badge */}
            <div className="absolute -bottom-4 -left-4 sm:-bottom-6 sm:-left-6 bg-gradient-to-br from-white to-green-50 p-4 sm:p-5 md:p-6 rounded-2xl shadow-2xl z-20 max-w-[180px] sm:max-w-[220px] backdrop-blur-sm border border-green-100 animate-float">
              <div className="flex items-center gap-2 sm:gap-3">
                <div className="bg-gradient-to-br from-green-500 to-emerald-500 p-2 sm:p-2.5 md:p-3 rounded-xl shadow-lg">
                  <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-white" />
                </div>
                <div>
                  <p className="font-bold text-gray-900 text-sm sm:text-base md:text-lg">
                    100% Natural
                  </p>
                  <p className="text-xs sm:text-sm text-gray-600">
                    Certified Organic
                  </p>
                </div>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-4 -right-4 sm:-top-6 sm:-right-6 w-24 h-24 sm:w-32 sm:h-32 bg-gradient-to-br from-green-500/30 to-emerald-500/30 rounded-full blur-2xl animate-pulse"></div>
            <div
              className="absolute top-1/2 -left-8 w-16 h-16 bg-teal-500/20 rounded-full blur-xl animate-pulse"
              style={{ animationDelay: "1s" }}
            ></div>
          </div>
        </div>

        {/* Bottom Trust Indicators */}
        <div className="mt-12 md:mt-16 flex flex-wrap justify-center items-center gap-6 md:gap-8 opacity-60 hover:opacity-100 transition-opacity">
          <div className="flex items-center gap-2 text-gray-600 text-sm">
            <Shield className="w-4 h-4" />
            <span>Certified Quality</span>
          </div>
          <div className="w-px h-6 bg-gray-300"></div>
          <div className="flex items-center gap-2 text-gray-600 text-sm">
            <Star className="w-4 h-4" />
            <span>5-Star Rated</span>
          </div>
          <div className="w-px h-6 bg-gray-300"></div>
          <div className="flex items-center gap-2 text-gray-600 text-sm">
            <TrendingUp className="w-4 h-4" />
            <span>Trusted by 1000+</span>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0) rotate(0deg);
          }
          25% {
            transform: translateY(-20px) rotate(5deg);
          }
          50% {
            transform: translateY(-10px) rotate(-5deg);
          }
          75% {
            transform: translateY(-15px) rotate(3deg);
          }
        }

        @keyframes gradient {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.8s ease-out forwards;
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }

        .animate-gradient {
          background-size: 200% auto;
          animation: gradient 3s ease infinite;
        }
      `}</style>
    </section>
  );
};

export default Hero;
