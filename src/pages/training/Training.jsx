import React from "react";
import { 
  BookOpen, Users, Award, CheckCircle, Clock, Target, 
  TrendingUp, Lightbulb, Video, FileText, ArrowRight, GraduationCap 
} from "lucide-react";
import SEO from "../../components/SEO";


export default function Training() {
  const programs = [
    {
      icon: BookOpen,
      title: "Beginner Course",
      duration: "3 Days",
      price: "₹5,999",
      level: "Beginner",
      color: "from-green-100 to-green-200 border-green-300",
      iconBg: "bg-green-600",
      features: [
        "Introduction to mushroom cultivation",
        "Spawn preparation basics",
        "Substrate preparation",
        "Environmental control",
        "Basic harvesting techniques",
        "Hands-on practice sessions"
      ]
    },
    {
      icon: GraduationCap,
      title: "Advanced Course",
      duration: "5 Days",
      price: "₹12,999",
      level: "Advanced",
      color: "from-blue-100 to-blue-200 border-blue-300",
      iconBg: "bg-blue-600",
      features: [
        "Advanced cultivation techniques",
        "Disease management",
        "Yield optimization",
        "Commercial farm setup",
        "Marketing strategies",
        "Business planning"
      ]
    },
    {
      icon: Award,
      title: "Professional Training",
      duration: "10 Days",
      price: "₹24,999",
      level: "Professional",
      color: "from-purple-100 to-purple-200 border-purple-300",
      iconBg: "bg-purple-600",
      features: [
        "Complete farm management",
        "Quality control systems",
        "Export standards",
        "Team management",
        "Financial planning",
        "Certification included"
      ]
    }
  ];

  const benefits = [
    {
      icon: Users,
      title: "Expert Instructors",
      description: "Learn from experienced mushroom cultivation professionals"
    },
    {
      icon: Video,
      title: "Practical Training",
      description: "Hands-on experience in our working mushroom farm"
    },
    {
      icon: FileText,
      title: "Study Materials",
      description: "Comprehensive course materials and documentation"
    },
    {
      icon: Award,
      title: "Certification",
      description: "Receive official certification upon completion"
    },
    {
      icon: TrendingUp,
      title: "Business Support",
      description: "Post-training business guidance and consultation"
    },
    {
      icon: Lightbulb,
      title: "Lifetime Access",
      description: "Ongoing support and advice from our expert team"
    }
  ];

  const topics = [
    "Mushroom Biology & Varieties",
    "Spawn Production Techniques",
    "Substrate Preparation Methods",
    "Environmental Control Systems",
    "Pest & Disease Management",
    "Harvesting & Post-Harvest",
    "Quality Control & Packaging",
    "Marketing & Business Strategy",
    "Farm Design & Setup",
    "Financial Planning & ROI"
  ];

  return (
    <>
      <SEO 
        title="Training — Lavaniya's Bio Farm" 
        description="Mushroom cultivation training, farm setup guidance and support from Lavaniya's Bio Farm." 
      />
      
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <div className="bg-gradient-to-br from-green-700 via-green-600 to-green-800 text-white py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
                <GraduationCap className="w-4 h-4" />
                <span className="text-sm font-medium">Professional Training</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Training & Support</h1>
              
              <p className="text-lg md:text-xl text-green-100 leading-relaxed mb-8">
                Master the art and science of mushroom cultivation with our comprehensive training programs. 
                From beginners to commercial farmers, we have the right course for you.
              </p>

              <div className="flex flex-wrap gap-4 justify-center">
                <div className="bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full">
                  <span className="font-bold text-2xl">500+</span>
                  <span className="text-sm ml-2">Trained Students</span>
                </div>
                <div className="bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full">
                  <span className="font-bold text-2xl">95%</span>
                  <span className="text-sm ml-2">Success Rate</span>
                </div>
                <div className="bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full">
                  <span className="font-bold text-2xl">5+</span>
                  <span className="text-sm ml-2">Years Experience</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 py-16">
          {/* Training Programs */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Training Programs</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">Choose the program that best fits your goals and experience level</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {programs.map((program, index) => {
                const Icon = program.icon;
                return (
                  <div 
                    key={index} 
                    className={`bg-gradient-to-br ${program.color} border-2 rounded-2xl p-8 hover:shadow-2xl transition-all duration-300 hover:scale-105 transform`}
                  >
                    <div className={`${program.iconBg} w-16 h-16 rounded-xl flex items-center justify-center mb-6`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>

                    <div className="bg-white/80 backdrop-blur-sm px-3 py-1 rounded-full inline-block mb-4">
                      <span className="text-xs font-bold text-gray-700">{program.level}</span>
                    </div>

                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{program.title}</h3>
                    
                    <div className="flex items-center gap-4 mb-6">
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4 text-gray-600" />
                        <span className="text-sm text-gray-700">{program.duration}</span>
                      </div>
                      <div className="text-2xl font-bold text-gray-900">{program.price}</div>
                    </div>

                    <ul className="space-y-3 mb-8">
                      {program.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                          <span className="text-sm text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <button className="w-full bg-gray-900 text-white px-6 py-3 rounded-xl font-semibold hover:bg-gray-800 transition flex items-center justify-center gap-2">
                      Enroll Now
                      <ArrowRight className="w-5 h-5" />
                    </button>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Benefits */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why Train With Us?</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">Comprehensive learning experience with ongoing support</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {benefits.map((benefit, index) => {
                const Icon = benefit.icon;
                return (
                  <div 
                    key={index} 
                    className="bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 transform group"
                  >
                    <div className="bg-green-100 w-14 h-14 rounded-xl flex items-center justify-center mb-4 group-hover:bg-green-600 transition">
                      <Icon className="w-7 h-7 text-green-700 group-hover:text-white transition" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{benefit.title}</h3>
                    <p className="text-sm text-gray-600">{benefit.description}</p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Topics Covered */}
          <div className="mb-20 max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-green-700 to-green-800 rounded-2xl p-10 text-white">
              <div className="text-center mb-8">
                <Target className="w-12 h-12 mx-auto mb-4" />
                <h2 className="text-3xl font-bold mb-2">Topics Covered</h2>
                <p className="text-green-100">Comprehensive curriculum covering all aspects of mushroom cultivation</p>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                {topics.map((topic, index) => (
                  <div key={index} className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-xl p-4">
                    <CheckCircle className="w-5 h-5 text-green-300 flex-shrink-0" />
                    <span className="text-sm">{topic}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center max-w-3xl mx-auto">
            <div className="bg-white rounded-2xl shadow-xl p-10">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to Start Learning?</h2>
              <p className="text-gray-600 mb-8">
                Join hundreds of successful mushroom farmers who started their journey with us. 
                Get in touch today to discuss which program is right for you.
              </p>

              <div className="flex flex-wrap gap-4 justify-center">
                <button className="bg-green-700 text-white px-8 py-4 rounded-full font-semibold hover:bg-green-800 transition flex items-center gap-2 shadow-lg hover:shadow-xl">
                  <BookOpen className="w-5 h-5" />
                  Enroll Now
                </button>
                <button className="border-2 border-green-700 text-green-700 px-8 py-4 rounded-full font-semibold hover:bg-green-50 transition flex items-center gap-2">
                  Download Brochure
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