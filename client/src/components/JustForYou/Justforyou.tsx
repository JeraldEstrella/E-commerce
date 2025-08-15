import './justforyou.css';

interface JustForYouProps {
  showHeader: boolean;
}

const Justforyou = ({ showHeader }: JustForYouProps) => {
  return (
    <div className='justforyou-container'>
      {showHeader && (
        <div className='justforyou-header'>
          <h2>Just For You:</h2>
          <p>Personalized recommendations based on your preferences!</p>
        </div>
      )}
      <div className='justforyou-items'>
        <div className='jfy-item'>
          <img
            src='https://imgs.search.brave.com/-DyEiy7AgA48A6g3UbIjQsq5nFIuxnxSylazIe1V0Dk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9kMW55/bWJrZW9tZW9xZy5j/bG91ZGZyb250Lm5l/dC9waG90b3MvMzAv/MjQvNDIzOTI5XzI0/NjA4X0wyLmpwZw'
            alt=''
            className='jfy-item-image'
          />
          <h5 className='jfy-item-name text'>Premium Wireless Headphones</h5>
          <div className='jfy-text-container'>
            <p className='jfy-price text'>₱1,299.00</p>
          </div>
        </div>
        <div className='jfy-item'>
          <img
            src='https://imgs.search.brave.com/-DyEiy7AgA48A6g3UbIjQsq5nFIuxnxSylazIe1V0Dk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9kMW55/bWJrZW9tZW9xZy5j/bG91ZGZyb250Lm5l/dC9waG90b3MvMzAv/MjQvNDIzOTI5XzI0/NjA4X0wyLmpwZw'
            alt=''
            className='jfy-item-image'
          />
          <h5 className='jfy-item-name text'>Smart Watch Series Pro</h5>
          <div className='jfy-text-container'>
            <p className='jfy-price text'>₱2,599.00</p>
          </div>
        </div>
        <div className='jfy-item'>
          <img
            src='https://imgs.search.brave.com/-DyEiy7AgA48A6g3UbIjQsq5nFIuxnxSylazIe1V0Dk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9kMW55/bWJrZW9tZW9xZy5j/bG91ZGZyb250Lm5l/dC9waG90b3MvMzAv/MjQvNDIzOTI5XzI0/NjA4X0wyLmpwZw'
            alt=''
            className='jfy-item-image'
          />
          <h5 className='jfy-item-name text'>Portable Bluetooth Speaker</h5>
          <div className='jfy-text-container'>
            <p className='jfy-price text'>₱899.00</p>
          </div>
        </div>
        <div className='jfy-item'>
          <img
            src='https://imgs.search.brave.com/-DyEiy7AgA48A6g3UbIjQsq5nFIuxnxSylazIe1V0Dk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9kMW55/bWJrZW9tZW9xZy5j/bG91ZGZyb250Lm5l/dC9waG90b3MvMzAv/MjQvNDIzOTI5XzI0/NjA4X0wyLmpwZw'
            alt=''
            className='jfy-item-image'
          />
          <h5 className='jfy-item-name text'>Gaming Mechanical Keyboard</h5>
          <div className='jfy-text-container'>
            <p className='jfy-price text'>₱1,799.00</p>
          </div>
        </div>
        <div className='jfy-item'>
          <img
            src='https://imgs.search.brave.com/-DyEiy7AgA48A6g3UbIjQsq5nFIuxnxSylazIe1V0Dk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9kMW55/bWJrZW9tZW9xZy5j/bG91ZGZyb250Lm5l/dC9waG90b3MvMzAv/MjQvNDIzOTI5XzI0/NjA4X0wyLmpwZw'
            alt=''
            className='jfy-item-image'
          />
          <h5 className='jfy-item-name text'>USB-C Fast Charging Cable</h5>
          <div className='jfy-text-container'>
            <p className='jfy-price text'>₱299.00</p>
          </div>
        </div>
        <div className='jfy-item'>
          <img
            src='https://imgs.search.brave.com/-DyEiy7AgA48A6g3UbIjQsq5nFIuxnxSylazIe1V0Dk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9kMW55/bWJrZW9tZW9xZy5j/bG91ZGZyb250Lm5l/dC9waG90b3MvMzAv/MjQvNDIzOTI5XzI0/NjA4X0wyLmpwZw'
            alt=''
            className='jfy-item-image'
          />
          <h5 className='jfy-item-name text'>Wireless Power Bank 10000mAh</h5>
          <div className='jfy-text-container'>
            <p className='jfy-price text'>₱1,099.00</p>
          </div>
        </div>
        <div className='jfy-item'>
          <img
            src='https://imgs.search.brave.com/-DyEiy7AgA48A6g3UbIjQsq5nFIuxnxSylazIe1V0Dk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9kMW55/bWJrZW9tZW9xZy5j/bG91ZGZyb250Lm5l/dC9waG90b3MvMzAv/MjQvNDIzOTI5XzI0/NjA4X0wyLmpwZw'
            alt=''
            className='jfy-item-image'
          />
          <h5 className='jfy-item-name text'>Phone Ring Holder Stand</h5>
          <div className='jfy-text-container'>
            <p className='jfy-price text'>₱199.00</p>
          </div>
        </div>
        <div className='jfy-item'>
          <img
            src='https://imgs.search.brave.com/-DyEiy7AgA48A6g3UbIjQsq5nFIuxnxSylazIe1V0Dk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9kMW55/bWJrZW9tZW9xZy5j/bG91ZGZyb250Lm5l/dC9waG90b3MvMzAv/MjQvNDIzOTI5XzI0/NjA4X0wyLmpwZw'
            alt=''
            className='jfy-item-image'
          />
          <h5 className='jfy-item-name text'>LED Desk Lamp with USB Port</h5>
          <div className='jfy-text-container'>
            <p className='jfy-price text'>₱799.00</p>
          </div>
        </div>
        <div className='jfy-item'>
          <img
            src='https://imgs.search.brave.com/-DyEiy7AgA48A6g3UbIjQsq5nFIuxnxSylazIe1V0Dk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9kMW55/bWJrZW9tZW9xZy5j/bG91ZGZyb250Lm5l/dC9waG90b3MvMzAv/MjQvNDIzOTI5XzI0/NjA4X0wyLmpwZw'
            alt=''
            className='jfy-item-image'
          />
          <h5 className='jfy-item-name text'>Car Phone Mount Holder</h5>
          <div className='jfy-text-container'>
            <p className='jfy-price text'>₱399.00</p>
          </div>
        </div>
        <div className='jfy-item'>
          <img
            src='https://imgs.search.brave.com/-DyEiy7AgA48A6g3UbIjQsq5nFIuxnxSylazIe1V0Dk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9kMW55/bWJrZW9tZW9xZy5j/bG91ZGZyb250Lm5l/dC9waG90b3MvMzAv/MjQvNDIzOTI5XzI0/NjA4X0wyLmpwZw'
            alt=''
            className='jfy-item-image'
          />
          <h5 className='jfy-item-name text'>Wireless Gaming Mouse</h5>
          <div className='jfy-text-container'>
            <p className='jfy-price text'>₱999.00</p>
          </div>
        </div>
        <div className='jfy-item'>
          <img
            src='https://imgs.search.brave.com/-DyEiy7AgA48A6g3UbIjQsq5nFIuxnxSylazIe1V0Dk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9kMW55/bWJrZW9tZW9xZy5j/bG91ZGZyb250Lm5l/dC9waG90b3MvMzAv/MjQvNDIzOTI5XzI0/NjA4X0wyLmpwZw'
            alt=''
            className='jfy-item-image'
          />
          <h5 className='jfy-item-name text'>Laptop Cooling Pad</h5>
          <div className='jfy-text-container'>
            <p className='jfy-price text'>₱699.00</p>
          </div>
        </div>
        <div className='jfy-item'>
          <img
            src='https://imgs.search.brave.com/-DyEiy7AgA48A6g3UbIjQsq5nFIuxnxSylazIe1V0Dk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9kMW55/bWJrZW9tZW9xZy5j/bG91ZGZyb250Lm5l/dC9waG90b3MvMzAv/MjQvNDIzOTI5XzI0/NjA4X0wyLmpwZw'
            alt=''
            className='jfy-item-image'
          />
          <h5 className='jfy-item-name text'>
            Screen Protector Tempered Glass
          </h5>
          <div className='jfy-text-container'>
            <p className='jfy-price text'>₱149.00</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Justforyou;
