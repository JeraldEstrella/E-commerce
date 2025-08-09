import './toship.css';

const Toship = () => {
  return (
    <div className='shipping-content'>
      <h3>To Receive</h3>
      <div className='shipment-item'>
        <div className='shipment-info'>
          <span className='tracking-number'>Tracking: TR123456789</span>
          <span className='status'>In Transit</span>
        </div>
        <button className='btn-track'>Track Package</button>
      </div>
      <div className='shipment-item'>
        <div className='shipment-info'>
          <span className='tracking-number'>Tracking: TR987654321</span>
          <span className='status'>Out for Delivery</span>
        </div>
        <button className='btn-track'>Track Package</button>
      </div>
    </div>
  );
};

export default Toship;
