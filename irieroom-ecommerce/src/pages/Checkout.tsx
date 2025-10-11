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

