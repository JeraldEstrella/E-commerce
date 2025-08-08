import './navbar.css';
import {
  Search,
  ShoppingCart,
  Bell,
  Heart,
  User,
  ChevronDown,
  Home,
} from 'lucide-react';

const Navbar = () => {
  return (
    <>
      {' '}
      <div className='primary-navigation'>
        <div className='nav-left'>
          <div className='logo'>
            <ShoppingCart />
          </div>
        </div>

        <div className='nav-center'>
          <div className='search-container'>
            <input
              type='text'
              placeholder='Search products, brands, categories...'
            />
            <button type='button' className='search-btn' title='Search'>
              <Search aria-label='Search' />
            </button>
          </div>
        </div>

        <div className='nav-right'>
          <button className='nav-btn' title='Notifications'>
            <Bell size={20} />
            <span className='badge'>3</span>
          </button>

          <button className='nav-btn' title='Wishlist'>
            <Heart size={20} />
          </button>

          <button className='nav-btn cart-btn' title='Shopping Cart'>
            <ShoppingCart size={20} />
            <span className='badge'>2</span>
          </button>

          <div className='user-menu'>
            <button className='user-btn'>
              <div className='user-avatar'>
                <User size={18} />
              </div>
              <span className='user-name'>John Doe</span>
              <ChevronDown size={16} className='dropdown-arrow' />
            </button>
          </div>
        </div>
      </div>
      <div className='mobile-navigation'>
        <button className='mobile-nav-btn' title='Menu'>
          <ShoppingCart size={20} />
        </button>
        <button className='mobile-nav-btn' title='Search'>
          <Home size={20} />
        </button>
        <div className='logo'>
          <ShoppingCart size={20} />
        </div>
        <button className='mobile-nav-btn' title='Wishlist'>
          <Heart size={20} />
        </button>
        <button className='mobile-nav-btn' title='User Profile'>
          <User size={20} />
        </button>
      </div>
    </>
  );
};

export default Navbar;
