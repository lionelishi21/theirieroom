import React from 'react';
import { motion } from 'framer-motion';
import { Coffee, Flame, Heart, Users } from 'lucide-react';

const About: React.FC = () => {
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
    <div className="about-page">
      <div className="page-svg-decorations">
        <svg className="page-svg-1" width="140" height="140" viewBox="0 0 140 140">
          <circle cx="70" cy="70" r="55" fill="none" stroke="var(--rasta-green)" strokeWidth="3" opacity="0.6" />
          <circle cx="70" cy="70" r="35" fill="none" stroke="var(--rasta-yellow)" strokeWidth="2.5" opacity="0.7" />
          <circle cx="70" cy="70" r="20" fill="var(--rasta-green)" opacity="0.5" />
        </svg>
        <svg className="page-svg-2" width="110" height="110" viewBox="0 0 110 110">
          <path d="M55 5 L65 35 L95 35 L70 55 L80 85 L55 70 L30 85 L40 55 L15 35 L45 35 Z" 
                fill="var(--rasta-yellow)" opacity="0.7" />
        </svg>
        <svg className="page-svg-3" width="130" height="130" viewBox="0 0 130 130">
          <rect x="15" y="15" width="100" height="100" fill="none" stroke="var(--rasta-green)" strokeWidth="3" opacity="0.6" />
          <rect x="30" y="30" width="70" height="70" fill="none" stroke="var(--rasta-yellow)" strokeWidth="2.5" opacity="0.7" />
          <rect x="50" y="50" width="30" height="30" fill="var(--rasta-green)" opacity="0.5" />
        </svg>
        <svg className="page-svg-4" width="95" height="95" viewBox="0 0 95 95">
          <circle cx="47.5" cy="47.5" r="40" fill="var(--rasta-yellow)" opacity="0.6" />
          <circle cx="47.5" cy="47.5" r="25" fill="var(--rasta-green)" opacity="0.4" />
        </svg>
        <svg className="page-svg-5" width="100" height="100" viewBox="0 0 100 100">
          <polygon points="50,5 75,25 75,55 50,75 25,55 25,25" fill="none" stroke="var(--rasta-green)" strokeWidth="3" opacity="0.6" />
          <polygon points="50,20 65,35 65,50 50,65 35,50 35,35" fill="var(--rasta-yellow)" opacity="0.5" />
        </svg>
        <svg className="page-svg-6" width="85" height="85" viewBox="0 0 85 85">
          <ellipse cx="42.5" cy="42.5" rx="35" ry="25" fill="none" stroke="var(--rasta-green)" strokeWidth="2.5" opacity="0.6" />
          <ellipse cx="42.5" cy="42.5" rx="20" ry="15" fill="var(--rasta-yellow)" opacity="0.5" />
        </svg>
      </div>
      <div className="container">
        <motion.div
          className="about-header"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="page-badge">About Us</span>
          <h1>Where Smoke Culture Meets Coffee Culture</h1>
          <p className="subtitle">The Irie Room is more than a shop—it's a lifestyle destination</p>
        </motion.div>

        <section className="about-story">
          <motion.div
            className="story-grid"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              className="story-image"
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <img 
                src="https://images.unsplash.com/photo-1511920170033-f8396924c348?w=600&h=700&fit=crop" 
                alt="Coffee and smoke culture"
              />
            </motion.div>
            <motion.div
              className="story-content"
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2>Our Story</h2>
              <p>
                Founded in 2019, The Irie Room was born from a simple vision: create a space where 
                people can explore premium smoke accessories and enjoy exceptional coffee in a 
                welcoming, judgment-free environment.
              </p>
              <p>
                We noticed that smoke shops often felt intimidating, while coffee shops lacked 
                the edge and culture we craved. So we combined both worlds, creating a unique 
                hybrid destination that celebrates both communities.
              </p>
              <p>
                Today, we're proud to offer a carefully curated selection of premium glass, 
                vaporizers, and accessories alongside specialty-grade coffee, teas, and CBD products. 
                Whether you're shopping online or visiting our lounge, you'll experience the perfect 
                blend of quality, culture, and comfort.
              </p>
              <div className="story-highlights">
                <div className="highlight">
                  <span className="highlight-number">2019</span>
                  <span className="highlight-label">Established</span>
                </div>
                <div className="highlight">
                  <span className="highlight-number">10K+</span>
                  <span className="highlight-label">Happy Customers</span>
                </div>
                <div className="highlight">
                  <span className="highlight-number">500+</span>
                  <span className="highlight-label">Products</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </section>

        <section className="about-values">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            What We Stand For
          </motion.h2>
          <motion.div
            className="values-grid"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <motion.div variants={itemVariants} className="value-card" whileHover={{ scale: 1.05 }}>
              <div className="value-icon">
                <Flame size={32} />
              </div>
              <h3>Quality First</h3>
              <p>Every product is carefully selected and tested. We only carry brands we trust and use ourselves.</p>
            </motion.div>
            <motion.div variants={itemVariants} className="value-card" whileHover={{ scale: 1.05 }}>
              <div className="value-icon">
                <Coffee size={32} />
              </div>
              <h3>Café Culture</h3>
              <p>Our café space is designed for connection, creativity, and relaxation. Great vibes only.</p>
            </motion.div>
            <motion.div variants={itemVariants} className="value-card" whileHover={{ scale: 1.05 }}>
              <div className="value-icon">
                <Users size={32} />
              </div>
              <h3>Community</h3>
              <p>We're building a community of like-minded individuals who appreciate quality and good times.</p>
            </motion.div>
            <motion.div variants={itemVariants} className="value-card" whileHover={{ scale: 1.05 }}>
              <div className="value-icon">
                <Heart size={32} />
              </div>
              <h3>Welcoming Space</h3>
              <p>Everyone is welcome here. No judgment, just good products and great conversations.</p>
            </motion.div>
          </motion.div>
        </section>

        <section className="about-location">
          <div className="location-grid">
            <div className="location-info">
              <h2>Visit The Irie Room</h2>
              <p>
                Experience the full vibe in person. Browse our complete inventory, 
                sample our coffee, and chill in our lounge area.
              </p>
              <div className="location-details">
                <div className="detail-item">
                  <strong>Hours</strong>
                  <p>Mon-Sat: 10am - 10pm</p>
                  <p>Sunday: 11am - 8pm</p>
                </div>
                <div className="detail-item">
                  <strong>Location</strong>
                  <p>127.5 Waterloo Lane</p>
                  <p>Downtown Kingston, Jamaica</p>
                </div>
                <div className="detail-item">
                  <strong>Age Requirement</strong>
                  <p>21+ with valid ID</p>
                  <p>Strictly enforced</p>
                </div>
              </div>
            </div>
            <div className="location-image">
              <img 
                src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=600&h=500&fit=crop" 
                alt="Irie Room interior"
              />
            </div>
          </div>
        </section>

        <section className="about-cta">
          <h2>One Love. Good Vibes. Quality Products.</h2>
          <p>Join us on this journey 🌿☕</p>
        </section>
      </div>
    </div>
  );
};

export default About;
