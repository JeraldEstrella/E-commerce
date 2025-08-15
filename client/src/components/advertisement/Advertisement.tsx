import './advertisement.css';

const Advertisement = () => {
  return (
    <div className='advertise-container'>
      <img
        className='advertise-image'
        src='https://d3jmn01ri1fzgl.cloudfront.net/photoadking/webp_original/sky-blue-special-offer-end-of-season-advertisement-template-mhj19nd2e69bf2.webp'
        alt=''
      />

      <div className='advertise-indicator'>
        <span className='indicator' />
      </div>
    </div>
  );
};

export default Advertisement;
