import './notification.css';

const Notification = () => {
  return (
    <div className='notifications-content'>
      <h3>Notification Settings</h3>
      <div className='notification-item'>
        <label className='notification-label'>
          <input type='checkbox' defaultChecked />
          Order Updates
        </label>
      </div>
      <div className='notification-item'>
        <label className='notification-label'>
          <input type='checkbox' defaultChecked />
          Promotional Emails
        </label>
      </div>
      <div className='notification-item'>
        <label className='notification-label'>
          <input type='checkbox' />
          SMS Notifications
        </label>
      </div>
    </div>
  );
};

export default Notification;
