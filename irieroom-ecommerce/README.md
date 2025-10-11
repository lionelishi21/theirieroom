# The Irie Room 🌿☕ - Smoke Shop & Café

An ultra-modern, full-stack e-commerce platform for a hybrid smoke shop and café. Built with React, TypeScript, and cutting-edge design patterns featuring dark mode aesthetics, neon accents, and glassmorphism effects.

![The Irie Room](https://images.unsplash.com/photo-1571863533956-01c88e79957e?w=1200&h=400&fit=crop)

## 🎯 Concept

**The Irie Room** is a unique hybrid business combining premium smoke accessories with specialty coffee culture. This website captures both vibes with an ultra-modern, edgy design that appeals to both communities.

### What We Offer
- 💨 **Smoke Shop**: Glass pieces, vaporizers, grinders, papers, and accessories
- ☕ **Café**: Specialty coffee, teas, CBD edibles, and a chill lounge space
- 🎨 **Lifestyle**: Branded merch and lifestyle products

## ✨ Features

### Core E-Commerce
- **Full Product Catalog**: 16+ products across 11 categories
- **Advanced Filtering**: Category filters and multi-sort options
- **Product Details**: Comprehensive pages with ratings, reviews, and related items
- **Shopping Cart**: Full cart functionality with persistent storage
- **Checkout Flow**: Complete shipping and payment forms
- **Responsive Design**: Flawless on all devices

### Ultra-Modern Design Elements
- 🌑 **Dark Mode**: Sleek dark theme with neon green/purple accents
- ✨ **Glassmorphism**: Frosted glass effects with backdrop blur
- 🎨 **Gradient Text**: Animated gradient typography
- 💫 **Floating Elements**: Animated background elements
- 🔥 **Hover Effects**: Smooth transitions and micro-interactions
- 🎯 **Modern Typography**: Space Grotesk + Inter font pairing

### Technical Highlights
- React 18 with TypeScript
- Context API for global state
- React Router v6 for navigation
- LocalStorage persistence
- Lucide React icons
- CSS3 with advanced effects

## 🚀 Quick Start

### Prerequisites
- Node.js 16+
- npm or yarn

### Installation

```bash
# Clone the repository
cd irieroom-ecommerce

# Install dependencies
npm install

# Start development server
npm run dev
```

Visit `http://localhost:5173` to see the site in action! 🎉

### Build for Production

```bash
npm run build
npm run preview
```

## 📁 Project Structure

```
irieroom-ecommerce/
├── src/
│   ├── components/          # Reusable components
│   │   ├── Header.tsx       # Navigation with cart badge
│   │   ├── Footer.tsx       # Footer with social links
│   │   ├── ProductCard.tsx  # Product display cards
│   │   └── Hero.tsx         # Hero section with stats
│   ├── pages/               # Route pages
│   │   ├── Home.tsx         # Homepage with dual concept
│   │   ├── Shop.tsx         # Product catalog
│   │   ├── ProductDetail.tsx # Individual products
│   │   ├── Cart.tsx         # Shopping cart
│   │   ├── Checkout.tsx     # Checkout form
│   │   ├── About.tsx        # About the business
│   │   └── Contact.tsx      # Contact page
│   ├── contexts/            # State management
│   │   └── CartContext.tsx  # Cart provider
│   ├── data/                # Static data
│   │   └── products.ts      # Product catalog
│   ├── types/               # TypeScript types
│   │   └── index.ts         # Type definitions
│   ├── App.tsx              # Main component
│   ├── App.css              # Component styles
│   └── index.css            # Global styles
├── public/                  # Static assets
└── package.json             # Dependencies
```

## 🎨 Design System

### Color Palette
```css
--primary: #10b981       /* Emerald green */
--primary-dark: #059669  /* Dark green */
--secondary: #8b5cf6     /* Purple */
--smoke: #6366f1         /* Indigo */
--coffee: #d97706        /* Orange */
--dark: #0f172a          /* Dark navy */
--dark-card: #1e293b     /* Card background */
```

### Typography
- **Headlines**: Space Grotesk (Bold, 700-900)
- **Body**: Inter (Regular, 400-600)
- **Accents**: Gradient text effects

### Effects
- Glassmorphism with backdrop blur
- Animated gradient backgrounds
- Floating elements with keyframe animations
- Neon glow effects on hover
- Smooth micro-interactions

## 🛍️ Product Categories

1. **Glass** - Water pipes, bubblers, hand pipes
2. **Vaporizers** - Portable and desktop vaporizers
3. **Accessories** - Grinders, ashtrays, tools
4. **Papers** - Rolling papers and wraps
5. **Storage** - Smell-proof containers and cases
6. **Coffee** - Artisan coffee beans and blends
7. **Tea** - Premium tea collections
8. **Beverages** - Cold brew, specialty drinks
9. **Edibles** - CBD honey and infused products
10. **Merch** - Branded apparel and accessories

## 📱 Pages Overview

### Home (`/`)
- Eye-catching hero with animated elements
- Smoke shop vs café concept cards
- Featured products showcase
- Trust indicators (features section)

### Shop (`/shop`)
- 16 products with filtering
- 11 category filters
- Sort by: Featured, Price, Name, Rating
- Modern grid layout

### Product Detail (`/product/:id`)
- Large product imagery
- Detailed specifications
- Quantity selector
- Related products
- Add to cart with feedback

### Cart (`/cart`)
- Cart management
- Quantity adjustment
- Order summary
- Shipping calculation
- Tax calculation

### Checkout (`/checkout`)
- Two-column layout
- Shipping form
- Payment form
- Order summary sidebar
- Secure payment badge

### About (`/about`)
- Business story and mission
- Dual-concept explanation
- Core values
- Location info
- Business hours

### Contact (`/contact`)
- Contact information
- Business hours
- Contact form
- Multiple contact methods

## 🔧 Technologies Used

```json
{
  "react": "^18.3.1",
  "react-dom": "^18.3.1",
  "react-router-dom": "^6.28.0",
  "lucide-react": "^0.468.0",
  "typescript": "~5.6.2",
  "vite": "^6.0.1"
}
```

## 🎯 Key Features Breakdown

### State Management
- React Context API for cart state
- LocalStorage for cart persistence
- Custom hooks (`useCart`)

### Routing
- React Router v6
- Dynamic product routes
- Protected checkout flow

### Forms
- Controlled components
- Form validation
- User feedback

### Performance
- Lazy loading images
- Optimized re-renders
- Smooth animations with CSS

## 🌟 Future Enhancements

- [ ] User authentication
- [ ] Real payment integration (Stripe)
- [ ] Product search with autocomplete
- [ ] Wishlist functionality
- [ ] Customer reviews system
- [ ] Age verification modal
- [ ] Loyalty program
- [ ] Email notifications
- [ ] Admin dashboard
- [ ] Inventory management
- [ ] Order tracking
- [ ] Gift cards

## 📸 Screenshots

### Homepage
Ultra-modern hero section with animated gradients and floating elements.

### Shop
Dark-themed product grid with glassmorphism cards and smooth hover effects.

### Product Detail
Immersive product pages with large imagery and clear CTAs.

### Cart & Checkout
Streamlined purchase flow with modern forms and summary sidebar.

## 🔐 Age Verification

**Important**: This is a demo site. In production, implement proper age verification (21+) before allowing purchases of smoke accessories.

## 🤝 Contributing

This is a portfolio/demo project showcasing modern React development and contemporary web design patterns.

## 📄 License

MIT License - Feel free to use this project for learning and inspiration!

## 🎨 Design Philosophy

This project demonstrates:
- **Modern UI/UX**: Dark mode, glassmorphism, and smooth animations
- **Component Architecture**: Reusable, maintainable React components
- **Type Safety**: Full TypeScript implementation
- **Performance**: Optimized rendering and smooth 60fps animations
- **Accessibility**: Semantic HTML and keyboard navigation
- **Responsive Design**: Mobile-first approach

## 💻 Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🌐 Deployment

Ready to deploy on:
- Vercel
- Netlify
- GitHub Pages
- Any static hosting service

Build command: `npm run build`
Output directory: `dist`

---

## 🌿 One Love, Good Vibes, Quality Products ☕

**The Irie Room** - Where smoke culture meets coffee culture.

*Built with React, TypeScript, and a whole lot of good vibes* ✨

---

### 📧 Contact

For questions or feedback about this project:
- Visit: [Your Website]
- Email: hello@theirieroom.com
- Instagram: @theirieroom

**Note**: This is a demonstration e-commerce site. No real transactions are processed.
