# 🛒 E-Commerce Platform - Frontend

A modern, responsive e-commerce web application built with React, TypeScript, and Vite. Features a complete shopping experience with user account management, product browsing, cart functionality, and Lazada-inspired design.

## ✨ Features

### 🔐 User Authentication & Account Management
- **Complete Account Dashboard** - Lazada-inspired user interface
- **Profile Management** - Personal information, addresses, payment methods
- **Order Tracking** - To Pay, To Receive, To Review sections
- **Store Verification** - Apply to become a verified seller
- **Privacy & Security Settings** - Account security management
- **Notification Preferences** - Customizable notification settings

### 🛍️ Shopping Experience
- **Product Catalog** - Browse and search products
- **Shopping Cart** - Add, remove, and modify cart items
- **Product Details** - Detailed product information pages
- **Search Functionality** - Advanced product search
- **Filter Options** - Category and price filtering
- **Recommendations** - "Just For You" personalized suggestions

### 🎨 User Interface
- **Responsive Design** - Mobile-first approach
- **Modern UI Components** - Clean, professional interface
- **Navigation System** - Intuitive navigation with breadcrumbs
- **Advertisement Sections** - Promotional content areas
- **On Sale Section** - Featured deals and discounts

## 🚀 Tech Stack

- **Frontend Framework:** React 18
- **Language:** TypeScript
- **Build Tool:** Vite
- **Styling:** CSS3 with custom styles
- **State Management:** React Hooks (useState, useEffect)
- **Routing:** React Router (ready for implementation)

## 📁 Project Structure

```
src/
├── components/           # Reusable UI components
│   ├── account/         # Main account component
│   ├── accountComponents/   # Account sub-components
│   │   ├── Account/     # Personal information
│   │   ├── Address/     # Address management
│   │   ├── Payment/     # Payment methods
│   │   ├── Privacy/     # Privacy settings
│   │   ├── Topay/       # Orders to pay
│   │   ├── Toship/      # Orders to receive
│   │   ├── Toreview/    # Orders to review
│   │   └── Storeaccount/ # Store verification
│   ├── advertisement/   # Advertisement components
│   ├── filter/         # Product filtering
│   ├── JustForYou/     # Personalized recommendations
│   ├── NavigationLinks/ # Navigation components
│   ├── OnSale/         # Sale promotions
│   └── TopNavBar/      # Main navigation bar
├── route/              # Page components
│   ├── account/        # Account page
│   ├── main/          # Homepage
│   ├── myCart/        # Shopping cart
│   ├── productdetails/ # Product details
│   ├── Search/        # Search results
│   └── settings/      # Settings page
├── lib/               # Utility functions
└── Rootlayout/        # Layout wrapper
```

## 🛠️ Installation & Setup

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn package manager

### Installation Steps

1. **Clone the repository**
   ```bash
   git clone https://github.com/JeraldEstrella/Fullstack-Projects.git
   cd Fullstack-Projects/client
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open in browser**
   Navigate to `http://localhost:5173`

## 📱 Key Components

### Account Management System
- **Personal Information Form** - Editable user profile
- **Address Book** - Multiple shipping addresses
- **Payment Methods** - Credit cards and payment options
- **Order History** - Complete order tracking
- **Store Application** - Multi-step verification process

### Shopping Cart Features
- **Quantity Management** - Increase/decrease item quantities
- **Price Calculation** - Real-time total updates
- **Shipping Options** - Multiple delivery methods
- **Promo Code Support** - Discount code application
- **Checkout Process** - Streamlined purchase flow

### Product Browsing
- **Category Navigation** - Organized product categories
- **Search Functionality** - Product name and description search
- **Filter System** - Price, category, and rating filters
- **Product Details** - Comprehensive product information
- **Recommendations** - AI-powered product suggestions

## 🎨 Design Features

### Responsive Design
- **Mobile-First Approach** - Optimized for mobile devices
- **Tablet Compatibility** - Seamless tablet experience
- **Desktop Layout** - Full-featured desktop interface

### Visual Elements
- **Modern Color Scheme** - Professional blue and white theme
- **Interactive Animations** - Smooth hover and transition effects
- **Accessibility Features** - ARIA labels and keyboard navigation
- **Loading States** - User feedback during data fetching

## 🔧 Development Scripts

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Run linting
npm run lint

# Type checking
npm run type-check
```

## 📊 Performance Features

- **Vite Build System** - Fast development and optimized builds
- **Component Lazy Loading** - Improved initial load times
- **CSS Optimization** - Minimal CSS bundles
- **Image Optimization** - Responsive image handling
- **State Management** - Efficient React state handling

## 🔮 Future Enhancements

### Backend Integration
- **Authentication System** - User login/registration
- **Database Integration** - Product and user data storage
- **Payment Processing** - Stripe/PayPal integration
- **Order Management** - Complete order lifecycle
- **Admin Dashboard** - Store management interface

### Additional Features
- **Real-time Chat** - Customer support integration
- **Wishlist System** - Save favorite products
- **Review System** - Product ratings and reviews
- **Social Login** - Google/Facebook authentication
- **Multi-language Support** - Internationalization

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👥 Authors

- **Jerald Estrella** - *Initial work* - [JeraldEstrella](https://github.com/JeraldEstrella)

## 🙏 Acknowledgments

- Inspired by Lazada's user interface design
- React community for excellent documentation
- Vite team for the amazing build tool

## 📞 Contact

Project Link: [https://github.com/JeraldEstrella/Fullstack-Projects](https://github.com/JeraldEstrella/Fullstack-Projects)

---

⭐ **Star this repository if you found it helpful!**
