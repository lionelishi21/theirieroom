import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { ShoppingCart, Menu, X, Search, ChevronDown } from 'lucide-react';
import { useCart } from '../contexts/CartContext';
import { categories } from '../data/products';
import logo from '../assets/logo.png';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isCategoryOpen, setIsCategoryOpen] = React.useState(false);
  const { getCartCount } = useCart();
  const location = useLocation();
  const navigate = useNavigate();
  
  const isActive = (path: string) => {
    if (path === '/') {
      return location.pathname === '/';
    }
    return location.pathname.startsWith(path);
  };

  const handleCategoryClick = (category: string) => {
    navigate(`/shop?category=${category}`);
    setIsCategoryOpen(false);
    setIsMenuOpen(false);
  };

  return (
    <header className="header">
      <div className="header-svg-decoration">
        <svg width="200" height="100" viewBox="0 0 200 100" className="header-pattern">
          <defs>
            <pattern id="header-pattern" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
              <circle cx="20" cy="20" r="2.5" fill="var(--rasta-green)" opacity="0.4" />
            </pattern>
          </defs>
          <rect width="200" height="100" fill="url(#header-pattern)" />
        </svg>
      </div>
      <div className="container">
        <div className="header-content">
          <Link to="/" className="logo">
            <img src={logo} alt="The Irie Room" className="logo-image" />
          </Link>

          <nav className={`nav ${isMenuOpen ? 'nav-open' : ''}`}>
            <Link 
              to="/" 
              onClick={() => setIsMenuOpen(false)}
              className={isActive('/') ? 'nav-active' : ''}
            >
              Home
            </Link>
            <div 
              className="nav-category-dropdown"
              onMouseEnter={() => setIsCategoryOpen(true)}
              onMouseLeave={() => setIsCategoryOpen(false)}
            >
              <Link 
                to="/shop" 
                onClick={() => setIsMenuOpen(false)}
                className={isActive('/shop') ? 'nav-active' : ''}
              >
                Shop
                <ChevronDown size={16} />
              </Link>
              {isCategoryOpen && (
                <div className="category-dropdown-menu">
                  {categories.map((category) => (
                    <button
                      key={category}
                      onClick={() => handleCategoryClick(category)}
                      className="category-dropdown-item"
                    >
                      {category}
                    </button>
                  ))}
                </div>
              )}
            </div>
            <Link 
              to="/cafe" 
              onClick={() => setIsMenuOpen(false)}
              className={isActive('/cafe') ? 'nav-active' : ''}
            >
              Café
            </Link>
            <Link 
              to="/about" 
              onClick={() => setIsMenuOpen(false)}
              className={isActive('/about') ? 'nav-active' : ''}
            >
              About
            </Link>
            <Link 
              to="/contact" 
              onClick={() => setIsMenuOpen(false)}
              className={isActive('/contact') ? 'nav-active' : ''}
            >
              Contact
            </Link>
          </nav>

          <div className="header-actions">
            <button className="icon-button" aria-label="Search">
              <Search size={22} />
            </button>
            <Link to="/cart" className="icon-button cart-button">
              <ShoppingCart size={22} />
              {getCartCount() > 0 && (
                <span className="cart-badge">{getCartCount()}</span>
              )}
            </Link>
            <button 
              className="menu-toggle" 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

