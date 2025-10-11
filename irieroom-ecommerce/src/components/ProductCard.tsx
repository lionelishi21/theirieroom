import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ShoppingCart, Star } from 'lucide-react';
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
      <motion.div 
        className="product-image"
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.3 }}
      >
        <img src={product.image} alt={product.name} loading="lazy" />
        {!product.inStock && <div className="out-of-stock-badge">Out of Stock</div>}
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

