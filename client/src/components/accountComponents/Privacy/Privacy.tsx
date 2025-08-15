import './privacy.css';

const Privacy = () => {
  return (
    <div className='privacy-content'>
      <h3>Privacy & Security</h3>
      <div className='security-item'>
        <span className='security-label'>Change Password</span>
        <button className='btn-secondary'>Update</button>
      </div>
      <div className='security-item'>
        <span className='security-label'>Two-Factor Authentication</span>
        <button className='btn-secondary'>Enable</button>
      </div>
      <div className='security-item'>
        <span className='security-label'>Login Activity</span>
        <button className='btn-secondary'>View</button>
      </div>
    </div>
  );
};

export default Privacy;
