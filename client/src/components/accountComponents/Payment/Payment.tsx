import './payment.css';

const Payment = () => {
  return (
    <div className='payment-content'>
      <h3>Payment Methods</h3>
      <div className='payment-item'>
        <div className='payment-info'>
          <span className='payment-type'>Visa</span>
          <span className='payment-number'>**** **** **** 1234</span>
        </div>
        <button className='btn-edit'>Edit</button>
      </div>
      <button className='btn-add-payment'>+ Add Payment Method</button>
    </div>
  );
};

export default Payment;
