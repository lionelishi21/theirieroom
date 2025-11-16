import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CreditCard, Lock } from 'lucide-react';
import { useCart } from '../contexts/CartContext';
import type { ShippingInfo } from '../types';

const Checkout: React.FC = () => {
  const { cart, getCartTotal, clearCart } = useCart();
  const navigate = useNavigate();
  
  const [shippingInfo, setShippingInfo] = useState<ShippingInfo>({
    fullName: '',
    email: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
    phone: '',
  });

  const [cardInfo, setCardInfo] = useState({
    cardNumber: '',
    expiry: '',
    cvv: '',
    nameOnCard: '',
  });

  const handleShippingChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setShippingInfo({ ...shippingInfo, [e.target.name]: e.target.value });
  };

  const handleCardChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCardInfo({ ...cardInfo, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate order processing
    alert('Order placed successfully! 🎉');
    clearCart();
    navigate('/');
  };

  if (cart.length === 0) {
    navigate('/cart');
    return null;
  }

  const subtotal = getCartTotal();
  const shipping = subtotal > 50 ? 0 : 5.99;
  const tax = subtotal * 0.08;
  const total = subtotal + shipping + tax;

  return (
    <div className="checkout-page">
      <div className="page-svg-decorations">
        <svg className="page-svg-1" width="160" height="160" viewBox="0 0 160 160">
          <circle cx="80" cy="80" r="65" fill="none" stroke="var(--rasta-green)" strokeWidth="3" opacity="0.6" />
          <circle cx="80" cy="80" r="45" fill="none" stroke="var(--rasta-yellow)" strokeWidth="2.5" opacity="0.7" />
          <circle cx="80" cy="80" r="30" fill="var(--rasta-green)" opacity="0.5" />
        </svg>
        <svg className="page-svg-2" width="125" height="125" viewBox="0 0 125 125">
          <path d="M62.5 5 L72.5 40 L107.5 40 L82.5 60 L92.5 95 L62.5 80 L32.5 95 L42.5 60 L17.5 40 L52.5 40 Z" 
                fill="var(--rasta-yellow)" opacity="0.7" />
        </svg>
        <svg className="page-svg-3" width="145" height="145" viewBox="0 0 145 145">
          <rect x="20" y="20" width="105" height="105" fill="none" stroke="var(--rasta-green)" strokeWidth="3" opacity="0.6" />
          <rect x="35" y="35" width="75" height="75" fill="none" stroke="var(--rasta-yellow)" strokeWidth="2.5" opacity="0.7" />
          <rect x="55" y="55" width="35" height="35" fill="var(--rasta-green)" opacity="0.5" />
        </svg>
        <svg className="page-svg-4" width="105" height="105" viewBox="0 0 105 105">
          <circle cx="52.5" cy="52.5" r="45" fill="var(--rasta-yellow)" opacity="0.6" />
          <circle cx="52.5" cy="52.5" r="30" fill="var(--rasta-green)" opacity="0.4" />
        </svg>
        <svg className="page-svg-5" width="115" height="115" viewBox="0 0 115 115">
          <polygon points="57.5,10 85,30 85,60 57.5,80 30,60 30,30" fill="none" stroke="var(--rasta-green)" strokeWidth="3" opacity="0.6" />
          <polygon points="57.5,25 72.5,40 72.5,55 57.5,70 42.5,55 42.5,40" fill="var(--rasta-yellow)" opacity="0.5" />
        </svg>
        <svg className="page-svg-6" width="95" height="95" viewBox="0 0 95 95">
          <ellipse cx="47.5" cy="47.5" rx="40" ry="30" fill="none" stroke="var(--rasta-green)" strokeWidth="2.5" opacity="0.6" />
          <ellipse cx="47.5" cy="47.5" rx="25" ry="18" fill="var(--rasta-yellow)" opacity="0.5" />
        </svg>
      </div>
      <div className="container">
        <h1>Checkout</h1>

        <div className="checkout-grid">
          <div className="checkout-form">
            <form onSubmit={handleSubmit}>
              <section className="form-section">
                <h2>Shipping Information</h2>
                <div className="form-grid">
                  <div className="form-group full-width">
                    <label htmlFor="fullName">Full Name *</label>
                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      value={shippingInfo.fullName}
                      onChange={handleShippingChange}
                      required
                    />
                  </div>

                  <div className="form-group full-width">
                    <label htmlFor="email">Email *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={shippingInfo.email}
                      onChange={handleShippingChange}
                      required
                    />
                  </div>

                  <div className="form-group full-width">
                    <label htmlFor="address">Address *</label>
                    <input
                      type="text"
                      id="address"
                      name="address"
                      value={shippingInfo.address}
                      onChange={handleShippingChange}
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="city">City *</label>
                    <input
                      type="text"
                      id="city"
                      name="city"
                      value={shippingInfo.city}
                      onChange={handleShippingChange}
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="state">State *</label>
                    <input
                      type="text"
                      id="state"
                      name="state"
                      value={shippingInfo.state}
                      onChange={handleShippingChange}
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="zipCode">ZIP Code *</label>
                    <input
                      type="text"
                      id="zipCode"
                      name="zipCode"
                      value={shippingInfo.zipCode}
                      onChange={handleShippingChange}
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="phone">Phone *</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={shippingInfo.phone}
                      onChange={handleShippingChange}
                      required
                    />
                  </div>
                </div>
              </section>

              <section className="form-section">
                <h2>
                  <CreditCard size={20} /> Payment Information
                </h2>
                <div className="form-grid">
                  <div className="form-group full-width">
                    <label htmlFor="cardNumber">Card Number *</label>
                    <input
                      type="text"
                      id="cardNumber"
                      name="cardNumber"
                      placeholder="1234 5678 9012 3456"
                      value={cardInfo.cardNumber}
                      onChange={handleCardChange}
                      maxLength={19}
                      required
                    />
                  </div>

                  <div className="form-group full-width">
                    <label htmlFor="nameOnCard">Name on Card *</label>
                    <input
                      type="text"
                      id="nameOnCard"
                      name="nameOnCard"
                      value={cardInfo.nameOnCard}
                      onChange={handleCardChange}
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="expiry">Expiry Date *</label>
                    <input
                      type="text"
                      id="expiry"
                      name="expiry"
                      placeholder="MM/YY"
                      value={cardInfo.expiry}
                      onChange={handleCardChange}
                      maxLength={5}
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="cvv">CVV *</label>
                    <input
                      type="text"
                      id="cvv"
                      name="cvv"
                      placeholder="123"
                      value={cardInfo.cvv}
                      onChange={handleCardChange}
                      maxLength={4}
                      required
                    />
                  </div>
                </div>

                <div className="secure-payment">
                  <Lock size={16} />
                  <span>Your payment information is secure and encrypted</span>
                </div>
              </section>

              <button type="submit" className="btn btn-primary btn-block">
                Place Order - ${total.toFixed(2)}
              </button>
            </form>
          </div>

          <div className="checkout-summary">
            <h2>Order Summary</h2>
            
            <div className="summary-items">
              {cart.map((item) => (
                <div key={item.id} className="summary-item">
                  <img src={item.image} alt={item.name} />
                  <div className="summary-item-info">
                    <span className="item-name">{item.name}</span>
                    <span className="item-quantity">Qty: {item.quantity}</span>
                  </div>
                  <span className="item-price">${(item.price * item.quantity).toFixed(2)}</span>
                </div>
              ))}
            </div>

            <div className="summary-totals">
              <div className="summary-row">
                <span>Subtotal</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              <div className="summary-row">
                <span>Shipping</span>
                <span>{shipping === 0 ? 'FREE' : `$${shipping.toFixed(2)}`}</span>
              </div>
              <div className="summary-row">
                <span>Tax</span>
                <span>${tax.toFixed(2)}</span>
              </div>
              <div className="summary-divider"></div>
              <div className="summary-row summary-total">
                <span>Total</span>
                <span>${total.toFixed(2)}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;

