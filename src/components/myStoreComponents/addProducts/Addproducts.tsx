import './addproducts.css';
import { categoryOptions } from '../../../lib/selectedCategory';
import { getFiltersForCategory } from '../../../lib/filterOptions';

const Addproducts = () => {
  return (
    <div className='addproducts-container'>
      <div className='addproducts-header'>
        <h2>Add New Product</h2>
        <p>Create a new product listing for your store</p>
      </div>

      <div className='addproducts-content'>
        <div className='product-form'>
          {/* Basic Information */}
          <div className='form-section'>
            <h3>Basic Information</h3>
            <div className='form-grid'>
              <div className='form-group'>
                <label>Product Name *</label>
                <input type='text' placeholder='Enter product name' />
              </div>
              <div className='form-group'>
                <label htmlFor='category-select'>Category</label>
                <select id='category-select'>
                  {categoryOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>
              <div className='form-group'>
                <label>Brand</label>
                <input type='text' placeholder='Enter brand name' />
              </div>
              <div className='form-group'>
                <label>SKU</label>
                <input type='text' placeholder='Enter SKU' />
              </div>
            </div>
          </div>

          {/* Product Description */}
          <div className='form-section'>
            <h3>Product Description</h3>
            <div className='form-group'>
              <label>Short Description</label>
              <input type='text' placeholder='Brief product description' />
            </div>
            <div className='form-group'>
              <label>Detailed Description</label>
              <textarea
                rows={6}
                placeholder='Enter detailed product description...'
              ></textarea>
            </div>
          </div>

          {/* Pricing & Inventory */}
          <div className='form-section'>
            <h3>Pricing & Inventory</h3>
            <div className='form-grid'>
              <div className='form-group'>
                <label>Regular Price *</label>
                <input type='number' placeholder='0.00' />
              </div>
              <div className='form-group'>
                <label>Sale Price</label>
                <input type='number' placeholder='0.00' />
              </div>
              <div className='form-group'>
                <label>Stock Quantity *</label>
                <input type='number' placeholder='0' />
              </div>
              <div className='form-group'>
                <label>Low Stock Threshold</label>
                <input type='number' placeholder='5' />
              </div>
            </div>
          </div>

          {/* Product Images */}
          <div className='form-section'>
            <h3>Product Images</h3>
            <div className='image-upload-section'>
              <div className='main-image-upload'>
                <div className='upload-area'>
                  <h4>Upload Main Image</h4>
                  <p>Drag and drop or click to upload</p>
                  <span className='file-info'>PNG, JPG up to 10MB</span>
                </div>
              </div>

              <div className='additional-images'>
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
          </div>

          {/* Product Variants */}
          <div className='form-section'>
            <h3>Product Variants</h3>
            <div className='variants-section'>
              <div className='variant-option'>
                <h4>Colors</h4>
                <div className='variant-tags'>
                  <span className='variant-tag'>Red ×</span>
                  <span className='variant-tag'>Blue ×</span>
                  <span className='variant-tag'>Green ×</span>
                  <button type='button' className='add-variant-btn'>
                    + Add Color
                  </button>
                </div>
              </div>

              <div className='variant-option'>
                <h4>Sizes</h4>
                <div className='variant-tags'>
                  <span className='variant-tag'>Small ×</span>
                  <span className='variant-tag'>Medium ×</span>
                  <span className='variant-tag'>Large ×</span>
                  <button type='button' className='add-variant-btn'>
                    + Add Size
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Shipping Information */}
          <div className='form-section'>
            <h3>Shipping Information</h3>
            <div className='form-grid'>
              <div className='form-group'>
                <label>Weight (kg)</label>
                <input type='number' placeholder='0.0' step='0.1' />
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
                <label>Shipping Class</label>
                <label
                  htmlFor='shipping-class-select'
                  style={{ display: 'none' }}
                >
                  Shipping Class
                </label>
                <select id='shipping-class-select'>
                  <option>Standard</option>
                  <option>Express</option>
                  <option>Overnight</option>
                </select>
              </div>
            </div>
          </div>

          {/* SEO & Visibility */}
          <div className='form-section'>
            <h3>SEO & Visibility</h3>
            <div className='form-group'>
              <label>Meta Title</label>
              <input type='text' placeholder='SEO friendly title' />
            </div>
            <div className='form-group'>
              <label>Meta Description</label>
              <textarea
                rows={3}
                placeholder='SEO description for search engines'
              ></textarea>
            </div>
            <div className='form-group'>
              <label>Product Tags</label>
              <input type='text' placeholder='Enter tags separated by commas' />
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

        {/* Product Preview */}
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
              <h4>Product Name</h4>
              <div className='preview-price'>
                <span className='current-price'>$0.00</span>
                <span className='original-price'>$0.00</span>
              </div>
              <div className='preview-rating'>
                <span>(0 reviews)</span>
              </div>
              <p className='preview-description'>
                Product description will appear here...
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
                  <label
                    htmlFor='preview-size-select'
                    style={{ display: 'none' }}
                  >
                    Size
                  </label>
                  <select id='preview-size-select'>
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
