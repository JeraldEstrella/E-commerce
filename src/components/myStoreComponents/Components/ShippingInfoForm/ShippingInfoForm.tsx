import './shippingInfoForm.css';
import type { ProductData } from '../../ProductData';
import BasicInfoForm from './../BasicInformation/BasicInfoForm';

interface BasicInfoFormProps {
  productData: ProductData;
  setProductData: React.Dispatch<React.SetStateAction<ProductData>>;
}
const ShippingInfoForm = ({
  productData,
  setProductData,
}: BasicInfoFormProps) => {
  // Function to handle changes in the shipping information fields

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
    <div className='form-section'>
      <h3>Shipping Information</h3>
      <div className='form-grid'>
        <div className='form-group'>
          <label>Weight (kg)</label>
          <input
            type='number'
            name='weight'
            placeholder='0.0'
            step='0.1'
            onChange={handleBasicInfoChange}
          />
        </div>
        <div className='form-group'>
          <label htmlFor='shipping-class-select'>Shipping Class</label>
          <select
            id='shipping-class-select'
            title='Shipping Class'
            onChange={handleBasicInfoChange}
            name='shippingClass'
          >
            <option>Standard</option>
            <option>Express</option>
            <option>Overnight</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default ShippingInfoForm;
