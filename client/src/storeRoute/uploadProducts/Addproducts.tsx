import { useEffect, useState } from 'react';
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
  const [upload, setUploading] = useState(true);
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

  const imagekit = new ImageKit({
    publicKey: publicKey,
    urlEndpoint: urlEndpoint,
  });

  const getAuthParams = async () => {
    const response = await fetch('http://localhost:3000/api/get/imagekit-auth');
    if (!response.ok)
      throw new Error('Faileed to fetch ImageKit authentication');
    return await response.json();
  };

  const handleSubmit = async (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    console.log('Submit clicked');
    setUploading(true);

    //function to upload the mainImage and additionalImages
    //when the tempFile contains mainImage proceed to upload to imageKit
    //after the imagekit upload takes the URL and store to the productData
    if (tempFile.mainImage) {
      const imageAuth = await getAuthParams();
      const uploadMainImage = await imagekit.upload({
        file: tempFile.mainImage,
        fileName: tempFile.mainImage.name,
        token: imageAuth.token,
        expire: imageAuth.expire,
        signature: imageAuth.signature,
      });

      const additionalImageResult: string[] = [];
      //if no additionalImage in tempFile skip and store the mainImage
      //if there is additionalImage loop through all files and fetch new Authentication each file for upload
      if (tempFile.additionalImages) {
        for (const file of tempFile.additionalImages) {
          const newAuth = await getAuthParams();
          const result = await imagekit.upload({
            file: file,
            fileName: file.name,
            token: newAuth.token,
            expire: newAuth.expire,
            signature: newAuth.signature,
          });
          additionalImageResult.push(result.url);
        }
      }

      //updates the productData array
      setProductData((prevData) => ({
        ...prevData,
        images: {
          mainImage: uploadMainImage
            ? uploadMainImage?.url
            : prevData.images.mainImage,
          additionalImages: [
            ...(prevData.images.additionalImages || []),
            ...additionalImageResult,
          ],
        },
      }));
    } else {
      throw new Error('Main image missing');
    }

    setUploading(false);
  };

  useEffect(() => {
    console.log(productData);
  }, [productData]);

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
                <img
                  className='image-preview'
                  src={
                    tempFile.mainImage
                      ? URL.createObjectURL(tempFile.mainImage)
                      : ''
                  }
                  alt=''
                />
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
        <button
          className='btn-publish'
          onClick={async (e) => {
            try {
              await handleSubmit(e);
            } catch (err) {
              console.error(err);
            }
          }}
        >
          Publish Product
        </button>
      </div>
    </div>
  );
};

export default Addproducts;
