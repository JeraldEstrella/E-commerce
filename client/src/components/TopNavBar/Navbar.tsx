import { ShoppingCart, Search, User, Home, Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import './navbar.css';
import { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className='navbar-container'>
      <div className='navbar-left'>
        <Link to='/' className='navbar-logo'>
          <ShoppingCart size={20} />
          <span>ShopHub</span>
        </Link>
        <button
          type='button'
          className='menu-button'
          onClick={() => setIsOpen((prev) => !prev)}
          aria-label='Open menu'
          title='Open menu'
        >
          {isOpen ? <Menu size={20} /> : <X size={20} />}
        </button>
      </div>

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

      <div className={isOpen ? 'navbar-right' : 'navbar-right open'}>
        <Link to='/' className='nav-item'>
          <Home size={20} />
          <span>Home</span>
        </Link>

        <Link to='/my-cart' className='nav-item'>
          <div className='cart-wrapper'>
            <ShoppingCart size={20} />
            <span className='cart-badge'>2</span>
          </div>
          <span>Cart</span>
        </Link>

        <Link to='/account' className='nav-item'>
          <User size={20} />
          <span>Account</span>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
