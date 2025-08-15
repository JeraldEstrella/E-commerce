import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import './filter.css';

const Filter = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div className='filter-container'>
      <div className='filter-group'>
        <div className='filter-header'>
          <button
            className='filter-dropdown-toggle'
            onClick={toggleDropdown}
            type='button'
          >
            <h2 className='filter-title'>Category: Mobile</h2>
            {isOpen ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
          </button>
          {}
          <div className='filter-links'>
            <a href='' className='filter-link'>
              Tablets
            </a>
            <a href='' className='filter-link'>
              Smart Watch
            </a>
            <a href='' className='filter-link'>
              In-Ear Headphones
            </a>
          </div>
        </div>

        <div className={`filter-dropdown-content ${isOpen ? 'open' : ''}`}>
          <div className='filter-options'>
            <div className='filter-option'>
              <h5>Brand</h5>
              <ul className='filter-list'>
                <li>
                  <label>
                    <input type='checkbox' />
                    Apple
                  </label>
                </li>
                <li>
                  <label>
                    <input type='checkbox' />
                    Samsung
                  </label>
                </li>
                <li>
                  <label>
                    <input type='checkbox' />
                    Xiaomi
                  </label>
                </li>
              </ul>
            </div>

            <div className='filter-option'>
              <h5>Service & Promotion</h5>
              <ul className='filter-list'>
                <li>
                  <label>
                    <input type='checkbox' />
                    Sale
                  </label>
                </li>
                <li>
                  <label>
                    <input type='checkbox' />
                    Cash On Delivery
                  </label>
                </li>
                <li>
                  <label>
                    <input type='checkbox' />
                    Free Shipping
                  </label>
                </li>
              </ul>
            </div>

            <div className='filter-option'>
              <h5>Service & Promotion</h5>
              <ul className='filter-list'>
                <li>
                  <label>
                    <input type='checkbox' />
                    Sale
                  </label>
                </li>
                <li>
                  <label>
                    <input type='checkbox' />
                    Cash On Delivery
                  </label>
                </li>
                <li>
                  <label>
                    <input type='checkbox' />
                    Free Shipping
                  </label>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filter;
