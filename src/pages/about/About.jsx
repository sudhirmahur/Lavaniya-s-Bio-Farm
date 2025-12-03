import React from "react";
import { 
  Leaf, Heart, Award, Users, Sprout, TrendingUp, Target, Eye, 
  CheckCircle, ArrowRight, Star, Shield, Zap, Globe, Smile,
  ThumbsUp, Briefcase, BookOpen, Package, Truck, Clock, MessageCircle
} from "lucide-react";
import SEO from "../../components/SEO";

export default function About() {
  const stats = [
    { icon: Users, number: "1000+", label: "Happy Customers", color: "from-blue-500 to-blue-600" },
    { icon: Award, number: "5+", label: "Years Experience", color: "from-green-500 to-green-600" },
    { icon: Package, number: "50+", label: "Products", color: "from-purple-500 to-purple-600" },
    { icon: Globe, number: "100%", label: "Organic & Natural", color: "from-orange-500 to-orange-600" }
  ];

  const values = [
    {
      icon: Heart,
      title: "Passion",
      description: "Deep commitment to sustainable agriculture and healthy living through natural practices"
    },
    {
      icon: Award,
      title: "Quality",
      description: "Uncompromising standards in every product we deliver to our valued customers"
    },
    {
      icon: Users,
      title: "Community",
      description: "Building lasting relationships with farmers, customers, and partners"
    },
    {
      icon: Sprout,
      title: "Innovation",
      description: "Blending traditional farming wisdom with cutting-edge modern techniques"
    }
  ];

  const products = [
    {
      icon: Leaf,
      title: "Fresh Oyster Mushrooms",
      description: "Premium quality fresh oyster mushrooms grown using eco-friendly methods",
      benefits: ["Boosts immunity", "High in protein", "Rich in vitamins B, D", "Full of antioxidants"],
      color: "from-green-100 to-green-200",
      iconColor: "text-green-600"
    },
    {
      icon: Package,
      title: "Ready-Made Grow Bags",
      description: "Perfect for home gardening, small businesses, and educational projects",
      benefits: ["Easy to maintain", "High-yield production", "All-season suitable", "Beginner friendly"],
      color: "from-blue-100 to-blue-200",
      iconColor: "text-blue-600"
    },
    {
      icon: Zap,
      title: "Mushroom Spawn",
      description: "High-grade spawn using sterile laboratory techniques",
      benefits: ["Fast colonization", "High productivity", "Bulk cultivation ready", "Quality assured"],
      color: "from-purple-100 to-purple-200",
      iconColor: "text-purple-600"
    },
    {
      icon: BookOpen,
      title: "Training & Support",
      description: "Complete guidance from beginner to advanced cultivation",
      benefits: ["Expert training", "Farm setup help", "Market knowledge", "Ongoing support"],
      color: "from-orange-100 to-orange-200",
      iconColor: "text-orange-600"
    }
  ];

  const team = [
    {
      name: "Rajesh Kumar",
      role: "Founder & Chief Cultivator",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
      quote: "Growing nature's best with science and care"
    },
    {
      name: "Priya Sharma",
      role: "Quality Control Manager",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
      quote: "Every mushroom meets our highest standards"
    },
    {
      name: "Amit Verma",
      role: "Training Head",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop",
      quote: "Empowering farmers with knowledge and skills"
    }
  ];

  const testimonials = [
    {
      name: "Ramesh Patel",
      business: "Restaurant Owner, Delhi",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop",
      rating: 5,
      text: "Best quality mushrooms! Fresh delivery every time. Our customers love the taste and freshness."
    },
    {
      name: "Sunita Devi",
      business: "Home Farmer, Ghaziabad",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop",
      rating: 5,
      text: "Their training program changed my life. Now I run a successful small mushroom business from home!"
    },
    {
      name: "Vikram Singh",
      business: "Organic Store Owner",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=100&h=100&fit=crop",
      rating: 5,
      text: "Reliable supplier with consistent quality. Their organic certification makes customers trust our products."
    }
  ];

  const whyChooseUs = [
    { icon: Shield, text: "100% Natural & Organic Products" },
    { icon: Award, text: "Certified Quality Standards" },
    { icon: Users, text: "Expert Training & Support" },
    { icon: Truck, text: "Reliable Bulk Supply Available" },
    { icon: ThumbsUp, text: "Consistent High Quality" },
    { icon: Clock, text: "24/7 Customer Support" }
  ];

  return (
    <>
      <SEO 
        title="About — Lavaniya's Bio Farm" 
        description="About Lavaniya's Bio Farm — natural farming, farm to table mushrooms, training & bulk supply." 
      />
      
      <div className="min-h-screen bg-gradient-to-br from-gray-50 via-green-50/30 to-gray-50">
        {/* Hero Section */}
        <div className="relative bg-gradient-to-br from-green-700 via-green-600 to-green-800 text-white py-24 overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-0 right-0 w-96 h-96 bg-green-500/30 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-green-400/20 rounded-full blur-3xl"></div>
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-5 py-2 rounded-full mb-6 hover:bg-white/30 transition">
                <Leaf className="w-4 h-4" />
                <span className="text-sm font-medium">Our Story</span>
              </div>
              
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
                About Us
                <span className="block text-green-300 mt-2">Lavaniya's Bio Farm</span>
              </h1>
              
              <p className="text-lg md:text-xl text-green-100 leading-relaxed max-w-3xl mx-auto">
                Combining natural farming with scientific methods to deliver premium-quality 
                mushrooms and support sustainable agriculture since 2019.
              </p>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 -mt-16 relative z-20 pb-16">
          {/* Stats Cards */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div 
                  key={index} 
                  className="bg-white rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 transform group"
                >
                  <div className={`bg-gradient-to-br ${stat.color} w-16 h-16 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-lg`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-4xl font-bold text-gray-900 mb-1">{stat.number}</div>
                  <div className="text-gray-600 text-sm">{stat.label}</div>
                </div>
              );
            })}
          </div>

          {/* Introduction */}
          <div className="max-w-5xl mx-auto mb-20">
            <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12">
              <div className="flex items-center gap-4 mb-8">
                <div className="bg-gradient-to-br from-green-500 to-green-600 p-4 rounded-2xl shadow-lg">
                  <Sprout className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Who We Are</h2>
                  <p className="text-green-600 font-semibold">Growing Excellence Since 2019</p>
                </div>
              </div>
              
              <div className="prose prose-lg max-w-none">
                <p className="text-gray-700 leading-relaxed mb-6 text-lg">
                  At <span className="font-bold text-green-700">Lavaniya's Bio Farm</span>, we are pioneers 
                  in organic mushroom cultivation, dedicated to providing the highest quality mushrooms and 
                  cultivation materials. We focus on purity, nutrition, and sustainable farming practices — 
                  serving homes, restaurants, and businesses across India.
                </p>
                
                <p className="text-gray-700 leading-relaxed mb-6">
                  Our journey began with a simple yet powerful mission: to make fresh, nutritious mushrooms 
                  accessible to everyone while supporting sustainable agriculture and empowering local farmers. 
                  Today, we're proud to be a trusted name in the industry, known for our exceptional quality 
                  products and comprehensive training programs.
                </p>

                <p className="text-gray-700 leading-relaxed">
                  We combine traditional farming wisdom with cutting-edge scientific methods to ensure every 
                  mushroom that leaves our farm meets the highest standards of quality, freshness, and nutrition.
                </p>
              </div>
            </div>
          </div>

          {/* Mission & Vision */}
          <div className="grid lg:grid-cols-2 gap-8 mb-20 max-w-6xl mx-auto">
            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-3xl p-10 border-2 border-green-200 shadow-xl hover:shadow-2xl transition group">
              <div className="bg-gradient-to-br from-green-500 to-green-600 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg">
                <Target className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Our Mission</h3>
              
              <p className="text-gray-700 leading-relaxed text-lg">
                To promote healthy living through responsible, natural mushroom cultivation while 
                empowering farmers with knowledge, resources, and support to succeed in sustainable 
                agriculture and build profitable businesses.
              </p>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-3xl p-10 border-2 border-blue-200 shadow-xl hover:shadow-2xl transition group">
              <div className="bg-gradient-to-br from-blue-500 to-blue-600 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg">
                <Eye className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Our Vision</h3>
              
              <p className="text-gray-700 leading-relaxed text-lg">
                To become India's most trusted mushroom farm, setting the standard for quality, 
                sustainability, and innovation in organic agriculture while creating a positive 
                impact on communities and promoting environmental consciousness.
              </p>
            </div>
          </div>

          {/* Core Values */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Core Values</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">The principles that guide everything we do</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {values.map((value, index) => {
                const Icon = value.icon;
                return (
                  <div 
                    key={index} 
                    className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 transform group"
                  >
                    <div className="bg-gradient-to-br from-green-100 to-green-200 w-16 h-16 rounded-2xl flex items-center justify-center mb-4 group-hover:from-green-500 group-hover:to-green-600 transition shadow-lg">
                      <Icon className="w-8 h-8 text-green-700 group-hover:text-white transition" />
                    </div>
                    
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{value.description}</p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Products & Services */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-green-100 px-4 py-2 rounded-full mb-4">
                <Package className="w-4 h-4 text-green-700" />
                <span className="text-sm font-semibold text-green-700">What We Offer</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Products & Services</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">Comprehensive solutions for mushroom cultivation and business</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {products.map((product, index) => {
                const Icon = product.icon;
                return (
                  <div 
                    key={index} 
                    className={`bg-gradient-to-br ${product.color} rounded-3xl p-8 border-2 border-gray-200 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 transform`}
                  >
                    <div className="flex items-start gap-4 mb-6">
                      <div className="bg-white p-3 rounded-2xl shadow-lg">
                        <Icon className={`w-8 h-8 ${product.iconColor}`} />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">{product.title}</h3>
                        <p className="text-gray-700 text-sm">{product.description}</p>
                      </div>
                    </div>

                    <div className="space-y-2">
                      {product.benefits.map((benefit, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                          <span className="text-gray-700 text-sm">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Why Choose Us */}
          <div className="mb-20 max-w-5xl mx-auto">
            <div className="bg-gradient-to-br from-green-700 via-green-600 to-green-800 rounded-3xl p-10 md:p-12 text-white shadow-2xl">
              <div className="text-center mb-10">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Lavaniya's Bio Farm?</h2>
                <p className="text-green-100">Join thousands of satisfied customers and farmers</p>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                {whyChooseUs.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <div key={index} className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-xl p-4 hover:bg-white/20 transition group">
                      <div className="bg-white/20 p-2 rounded-lg group-hover:scale-110 transition-transform">
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <span className="text-white font-medium">{item.text}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Team Section */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-blue-100 px-4 py-2 rounded-full mb-4">
                <Users className="w-4 h-4 text-blue-700" />
                <span className="text-sm font-semibold text-blue-700">Our Team</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Meet Our Experts</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">Passionate professionals dedicated to excellence</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {team.map((member, index) => (
                <div 
                  key={index} 
                  className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 transform overflow-hidden group"
                >
                  <div className="relative h-64 overflow-hidden">
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
                    <p className="text-green-600 font-semibold text-sm mb-3">{member.role}</p>
                    <p className="text-gray-600 text-sm italic">"{member.quote}"</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Testimonials */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-yellow-100 px-4 py-2 rounded-full mb-4">
                <Star className="w-4 h-4 text-yellow-600 fill-yellow-600" />
                <span className="text-sm font-semibold text-yellow-700">Testimonials</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">What Our Clients Say</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">Real feedback from our valued customers</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {testimonials.map((testimonial, index) => (
                <div 
                  key={index} 
                  className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 transform"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name}
                      className="w-16 h-16 rounded-full object-cover border-4 border-green-100"
                    />
                    <div>
                      <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                      <p className="text-xs text-gray-600">{testimonial.business}</p>
                    </div>
                  </div>

                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>

                  <p className="text-gray-700 text-sm leading-relaxed italic">"{testimonial.text}"</p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center max-w-3xl mx-auto">
            <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-3xl shadow-2xl p-10 md:p-12 border-2 border-green-200">
              <Smile className="w-16 h-16 text-green-600 mx-auto mb-6" />
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Join Our Growing Community!</h2>
              <p className="text-gray-700 mb-8 text-lg leading-relaxed">
                Become part of the mushroom revolution. Whether you're a home gardener, 
                restaurant owner, or aspiring farmer, we're here to support your journey.
              </p>

              <div className="flex flex-wrap gap-4 justify-center">
                <button className="bg-gradient-to-r from-green-600 to-green-700 text-white px-8 py-4 rounded-full font-semibold hover:from-green-700 hover:to-green-800 transition flex items-center gap-2 shadow-lg hover:shadow-xl">
                  <MessageCircle className="w-5 h-5" />
                  Contact Us Today
                </button>
                <button className="border-2 border-green-600 text-green-700 px-8 py-4 rounded-full font-semibold hover:bg-green-50 transition flex items-center gap-2">
                  View Our Products
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}