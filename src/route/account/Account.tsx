import { useState } from 'react';
import './account.css';
import AccountInfo from '../../components/accountComponents/Account/Account';
import Topay from '../../components/accountComponents/Topay/Topay';
import Toship from '../../components/accountComponents/Toship/Toship';
import Toreview from '../../components/accountComponents/Toreview/Toreview';
import Storeaccount from '../../components/accountComponents/Storeaccount/Storeaccount';
import Address from '../../components/accountComponents/Address/Address';
import Payment from '../../components/accountComponents/Payment/Payment';
import Notification from '../../components/accountComponents/Notfication/Notification';
import Privacy from '../../components/accountComponents/Privacy/Privacy';

const Account = () => {
  const [activeTab, setActiveTab] = useState('account');

  const handleTabClick = (tabId: string) => {
    setActiveTab(tabId);
  };

  const renderContent = () => {
    switch (activeTab) {
      case 'account':
        return <AccountInfo />;
      case 'orders':
        return <Topay />;
      case 'shipping':
        return <Toship />;
      case 'reviews':
        return <Toreview />;
      case 'store':
        return <Storeaccount />;
      case 'addresses':
        return <Address />;
      case 'payment':
        return <Payment />;
      case 'notifications':
        return <Notification />;
      case 'privacy':
        return <Privacy />;
      default:
        return <AccountInfo />;
    }
  };
  return (
    <div className='settings-container'>
      <div className='settings-header'>
        <div className='user-profile'>
          <div className='user-avatar'>
            <img
              src='https://via.placeholder.com/80x80/4f46e5/ffffff?text=JD'
              alt='User Avatar'
            />
            <div className='verified-badge'>✓</div>
          </div>
          <div className='user-info'>
            <h2 className='username'>John Doe</h2>
          </div>
        </div>
      </div>

      <div className='settings-content'>
        <div className='settings-sidebar'>
          <nav className='settings-nav'>
            <button
              className='nav-item'
              onClick={() => handleTabClick('account')}
            >
              <div className='nav-item-content'>
                <div className='nav-item-main'>
                  <span className='nav-icon'>👤</span>
                  <span className='nav-title'>My Account</span>
                </div>
                <p className='nav-description'>
                  Personal information and security
                </p>
              </div>
              <span className='nav-arrow'>›</span>
            </button>

            <button
              className='nav-item'
              onClick={() => handleTabClick('orders')}
            >
              <div className='nav-item-content'>
                <div className='nav-item-main'>
                  <span className='nav-icon'>💳</span>
                  <span className='nav-title'>To Pay</span>
                  <span className='nav-badge'>3</span>
                </div>
                <p className='nav-description'>Orders waiting for payment</p>
              </div>
              <span className='nav-arrow'>›</span>
            </button>

            <button
              className='nav-item'
              onClick={() => handleTabClick('shipping')}
            >
              <div className='nav-item-content'>
                <div className='nav-item-main'>
                  <span className='nav-icon'>📦</span>
                  <span className='nav-title'>To Receive</span>
                </div>
                <p className='nav-description'>Track your shipments</p>
              </div>
              <span className='nav-arrow'>›</span>
            </button>

            <button
              className='nav-item'
              onClick={() => handleTabClick('reviews')}
            >
              <div className='nav-item-content'>
                <div className='nav-item-main'>
                  <span className='nav-icon'>⭐</span>
                  <span className='nav-title'>To Review</span>
                  <span className='nav-badge'>5</span>
                </div>
                <p className='nav-description'>
                  Rate and review your purchases
                </p>
              </div>
              <span className='nav-arrow'>›</span>
            </button>

            <button
              className='nav-item'
              onClick={() => handleTabClick('store')}
            >
              <div className='nav-item-content'>
                <div className='nav-item-main'>
                  <span className='nav-icon'>🏪</span>
                  <span className='nav-title'>Apply to Verified Store</span>
                </div>
                <p className='nav-description'>Become a verified seller</p>
              </div>
              <span className='nav-arrow'>›</span>
            </button>

            <button
              className='nav-item'
              onClick={() => handleTabClick('addresses')}
            >
              <div className='nav-item-content'>
                <div className='nav-item-main'>
                  <span className='nav-icon'>📍</span>
                  <span className='nav-title'>My Addresses</span>
                </div>
                <p className='nav-description'>Manage shipping addresses</p>
              </div>
              <span className='nav-arrow'>›</span>
            </button>

            <button
              className='nav-item'
              onClick={() => handleTabClick('payment')}
            >
              <div className='nav-item-content'>
                <div className='nav-item-main'>
                  <span className='nav-icon'>💰</span>
                  <span className='nav-title'>Payment Methods</span>
                </div>
                <p className='nav-description'>
                  Manage cards and payment options
                </p>
              </div>
              <span className='nav-arrow'>›</span>
            </button>

            <button
              className='nav-item'
              onClick={() => handleTabClick('privacy')}
            >
              <div className='nav-item-content'>
                <div className='nav-item-main'>
                  <span className='nav-icon'>🔒</span>
                  <span className='nav-title'>Privacy & Security</span>
                </div>
                <p className='nav-description'>Account security settings</p>
              </div>
              <span className='nav-arrow'>›</span>
            </button>

            <button className='nav-item' onClick={() => handleTabClick('help')}>
              <div className='nav-item-content'>
                <div className='nav-item-main'>
                  <span className='nav-icon'>❓</span>
                  <span className='nav-title'>Help & Support</span>
                </div>
                <p className='nav-description'>Get help and contact us</p>
              </div>
              <span className='nav-arrow'>›</span>
            </button>
          </nav>
        </div>

        <div className='settings-main'>
          <div className='content-wrapper'>{renderContent()}</div>
        </div>
      </div>
    </div>
  );
};

export default Account;
