import { useState, useEffect } from 'react';
import type {
  fileState,
  ProductData,
} from '../../components/myStoreComponents/interface';
import BasicInfoForm from '../../components/myStoreComponents/Components/BasicInformation/BasicInfoForm';
import ProductDescription from '../../components/myStoreComponents/Components/Description/Description';
import ImageUploader from '../../components/myStoreComponents/Components/ImageUploader/ImageUploader';
import PricingInventory from '../../components/myStoreComponents/Components/PricingInventory/PricingInventory';
import ShippingInfoForm from '../../components/myStoreComponents/Components/ShippingInfoForm/ShippingInfoForm';
import VariantManager from '../../components/myStoreComponents/Components/VariantManager/VariantManager';
import SeoVissibility from '../../components/myStoreComponents/Components/SeoVissibility/SeoVissibility';
import ImageKit from 'imagekit-javascript';
import './addproducts.css';

const urlEndpoint = import.meta.env.VITE_IMAGEKIT_ENDPOINT;
const publicKey = import.meta.env.VITE_IMAGE_PUBLIC_KEY;

const Addproducts = () => {
  const [productData, setProductData] = useState<ProductData>({
    productName: '',
    category: '',
    brand: '',
    sku: '',
    shortDescription: '',
    detailedDescription: '',
    regularPrice: 0,
    salePrice: 0,
    stockQuantity: 0,
    lowStockThreshold: undefined,
    images: {
      mainImage: '',
      additionalImages: [],
    },
    variants: [],
    weight: undefined,
  });

  const [tempFile, setFile] = useState<fileState>({
    mainImage: undefined,
    additionalImages: [],
  });

  const handleSubmit = async () => {
    if (
      Object.values(productData).some((value) => !value || value.length === 0)
    ) {
      console.log('Some fields are missing');
      return;
    }

    const imagekit = new ImageKit({
      publicKey: publicKey,
      urlEndpoint: urlEndpoint,
    });

    let signature, token, expire;
    try {
      const response = await fetch(
        'http://localhost:3000/api/get/imagekit-auth'
      );
      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`Error: ${response.status} ${errorText}`);
      }

      const data = await response.json();
      signature = data.signature;
      token = data.token;
      expire = data.expire;
    } catch (error) {
      throw new Error(`Failed to fetch authentication parameters: ${error}`);
    }

    if (!tempFile.mainImage) {
      throw new Error('Main image missing');
    }

    if (!tempFile.additionalImages || tempFile.additionalImages.length === 0) {
      throw new Error('No additional images selected');
    }

    const upload = [
      imagekit.upload({
        file: tempFile.mainImage,
        fileName: tempFile.mainImage.name,
        token,
        expire,
        signature,
      }),
      ...tempFile.additionalImages.map((file) =>
        imagekit.upload({
          file: file,
          fileName: file.name,
          token,
          expire,
          signature,
        })
      ),
    ];

    const result = await Promise.all(upload);
    const [mainImageResult, ...additionalImagesResult] = result;

    setProductData((prevData) => ({
      ...prevData,
      images: {
        mainImage: mainImageResult.url,
        additionalImages: additionalImagesResult.map((img) => img.url),
      },
    }));
  };

  useEffect(() => {
    console.log('productData changed:', tempFile);
  }, [tempFile]);

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
          <ImageUploader setFile={setFile} />
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
        <button className='btn-publish' onClick={() => handleSubmit()}>
          Publish Product
        </button>
      </div>
    </div>
  );
};

export default Addproducts;
