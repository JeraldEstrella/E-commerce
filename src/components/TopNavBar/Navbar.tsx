import { ShoppingCart, Search, Heart, User, Home, Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import './navbar.css';
import { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className='navbar-container'>
      {/* Top Section: Logo */}
      <div className='navbar-left'>
        <Link to='/' className='navbar-logo'>
          <ShoppingCart size={20} />
          <span>ShopHub</span>
        </Link>
        <button
          type='button'
          className='menu-button'
          onClick={() => setIsOpen(!isOpen)}
          aria-label='Open menu'
          title='Open menu'
        >
          {isOpen ? <Menu size={20} /> : <X size={20} />}
        </button>
      </div>

      {/* Search Section */}
      <div className={isOpen ? 'navbar-center' : 'navbar-center open'}>
        <div className='search-box'>
          <Search size={18} className='search-icon' />
          <input
            type='text'
            placeholder='Search products...'
            className='search-input'
          />
        </div>
      </div>

      {/* Bottom Navigation */}
      <div className={isOpen ? 'navbar-right' : 'navbar-right open'}>
        <Link to='/' className='nav-item'>
          <Home size={20} />
          <span>Home</span>
        </Link>

        <Link to='/wishlist' className='nav-item'>
          <Heart size={20} />
          <span>Wishlist</span>
        </Link>

        <Link to='/my-cart' className='nav-item'>
          <div className='cart-wrapper'>
            <ShoppingCart size={20} />
            <span className='cart-badge'>2</span>
          </div>
          <span>Cart</span>
        </Link>

        <Link to='/profile' className='nav-item'>
          <User size={20} />
          <span>Profile</span>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
