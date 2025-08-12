import './imageUploader.css';
import type { ProductData } from '../../ProductData';

interface BasicInfoFormProps {
  productData: ProductData;
  setProductData: React.Dispatch<React.SetStateAction<ProductData>>;
}
const ImageUploader = ({ productData, setProductData }: BasicInfoFormProps) => {
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
      <h3>Images</h3>
      <div className='form-group'>
        <label>Main Image</label>
        <div className='image-upload'>
          <div className='image-slot'>
            <span>Upload Main Image</span>
          </div>
        </div>
      </div>
      <div className='form-group'>
        <label>Additional Images</label>
        <div className='image-grid'>
          <div className='image-slot'>
            <span>Upload</span>
          </div>
          <div className='image-slot'>
            <span>Upload</span>
          </div>
          <div className='image-slot'>
            <span>Upload</span>
          </div>
          <div className='image-slot'>
            <span>Upload</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageUploader;
