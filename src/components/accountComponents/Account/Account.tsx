import './account.css';

const Account = () => {
  return (
    <div className='account-content'>
      <h3>Personal Information</h3>
      <div className='form-group'>
        <label htmlFor='username'>Username</label>
        <input
          id='username'
          type='text'
          placeholder='Enter username'
          title='Username'
        />
      </div>
      <div className='form-group'>
        <label htmlFor='email'>Email</label>
        <input
          id='email'
          type='email'
          placeholder='Enter email address'
          title='Email address'
        />
      </div>
      <div className='form-group'>
        <label htmlFor='phone'>Phone Number</label>
        <input
          id='phone'
          type='tel'
          placeholder='Add phone number'
          title='Phone number'
        />
      </div>
      <button className='btn-primary'>Edit Profile</button>
    </div>
  );
};

export default Account;
