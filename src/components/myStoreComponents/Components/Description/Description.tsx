import './description.css';
import type { ProductData } from '../../ProductData';

interface BasicInfoFormProps {
  productData: ProductData;
  setProductData: React.Dispatch<React.SetStateAction<ProductData>>;
}

const ProductDescription = ({
  productData,
  setProductData,
}: BasicInfoFormProps) => {
  // Function to handle changes in the product description fields
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
    <div className='product-description'>
      <h3>Product Description</h3>
      <div className='form-group'>
        <label>Short Description</label>
        <input
          type='text'
          value={productData.shortDescription}
          name='shortDescription'
          placeholder='Brief product description'
        />
      </div>
      <div className='form-group'>
        <label>Detailed Description</label>
        <textarea
          rows={6}
          name='detailedDescription'
          placeholder='Enter detailed product description...'
          value={productData.detailedDescription}
        ></textarea>
      </div>
    </div>
  );
};

export default ProductDescription;
