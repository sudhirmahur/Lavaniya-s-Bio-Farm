import React, { useState } from "react";
import { 
  Phone, Mail, MapPin, Clock, Send, CheckCircle, 
  Facebook, Instagram, Twitter, MessageCircle, Leaf,
  User, MessageSquare, Calendar, Building, ArrowRight,
  Sparkles, HeartHandshake, Star, Globe
} from "lucide-react";
import SEO from "../../components/SEO";

export default function Contact() {
  const [form, setForm] = useState({ 
    name: "", 
    phone: "", 
    email: "", 
    subject: "",
    message: "" 
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      console.log("Contact form:", form);
      setLoading(false);
      setSubmitted(true);
      
      setTimeout(() => {
        setSubmitted(false);
        setForm({ name: "", phone: "", email: "", subject: "", message: "" });
      }, 4000);
    }, 1500);
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Call Us",
      details: ["+91 98765 43210", "+91 98765 43211"],
      color: "from-green-500 to-green-600",
      bgColor: "bg-green-50",
      link: "tel:+919876543210"
    },
    {
      icon: Mail,
      title: "Email Us",
      details: ["info@lavaniyabiofarm.com", "support@lavaniyabiofarm.com"],
      color: "from-blue-500 to-blue-600",
      bgColor: "bg-blue-50",
      link: "mailto:info@lavaniyabiofarm.com"
    },
    {
      icon: MapPin,
      title: "Visit Us",
      details: ["Ghaziabad, Uttar Pradesh", "India - 201001"],
      color: "from-purple-500 to-purple-600",
      bgColor: "bg-purple-50",
      link: "#map"
    },
    {
      icon: Clock,
      title: "Working Hours",
      details: ["Mon - Sat: 9:00 AM - 6:00 PM", "Sunday: Closed"],
      color: "from-orange-500 to-orange-600",
      bgColor: "bg-orange-50"
    }
  ];

  const socialLinks = [
    { 
      icon: Facebook, 
      label: "Facebook", 
      color: "hover:bg-blue-600",
      followers: "2.5K"
    },
    { 
      icon: Instagram, 
      label: "Instagram", 
      color: "hover:bg-pink-600",
      followers: "5.2K"
    },
    { 
      icon: Twitter, 
      label: "Twitter", 
      color: "hover:bg-blue-400",
      followers: "1.8K"
    },
    { 
      icon: MessageCircle, 
      label: "WhatsApp", 
      color: "hover:bg-green-600",
      followers: "Active"
    }
  ];

  const reasons = [
    {
      icon: Building,
      title: "Product Inquiries",
      description: "Ask about our fresh mushrooms, spawn, and cultivation materials"
    },
    {
      icon: Calendar,
      title: "Training Programs",
      description: "Enroll in our professional mushroom cultivation courses"
    },
    {
      icon: HeartHandshake,
      title: "Partnership",
      description: "Explore business collaboration opportunities"
    },
    {
      icon: Globe,
      title: "Bulk Orders",
      description: "Get quotes for restaurant and wholesale supplies"
    }
  ];

  return (
    <>
      <SEO 
        title="Contact — Lavaniya's Bio Farm" 
        description="Contact Lavaniya's Bio Farm for orders, training and enquiries." 
      />
      
      <div className="min-h-screen bg-gradient-to-br from-gray-50 via-green-50/30 to-gray-50">
        {/* Hero Section */}
        <div className="relative bg-gradient-to-br from-green-700 via-green-600 to-green-800 text-white py-24 overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-0 right-0 w-96 h-96 bg-green-500/30 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-green-400/20 rounded-full blur-3xl"></div>
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-5 py-2 rounded-full mb-6 hover:bg-white/30 transition">
                <Sparkles className="w-4 h-4 animate-pulse" />
                <span className="text-sm font-medium">We're Here to Help</span>
              </div>
              
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
                Get in Touch
                <span className="block text-green-300 mt-2">Let's Connect</span>
              </h1>
              
              <p className="text-lg md:text-xl text-green-100 leading-relaxed max-w-2xl mx-auto">
                Have questions? Need support? We're always ready to help you succeed 
                in your mushroom farming journey.
              </p>

              {/* Quick Stats */}
              <div className="flex flex-wrap justify-center gap-6 mt-10">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl px-6 py-3 hover:bg-white/20 transition">
                  <div className="flex items-center gap-2">
                    <Star className="w-5 h-5 text-yellow-300" />
                    <span className="font-bold text-xl">4.9/5</span>
                  </div>
                  <div className="text-xs text-green-100">Customer Rating</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl px-6 py-3 hover:bg-white/20 transition">
                  <div className="flex items-center gap-2">
                    <MessageCircle className="w-5 h-5 text-green-300" />
                    <span className="font-bold text-xl">&lt;1hr</span>
                  </div>
                  <div className="text-xs text-green-100">Response Time</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl px-6 py-3 hover:bg-white/20 transition">
                  <div className="flex items-center gap-2">
                    <HeartHandshake className="w-5 h-5 text-pink-300" />
                    <span className="font-bold text-xl">1000+</span>
                  </div>
                  <div className="text-xs text-green-100">Happy Clients</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 -mt-12 relative z-20 pb-16">
          {/* Contact Info Cards */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              return (
                <a
                  key={index}
                  href={info.link || '#'}
                  className="bg-white rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 transform group"
                >
                  <div className={`${info.bgColor} w-16 h-16 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-lg`}>
                    <Icon className={`w-8 h-8  colo bg-gradient-to-br from-green-500 to-green-600 bg-clip-text `} />
                  </div>
                  
                  <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-green-700 transition">
                    {info.title}
                  </h3>
                  
                  {info.details.map((detail, idx) => (
                    <p key={idx} className="text-gray-600 text-sm mb-1 leading-relaxed">
                      {detail}
                    </p>
                  ))}
                </a>
              );
            })}
          </div>

          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {/* Contact Form - Takes 2 columns */}
            <div className="lg:col-span-2 bg-white rounded-3xl shadow-2xl p-8 md:p-10">
              <div className="flex items-center gap-3 mb-8">
                <div className="bg-gradient-to-br from-green-500 to-green-600 p-3 rounded-2xl shadow-lg">
                  <Send className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-gray-900">Send Us a Message</h2>
                  <p className="text-gray-600 text-sm">We'll respond within 24 hours</p>
                </div>
              </div>

              {submitted ? (
                <div className="bg-gradient-to-br from-green-50 to-green-100 border-2 border-green-300 rounded-2xl p-10 text-center">
                  <div className="bg-gradient-to-br from-green-500 to-green-600 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 shadow-xl animate-bounce">
                    <CheckCircle className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">Message Sent Successfully! 🎉</h3>
                  <p className="text-gray-700 mb-2">Thank you for contacting us!</p>
                  <p className="text-gray-600 text-sm">We'll get back to you within 24 hours.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="flex items-center gap-2 text-sm font-semibold text-gray-700 mb-2">
                        <User className="w-4 h-4 text-green-600" />
                        Your Name *
                      </label>
                      <input 
                        name="name" 
                        value={form.name} 
                        onChange={handleChange} 
                        className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-green-500 focus:outline-none transition hover:border-gray-300"
                        placeholder="John Doe" 
                        required 
                      />
                    </div>

                    <div>
                      <label className="flex items-center gap-2 text-sm font-semibold text-gray-700 mb-2">
                        <Phone className="w-4 h-4 text-green-600" />
                        Phone Number *
                      </label>
                      <input 
                        name="phone" 
                        value={form.phone} 
                        onChange={handleChange} 
                        className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-green-500 focus:outline-none transition hover:border-gray-300"
                        placeholder="+91 98765 43210" 
                        required 
                      />
                    </div>
                  </div>

                  <div>
                    <label className="flex items-center gap-2 text-sm font-semibold text-gray-700 mb-2">
                      <Mail className="w-4 h-4 text-green-600" />
                      Email Address
                    </label>
                    <input 
                      name="email" 
                      type="email"
                      value={form.email} 
                      onChange={handleChange} 
                      className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-green-500 focus:outline-none transition hover:border-gray-300"
                      placeholder="your@email.com" 
                    />
                  </div>

                  <div>
                    <label className="flex items-center gap-2 text-sm font-semibold text-gray-700 mb-2">
                      <MessageSquare className="w-4 h-4 text-green-600" />
                      Subject
                    </label>
                    <input 
                      name="subject" 
                      value={form.subject} 
                      onChange={handleChange} 
                      className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-green-500 focus:outline-none transition hover:border-gray-300"
                      placeholder="How can we help you?" 
                    />
                  </div>

                  <div>
                    <label className="flex items-center gap-2 text-sm font-semibold text-gray-700 mb-2">
                      <MessageSquare className="w-4 h-4 text-green-600" />
                      Your Message *
                    </label>
                    <textarea 
                      name="message" 
                      value={form.message} 
                      onChange={handleChange} 
                      className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-green-500 focus:outline-none transition resize-none hover:border-gray-300"
                      placeholder="Tell us more about your inquiry..." 
                      rows="6" 
                      required 
                    />
                  </div>

                  <button 
                    type="submit" 
                    disabled={loading}
                    className="w-full bg-gradient-to-r from-green-600 to-green-700 text-white px-8 py-4 rounded-xl font-semibold hover:from-green-700 hover:to-green-800 transition flex items-center justify-center gap-2 shadow-xl hover:shadow-2xl disabled:opacity-50 disabled:cursor-not-allowed group"
                  >
                    {loading ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        Send Message
                      </>
                    )}
                  </button>

                  <p className="text-xs text-gray-500 text-center">
                    By submitting this form, you agree to our privacy policy and terms of service.
                  </p>
                </form>
              )}
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Why Contact Us */}
              <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-3xl p-8 border-2 border-green-200 shadow-xl">
                <div className="flex items-center gap-3 mb-6">
                  <Leaf className="w-6 h-6 text-green-700" />
                  <h3 className="text-xl font-bold text-gray-900">How Can We Help?</h3>
                </div>
                
                <div className="space-y-4">
                  {reasons.map((reason, index) => {
                    const Icon = reason.icon;
                    return (
                      <div key={index} className="flex items-start gap-3 group cursor-pointer">
                        <div className="bg-white p-2 rounded-lg shadow-md group-hover:shadow-lg transition group-hover:scale-110 transform">
                          <Icon className="w-5 h-5 text-green-600" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900 text-sm mb-1 group-hover:text-green-700 transition">
                            {reason.title}
                          </h4>
                          <p className="text-xs text-gray-600 leading-relaxed">
                            {reason.description}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Social Media */}
              <div className="bg-white rounded-3xl shadow-xl p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Follow Us</h3>
                
                <div className="space-y-3">
                  {socialLinks.map((social, index) => {
                    const Icon = social.icon;
                    return (
                      <button
                        key={index}
                        className={`w-full flex items-center justify-between bg-gray-50 px-5 py-4 rounded-xl font-semibold text-gray-700 ${social.color} hover:text-white transition group shadow-md hover:shadow-lg`}
                      >
                        <div className="flex items-center gap-3">
                          <Icon className="w-5 h-5" />
                          <span className="text-sm">{social.label}</span>
                        </div>
                        <span className="text-xs bg-white/20 px-3 py-1 rounded-full">
                          {social.followers}
                        </span>
                      </button>
                    );
                  })}
                </div>

                <div className="mt-6 pt-6 border-t border-gray-200">
                  <p className="text-xs text-gray-600 text-center leading-relaxed">
                    Stay updated with our latest products, tips, and special offers!
                  </p>
                </div>
              </div>

              {/* Quick Action */}
              <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-3xl p-8 text-white shadow-xl">
                <Phone className="w-10 h-10 mb-4" />
                <h3 className="text-xl font-bold mb-2">Need Immediate Help?</h3>
                <p className="text-sm text-blue-100 mb-4">Call us directly for urgent inquiries</p>
                <a 
                  href="tel:+919876543210"
                  className="flex items-center justify-center gap-2 bg-white text-blue-600 px-6 py-3 rounded-xl font-semibold hover:bg-blue-50 transition shadow-lg"
                >
                  <Phone className="w-4 h-4" />
                  Call Now
                </a>
              </div>
            </div>
          </div>

          {/* Map Section */}
          <div id="map" className="mb-16">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-3">Visit Our Farm</h2>
              <p className="text-gray-600">Come see our mushroom cultivation facility in person</p>
            </div>

            <div className="bg-gradient-to-br from-green-100 via-blue-100 to-purple-100 rounded-3xl h-96 flex items-center justify-center border-4 border-white shadow-2xl overflow-hidden relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-green-400/20 to-blue-400/20"></div>
              <div className="text-center relative z-10">
                <div className="bg-white w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 shadow-xl group-hover:scale-110 transition-transform">
                  <MapPin className="w-10 h-10 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Our Location</h3>
                <p className="text-gray-700 font-semibold">Ghaziabad, Uttar Pradesh</p>
                <p className="text-gray-600">India - 201001</p>
                <a 
                  href="https://www.google.com/maps/search/?api=1&query=Ghaziabad+Uttar+Pradesh+India"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 bg-green-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-green-700 transition shadow-lg inline-flex items-center gap-2"
                >
                  <MapPin className="w-4 h-4" />
                  Get Directions
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Trust Badges */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="bg-white rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition">
              <div className="text-3xl font-bold text-green-600 mb-1">24/7</div>
              <div className="text-sm text-gray-600">Support Available</div>
            </div>
            <div className="bg-white rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition">
              <div className="text-3xl font-bold text-blue-600 mb-1">&lt;1hr</div>
              <div className="text-sm text-gray-600">Response Time</div>
            </div>
            <div className="bg-white rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition">
              <div className="text-3xl font-bold text-purple-600 mb-1">100%</div>
              <div className="text-sm text-gray-600">Satisfaction</div>
            </div>
            <div className="bg-white rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition">
              <div className="text-3xl font-bold text-orange-600 mb-1">1000+</div>
              <div className="text-sm text-gray-600">Happy Clients</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}