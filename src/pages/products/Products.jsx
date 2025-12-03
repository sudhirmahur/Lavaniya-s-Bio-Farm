import React, { useState, useRef } from 'react';
import { ShoppingCart, Star, ChevronLeft, ChevronRight, Leaf, Package, TrendingUp, Sparkles, Award, Heart, Truck, Shield } from 'lucide-react';

// 50 Unique Products with Real Data
const allProducts = [
  // Fresh Mushrooms (12 products)
  { id: 1, name: 'Premium White Button Mushrooms', category: 'Fresh Mushrooms', price: 120, weight: '250g', rating: 4.8, reviews: 234, inStock: true, discount: 15, isOrganic: true, isTrending: true, image: 'https://images.unsplash.com/photo-1582281298055-e25b2a2c8c9d?w=400' },
  { id: 2, name: 'Fresh Oyster Mushrooms', category: 'Fresh Mushrooms', price: 180, weight: '500g', rating: 4.9, reviews: 189, inStock: true, discount: null, isOrganic: true, isTrending: true, image: 'https://images.unsplash.com/photo-1584117640835-371c6da20a13?w=400' },
  { id: 3, name: 'Shiitake Mushrooms Premium', category: 'Fresh Mushrooms', price: 250, weight: '300g', rating: 4.7, reviews: 156, inStock: true, discount: 20, isOrganic: true, isTrending: false, image: 'https://images.unsplash.com/photo-1603104978995-75da80e14629?w=400' },
  { id: 4, name: 'Portobello Mushrooms Large', category: 'Fresh Mushrooms', price: 200, weight: '400g', rating: 4.6, reviews: 98, inStock: true, discount: null, isOrganic: true, isTrending: false, image: 'https://images.unsplash.com/photo-1590774992433-3f1e1d1c3c46?w=400' },
  { id: 5, name: 'Enoki Mushrooms Fresh', category: 'Fresh Mushrooms', price: 160, weight: '200g', rating: 4.5, reviews: 145, inStock: false, discount: null, isOrganic: true, isTrending: false, image: 'https://images.unsplash.com/photo-1566419436649-f29c644f8e3f?w=400' },
  { id: 6, name: 'Crimini Baby Bella Mushrooms', category: 'Fresh Mushrooms', price: 140, weight: '350g', rating: 4.8, reviews: 201, inStock: true, discount: 10, isOrganic: true, isTrending: false, image: 'https://images.unsplash.com/photo-1611078489935-0cb964de46d6?w=400' },
  { id: 7, name: 'King Oyster Mushrooms Jumbo', category: 'Fresh Mushrooms', price: 220, weight: '300g', rating: 4.9, reviews: 167, inStock: true, discount: null, isOrganic: true, isTrending: true, image: 'https://images.unsplash.com/photo-1595261964038-bcc18f4cb107?w=400' },
  { id: 8, name: 'Lion\'s Mane Fresh', category: 'Fresh Mushrooms', price: 280, weight: '250g', rating: 4.9, reviews: 89, inStock: true, discount: 15, isOrganic: true, isTrending: true, image: 'https://images.unsplash.com/photo-1610466025666-37d1e2e0e5e5?w=400' },
  { id: 9, name: 'Chanterelle Mushrooms Wild', category: 'Fresh Mushrooms', price: 350, weight: '200g', rating: 5.0, reviews: 45, inStock: true, discount: null, isOrganic: true, isTrending: false, image: 'https://images.unsplash.com/photo-1594756202469-9ff9799b2e4e?w=400' },
  { id: 10, name: 'Mixed Exotic Mushrooms Pack', category: 'Fresh Mushrooms', price: 300, weight: '500g', rating: 4.8, reviews: 178, inStock: true, discount: 25, isOrganic: true, isTrending: true, image: 'https://images.unsplash.com/photo-1580484730783-c7ef54e1c85e?w=400' },
  { id: 11, name: 'Organic White Button Family Pack', category: 'Fresh Mushrooms', price: 190, weight: '1kg', rating: 4.7, reviews: 267, inStock: true, discount: null, isOrganic: true, isTrending: false, image: 'https://images.unsplash.com/photo-1582281298055-e25b2a2c8c9d?w=400' },
  { id: 12, name: 'Golden Oyster Mushrooms', category: 'Fresh Mushrooms', price: 210, weight: '300g', rating: 4.6, reviews: 112, inStock: true, discount: null, isOrganic: true, isTrending: false, image: 'https://images.unsplash.com/photo-1584117640835-371c6da20a13?w=400' },

  // Dried Mushrooms (10 products)
  { id: 13, name: 'Dried Porcini Mushrooms Premium', category: 'Dried Mushrooms', price: 450, weight: '100g', rating: 4.9, reviews: 234, inStock: true, discount: null, isOrganic: true, isTrending: true, image: 'https://images.unsplash.com/photo-1604520377813-c0c9e2f6b9e8?w=400' },
  { id: 14, name: 'Dried Shiitake Sliced', category: 'Dried Mushrooms', price: 380, weight: '150g', rating: 4.8, reviews: 198, inStock: true, discount: 20, isOrganic: true, isTrending: false, image: 'https://images.unsplash.com/photo-1603104978995-75da80e14629?w=400' },
  { id: 15, name: 'Dried Morel Mushrooms Wild', category: 'Dried Mushrooms', price: 650, weight: '50g', rating: 5.0, reviews: 67, inStock: true, discount: null, isOrganic: true, isTrending: true, image: 'https://images.unsplash.com/photo-1595261342326-c6b5f4d7bd20?w=400' },
  { id: 16, name: 'Dried Oyster Mushrooms', category: 'Dried Mushrooms', price: 320, weight: '100g', rating: 4.7, reviews: 145, inStock: true, discount: 15, isOrganic: true, isTrending: false, image: 'https://images.unsplash.com/photo-1584117640835-371c6da20a13?w=400' },
  { id: 17, name: 'Mixed Dried Mushrooms Gourmet', category: 'Dried Mushrooms', price: 420, weight: '200g', rating: 4.8, reviews: 156, inStock: true, discount: null, isOrganic: true, isTrending: false, image: 'https://images.unsplash.com/photo-1580484730783-c7ef54e1c85e?w=400' },
  { id: 18, name: 'Dried Black Fungus Premium', category: 'Dried Mushrooms', price: 280, weight: '100g', rating: 4.6, reviews: 89, inStock: false, discount: null, isOrganic: true, isTrending: false, image: 'https://images.unsplash.com/photo-1598662957477-1e8991c1d900?w=400' },
  { id: 19, name: 'Dried Chanterelle Pieces', category: 'Dried Mushrooms', price: 520, weight: '75g', rating: 4.9, reviews: 78, inStock: true, discount: null, isOrganic: true, isTrending: true, image: 'https://images.unsplash.com/photo-1594756202469-9ff9799b2e4e?w=400' },
  { id: 20, name: 'Dried Lion\'s Mane Slices', category: 'Dried Mushrooms', price: 480, weight: '100g', rating: 4.9, reviews: 134, inStock: true, discount: 10, isOrganic: true, isTrending: false, image: 'https://images.unsplash.com/photo-1610466025666-37d1e2e0e5e5?w=400' },
  { id: 21, name: 'Dried Wood Ear Mushrooms', category: 'Dried Mushrooms', price: 260, weight: '150g', rating: 4.5, reviews: 112, inStock: true, discount: null, isOrganic: false, isTrending: false, image: 'https://images.unsplash.com/photo-1576382262775-ee6eee2e7b1e?w=400' },
  { id: 22, name: 'Dried Button Mushroom Powder', category: 'Dried Mushrooms', price: 340, weight: '200g', rating: 4.7, reviews: 201, inStock: true, discount: 15, isOrganic: true, isTrending: false, image: 'https://images.unsplash.com/photo-1582281298055-e25b2a2c8c9d?w=400' },

  // Grow Bags (10 products)
  { id: 23, name: 'Oyster Mushroom Grow Kit Deluxe', category: 'Grow Bags', price: 550, weight: 'Ready-to-Grow', rating: 4.9, reviews: 312, inStock: true, discount: 20, isOrganic: true, isTrending: true, image: 'https://images.unsplash.com/photo-1584117640835-371c6da20a13?w=400' },
  { id: 24, name: 'Shiitake Home Growing Kit', category: 'Grow Bags', price: 600, weight: 'Premium Kit', rating: 4.8, reviews: 267, inStock: true, discount: null, isOrganic: true, isTrending: true, image: 'https://images.unsplash.com/photo-1603104978995-75da80e14629?w=400' },
  { id: 25, name: 'Lion\'s Mane Cultivation Kit Pro', category: 'Grow Bags', price: 680, weight: 'Deluxe Kit', rating: 4.9, reviews: 189, inStock: true, discount: 15, isOrganic: true, isTrending: false, image: 'https://images.unsplash.com/photo-1610466025666-37d1e2e0e5e5?w=400' },
  { id: 26, name: 'Button Mushroom Starter Kit', category: 'Grow Bags', price: 450, weight: 'Ready-to-Grow', rating: 4.7, reviews: 234, inStock: true, discount: null, isOrganic: true, isTrending: false, image: 'https://images.unsplash.com/photo-1582281298055-e25b2a2c8c9d?w=400' },
  { id: 27, name: 'Reishi Medicinal Grow Kit', category: 'Grow Bags', price: 720, weight: 'Premium Kit', rating: 4.8, reviews: 145, inStock: true, discount: 25, isOrganic: true, isTrending: true, image: 'https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=400' },
  { id: 28, name: 'Pink Oyster Growing Kit', category: 'Grow Bags', price: 520, weight: 'Ready-to-Grow', rating: 4.6, reviews: 178, inStock: false, discount: null, isOrganic: true, isTrending: false, image: 'https://images.unsplash.com/photo-1595261342326-c6b5f4d7bd20?w=400' },
  { id: 29, name: 'King Oyster Complete Kit', category: 'Grow Bags', price: 580, weight: 'Deluxe Kit', rating: 4.8, reviews: 156, inStock: true, discount: null, isOrganic: true, isTrending: false, image: 'https://images.unsplash.com/photo-1595261964038-bcc18f4cb107?w=400' },
  { id: 30, name: 'Multi-Variety Growing Pack', category: 'Grow Bags', price: 850, weight: 'Premium Kit', rating: 4.9, reviews: 98, inStock: true, discount: 30, isOrganic: true, isTrending: true, image: 'https://images.unsplash.com/photo-1580484730783-c7ef54e1c85e?w=400' },
  { id: 31, name: 'Beginner Oyster Grow Bag', category: 'Grow Bags', price: 380, weight: 'Ready-to-Grow', rating: 4.7, reviews: 289, inStock: true, discount: null, isOrganic: true, isTrending: false, image: 'https://images.unsplash.com/photo-1584117640835-371c6da20a13?w=400' },
  { id: 32, name: 'Cordyceps Cultivation Kit Pro', category: 'Grow Bags', price: 920, weight: 'Deluxe Kit', rating: 5.0, reviews: 67, inStock: true, discount: null, isOrganic: true, isTrending: true, image: 'https://images.unsplash.com/photo-1587049332474-5da2a0c1463f?w=400' },

  // Spawn (9 products)
  { id: 33, name: 'Oyster Mushroom Spawn Premium', category: 'Spawn', price: 320, weight: '1kg', rating: 4.8, reviews: 245, inStock: true, discount: 15, isOrganic: true, isTrending: false, image: 'https://images.unsplash.com/photo-1584117640835-371c6da20a13?w=400' },
  { id: 34, name: 'Button Mushroom Spawn Grade A', category: 'Spawn', price: 280, weight: '2kg', rating: 4.7, reviews: 312, inStock: true, discount: null, isOrganic: true, isTrending: true, image: 'https://images.unsplash.com/photo-1582281298055-e25b2a2c8c9d?w=400' },
  { id: 35, name: 'Shiitake Spawn Professional', category: 'Spawn', price: 380, weight: '1kg', rating: 4.9, reviews: 178, inStock: true, discount: 20, isOrganic: true, isTrending: false, image: 'https://images.unsplash.com/photo-1603104978995-75da80e14629?w=400' },
  { id: 36, name: 'Portobello Spawn Bulk Pack', category: 'Spawn', price: 450, weight: '2kg', rating: 4.6, reviews: 134, inStock: true, discount: null, isOrganic: true, isTrending: false, image: 'https://images.unsplash.com/photo-1590774992433-3f1e1d1c3c46?w=400' },
  { id: 37, name: 'Lion\'s Mane Spawn Premium', category: 'Spawn', price: 520, weight: '500g', rating: 4.9, reviews: 89, inStock: true, discount: 10, isOrganic: true, isTrending: true, image: 'https://images.unsplash.com/photo-1610466025666-37d1e2e0e5e5?w=400' },
  { id: 38, name: 'King Oyster Spawn Commercial', category: 'Spawn', price: 420, weight: '1kg', rating: 4.8, reviews: 156, inStock: false, discount: null, isOrganic: true, isTrending: false, image: 'https://images.unsplash.com/photo-1595261964038-bcc18f4cb107?w=400' },
  { id: 39, name: 'Reishi Spawn Medicinal Grade', category: 'Spawn', price: 580, weight: '500g', rating: 4.9, reviews: 98, inStock: true, discount: 15, isOrganic: true, isTrending: false, image: 'https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=400' },
  { id: 40, name: 'Mixed Oyster Spawn Variety Pack', category: 'Spawn', price: 480, weight: '1.5kg', rating: 4.7, reviews: 201, inStock: true, discount: null, isOrganic: true, isTrending: false, image: 'https://images.unsplash.com/photo-1595261342326-c6b5f4d7bd20?w=400' },
  { id: 41, name: 'Enoki Spawn Professional', category: 'Spawn', price: 350, weight: '1kg', rating: 4.6, reviews: 123, inStock: true, discount: null, isOrganic: false, isTrending: false, image: 'https://images.unsplash.com/photo-1566419436649-f29c644f8e3f?w=400' },

  // Training Kits (9 products)
  { id: 42, name: 'Beginner Mushroom Cultivation Course', category: 'Training Kits', price: 650, weight: 'Starter Pack', rating: 4.9, reviews: 289, inStock: true, discount: 25, isOrganic: false, isTrending: true, image: 'https://images.unsplash.com/photo-1516534775068-ba3e7458af70?w=400' },
  { id: 43, name: 'Advanced Cultivation Training Kit', category: 'Training Kits', price: 850, weight: 'Full Course', rating: 4.8, reviews: 167, inStock: true, discount: null, isOrganic: false, isTrending: true, image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=400' },
  { id: 44, name: 'Professional Mushroom Farming Course', category: 'Training Kits', price: 1200, weight: 'Master Kit', rating: 5.0, reviews: 78, inStock: true, discount: 20, isOrganic: false, isTrending: false, image: 'https://images.unsplash.com/photo-1531403009284-440f080d1e12?w=400' },
  { id: 45, name: 'Complete Home Growing Guide', category: 'Training Kits', price: 580, weight: 'Starter Pack', rating: 4.7, reviews: 234, inStock: true, discount: 15, isOrganic: false, isTrending: false, image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400' },
  { id: 46, name: 'Commercial Scale Training Program', category: 'Training Kits', price: 1450, weight: 'Master Kit', rating: 4.9, reviews: 45, inStock: true, discount: null, isOrganic: false, isTrending: true, image: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=400' },
  { id: 47, name: 'Specialty Mushroom Growing Course', category: 'Training Kits', price: 920, weight: 'Full Course', rating: 4.8, reviews: 112, inStock: true, discount: 10, isOrganic: false, isTrending: false, image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=400' },
  { id: 48, name: 'Medicinal Mushroom Cultivation Kit', category: 'Training Kits', price: 1080, weight: 'Full Course', rating: 4.9, reviews: 89, inStock: false, discount: null, isOrganic: false, isTrending: false, image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400' },
  { id: 49, name: 'Family Mushroom Growing Workshop', category: 'Training Kits', price: 480, weight: 'Starter Pack', rating: 4.6, reviews: 198, inStock: true, discount: 20, isOrganic: false, isTrending: false, image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?w=400' },
  { id: 50, name: 'Entrepreneurship in Mushroom Farming', category: 'Training Kits', price: 1650, weight: 'Master Kit', rating: 5.0, reviews: 56, inStock: true, discount: 30, isOrganic: false, isTrending: true, image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=400' }
];

const ProductCard = ({ product }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [imgError, setImgError] = useState(false);
  
  return (
    <div 
      className="bg-white rounded-xl overflow-hidden hover:shadow-xs transition-all duration-300 border border-gray-100 group relative flex-shrink-0 w-full"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image Section */}
      <div className="relative h-48 sm:h-56 bg-gradient-to-br from-green-50 to-emerald-50 overflow-hidden">
        {!imgError ? (
          <img 
            src={product.image} 
            alt={product.name}
            className={`w-full h-full object-cover transition-transform duration-300 ${isHovered ? 'scale-110' : 'scale-100'}`}
            onError={() => setImgError(true)}
          />
        ) : (
          <div className={`absolute inset-0 flex items-center justify-center transition-transform duration-300 ${isHovered ? 'scale-110' : 'scale-100'}`}>
            <Package className="w-20 h-20 text-green-600 opacity-20" />
          </div>
        )}
        
        {/* Badges */}
        <div className="absolute top-2 left-2 flex flex-col gap-1">
          {/* {product.isOrganic && (
            <span className="bg-green-600 text-white text-xs px-2 py-1 rounded-full flex items-center gap-1 shadow-md">
              <Leaf className="w-3 h-3" />
              Organic
            </span>
          )} */}
          {/* {product.isTrending && (
            <span className="bg-orange-500 text-white text-xs px-2 py-1 rounded-full flex items-center gap-1 shadow-md">
              <TrendingUp className="w-3 h-3" />
              Trending
            </span>
          )} */}
        </div>
        
        {/* {product.discount && (
          <div className="absolute top-2 right-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-lg shadow-md">
            -{product.discount}%
          </div>
        )}
         */}
        {/* {!product.inStock && (
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center backdrop-blur-sm">
            <span className="bg-red-600 text-white px-4 py-2 rounded-full text-sm font-semibold">Out of Stock</span>
          </div>
        )} */}
        
        {/* Wishlist Button */}
        {/* <button className="absolute bottom-2 right-2 p-2 bg-white/90 backdrop-blur-sm rounded-full shadow-md hover:bg-white transition opacity-0 group-hover:opacity-100">
          <Heart className="w-4 h-4 text-gray-600 hover:text-red-500 transition" />
        </button> */}
      </div>
      
      {/* Content */}
      <div className="p-4">
        <div className="text-xs text-green-700 font-medium mb-1 flex items-center gap-1">
          <Award className="w-3 h-3" />
          {product.category}
        </div>
        <h3 className="font-semibold text-gray-900 text-sm mb-1 line-clamp-2 group-hover:text-green-700 transition min-h-[2.5rem]">
          {product.name}
        </h3>
        <p className="text-xs text-gray-500 mb-2 flex items-center gap-1">
          <Package className="w-3 h-3" />
          {product.weight}
        </p>
        
        {/* Rating */}
        <div className="flex items-center gap-1 mb-3">
          {/* <div className="flex">
            {[...Array(5)].map((_, i) => (
              <Star 
                key={i} 
                className={`w-3 h-3 ${i < Math.floor(product.rating) ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`}
              />
            ))}
          </div> */}
          {/* <span className="text-xs text-gray-600">
            {product.rating} ({product.reviews})
          </span> */}
        </div>
        
        {/* Price & Action */}
        <div className="flex items-center justify-between pt-3 border-t border-gray-100">
          <div className="flex flex-col">
            <div className="flex items-baseline gap-1">
              {/* <span className="text-xl font-bold text-green-700">₹{product.price}</span> */}
              {/* {product.discount && (
                <span className="text-xs text-gray-400 line-through">
                  ₹{Math.floor(product.price * (1 + product.discount / 100))}
                </span>
              )} */}
            </div>
            {/* {product.discount && (
              <span className="text-xs text-green-600 font-medium">Save ₹{Math.floor(product.price * product.discount / 100)}</span>
            )} */}
          </div>
          
          {/* <button 
            disabled={!product.inStock}
            className={`p-2.5 rounded-lg transition-all flex items-center gap-1 ${
              product.inStock 
                ? 'bg-green-600 hover:bg-green-700 text-white shadow-md hover:shadow-lg hover:scale-105' 
                : 'bg-gray-200 text-gray-400 cursor-not-allowed'
            }`}
          >
            <ShoppingCart className="w-4 h-4" />
          </button> */}
        </div>
      </div>
    </div>
  );
};

const ProductSection = ({ title, subtitle, products, icon: Icon }) => {
  const scrollContainerRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  const scroll = (direction) => {
    if (scrollContainerRef.current) {
      const scrollAmount = scrollContainerRef.current.clientWidth * 0.8;
      scrollContainerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
      setTimeout(checkScroll, 300);
    }
  };

  return (
    <div className="mb-16">
      {/* Section Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <div className="flex items-center gap-3 mb-2">
            <div className="p-2 bg-green-100 rounded-lg">
              <Icon className="w-6 h-6 text-green-600" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900">{title}</h2>
          </div>
          <p className="text-sm text-gray-600 ml-14">{subtitle}</p>
        </div>
        
        {/* Navigation Arrows */}
        <div className="flex gap-2">
          <button
            onClick={() => scroll('left')}
            disabled={!canScrollLeft}
            className={`p-3 rounded-full transition-all ${
              canScrollLeft
                ? 'bg-green-600 text-white hover:bg-green-700 shadow-md hover:shadow-lg'
                : 'bg-gray-200 text-gray-400 cursor-not-allowed'
            }`}
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={() => scroll('right')}
            disabled={!canScrollRight}
            className={`p-3 rounded-full transition-all ${
              canScrollRight
                ? 'bg-green-600 text-white hover:bg-green-700 shadow-md hover:shadow-lg'
                : 'bg-gray-200 text-gray-400 cursor-not-allowed'
            }`}
          >
            <ChevronRight className="w-5 h-5" />


          
          </button>
        </div>
      </div>

      {/* Products Carousel */}
      <div 
        ref={scrollContainerRef}
        onScroll={checkScroll}
        className="flex gap-4 overflow-x-auto scrollbar-hide scroll-smooth pb-4"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {products.map(product => (
          <div key={product.id} className="w-72 flex-shrink-0">
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default function Products() {
  const productsByCategory = {
    'Fresh Mushrooms': allProducts.filter(p => p.category === 'Fresh Mushrooms'),
    'Dried Mushrooms': allProducts.filter(p => p.category === 'Dried Mushrooms'),
    'Grow Bags': allProducts.filter(p => p.category === 'Grow Bags'),
    'Spawn': allProducts.filter(p => p.category === 'Spawn'),
    'Training Kits': allProducts.filter(p => p.category === 'Training Kits')
  };

  const categoryInfo = {
    'Fresh Mushrooms': {
      subtitle: 'Farm-fresh, handpicked organic mushrooms delivered daily',
      icon: Leaf
    },
    'Dried Mushrooms': {
      subtitle: 'Premium dried mushrooms with concentrated flavor & nutrition',
      icon: Package
    },
    'Grow Bags': {
      subtitle: 'Complete grow kits - harvest your own mushrooms at home',
      icon: Sparkles
    },
    'Spawn': {
      subtitle: 'High-quality spawn for commercial & home cultivation',
      icon: TrendingUp
    },
    'Training Kits': {
      subtitle: 'Learn mushroom cultivation with expert guidance & materials',
      icon: Award
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-emerald-50">
      {/* Hero Header */}
      <div className="bg-gradient-to-r from-green-600 to-emerald-600 text-white py-16 px-6 shadow-xl">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-4 mb-4">
            <div className="p-3 bg-white/20 rounded-xl backdrop-blur-sm">
              <Package className="w-12 h-12" />
            </div>
            <div>
              <h1 className="text-2xl font-bold mb-2">Lavaniya's Bio Farm</h1>
              <p className="text-green-100">Premium Organic Mushrooms & Cultivation Supplies</p>
            </div>
          </div>
          
          {/* Trust Badges */}
          <div className="flex gap-6 mt-6 flex-wrap">
            <div className="bg-white/20 backdrop-blur-sm px-4 py-3 rounded-lg flex items-center gap-3">
              <Leaf className="w-6 h-6" />
              <div>
                <div className="font-semibold">100% Organic</div>
                <div className="text-xs text-green-100">Certified Natural</div>
              </div>
            </div>
            <div className="bg-white/20 backdrop-blur-sm px-4 py-3 rounded-lg flex items-center gap-3">
              <Truck className="w-6 h-6" />
              <div>
                <div className="font-semibold">Fast Delivery</div>
                <div className="text-xs text-green-100">Same Day Shipping</div>
              </div>
            </div>
            <div className="bg-white/20 backdrop-blur-sm px-4 py-3 rounded-lg flex items-center gap-3">
              <Shield className="w-6 h-6" />
              <div>
                <div className="font-semibold">Quality Assured</div>
                <div className="text-xs text-green-100">Lab Tested Products</div>
              </div>
            </div>
            <div className="bg-white/20 backdrop-blur-sm px-4 py-3 rounded-lg flex items-center gap-3">
              <Award className="w-6 h-6" />
              <div>
                <div className="font-semibold">Expert Support</div>
                <div className="text-xs text-green-100">24/7 Assistance</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="max-w-7xl mx-auto px-6 -mt-8">
        <div className="bg-white rounded-2xl shadow-xl p-8 grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="text-center">
            <div className="text-4xl font-bold text-green-600 mb-1">50+</div>
            <div className="text-gray-600">Premium Products</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-green-600 mb-1">10K+</div>
            <div className="text-gray-600">Happy Customers</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-green-600 mb-1">100%</div>
            <div className="text-gray-600">Organic Certified</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-green-600 mb-1">4.8★</div>
            <div className="text-gray-600">Average Rating</div>
          </div>
        </div>
      </div>

      {/* Product Sections */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        {Object.keys(productsByCategory).map(category => (
          <ProductSection
            key={category}
            title={category}
            subtitle={categoryInfo[category].subtitle}
            icon={categoryInfo[category].icon}
            products={productsByCategory[category]}
          />
        ))}
      </div>

      {/* Why Choose Us Section */}
      <div className="bg-white py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Lavaniya's Bio Farm?</h2>
            <p className="text-gray-600 text-lg">Experience the difference of truly organic, sustainably grown mushrooms</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Leaf className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Certified Organic</h3>
              <p className="text-gray-600">All our products are 100% organic and free from harmful chemicals, ensuring the highest quality for your health.</p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Package className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Farm Fresh</h3>
              <p className="text-gray-600">Harvested daily and delivered fresh to your doorstep, maintaining peak flavor and nutritional value.</p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Expert Guidance</h3>
              <p className="text-gray-600">Get professional advice and training from experienced mushroom cultivation experts.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Newsletter Section */}
      <div className="bg-gradient-to-r from-green-600 to-emerald-600 py-16 px-6">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Stay Updated with Fresh Offers!</h2>
          <p className="text-green-100 mb-6">Subscribe to our newsletter and get 15% off your first order</p>
          <div className="flex gap-3 max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-green-300"
            />
            <button className="bg-white text-green-700 px-6 py-3 rounded-lg font-semibold hover:bg-green-50 transition shadow-lg">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Footer CTA */}
      <div className="bg-gray-900 text-white py-12 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Need Help Choosing the Right Product?</h2>
          <p className="text-gray-400 mb-6 text-lg">Our mushroom experts are here to guide you!</p>
          <div className="flex gap-4 justify-center flex-wrap">
            <button className="bg-green-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-green-700 transition shadow-lg flex items-center gap-2">
              <Package className="w-5 h-5" />
              Shop Now
            </button>
            <button className="bg-white text-gray-900 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition shadow-lg flex items-center gap-2">
              <Award className="w-5 h-5" />
              Contact Expert
            </button>
          </div>
          
          <div className="mt-8 pt-8 border-t border-gray-800 text-gray-400 text-sm">
            <p>© 2024 Lavaniya's Bio Farm. All rights reserved. | Premium Organic Mushroom Cultivation</p>
          </div>
        </div>
      </div>

      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
}