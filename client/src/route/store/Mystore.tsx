import Dashboard from '../../components/myStoreComponents/dashboard/Dashboard';
import { useState } from 'react';

const Mystore = () => {
  const [tab, setTab] = useState<string>('dashboard');

  let content;
  switch (tab) {
    case 'dashboard':
      content = <Dashboard />;
      break;
    case 'product':
      content = <div>Product Component</div>;
      break;
    case 'customer':
      content = <div>Customer Component</div>;
      break;
    case 'messages':
      content = <div>Messages Component</div>;
      break;
    default:
      content = <Dashboard />;
  }

  return (
    <div>
      <div className='sidebar'>
        <div className='buttons-container'>
          <button onClick={() => setTab('dashboard')}>Dashboard</button>
          <button onClick={() => setTab('product')}>Product</button>
          <button onClick={() => setTab('customer')}>Customer</button>
          <button onClick={() => setTab('messages')}>Messages</button>
        </div>
      </div>
      <div className='my-store-main'>{content}</div>
    </div>
  );
};

export default Mystore;
