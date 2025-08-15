import './toreview.css';

const Toreview = () => {
  return (
    <div className='reviews-content'>
      <h3>Pending Reviews</h3>
      <div className='review-item'>
        <div className='product-info'>
          <span className='product-name'>Wireless Headphones</span>
          <div className='star-rating'>
            <span>⭐⭐⭐⭐⭐</span>
          </div>
        </div>
        <button className='btn-review'>Write Review</button>
      </div>
      <div className='review-item'>
        <div className='product-info'>
          <span className='product-name'>Gaming Mouse</span>
          <div className='star-rating'>
            <span>⭐⭐⭐⭐⭐</span>
          </div>
        </div>
        <button className='btn-review'>Write Review</button>
      </div>
    </div>
  );
};

export default Toreview;
