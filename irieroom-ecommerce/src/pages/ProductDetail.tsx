import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, ShoppingCart, Heart, Share2, Check } from 'lucide-react';
import { products } from '../data/products';
import { useCart } from '../contexts/CartContext';
import ProductCard from '../components/ProductCard';

const ProductDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [addedToCart, setAddedToCart] = useState(false);

  const product = products.find((p) => p.id === id);
  const relatedProducts = products
    .filter((p) => p.category === product?.category && p.id !== id)
    .slice(0, 4);

  if (!product) {
    return (
      <div className="container" style={{ padding: '4rem 1rem', textAlign: 'center' }}>
        <h2>Product not found</h2>
        <Link to="/shop" className="btn btn-primary" style={{ marginTop: '1rem' }}>
          Back to Shop
        </Link>
      </div>
    );
  }

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addToCart(product);
    }
    setAddedToCart(true);
    setTimeout(() => setAddedToCart(false), 2000);
  };

  return (
    <div className="product-detail-page">
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
        <div className="breadcrumb">
          <Link to="/">Home</Link> / <Link to="/shop">Shop</Link> / {product.name}
        </div>

        <div className="product-detail-grid">
          <div className="product-image-section">
            <img src={product.image} alt={product.name} />
              {/* Added external promotional image */}
              <img
                src="https://res.cloudinary.com/dwfbqodsx/image/upload/v1763288338/WhatsApp_Image_2025-10-25_at_12.09.26_xkcbfq.jpg"
                alt={`${product.name} promotional`}
                style={{ marginTop: '1rem', width: '100%', height: 'auto', borderRadius: '12px' }}
              />
          </div>

          <div className="product-detail-info">
            <span className="product-category-badge">{product.category}</span>
            <h1>{product.name}</h1>

            <div className="product-rating-section">
              <div className="rating-stars">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={18}
                    fill={i < Math.floor(product.rating || 0) ? '#fbbf24' : 'none'}
                    color="#fbbf24"
                  />
                ))}
              </div>
              <span className="rating-text">
                {product.rating} ({product.reviews} reviews)
              </span>
            </div>

            <div className="product-price-section">
              <span className="price">${product.price.toFixed(2)}</span>
              {product.inStock ? (
                <span className="stock in-stock">In Stock</span>
              ) : (
                <span className="stock out-of-stock">Out of Stock</span>
              )}
            </div>

            <p className="product-description">{product.description}</p>

            <div className="product-actions">
              <div className="quantity-selector">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  disabled={!product.inStock}
                >
                  -
                </button>
                <input
                  type="number"
                  value={quantity}
                  onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                  disabled={!product.inStock}
                />
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  disabled={!product.inStock}
                >
                  +
                </button>
              </div>

              <button
                className={`btn btn-primary add-to-cart-large ${addedToCart ? 'added' : ''}`}
                onClick={handleAddToCart}
                disabled={!product.inStock}
              >
                {addedToCart ? (
                  <>
                    <Check size={20} /> Added to Cart
                  </>
                ) : (
                  <>
                    <ShoppingCart size={20} /> Add to Cart
                  </>
                )}
              </button>
            </div>

            <div className="product-meta">
              <button className="meta-btn">
                <Heart size={18} /> Add to Wishlist
              </button>
              <button className="meta-btn">
                <Share2 size={18} /> Share
              </button>
            </div>
          </div>
        </div>

        {relatedProducts.length > 0 && (
          <section className="related-products">
            <h2>Related Products</h2>
            <div className="products-grid">
              {relatedProducts.map((relatedProduct) => (
                <ProductCard key={relatedProduct.id} product={relatedProduct} />
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
};

export default ProductDetail;

