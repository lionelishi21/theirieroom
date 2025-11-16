import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import ModernHero from '../components/ModernHero';
import ProductCard from '../components/ProductCard';
import { products } from '../data/products';
import { Flame, Coffee, Shield, Zap } from 'lucide-react';

const Home: React.FC = () => {
  const featuredProducts = products.slice(0, 6);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring' as const,
        stiffness: 100,
      },
    },
  };

  return (
    <div className="home-page">
      {/* Modern Hero Section */}
      <ModernHero />

      {/* Features Section */}
      <section className="features-section">
        <div className="container">
          <motion.div
            className="features-grid"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.div variants={itemVariants} className="feature-card">
              <Flame size={32} />
              <h3>Premium Selection</h3>
              <p>Curated smoke accessories from top brands</p>
            </motion.div>
            <motion.div variants={itemVariants} className="feature-card">
              <Coffee size={32} />
              <h3>Artisan Café</h3>
              <p>Specialty coffee & chill lounge area</p>
            </motion.div>
            <motion.div variants={itemVariants} className="feature-card">
              <Shield size={32} />
              <h3>Age Verified</h3>
              <p>Safe, legal, and discreet service</p>
            </motion.div>
            <motion.div variants={itemVariants} className="feature-card">
              <Zap size={32} />
              <h3>Fast Delivery</h3>
              <p>Same-day local delivery available</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="featured-section">
        <div className="container">
          <motion.div
            className="section-header"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div>
              <h2>Featured Products</h2>
              <p className="section-subtitle">Most popular items this week</p>
            </div>
            <Link to="/shop" className="btn btn-outline">View All</Link>
          </motion.div>
          <motion.div
            className="products-grid"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            {featuredProducts.map((product) => (
              <motion.div key={product.id} variants={itemVariants}>
                <ProductCard product={product} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Dual Concept Section */}
      <section className="dual-concept-section">
        <div className="container">
          <motion.h2
            style={{ textAlign: 'center', marginBottom: '3rem', fontSize: '2.5rem' }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Two Experiences, One Location
          </motion.h2>
          <motion.div
            className="dual-concept-grid"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.div variants={itemVariants} className="concept-card" whileHover={{ scale: 1.02 }}>
              <div className="concept-icon">
                <Flame size={48} />
              </div>
              <h3>Smoke Shop</h3>
              <p>Premium glass, vaporizers, papers, and accessories. Everything you need for the perfect session.</p>
              <Link to="/shop" className="btn btn-primary">
                Browse Products
              </Link>
            </motion.div>
            <motion.div variants={itemVariants} className="concept-card" whileHover={{ scale: 1.02 }}>
              <div className="concept-icon">
                <Coffee size={48} />
              </div>
              <h3>Café Lounge</h3>
              <p>Specialty coffee, herbal teas, and CBD edibles. Order ahead for pickup or dine in at our lounge.</p>
              <Link to="/cafe" className="btn btn-primary">
                Order Now
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Experience Irie Room?</h2>
            <p>Shop online or visit our physical location for the full experience</p>
            <div className="cta-buttons">
              <Link to="/shop" className="btn btn-primary">
                Start Shopping
              </Link>
              <Link to="/contact" className="btn btn-secondary">
                Visit Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
