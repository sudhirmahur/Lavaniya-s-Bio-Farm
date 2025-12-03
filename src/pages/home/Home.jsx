import { ArrowRight, BookOpen, CheckCircle, ChevronRight,Package, Users,Shield, Sprout,Truck,} from "lucide-react";
import ProductCard from "../../components/ProductCard";
import Hero from "../../components/Hero";
import CTA from "../../components/CTA";

const HomePage = ({ setCurrentPage }) => {
  const products = [
    {
      id: 1,
      name: "Fresh Oyster Mushrooms",
      category: "Fresh",
      price: "₹180/kg",
      image: "https://images.unsplash.com/photo-1628773822503-930a7eaecf80?w=400&h=300&fit=crop",
      shortDescription: "Premium quality fresh oyster mushrooms, harvested daily for maximum freshness and nutrition.",
      inStock: true
    },
    {
      id: 2,
      name: "Mushroom Spawn",
      category: "Cultivation",
      price: "₹60/kg",
      image: "https://images.unsplash.com/photo-1614180042778-5a6b6b4a0b8f?w=400&h=300&fit=crop",
      shortDescription: "High-quality spawn for efficient mushroom cultivation with excellent colonization rates.",
      inStock: true
    },
    {
      id: 3,
      name: "Ready Grow Bags",
      category: "Cultivation",
      price: "₹120/bag",
      image: "https://images.unsplash.com/photo-1584949091598-c31daaaa4aa9?w=400&h=300&fit=crop",
      shortDescription: "Ready-to-use grow bags with substrate, perfect for beginners and commercial growers.",
      inStock: true
    }
  ];

  const features = [
    {
      icon: Package,
      title: "Premium Quality",
      description: "100% natural products with no chemicals or additives"
    },
    {
      icon: Truck,
      title: "Fast Delivery",
      description: "Quick and reliable delivery across India"
    },
    {
      icon: Shield,
      title: "Quality Assured",
      description: "Every product meets our strict quality standards"
    },
    {
      icon: Users,
      title: "Expert Support",
      description: "24/7 guidance from mushroom cultivation experts"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Hero setCurrentPage={setCurrentPage} />

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={index} className="text-center group">
                  <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-green-700 transition">
                    <Icon className="w-8 h-8 text-green-700 group-hover:text-white transition" />
                  </div>
                  <h3 className="font-bold text-lg mb-2">{feature.title}</h3>
                  <p className="text-gray-600 text-sm">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Premium Products</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">Fresh mushrooms, cultivation materials, and everything you need for successful mushroom farming</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          <div className="text-center">
            <button 
              onClick={() => setCurrentPage('products')}
              className="bg-green-700 text-white px-8 py-3 rounded-full font-semibold hover:bg-green-800 transition inline-flex items-center gap-2"
            >
              View All Products
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="https://images.unsplash.com/photo-1608114466159-6b5190b8d5e1?w=600&h=400&fit=crop"
                alt="Mushroom Farm"
                className="rounded-2xl shadow-xl"
              />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Why Choose Lavaniya's Bio Farm?</h2>
              <ul className="space-y-4">
                {[
                  "100% Natural & Organic products",
                  "Scientific cultivation methods",
                  "Expert training and support",
                  "Consistent quality and supply",
                  "Competitive pricing for bulk orders",
                  "Farm-to-customer freshness"
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-green-700 flex-shrink-0 mt-1" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
              <button 
                onClick={() => setCurrentPage('about')}
                className="mt-8 bg-green-700 text-white px-8 py-3 rounded-full font-semibold hover:bg-green-800 transition inline-flex items-center gap-2"
              >
                Learn More About Us
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Training Section */}
      <section className="py-16 bg-green-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <BookOpen className="w-16 h-16 text-green-700 mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Professional Training Programs</h2>
            <p className="text-lg text-gray-700 mb-8">
              Learn mushroom cultivation from experts. We offer comprehensive training for beginners and advanced growers, covering everything from setup to harvesting and marketing.
            </p>
            <button 
              onClick={() => setCurrentPage('training')}
              className="bg-green-700 text-white px-8 py-3 rounded-full font-semibold hover:bg-green-800 transition inline-flex items-center gap-2"
            >
              Explore Training Programs
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      <CTA setCurrentPage={setCurrentPage} />
    </div>
  );
};
export default HomePage;