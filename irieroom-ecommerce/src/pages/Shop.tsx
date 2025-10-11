import React, { useState } from 'react';
import { motion } from 'framer-motion';
import ProductCard from '../components/ProductCard';
import { products, categories } from '../data/products';
import { Filter, Flame, Zap, Shield, Package } from 'lucide-react';

const Shop: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [sortBy, setSortBy] = useState('featured');

  const filteredProducts = products.filter(
    (product) => selectedCategory === 'All' || product.category === selectedCategory
  );

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case 'price-low':
        return a.price - b.price;
      case 'price-high':
        return b.price - a.price;
      case 'name':
        return a.name.localeCompare(b.name);
      case 'rating':
        return (b.rating || 0) - (a.rating || 0);
      default:
        return 0;
    }
  });

  // Get smoke shop products for hero
  const smokeProducts = products.filter(p =>
    ['Glass', 'Vaporizers', 'Accessories', 'Papers', 'Storage'].includes(p.category)
  ).slice(0, 4);

  return (
    <div className="shop-page">
      {/* Shop Hero */}
      <section className="shop-hero">
        <div className="container">
          <div className="shop-hero-grid">
            <motion.div
              className="shop-hero-content"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <motion.div
                className="hero-badge-shop"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <Flame size={20} />
                <span>Premium Smoke Shop</span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                Curated Selection of
                <br />
                <span className="shop-title-highlight">Premium Accessories</span>
              </motion.h1>

              <motion.p
                className="shop-hero-subtitle"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                From glass pieces to vaporizers, papers to storage solutions. 
                Everything you need for the perfect session.
              </motion.p>

              <motion.div
                className="shop-features"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                <div className="shop-feature-item">
                  <Flame size={20} />
                  <span>Top Brands</span>
                </div>
                <div className="shop-feature-item">
                  <Shield size={20} />
                  <span>Age Verified</span>
                </div>
                <div className="shop-feature-item">
                  <Zap size={20} />
                  <span>Fast Shipping</span>
                </div>
                <div className="shop-feature-item">
                  <Package size={20} />
                  <span>Discreet Packaging</span>
                </div>
              </motion.div>
            </motion.div>

            <motion.div
              className="shop-hero-products"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="shop-products-showcase">
                {smokeProducts.map((product, index) => (
                  <motion.div
                    key={product.id}
                    className="shop-product-mini"
                    initial={{ scale: 0, rotate: -10 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{
                      delay: 0.7 + index * 0.1,
                      type: 'spring',
                      stiffness: 100,
                    }}
                    whileHover={{ scale: 1.05, zIndex: 10 }}
                  >
                    <img src={product.image} alt={product.name} />
                    <div className="shop-product-mini-info">
                      <span className="mini-category">{product.category}</span>
                      <span className="mini-price">${product.price}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <div className="container">

        <div className="shop-controls">
          <div className="filter-section">
            <Filter size={20} />
            <span>Filter:</span>
            <div className="category-filters">
              {categories.map((category) => (
                <button
                  key={category}
                  className={`category-btn ${selectedCategory === category ? 'active' : ''}`}
                  onClick={() => setSelectedCategory(category)}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          <div className="sort-section">
            <label htmlFor="sort">Sort by:</label>
            <select
              id="sort"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
            >
              <option value="featured">Featured</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="name">Name: A to Z</option>
              <option value="rating">Top Rated</option>
            </select>
          </div>
        </div>

        <div className="products-count">
          Showing {sortedProducts.length} product{sortedProducts.length !== 1 ? 's' : ''}
        </div>

        <div className="products-grid">
          {sortedProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Shop;

