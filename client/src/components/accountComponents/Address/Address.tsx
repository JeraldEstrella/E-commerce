import './address.css';

const Address = () => {
  return (
    <div className='addresses-content'>
      <h3>My Addresses</h3>
      <div className='address-item'>
        <div className='address-info'>
          <span className='address-label'>Home</span>
          <span className='address-text'>123 Main St, City, State 12345</span>
        </div>
        <button className='btn-edit'>Edit</button>
      </div>
      <button className='btn-add-address'>+ Add New Address</button>
    </div>
  );
};

export default Address;
