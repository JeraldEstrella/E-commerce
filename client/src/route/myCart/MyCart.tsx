import React from 'react';
import './mycart.css';

type CartItem = {
  id: number;
  title: string;
  platform: string;
  price: number;
  quantity: number;
  image: string;
};

const initialCart: CartItem[] = [
  {
    id: 1,
    title: 'Fifa 19',
    platform: 'PS4',
    price: 44.0,
    quantity: 2,
    image: '/images/fifa19.jpg',
  },
  {
    id: 2,
    title: 'Glacier White 500GB',
    platform: 'PS4',
    price: 249.99,
    quantity: 1,
    image: '/images/ps4-white.jpg',
  },
  {
    id: 3,
    title: 'Platinum Headset',
    platform: 'PS4',
    price: 119.99,
    quantity: 1,
    image: '/images/headset.jpg',
  },
];

const MyCart: React.FC = () => {
  const [cartItems, setCartItems] = React.useState<CartItem[]>(initialCart);
  const [promoCode, setPromoCode] = React.useState<string>('');

  const updateQuantity = (id: number, delta: number) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + delta) }
          : item
      )
    );
  };

  const removeItem = (id: number) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const itemsTotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const shippingCost = 5.0;
  const totalCost = itemsTotal + shippingCost;

  return (
    <div className='mycart-container'>
      <div className='cart-content'>
        {/* Left Side: Shopping Cart */}
        <div className='cart-left'>
          <h2>Shopping Cart</h2>
          <p>{cartItems.length} Items</p>
          <div className='cart-items'>
            {cartItems.map((item) => (
              <div className='cart-item' key={item.id}>
                <img
                  src={item.image}
                  alt={item.title}
                  className='item-cart-image'
                />
                <div className='item-details'>
                  <h4>{item.title}</h4>
                  <p>{item.platform}</p>
                  <button type='button' onClick={() => removeItem(item.id)}>
                    Remove
                  </button>
                </div>
                <div className='item-quantity'>
                  <button
                    type='button'
                    onClick={() => updateQuantity(item.id, -1)}
                  >
                    -
                  </button>
                  <span>{item.quantity}</span>
                  <button
                    type='button'
                    onClick={() => updateQuantity(item.id, 1)}
                  >
                    +
                  </button>
                </div>
                <div className='item-price'>
                  <p>£{item.price.toFixed(2)}</p>
                  <p>£{(item.price * item.quantity).toFixed(2)}</p>
                </div>
              </div>
            ))}
          </div>
          <a href='#' className='continue-shopping'>
            ← Continue Shopping
          </a>
        </div>

        {/* Right Side: Order Summary */}
        <div className='cart-right'>
          <h3>Order Summary</h3>
          <div className='summary-details'>
            <div className='summary-row'>
              <span>Items</span>
              <span>£{itemsTotal.toFixed(2)}</span>
            </div>
            <div className='summary-row'>
              <span>Shipping</span>
              <label htmlFor='shipping-method' className='visually-hidden'>
                Shipping Method
              </label>
              <select id='shipping-method' defaultValue='Standard Delivery'>
                <option>Standard Delivery – £5.00</option>
                <option>Express Delivery – £10.00</option>
              </select>
            </div>
            <div className='promo-code'>
              <label htmlFor='promo'>Promo Code</label>
              <input
                id='promo'
                type='text'
                value={promoCode}
                onChange={(e) => setPromoCode(e.target.value)}
                placeholder='Enter your code'
              />
              <button type='button' className='apply-btn'>
                Apply
              </button>
            </div>
            <div className='summary-total'>
              <span>Total Cost</span>
              <span>£{totalCost.toFixed(2)}</span>
            </div>
            <button type='button' className='checkout-btn'>
              Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyCart;
