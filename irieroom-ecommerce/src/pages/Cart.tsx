import React from 'react';
import { Link } from 'react-router-dom';
import { Trash2, Plus, Minus, ShoppingBag } from 'lucide-react';
import { useCart } from '../contexts/CartContext';

const Cart: React.FC = () => {
  const { cart, removeFromCart, updateQuantity, getCartTotal } = useCart();

  if (cart.length === 0) {
    return (
      <div className="empty-cart">
        <ShoppingBag size={80} />
        <h2>Your cart is empty</h2>
        <p>Add some products to get started!</p>
        <Link to="/shop" className="btn btn-primary">
          Continue Shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="cart-page">
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
        <h1>Shopping Cart</h1>

        <div className="cart-content">
          <div className="cart-items">
            {cart.map((item) => (
              <div key={item.id} className="cart-item">
                <img src={item.image} alt={item.name} className="cart-item-image" />
                
                <div className="cart-item-details">
                  <Link to={`/product/${item.id}`} className="cart-item-name">
                    {item.name}
                  </Link>
                  <span className="cart-item-category">{item.category}</span>
                  <span className="cart-item-price">${item.price.toFixed(2)}</span>
                </div>

                <div className="cart-item-actions">
                  <div className="quantity-controls">
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      aria-label="Decrease quantity"
                    >
                      <Minus size={16} />
                    </button>
                    <span>{item.quantity}</span>
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      aria-label="Increase quantity"
                    >
                      <Plus size={16} />
                    </button>
                  </div>

                  <div className="cart-item-total">
                    ${(item.price * item.quantity).toFixed(2)}
                  </div>

                  <button
                    className="remove-btn"
                    onClick={() => removeFromCart(item.id)}
                    aria-label="Remove item"
                  >
                    <Trash2 size={18} />
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="cart-summary">
            <h2>Order Summary</h2>
            
            <div className="summary-row">
              <span>Subtotal</span>
              <span>${getCartTotal().toFixed(2)}</span>
            </div>
            
            <div className="summary-row">
              <span>Shipping</span>
              <span>{getCartTotal() > 50 ? 'FREE' : '$5.99'}</span>
            </div>
            
            <div className="summary-row">
              <span>Tax (estimated)</span>
              <span>${(getCartTotal() * 0.08).toFixed(2)}</span>
            </div>

            <div className="summary-divider"></div>

            <div className="summary-row summary-total">
              <span>Total</span>
              <span>
                ${(getCartTotal() + (getCartTotal() > 50 ? 0 : 5.99) + getCartTotal() * 0.08).toFixed(2)}
              </span>
            </div>

            <Link to="/checkout" className="btn btn-primary btn-block">
              Proceed to Checkout
            </Link>

            <Link to="/shop" className="continue-shopping">
              ← Continue Shopping
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;

