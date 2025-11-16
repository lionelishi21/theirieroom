import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ShoppingCart, Star, Sparkles } from 'lucide-react';
import type { Product } from '../types';
import { useCart } from '../contexts/CartContext';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart } = useCart();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    addToCart(product);
  };

  return (
    <Link to={`/product/${product.id}`} className="product-card">
      <div className="product-card-svg-decoration">
        <svg width="100" height="100" viewBox="0 0 100 100" className="card-pattern">
          <defs>
            <pattern id={`pattern-${product.id}`} x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
              <circle cx="10" cy="10" r="1.5" fill="var(--rasta-green)" opacity="0.6" />
            </pattern>
          </defs>
          <rect width="100" height="100" fill={`url(#pattern-${product.id})`} opacity="0.4" />
        </svg>
      </div>
      <motion.div 
        className="product-image"
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.3 }}
      >
        <img src={product.image} alt={product.name} loading="lazy" />
        {!product.inStock && <div className="out-of-stock-badge">Out of Stock</div>}
        <div className="product-image-overlay">
          <Sparkles size={20} color="var(--rasta-yellow)" opacity={0.8} />
        </div>
      </motion.div>
      
      <div className="product-info">
        <span className="product-category">{product.category}</span>
        <h3 className="product-name">{product.name}</h3>
        
        {product.rating && (
          <div className="product-rating">
            <Star size={16} fill="#fbbf24" color="#fbbf24" />
            <span>{product.rating}</span>
            <span className="reviews">({product.reviews} reviews)</span>
          </div>
        )}
        
        <div className="product-footer">
          <span className="product-price">${product.price.toFixed(2)}</span>
          <motion.button 
            className="add-to-cart-btn"
            onClick={handleAddToCart}
            disabled={!product.inStock}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <ShoppingCart size={18} />
            Add
          </motion.button>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;

