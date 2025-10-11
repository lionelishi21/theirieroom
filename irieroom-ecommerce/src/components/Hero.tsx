import React from 'react';
import { Link } from 'react-router-dom';
import { Coffee, Sparkles } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="hero">
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <div className="hero-badge">
          <Sparkles size={16} />
          <span>Smoke Shop & Café</span>
        </div>
        <h1 className="hero-title">
          Where <span className="gradient-text">Culture Meets</span> Comfort
        </h1>
        <p className="hero-subtitle">
          Premium smoke accessories meet artisan coffee culture. 
          Explore our curated collection, then relax in our café lounge.
        </p>
        <div className="hero-stats">
          <div className="stat">
            <div className="stat-icon smoke-icon">💨</div>
            <div>
              <div className="stat-number">500+</div>
              <div className="stat-label">Premium Products</div>
            </div>
          </div>
          <div className="stat-divider"></div>
          <div className="stat">
            <div className="stat-icon">
              <Coffee size={32} />
            </div>
            <div>
              <div className="stat-number">Fresh</div>
              <div className="stat-label">Daily Brews</div>
            </div>
          </div>
        </div>
        <div className="hero-actions">
          <Link to="/shop" className="btn btn-primary btn-glow">
            Shop Now
          </Link>
          <Link to="/about" className="btn btn-glass">
            Our Story
          </Link>
        </div>
      </div>
      <div className="hero-bg-elements">
        <div className="floating-element element-1"></div>
        <div className="floating-element element-2"></div>
        <div className="floating-element element-3"></div>
      </div>
    </section>
  );
};

export default Hero;
