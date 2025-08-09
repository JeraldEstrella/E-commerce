import './topay.css';

const Topay = () => {
  return (
    <div className='orders-content'>
      <h3>Orders to Pay</h3>
      <div className='order-item'>
        <div className='order-info'>
          <span className='order-id'>#12345</span>
          <span className='order-total'>$129.99</span>
        </div>
        <button className='btn-pay'>Pay Now</button>
      </div>
      <div className='order-item'>
        <div className='order-info'>
          <span className='order-id'>#12346</span>
          <span className='order-total'>$89.50</span>
        </div>
        <button className='btn-pay'>Pay Now</button>
      </div>
    </div>
  );
};

export default Topay;
