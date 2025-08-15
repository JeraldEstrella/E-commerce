import './variantManager.css';
import type { ProductData } from '../../interface';
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
  const [options, setOptions] = useState<string>('');

  const handleAddLabel = () => {
    setProductData((prevData) => ({
      ...prevData,
      variants: [...(prevData.variants || []), { label: labels, options: [] }],
    }));

    setLabels('');
  };

  const handleAddOption = (labelIndex: number) => {
    setProductData((prevData) => ({
      ...prevData,
      variants: prevData.variants?.map((label, index) =>
        index === labelIndex
          ? { ...label, options: [...(label.options || []), options] }
          : label
      ),
    }));

    setOptions('');
  };

  const handleDelete = (labelIndex: number) => {
    setProductData((prevData) => ({
      ...prevData,
      variants:
        prevData.variants?.filter((_, index) => index !== labelIndex) || [],
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
              {variant.label} :
              {variant.options?.map((option, OptionIndex) => (
                <div className='variant-options'>
                  <span className='variant-tag' key={OptionIndex}>
                    {option}
                  </span>
                </div>
              ))}
              <div className='add-option-container'>
                <input
                  type='text'
                  placeholder='Enter option (e.g., Red, Large)'
                  value={options}
                  onChange={(e) => setOptions(e.target.value)}
                />
                <button
                  className='add-variant-btn'
                  onClick={() => handleAddOption(index)}
                >
                  +
                </button>
                <button
                  className='delete-tag'
                  onClick={() => handleDelete(index)}
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default VariantManager;
