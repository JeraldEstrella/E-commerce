import { useState } from 'react';
import type { ProductData } from '../components/myStoreComponents/ProductData';
import BasicInfoForm from './../components/myStoreComponents/Components/BasicInformation/BasicInfoForm';
import ProductDescription from '../components/myStoreComponents/Components/Description/Description';
import ImageUploader from '../components/myStoreComponents/Components/ImageUploader/ImageUploader';
import PricingInventory from './../components/myStoreComponents/Components/PricingInventory/PricingInventory';
import ShippingInfoForm from './../components/myStoreComponents/Components/ShippingInfoForm/ShippingInfoForm';
import VariantManager from '../components/myStoreComponents/Components/VariantManager/VariantManager';
import SeoVissibility from './../components/myStoreComponents/Components/SeoVissibility/SeoVissibility';
import './addproducts.css';

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

  return (
    <div className='addproducts-container'>
      <div className='addproducts-header'>
        <h2>Add New Product</h2>
        <p>Fill in the product details below to create a new listing</p>
      </div>

      <div className='addproducts-content'>
        <div className='addproducts-form'>
          <BasicInfoForm
            productData={productData}
            setProductData={setProductData}
          />
          <ProductDescription
            productData={productData}
            setProductData={setProductData}
          />
          <ImageUploader
            productData={productData}
            setProductData={setProductData}
          />
          <PricingInventory
            productData={productData}
            setProductData={setProductData}
          />
          <ShippingInfoForm
            productData={productData}
            setProductData={setProductData}
          />
          <VariantManager
            productData={productData}
            setProductData={setProductData}
          />
          <SeoVissibility
            productData={productData}
            setProductData={setProductData}
          />
        </div>

        {/* Product Preview Sidebar */}
        <div className='product-preview-sidebar'>
          <div className='product-preview'>
            <div className='preview-header'>
              <h3>Product Preview</h3>
              <span className='preview-badge'>Live Preview</span>
            </div>

            <div className='preview-card'>
              <div className='preview-image'>
                <span>📷 Product Image</span>
              </div>

              <div className='preview-content'>
                <h4>{productData.productName}</h4>
                <div className='preview-price'>
                  <span className='regular-price'>
                    ${productData.salePrice}
                  </span>
                  <span className='sale-price'>
                    ${productData.regularPrice}
                  </span>
                </div>
                <p className='preview-description'>
                  {productData.shortDescription ||
                    'Product description will appear here...'}
                </p>

                <div className='preview-variants'>
                  <div className='variant-group'>
                    {productData.variants?.map((variant, index) => (
                      <div key={index}>
                        <label>{variant.label}</label>
                        <select title='Color Selection'>
                          {variant.options.map((option, OptionIndex) => (
                            <option key={OptionIndex} value={option}>
                              {option}
                            </option>
                          ))}
                        </select>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <button className='btn-primary'>Add to Cart</button>
            <button className='btn-secondary'>Save to Wishlist</button>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className='addproducts-actions'>
        <button className='btn-cancel'>Cancel</button>
        <button className='btn-draft'>Save as Draft</button>
        <button className='btn-publish'>Publish Product</button>
      </div>
    </div>
  );
};

export default Addproducts;
