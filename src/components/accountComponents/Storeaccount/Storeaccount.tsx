import './storeaccount.css';

const Storeaccount = () => {
  return (
    <div className='store-content'>
      <h3>Apply to Verified Store</h3>
      <div className='verification-steps'>
        <div className='step completed'>
          <span className='step-number'>1</span>
          <span className='step-text'>Business Information</span>
          <span className='step-status'>✓</span>
        </div>
        <div className='step active'>
          <span className='step-number'>2</span>
          <span className='step-text'>Document Verification</span>
          <span className='step-status'>⏳</span>
        </div>
        <div className='step'>
          <span className='step-number'>3</span>
          <span className='step-text'>Review Process</span>
          <span className='step-status'>⏸</span>
        </div>
      </div>
      <button className='btn-apply'>Continue Application</button>
    </div>
  );
};

export default Storeaccount;
