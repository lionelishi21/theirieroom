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
      <div className="container">
        <div className="breadcrumb">
          <Link to="/">Home</Link> / <Link to="/shop">Shop</Link> / {product.name}
        </div>

        <div className="product-detail-grid">
          <div className="product-image-section">
            <img src={product.image} alt={product.name} />
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

