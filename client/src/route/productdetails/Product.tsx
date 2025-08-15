import { useState } from 'react';
import './product.css';

const Option = [
  {
    img: '',
    label: 'CMS800G(PH stock)',
  },
  {
    img: '',
    label: 'Three in One Probe',
  },
  {
    img: '',
    label: 'Twins Probe',
  },
  {
    img: '',
    label: '+2 Probes',
  },
  {
    img: '',
    label: '3 in 1 probe',
  },
];

const Product = () => {
  const [variant, setVariant] = useState<number>(0);
  const [item, setItem] = useState<{ id: number; quantity: number }>({
    id: 1,
    quantity: 1,
  });

  const updateQuantity = (id: number, change: number) => {
    setItem((prev) =>
      prev.id === id
        ? { ...prev, quantity: Math.max(1, prev.quantity + change) }
        : prev
    );
  };

  return (
    <div className='product-details-container'>
      <div className='product-details-card'>
        <img src='' alt='' className='product-main-image' />
        <div className='product-info'>
          <h5 className='product-title'>
            CONTEC CMS800G Fetal Monitor real-time acquire FHR,TOCO,FMOV color
            LCD ultrasound
          </h5>
          <div className='product-rating'></div>
          <div className='product-pricing'>
            <span className='current-price'>₱7,764.90</span>
            <span className='original-price'>₱15,529.80</span>
            <span className='discount-badge'>50% OFF</span>
          </div>

          <div className='product-shipping'>
            <div className='shipping-label'>Delivery Options:</div>
            <div className='delivery-info'>
              <div className='delivery-location'>
                📍 Metro Manila-Quezon City, Quezon City, Project 6
              </div>
            </div>
            <div className='delivery-date'>🚚 Guaranteed by 19 Aug-3 Sep</div>
          </div>

          <div className='model-section'>
            <div className='model-label'>{Option[variant].label}</div>
            <div className='product-variants'>
              {Option.map((option, index) => (
                <div
                  className={
                    variant === index
                      ? 'variant-option selected'
                      : 'variant-option'
                  }
                  key={index}
                  onClick={() => setVariant(index)}
                >
                  <img
                    src={option.img}
                    alt={option.label}
                    className='variant-image'
                  />
                  <span className='variant-label'>{option.label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className='quantity-section'>
            <div className='quantity-label'>Quantity:</div>
            <div className='product-quantity-selector'>
              <button
                type='button'
                className='quantity-btn quantity-decrease'
                onClick={() => updateQuantity(item.id, -1)}
              >
                -
              </button>
              <span className='quantity-display'>{item.quantity}</span>
              <button
                type='button'
                className='quantity-btn quantity-increase'
                onClick={() => updateQuantity(item.id, 1)}
              >
                +
              </button>
            </div>
          </div>

          <div className='product-actions'>
            <button className='buy-now-btn'>Buy Now</button>
            <button className='add-to-cart-btn'>Add to Cart</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
