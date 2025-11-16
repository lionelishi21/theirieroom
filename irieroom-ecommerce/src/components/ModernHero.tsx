import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Coffee, ShoppingBag, ArrowRight, Star, Leaf, Sparkles } from 'lucide-react';

const ModernHero: React.FC = () => {
  const featuredProduct = {
    name: 'Rasta Frassachino',
    image: '/images/rasta_frasachiino.png',
    price: '1000 JMD',
    description: 'Our signature blend with Rastafarian colors',
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
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

  const imageVariants = {
    hidden: { scale: 0, rotate: -10 },
    visible: {
      scale: 1,
      rotate: 0,
      transition: {
        type: 'spring' as const,
        stiffness: 100,
        delay: 0.2,
      },
    },
  };

  const floatAnimation = {
    y: [0, -10, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: 'easeInOut' as const,
    },
  };

  return (
    <div className="modern-hero">
      <div className="container">
        <div className="modern-hero-grid">
          {/* Left Content */}
          <motion.div
            className="hero-content-left"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={itemVariants} className="hero-badge-new">
              <Coffee size={16} />
              <span>Smoke Shop & Café</span>
            </motion.div>

            <motion.h1 variants={itemVariants} className="hero-title-new">
              Welcome to
              <br />
              <span className="hero-title-highlight">The Irie Room</span>
            </motion.h1>

            <motion.p variants={itemVariants} className="hero-subtitle-new">
              Experience the perfect blend of premium smoke accessories and artisanal coffee. 
              Your destination for quality products and good vibes.
            </motion.p>

            <motion.div variants={itemVariants} className="hero-cta-buttons">
              <Link to="/shop" className="btn btn-primary btn-large">
                <ShoppingBag size={20} />
                Shop Now
              </Link>
              <Link to="/cafe" className="btn btn-outline btn-large">
                <Coffee size={20} />
                Order Café
                <ArrowRight size={18} />
              </Link>
            </motion.div>

            <motion.div variants={itemVariants} className="hero-stats-inline">
              <div className="stat-inline">
                <span className="stat-number-inline">500+</span>
                <span className="stat-label-inline">Products</span>
              </div>
              <div className="stat-divider"></div>
              <div className="stat-inline">
                <span className="stat-number-inline">10K+</span>
                <span className="stat-label-inline">Happy Customers</span>
              </div>
              <div className="stat-divider"></div>
              <div className="stat-inline">
                <span className="stat-number-inline">4.9★</span>
                <span className="stat-label-inline">Rating</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Featured Product */}
          <div className="hero-product-showcase">
            <motion.div
              className="hero-featured-product"
              variants={imageVariants}
              initial="hidden"
              animate="visible"
              whileHover={{ scale: 1.02 }}
            >
              <motion.div 
                className="featured-product-image"
                animate={floatAnimation}
              >
                <img
                  src={featuredProduct.image}
                  alt={featuredProduct.name}
                />
              </motion.div>
              
              <motion.div 
                className="featured-product-info"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                <div className="product-badge">
                  <Star size={16} fill="var(--rasta-yellow)" color="var(--rasta-yellow)" />
                  <span>Signature Drink</span>
                </div>
                <h3>{featuredProduct.name}</h3>
                <p>{featuredProduct.description}</p>
                <div className="product-price-tag">
                  <span className="price">{featuredProduct.price}</span>
                </div>
                <Link to="/cafe" className="btn btn-primary">
                  <Coffee size={20} />
                  Order Now
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Floating SVG Shapes */}
      <motion.div
        className="hero-shape shape-1"
        animate={{
          y: [0, -20, 0],
          rotate: [0, 5, 0],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: 'easeInOut' as const,
        }}
      />
      <motion.div
        className="hero-shape shape-2"
        animate={{
          y: [0, 20, 0],
          rotate: [0, -5, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: 'easeInOut' as const,
        }}
      />
      
      {/* SVG Decorative Elements */}
      <div className="hero-svg-decorations">
        <motion.svg
          className="jamaica-pattern-1"
          width="120"
          height="120"
          viewBox="0 0 120 120"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 0.6, scale: 1 }}
          transition={{ delay: 1, duration: 1 }}
        >
          <circle cx="60" cy="60" r="50" fill="none" stroke="var(--rasta-green)" strokeWidth="3" />
          <circle cx="60" cy="60" r="35" fill="none" stroke="var(--rasta-yellow)" strokeWidth="2.5" />
          <circle cx="60" cy="60" r="20" fill="var(--rasta-green)" opacity="0.5" />
        </motion.svg>
        
        <motion.svg
          className="jamaica-pattern-2"
          width="80"
          height="80"
          viewBox="0 0 80 80"
          initial={{ opacity: 0, rotate: 0 }}
          animate={{ opacity: 0.7, rotate: 360 }}
          transition={{ delay: 1.5, duration: 20, repeat: Infinity, ease: "linear" }}
        >
          <path d="M40 10 L50 30 L70 30 L55 45 L60 65 L40 55 L20 65 L25 45 L10 30 L30 30 Z" 
                fill="var(--rasta-yellow)" opacity="0.8" />
        </motion.svg>
        
        <motion.svg
          className="jamaica-pattern-3"
          width="100"
          height="100"
          viewBox="0 0 100 100"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          transition={{ delay: 2, duration: 1 }}
        >
          <rect x="20" y="20" width="60" height="60" fill="none" stroke="var(--rasta-green)" strokeWidth="3" />
          <rect x="30" y="30" width="40" height="40" fill="none" stroke="var(--rasta-yellow)" strokeWidth="2.5" />
          <rect x="40" y="40" width="20" height="20" fill="var(--rasta-green)" opacity="0.6" />
        </motion.svg>
      </div>
      
      {/* Floating Icon SVGs */}
      <motion.div
        className="floating-icon icon-1"
        animate={{
          y: [0, -15, 0],
          rotate: [0, 10, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: 'easeInOut' as const,
        }}
      >
        <Leaf size={32} color="var(--rasta-green)" opacity={0.7} />
      </motion.div>
      
      <motion.div
        className="floating-icon icon-2"
        animate={{
          y: [0, 15, 0],
          rotate: [0, -10, 0],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: 'easeInOut' as const,
        }}
      >
        <Sparkles size={28} color="var(--rasta-yellow)" opacity={0.8} />
      </motion.div>
    </div>
  );
};

export default ModernHero;

