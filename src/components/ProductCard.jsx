import { ArrowRight, Star, CheckCircle, Package } from "lucide-react";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 group cursor-pointer">
      {/* Product Image */}
      <div className="relative overflow-hidden h-64">
        <img 
          src={product.image} 
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        
        {/* Stock Badge */}
        {product.inStock && (
          <div className="absolute top-4 right-4 bg-green-600 text-white px-3 py-1.5 rounded-full text-xs font-semibold flex items-center gap-1 shadow-lg">
            <CheckCircle className="w-3 h-3" />
            In Stock
          </div>
        )}

        {/* Category Badge */}
        <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm px-3 py-1.5 rounded-full text-xs font-semibold text-gray-700 flex items-center gap-1 shadow-md">
          <Package className="w-3 h-3" />
          {product.category}
        </div>

        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>

      {/* Product Details */}
      <div className="p-6">
        {/* Product Name */}
        <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-green-700 transition">
          {product.name}
        </h3>
        
        {/* Description */}
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">
          {product.shortDescription}
        </p>

        {/* Rating */}
        <div className="flex items-center gap-1 mb-4">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
          ))}
          <span className="text-sm text-gray-600 ml-2">(4.8)</span>
        </div>

        {/* Price and Action */}
        <div className="flex items-center justify-between">
          <div>
            <p className="text-2xl font-bold text-green-700">{product.price}</p>
          </div>
          <Link to={`/products`}>
          <button className="bg-green-700 text-white p-3 rounded-full hover:bg-green-800 transition group-hover:scale-110 shadow-lg hover:shadow-xl">
            <ArrowRight className="w-5 h-5" />
          </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;