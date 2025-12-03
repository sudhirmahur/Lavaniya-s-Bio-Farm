import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Phone, ArrowRight } from 'lucide-react';

const CTA = ({ 
  title = "Ready to Start Your Mushroom Journey?",
  description = "Get premium quality mushrooms and expert guidance for your cultivation needs.",
  primaryButtonText = "Contact Us",
  secondaryButtonText = "View Products",
  showSecondaryButton = true
}) => {
  const navigate = useNavigate();

  return (
    <section className="bg-gradient-to-r from-primary to-green-700 py-16 relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-white/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            {title}
          </h2>
          <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            {description}
          </p>

          <div className="flex flex-wrap gap-4 justify-center">
            <button 
              onClick={() => navigate('/contact')}
              className="bg-white text-primary px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition flex items-center gap-2 shadow-lg hover:shadow-xl"
            >
              <Phone className="w-5 h-5" />
              {primaryButtonText}
            </button>
            
            {showSecondaryButton && (
              <button 
                onClick={() => navigate('/products')}
                className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-primary transition flex items-center gap-2"
              >
                {secondaryButtonText}
                <ArrowRight className="w-5 h-5" />
              </button>
            )}
          </div>

          {/* Trust Indicators */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 pt-12 border-t border-white/20">
            <div className="text-white">
              <div className="text-3xl font-bold mb-1">100%</div>
              <div className="text-sm text-white/80">Natural</div>
            </div>
            <div className="text-white">
              <div className="text-3xl font-bold mb-1">1000+</div>
              <div className="text-sm text-white/80">Customers</div>
            </div>
            <div className="text-white">
              <div className="text-3xl font-bold mb-1">5+</div>
              <div className="text-sm text-white/80">Years</div>
            </div>
            <div className="text-white">
              <div className="text-3xl font-bold mb-1">24/7</div>
              <div className="text-sm text-white/80">Support</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;