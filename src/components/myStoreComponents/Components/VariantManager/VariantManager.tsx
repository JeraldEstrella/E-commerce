import './variantManager.css';
import type { ProductData } from '../../ProductData';
import { useState } from 'react';

interface BasicInfoFormProps {
  productData: ProductData;
  setProductData: React.Dispatch<React.SetStateAction<ProductData>>;
}

const VariantManager = ({
  productData,
  setProductData,
}: BasicInfoFormProps) => {
  const [labels, setLabels] = useState<string>('');

  const handleAddLabel = () => {
    setProductData((prevData) => ({
      ...prevData,
      variants: [...(prevData.variants || []), { label: labels, options: [] }],
    }));
  };

  return (
    <div className='form-section'>
      <h3>Product Variants</h3>
      <div className='variants-section'>
        <div className='variant-input'>
          <input
            type='text'
            value={labels}
            name='label'
            placeholder='Enter variant type (e.g., Color, Size)'
            onChange={(e) => setLabels(e.target.value)}
          />
          <button
            type='button'
            className='add-variant-btn'
            onClick={() => handleAddLabel()}
          >
            Add
          </button>
        </div>

        <div className='variant-tags'>
          {productData.variants?.map((variant, index) => (
            <div className='variant-label' key={index}>
              {variant.label}

              {variant.options?.map((option, OptionIndex) => (
                <div className='variant-options'>
                  <span className='variant-tag' key={OptionIndex}>
                    {option}
                  </span>
                </div>
              ))}

              <button className='delete-tag'>Delete</button>
              <div className='add-option-container'>
                <input
                  type='text'
                  placeholder='Enter option (e.g., Red, Large)'
                />
                <button>+</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default VariantManager;
