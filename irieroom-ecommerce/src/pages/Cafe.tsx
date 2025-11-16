import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Coffee, Plus, Minus, ShoppingBag, Clock, MapPin, Star } from 'lucide-react';
import { products } from '../data/products';

interface OrderItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  category: string;
  image: string;
}

const Cafe: React.FC = () => {
  const [orderItems, setOrderItems] = useState<OrderItem[]>([]);
  const [orderType, setOrderType] = useState<'pickup' | 'dinein'>('pickup');
  const [customerName, setCustomerName] = useState('');
  const [customerPhone, setCustomerPhone] = useState('');
  const [specialInstructions, setSpecialInstructions] = useState('');

  // Filter café items
  const cafeProducts = products.filter(p => 
    ['Beverages', 'Coffee', 'Tea', 'Edibles'].includes(p.category)
  );

  const addToOrder = (product: typeof products[0]) => {
    setOrderItems(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        return prev.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, {
        id: product.id,
        name: product.name,
        price: product.price,
        quantity: 1,
        category: product.category,
        image: product.image
      }];
    });
  };

  const updateQuantity = (id: string, change: number) => {
    setOrderItems(prev => {
      const updated = prev.map(item =>
        item.id === id
          ? { ...item, quantity: Math.max(0, item.quantity + change) }
          : item
      );
      return updated.filter(item => item.quantity > 0);
    });
  };

  const getTotal = () => {
    return orderItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  };

  const handleSubmitOrder = (e: React.FormEvent) => {
    e.preventDefault();
    if (orderItems.length === 0) {
      alert('Please add items to your order');
      return;
    }
    if (!customerName || !customerPhone) {
      alert('Please provide your name and phone number');
      return;
    }
    
    // Simulate order submission
    alert(`Order placed successfully! 🎉\n\nOrder Type: ${orderType === 'pickup' ? 'Pickup' : 'Dine In'}\nTotal: $${getTotal().toFixed(2)}\n\nWe'll have your order ready soon!`);
    
    // Reset form
    setOrderItems([]);
    setCustomerName('');
    setCustomerPhone('');
    setSpecialInstructions('');
  };

  const cafeImages = [
    '/images/frassachino.gif',
  ];

  return (
    <div className="cafe-page">
      {/* Hero Banner */}
      <section className="cafe-hero-new" style={{ background: `#e8e9e4` }}>
        <div className="page-svg-decorations">
          <svg className="page-svg-1" width="170" height="170" viewBox="0 0 170 170">
            <circle cx="85" cy="85" r="70" fill="none" stroke="var(--rasta-green)" strokeWidth="3" opacity="0.6" />
            <circle cx="85" cy="85" r="50" fill="none" stroke="var(--rasta-yellow)" strokeWidth="2.5" opacity="0.7" />
            <circle cx="85" cy="85" r="35" fill="var(--rasta-green)" opacity="0.5" />
          </svg>
          <svg className="page-svg-2" width="135" height="135" viewBox="0 0 135 135">
            <path d="M67.5 5 L77.5 45 L117.5 45 L87.5 65 L97.5 105 L67.5 90 L37.5 105 L47.5 65 L17.5 45 L57.5 45 Z" 
                  fill="var(--rasta-yellow)" opacity="0.7" />
          </svg>
          <svg className="page-svg-3" width="155" height="155" viewBox="0 0 155 155">
            <rect x="25" y="25" width="105" height="105" fill="none" stroke="var(--rasta-green)" strokeWidth="3" opacity="0.6" />
            <rect x="40" y="40" width="75" height="75" fill="none" stroke="var(--rasta-yellow)" strokeWidth="2.5" opacity="0.7" />
            <rect x="60" y="60" width="35" height="35" fill="var(--rasta-green)" opacity="0.5" />
          </svg>
          <svg className="page-svg-4" width="115" height="115" viewBox="0 0 115 115">
            <circle cx="57.5" cy="57.5" r="50" fill="var(--rasta-yellow)" opacity="0.6" />
            <circle cx="57.5" cy="57.5" r="35" fill="var(--rasta-green)" opacity="0.4" />
          </svg>
          <svg className="page-svg-5" width="125" height="125" viewBox="0 0 125 125">
            <polygon points="62.5,10 92.5,30 92.5,60 62.5,80 32.5,60 32.5,30" fill="none" stroke="var(--rasta-green)" strokeWidth="3" opacity="0.6" />
            <polygon points="62.5,25 77.5,40 77.5,55 62.5,70 47.5,55 47.5,40" fill="var(--rasta-yellow)" opacity="0.5" />
          </svg>
          <svg className="page-svg-6" width="105" height="105" viewBox="0 0 105 105">
            <ellipse cx="52.5" cy="52.5" rx="45" ry="35" fill="none" stroke="var(--rasta-green)" strokeWidth="2.5" opacity="0.6" />
            <ellipse cx="52.5" cy="52.5" rx="30" ry="22" fill="var(--rasta-yellow)" opacity="0.5" />
          </svg>
          <svg className="page-svg-7" width="110" height="110" viewBox="0 0 110 110">
            <path d="M55 20 L65 45 L90 45 L70 60 L75 85 L55 75 L35 85 L40 60 L20 45 L45 45 Z" 
                  fill="var(--rasta-green)" opacity="0.6" />
          </svg>
          <svg className="page-svg-8" width="90" height="90" viewBox="0 0 90 90">
            <rect x="15" y="15" width="60" height="60" rx="10" fill="none" stroke="var(--rasta-yellow)" strokeWidth="2.5" opacity="0.6" />
            <rect x="25" y="25" width="40" height="40" rx="8" fill="var(--rasta-green)" opacity="0.4" />
          </svg>
        </div>
        <div className="container">
          <div className="cafe-hero-grid">
            <motion.div
              className="cafe-hero-content"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <motion.div
                className="hero-badge-cafe"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <Coffee size={20} />
                <span>Café & Lounge</span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                Irie Room Café
              </motion.h1>

              <motion.p
                className="cafe-hero-subtitle"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                Fresh coffee, herbal teas, and CBD edibles. Order ahead for pickup or relax in our lounge!
              </motion.p>

              <motion.div
                className="cafe-features"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                <div className="cafe-feature-item">
                  <Clock size={24} />
                  <div>
                    <strong>Quick Service</strong>
                    <span>Ready in 5-10 min</span>
                  </div>
                </div>
                <div className="cafe-feature-item">
                  <MapPin size={24} />
                  <div>
                    <strong>Flexible Options</strong>
                    <span>Pickup or Dine In</span>
                  </div>
                </div>
                <div className="cafe-feature-item">
                  <Star size={24} />
                  <div>
                    <strong>Quality First</strong>
                    <span>Premium ingredients</span>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            <motion.div
              className="cafe-hero-images"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              {cafeImages.map((img, index) => (
                <motion.div
                  key={index}
                  animate={{ scale: 1, rotate: 0 }}
                >
                  <img src={img} alt={`Café drink ${index + 1}`} />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      <div className="container">
        <div className="cafe-layout">
          {/* Menu Section */}
          <div className="cafe-menu-section">
            <div className="order-type-selector">
              <button
                className={`order-type-btn ${orderType === 'pickup' ? 'active' : ''}`}
                onClick={() => setOrderType('pickup')}
              >
                <ShoppingBag size={20} />
                Pickup
              </button>
              <button
                className={`order-type-btn ${orderType === 'dinein' ? 'active' : ''}`}
                onClick={() => setOrderType('dinein')}
              >
                <Coffee size={20} />
                Dine In
              </button>
            </div>

            <h2>Menu</h2>
            <div className="cafe-menu-grid">
              {cafeProducts.map(product => (
                <div key={product.id} className="cafe-menu-item">
                  <img src={product.image} alt={product.name} />
                  <div className="cafe-item-info">
                    <div className="cafe-item-header">
                      <div>
                        <h3>{product.name}</h3>
                        <p className="cafe-item-category">{product.category}</p>
                      </div>
                      <span className="cafe-item-price">${product.price.toFixed(2)}</span>
                    </div>
                    <p className="cafe-item-description">{product.description}</p>
                    <button
                      className="add-to-order-btn"
                      onClick={() => addToOrder(product)}
                      disabled={!product.inStock}
                    >
                      <Plus size={18} />
                      Add to Order
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Order Summary */}
          <div className="cafe-order-summary">
            <div className="order-summary-sticky">
              <h2>Your Order</h2>
              
              {orderItems.length === 0 ? (
                <div className="empty-order">
                  <Coffee size={48} />
                  <p>No items yet</p>
                  <span>Add items from the menu to get started</span>
                </div>
              ) : (
                <>
                  <div className="order-items-list">
                    {orderItems.map(item => (
                      <div key={item.id} className="order-item">
                        <img src={item.image} alt={item.name} />
                        <div className="order-item-details">
                          <h4>{item.name}</h4>
                          <span className="order-item-price">${item.price.toFixed(2)}</span>
                        </div>
                        <div className="order-item-controls">
                          <button onClick={() => updateQuantity(item.id, -1)}>
                            <Minus size={16} />
                          </button>
                          <span>{item.quantity}</span>
                          <button onClick={() => updateQuantity(item.id, 1)}>
                            <Plus size={16} />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="order-total">
                    <span>Total</span>
                    <span className="total-amount">${getTotal().toFixed(2)}</span>
                  </div>

                  <form onSubmit={handleSubmitOrder} className="order-form">
                    <div className="form-group">
                      <label htmlFor="customerName">Name *</label>
                      <input
                        type="text"
                        id="customerName"
                        value={customerName}
                        onChange={(e) => setCustomerName(e.target.value)}
                        placeholder="Your name"
                        required
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="customerPhone">Phone *</label>
                      <input
                        type="tel"
                        id="customerPhone"
                        value={customerPhone}
                        onChange={(e) => setCustomerPhone(e.target.value)}
                        placeholder="(555) 123-4567"
                        required
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="specialInstructions">Special Instructions</label>
                      <textarea
                        id="specialInstructions"
                        value={specialInstructions}
                        onChange={(e) => setSpecialInstructions(e.target.value)}
                        placeholder="Any special requests?"
                        rows={3}
                      />
                    </div>

                    <button type="submit" className="btn btn-primary btn-block">
                      Place Order
                    </button>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cafe;

