import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import ProductCard from '../components/ProductCard';
import { products, categories } from '../data/products';
import { Filter, Flame, Zap, Shield, Package } from 'lucide-react';

const Shop: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const categoryFromUrl = searchParams.get('category') || 'All';
  const [selectedCategory, setSelectedCategory] = useState(categoryFromUrl);
  const [sortBy, setSortBy] = useState('featured');

  useEffect(() => {
    const categoryParam = searchParams.get('category');
    if (categoryParam && categories.includes(categoryParam)) {
      setSelectedCategory(categoryParam);
    }
  }, [searchParams]);

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
        <div className="page-svg-decorations">
          <svg className="page-svg-1" width="150" height="150" viewBox="0 0 150 150">
            <circle cx="75" cy="75" r="60" fill="none" stroke="var(--rasta-green)" strokeWidth="3" opacity="0.6" />
            <circle cx="75" cy="75" r="40" fill="none" stroke="var(--rasta-yellow)" strokeWidth="2.5" opacity="0.7" />
            <circle cx="75" cy="75" r="25" fill="var(--rasta-green)" opacity="0.5" />
          </svg>
          <svg className="page-svg-2" width="120" height="120" viewBox="0 0 120 120">
            <path d="M60 10 L70 40 L100 40 L75 60 L85 90 L60 75 L35 90 L45 60 L20 40 L50 40 Z" 
                  fill="var(--rasta-yellow)" opacity="0.7" />
          </svg>
          <svg className="page-svg-3" width="100" height="100" viewBox="0 0 100 100">
            <rect x="10" y="10" width="80" height="80" fill="none" stroke="var(--rasta-green)" strokeWidth="3" opacity="0.6" />
            <rect x="20" y="20" width="60" height="60" fill="none" stroke="var(--rasta-yellow)" strokeWidth="2.5" opacity="0.7" />
            <rect x="35" y="35" width="30" height="30" fill="var(--rasta-green)" opacity="0.5" />
          </svg>
          <svg className="page-svg-4" width="80" height="80" viewBox="0 0 80 80">
            <circle cx="40" cy="40" r="30" fill="var(--rasta-yellow)" opacity="0.6" />
            <circle cx="40" cy="40" r="20" fill="var(--rasta-green)" opacity="0.4" />
          </svg>
          <svg className="page-svg-5" width="90" height="90" viewBox="0 0 90 90">
            <polygon points="45,10 70,30 70,60 45,80 20,60 20,30" fill="none" stroke="var(--rasta-green)" strokeWidth="3" opacity="0.6" />
            <polygon points="45,25 60,40 60,55 45,70 30,55 30,40" fill="var(--rasta-yellow)" opacity="0.5" />
          </svg>
        </div>
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
        {/* Category Cards Section */}
        <section className="category-cards-section">
          <motion.h2
            className="category-cards-title"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Shop by Category
          </motion.h2>
          <div className="category-cards-grid">
            {categories.filter(cat => cat !== 'All').map((category, index) => {
              // Unsplash images for each category
              const categoryImages: { [key: string]: string } = {
                'Glass': 'https://images.unsplash.com/photo-1582560475093-ba66accbc424?w=600&h=400&fit=crop',
                'Vaporizers': 'https://images.unsplash.com/photo-1589998059171-988d887df646?w=600&h=400&fit=crop',
                'Accessories': 'https://images.unsplash.com/photo-1603909075881-3c7d98c4a6ff?w=600&h=400&fit=crop',
                'Papers': 'https://images.unsplash.com/photo-1621607512905-39e6981b7e7e?w=600&h=400&fit=crop',
                'Storage': 'https://images.unsplash.com/photo-1584308972272-9e4e7685e80f?w=600&h=400&fit=crop',
                'Coffee': 'https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=600&h=400&fit=crop',
                'Tea': 'https://images.unsplash.com/photo-1515823064-d6e0c04616a7?w=600&h=400&fit=crop',
                'Beverages': 'https://images.unsplash.com/photo-1517487881594-2787fef5ebf7?w=600&h=400&fit=crop',
                'Edibles': 'https://images.unsplash.com/photo-1587049352846-4a222e784010?w=600&h=400&fit=crop',
                'Merch': 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=600&h=400&fit=crop'
              };

              const categoryCount = products.filter(p => p.category === category).length;

              return (
                <motion.div
                  key={category}
                  className="category-card"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  onClick={() => {
                    setSelectedCategory(category);
                    setSearchParams({ category });
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                >
                  <div className="category-card-image">
                    <img src={categoryImages[category] || categoryImages['Accessories']} alt={category} />
                    <div className="category-card-overlay"></div>
                  </div>
                  <div className="category-card-content">
                    <h3 className="category-card-title">{category}</h3>
                    <p className="category-card-count">{categoryCount} {categoryCount === 1 ? 'product' : 'products'}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </section>

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

