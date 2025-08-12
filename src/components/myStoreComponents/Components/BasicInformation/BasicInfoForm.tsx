import './basicInfoForm.css';
import type { ProductData } from '../../ProductData';

interface BasicInfoFormProps {
  productData: ProductData;
  setProductData: React.Dispatch<React.SetStateAction<ProductData>>;
}

const BasicInfoForm = ({ productData, setProductData }: BasicInfoFormProps) => {
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
    <div className='basic-info-form'>
      <h3>Basic Information</h3>
      <div className='form-grid'>
        <div className='form-group'>
          <label>Product Name *</label>
          <input
            type='text'
            name='productName'
            value={productData.productName}
            placeholder='Enter product name'
            required
            onChange={handleBasicInfoChange}
          />
        </div>

        <div className='form-group'>
          <label htmlFor='category-select'>Category *</label>
          <select
            id='category-select'
            name='category'
            required
            onChange={handleBasicInfoChange}
          >
            <option value=''>Select category</option>
            <option value='electronics'>Electronics</option>
            <option value='fashion'>Fashion</option>
            <option value='home'>Home & Living</option>
          </select>
        </div>

        <div className='form-group'>
          <label>Brand</label>
          <input
            type='text'
            name='brand'
            placeholder='Enter brand name'
            onChange={handleBasicInfoChange}
          />
        </div>

        <div className='form-group'>
          <label>SKU</label>
          <input
            type='text'
            name='sku'
            placeholder='Enter SKU'
            onChange={handleBasicInfoChange}
          />
        </div>
      </div>
    </div>
  );
};

export default BasicInfoForm;
