import './addproducts.css';
import { categoryOptions } from '../../../lib/zustand/selectedCategory';
import { useState } from 'react';

interface ProductData {
  productName: string;
  category: string;
  brand?: string;
  sku?: string;
  shortDescription?: string;
  detailedDescription?: string;
  regularPrice: number;
  salePrice?: number;
  stockQuantity: number;
  lowStockThreshold?: number;
  mainImage?: File;
  additionalImages?: File[];
  variants?: string[];
  weight?: number;
}

const Addproducts = () => {
  const [productData, setProductData] = useState<ProductData>({
    productName: '',
    category: '',
    brand: '',
    sku: '',
    shortDescription: '',
    detailedDescription: '',
    regularPrice: 0,
    salePrice: undefined,
    stockQuantity: 0,
    lowStockThreshold: undefined,
    mainImage: undefined,
    additionalImages: [],
    variants: [],
    weight: undefined,
  });

  const [newVariant, setNewVariant] = useState('');

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value, type } = e.target;
    setProductData((prev) => ({
      ...prev,
      [name]: type === 'number' ? Number(value) : value,
    }));
  };

  return (
    <div className='addproducts-container'>
      <div className='addproducts-content'>
        <div className='addproducts-form'>
          <div className='form-section'>
            <h3>Basic Information</h3>
            <div className='form-grid'>
              <div className='form-group'>
                <label>Product Name *</label>
                <input
                  type='text'
                  name='productName'
                  placeholder='Enter product name'
                  value={productData.productName}
                  onChange={handleInputChange}
                />
              </div>
              <div className='form-group'>
                <label htmlFor='category-select'>Category</label>
                <select
                  id='category-select'
                  name='category'
                  value={productData.category}
                  onChange={handleInputChange}
                >
                  <option value=''>Select category</option>
                  {categoryOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>
              <div className='form-group'>
                <label>Brand</label>
                <input
                  type='text'
                  name='brand'
                  placeholder='Enter brand name'
                  value={productData.brand}
                  onChange={handleInputChange}
                />
              </div>
              <div className='form-group'>
                <label>SKU</label>
                <input
                  type='text'
                  name='sku'
                  placeholder='Enter SKU'
                  value={productData.sku}
                  onChange={handleInputChange}
                />
              </div>
            </div>
          </div>

          <div className='form-section'>
            <h3>Product Description</h3>
            <div className='form-group'>
              <label>Short Description</label>
              <input
                type='text'
                name='shortDescription'
                placeholder='Brief product description'
                value={productData.shortDescription}
                onChange={handleInputChange}
              />
            </div>
            <div className='form-group'>
              <label>Detailed Description</label>
              <textarea
                rows={6}
                name='detailedDescription'
                placeholder='Enter detailed product description...'
                value={productData.detailedDescription}
                onChange={handleInputChange}
              ></textarea>
            </div>
          </div>

          <div className='form-section'>
            <h3>Pricing & Inventory</h3>
            <div className='form-grid'>
              <div className='form-group'>
                <label>Regular Price *</label>
                <input
                  type='number'
                  name='regularPrice'
                  placeholder='0.00'
                  value={productData.regularPrice}
                  onChange={handleInputChange}
                />
              </div>
              <div className='form-group'>
                <label>Sale Price</label>
                <input
                  type='number'
                  name='salePrice'
                  placeholder='0.00'
                  value={productData.salePrice ?? ''}
                  onChange={handleInputChange}
                />
              </div>
              <div className='form-group'>
                <label>Stock Quantity *</label>
                <input
                  type='number'
                  name='stockQuantity'
                  placeholder='0'
                  value={productData.stockQuantity}
                  onChange={handleInputChange}
                />
              </div>
              <div className='form-group'>
                <label>Low Stock Threshold</label>
                <input
                  type='number'
                  name='lowStockThreshold'
                  placeholder='5'
                  value={productData.lowStockThreshold ?? ''}
                  onChange={handleInputChange}
                />
              </div>
            </div>
          </div>

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

          <div className='form-section'>
            <h3>Product Variants</h3>
            <div className='variants-section'>
              <div className='variant-input'>
                <input
                  type='text'
                  placeholder='Enter variant (e.g., Size, Color)'
                  value={productData.variants}
                  onChange={(e) =>
                    setProductData[variants].push(e.target.value)
                  }
                />
                <button
                  type='button'
                  className='add-variant-btn'
                  onClick={() => {
                    if (newVariant.trim()) {
                      setVariants([...variants, newVariant.trim()]);
                      setNewVariant('');
                    }
                  }}
                >
                  Add
                </button>
              </div>

              <div className='variant-tags'>
                {variants.map((variant, index) => (
                  <span key={index} className='variant-tag'>
                    {variant}
                    <button
                      onClick={() =>
                        setVariants(variants.filter((_, i) => i !== index))
                      }
                      className='remove-tag'
                    >
                      ×
                    </button>
                  </span>
                ))}
              </div>
            </div>
          </div>

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
                  value={productData.weight ?? ''}
                  onChange={handleInputChange}
                />
              </div>
              <div className='form-group'>
                <label>Dimensions (L x W x H cm)</label>
                <div className='dimension-inputs'>
                  <input type='number' placeholder='Length' />
                  <span>×</span>
                  <input type='number' placeholder='Width' />
                  <span>×</span>
                  <input type='number' placeholder='Height' />
                </div>
              </div>
              <div className='form-group'>
                <label htmlFor='shipping-class-select'>Shipping Class</label>
                <select id='shipping-class-select' title='Shipping Class'>
                  <option>Standard</option>
                  <option>Express</option>
                  <option>Overnight</option>
                </select>
              </div>
            </div>
          </div>

          <div className='form-section'>
            <h3>SEO & Visibility</h3>
            <div className='form-group'>
              <label>Meta Title</label>
              <input
                type='text'
                name='metaTitle'
                placeholder='SEO friendly title'
              />
            </div>
            <div className='form-group'>
              <label>Meta Description</label>
              <textarea
                rows={3}
                name='metaDescription'
                placeholder='SEO description for search engines'
              ></textarea>
            </div>
            <div className='form-group'>
              <label>Product Tags</label>
              <input
                type='text'
                name='productTags'
                placeholder='Enter tags separated by commas'
              />
            </div>
            <div className='form-group checkbox-group'>
              <label>
                <input type='checkbox' />
                <span>Featured Product</span>
              </label>
              <label>
                <input type='checkbox' />
                <span>Enable Product Reviews</span>
              </label>
              <label>
                <input type='checkbox' />
                <span>Track Inventory</span>
              </label>
            </div>
          </div>
        </div>
        <div className='product-preview'>
          <div className='preview-header'>
            <h3>Product Preview</h3>
            <span className='preview-badge'>Live Preview</span>
          </div>

          <div className='preview-card'>
            <div className='preview-image'>
              <div className='placeholder-image'>
                <span>No image uploaded</span>
              </div>
            </div>

            <div className='preview-content'>
              <h4>{productData.productName}</h4>
              <div className='preview-price'>
                <span className='regular-price'>
                  ${productData.regularPrice}
                </span>
                <span className='sale-price'>${productData.salePrice}</span>
              </div>
              <div className='preview-rating'>
                <span>(0 reviews)</span>
              </div>
              <p className='preview-description'>
                {productData.shortDescription}
              </p>
              <div className='preview-variants'>
                <div className='variant-group'>
                  <label>Color:</label>
                  <div className='color-options'>
                    <span className='color-option'></span>
                    <span className='color-option'></span>
                    <span className='color-option'></span>
                  </div>
                </div>
                <div className='variant-group'>
                  <label htmlFor='preview-size-select' className='sr-only'>
                    Select Size
                  </label>
                  <select id='preview-size-select' title='Select Size'>
                    <option>Select size</option>
                  </select>
                </div>
                <button type='button' className='btn-primary'>
                  Add to Cart
                </button>
                <button type='button' className='btn-secondary'>
                  Buy Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='addproducts-actions'>
        <button type='button' className='btn-cancel'>
          Cancel
        </button>
        <button type='button' className='btn-draft'>
          Save as Draft
        </button>
        <button type='button' className='btn-publish'>
          Publish Product
        </button>
      </div>
    </div>
  );
};

export default Addproducts;
