import type { Product } from '../types';

export const products: Product[] = [
  // Smoke Accessories
  {
    id: '1',
    name: 'Futuristic Glass Water Pipe',
    price: 149.99,
    description: 'Premium borosilicate glass water pipe with LED base and percolator system. Ultra-smooth experience with modern aesthetics.',
    category: 'Glass',
    image: 'https://res.cloudinary.com/dwfbqodsx/image/upload/v1763288338/WhatsApp_Image_2025-10-25_at_12.09.26_xkcbfq.jpg',
    inStock: true,
    rating: 4.9,
    reviews: 156
  },
  {
    id: '2',
    name: 'Titanium Grinder - Diamond Cut',
    price: 59.99,
    description: 'Aircraft-grade titanium grinder with razor-sharp diamond-cut teeth. Magnetic lid and kief catcher included.',
    category: 'Accessories',
    image: 'https://res.cloudinary.com/dwfbqodsx/image/upload/v1763288338/WhatsApp_Image_2025-10-25_at_12.09.26_3_s4v5dp.jpg',
    inStock: true,
    rating: 4.8,
    reviews: 203
  },
  {
    id: '3',
    name: 'Premium Rolling Papers - Organic',
    price: 8.99,
    description: 'Ultra-thin organic hemp rolling papers. Slow burn, zero additives. Pack of 32 leaves.',
    category: 'Papers',
    image: 'https://res.cloudinary.com/dwfbqodsx/image/upload/v1763288338/WhatsApp_Image_2025-10-25_at_12.09.26_4_pcwtfy.jpg',
    inStock: true,
    rating: 4.7,
    reviews: 892
  },
  {
    id: '4',
    name: 'Portable Vaporizer Pro',
    price: 249.99,
    description: 'Cutting-edge portable vaporizer with precise temperature control, OLED display, and 90-minute battery life.',
    category: 'Vaporizers',
    image: 'https://res.cloudinary.com/dwfbqodsx/image/upload/v1763288338/WhatsApp_Image_2025-10-25_at_12.09.27_alzrqv.jpg',
    inStock: true,
    rating: 4.9,
    reviews: 445
  },
  {
    id: '5',
    name: 'Custom Glass Bubbler',
    price: 89.99,
    description: 'Hand-blown glass bubbler with artistic color swirls. Compact design perfect for on-the-go sessions.',
    category: 'Glass',
    image: 'https://res.cloudinary.com/dwfbqodsx/image/upload/v1763288331/WhatsApp_Image_2025-10-25_at_12.09.26_2_q9cmnl.jpg',
    inStock: true,
    rating: 4.6,
    reviews: 178
  },
  {
    id: '6',
    name: 'Silicone Storage Jars Set',
    price: 24.99,
    description: 'Medical-grade silicone storage containers. Set of 5 with airtight seals. Various colors available.',
    category: 'Storage',
    image: 'https://res.cloudinary.com/dwfbqodsx/image/upload/v1763288330/WhatsApp_Image_2025-10-25_at_12.09.26_1_p0fwgy.jpg',
    inStock: true,
    rating: 4.5,
    reviews: 267
  },
  
  // Café Items
  {
    id: '7',
    name: 'Specialty Cold Brew Coffee',
    price: 6.99,
    description: 'House-made cold brew steeped for 24 hours. Smooth, bold, and energizing. 16oz bottle.',
    category: 'Beverages',
    image: 'https://res.cloudinary.com/dwfbqodsx/image/upload/v1763288323/WhatsApp_Image_2025-10-25_at_12.09.24_ft6zyv.jpg',
    inStock: true,
    rating: 4.8,
    reviews: 534
  },
  {
    id: '8',
    name: 'Artisan Coffee Beans - House Blend',
    price: 18.99,
    description: 'Small-batch roasted coffee beans. Medium roast with notes of chocolate and caramel. 12oz bag.',
    category: 'Coffee',
    image: 'https://res.cloudinary.com/dwfbqodsx/image/upload/v1763288329/WhatsApp_Image_2025-10-25_at_12.09.25_llo90x.jpg',
    inStock: true,
    rating: 4.9,
    reviews: 723
  },
  {
    id: '9',
    name: 'Organic Matcha Latte Kit',
    price: 29.99,
    description: 'Premium ceremonial-grade matcha powder with bamboo whisk and scoop. Authentic Japanese quality.',
    category: 'Tea',
    image: 'https://res.cloudinary.com/dwfbqodsx/image/upload/v1763288323/WhatsApp_Image_2025-10-25_at_12.09.25_1_yktowx.jpg',
    inStock: true,
    rating: 4.7,
    reviews: 312
  },
  {
    id: '10',
    name: 'CBD-Infused Honey',
    price: 34.99,
    description: 'Locally sourced honey infused with 500mg CBD. Perfect for tea, coffee, or straight from the jar.',
    category: 'Edibles',
    image: 'https://res.cloudinary.com/dwfbqodsx/image/upload/v1763288322/WhatsApp_Image_2025-10-25_at_12.09.25_2_yt2wus.jpg',
    inStock: true,
    rating: 4.8,
    reviews: 198
  },
  {
    id: '11',
    name: 'Herbal Tea Collection',
    price: 22.99,
    description: 'Curated selection of 6 premium herbal teas. Relaxing blends for any mood. Organic and caffeine-free.',
    category: 'Tea',
    image: 'https://res.cloudinary.com/dwfbqodsx/image/upload/v1763288322/WhatsApp_Image_2025-10-25_at_12.09.25_3_ixctdl.jpg',
    inStock: true,
    rating: 4.6,
    reviews: 445
  },
  {
    id: '12',
    name: 'Espresso Blend - Dark Roast',
    price: 21.99,
    description: 'Bold espresso blend perfect for lattes and cappuccinos. Rich, full-bodied flavor. 12oz bag.',
    category: 'Coffee',
    image: 'https://res.cloudinary.com/dwfbqodsx/image/upload/v1763288314/WhatsApp_Image_2025-10-25_at_12.09.25_4_rgkzxn.jpg',
    inStock: true,
    rating: 4.9,
    reviews: 667
  },
  
  // Lifestyle & Merch
  {
    id: '13',
    name: 'Irie Room Hoodie - Black',
    price: 54.99,
    description: 'Premium heavyweight hoodie with embroidered logo. Ultra-soft cotton blend. Unisex sizing.',
    category: 'Merch',
    image: 'https://res.cloudinary.com/dwfbqodsx/image/upload/v1763288314/WhatsApp_Image_2025-10-25_at_12.09.24_2_umipbb.jpg',
    inStock: true,
    rating: 4.8,
    reviews: 234
  },
  {
    id: '14',
    name: 'Designer Ashtray Set',
    price: 39.99,
    description: 'Modern ceramic ashtray set. Sleek matte black finish. Set of 2 with cigarette rests.',
    category: 'Accessories',
    image: 'https://res.cloudinary.com/dwfbqodsx/image/upload/v1763288314/WhatsApp_Image_2025-10-25_at_12.09.25_5_isjsd3.jpg',
    inStock: true,
    rating: 4.5,
    reviews: 167
  },
  {
    id: '15',
    name: 'Hemp Tote Bag',
    price: 19.99,
    description: 'Eco-friendly hemp canvas tote with Irie Room branding. Durable and stylish. Perfect for groceries or gear.',
    category: 'Merch',
    image: 'https://res.cloudinary.com/dwfbqodsx/image/upload/v1763288313/WhatsApp_Image_2025-10-25_at_12.09.24_5_jt51dm.jpg',
    inStock: true,
    rating: 4.6,
    reviews: 289
  },
  {
    id: '16',
    name: 'Smell-Proof Travel Case',
    price: 44.99,
    description: 'Activated carbon lining ensures complete odor control. Water-resistant exterior with combination lock.',
    category: 'Storage',
    image: 'https://res.cloudinary.com/dwfbqodsx/image/upload/v1763288313/WhatsApp_Image_2025-10-25_at_12.09.24_4_t9tieu.jpg',
    inStock: false,
    rating: 4.9,
    reviews: 412
  }
];

export const categories = [
  'All',
  'Glass',
  'Vaporizers',
  'Accessories',
  'Papers',
  'Storage',
  'Coffee',
  'Tea',
  'Beverages',
  'Edibles',
  'Merch'
];
