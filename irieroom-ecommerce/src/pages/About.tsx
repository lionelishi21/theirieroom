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
        type: 'spring',
        stiffness: 100,
      },
    },
  };

  return (
    <div className="about-page">
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
