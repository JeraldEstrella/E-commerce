import './pricingInventory.css';
import type { ProductData } from '../../interface';

interface BasicInfoFormProps {
  productData: ProductData;
  setProductData: React.Dispatch<React.SetStateAction<ProductData>>;
}

const PricingInventory = ({
  productData,
  setProductData,
}: BasicInfoFormProps) => {
  // Function to handle changes in the pricing and inventory fields

  const handleBasicInfoChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setProductData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div className='pricing-inventory'>
      <h3>Pricing & Inventory</h3>
      <div className='form-grid'>
        <div className='form-group'>
          <label>Regular Price *</label>
          <input
            type='number'
            name='regularPrice'
            placeholder='0.00'
            onChange={handleBasicInfoChange}
          />
        </div>
        <div className='form-group'>
          <label>Sale Price</label>
          <input
            type='number'
            name='salePrice'
            placeholder='0.00'
            onChange={handleBasicInfoChange}
          />
        </div>
        <div className='form-group'>
          <label>Stock Quantity *</label>
          <input
            type='number'
            name='stockQuantity'
            placeholder='0'
            onChange={handleBasicInfoChange}
          />
        </div>
        <div className='form-group'>
          <label>Low Stock Threshold</label>
          <input
            type='number'
            name='lowStockThreshold'
            placeholder='5'
            onChange={handleBasicInfoChange}
          />
        </div>
      </div>
    </div>
  );
};

export default PricingInventory;
