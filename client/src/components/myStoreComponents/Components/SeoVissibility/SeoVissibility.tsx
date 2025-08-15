import './seoVissibility.css';
import type { ProductData } from '../../interface';

interface BasicInfoFormProps {
  productData: ProductData;
  setProductData: React.Dispatch<React.SetStateAction<ProductData>>;
}

const SeoVissibility = ({
  productData,
  setProductData,
}: BasicInfoFormProps) => {
  const handleBasicInfoChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    setProductData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div className='form-section'>
      <h3>SEO & Visibility</h3>
      <div className='form-group'>
        <label>Meta Title</label>
        <input
          type='text'
          name='metaTitle'
          placeholder='SEO friendly title'
          onChange={handleBasicInfoChange}
        />
      </div>
      <div className='form-group'>
        <label>Meta Description</label>
        <textarea
          rows={3}
          name='metaDescription'
          placeholder='SEO description for search engines'
          onChange={handleBasicInfoChange}
        ></textarea>
      </div>
      <div className='form-group'>
        <label>Product Tags</label>
        <input
          type='text'
          name='productTags'
          placeholder='Enter tags separated by commas'
          onChange={handleBasicInfoChange}
        />
      </div>
    </div>
  );
};

export default SeoVissibility;
