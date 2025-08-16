import './imageUploader.css';
import type { fileState } from '../../interface';
import imageCompression from 'browser-image-compression';

interface BasicInfoFormProps {
  setFile: React.Dispatch<React.SetStateAction<fileState>>;
}
const ImageUploader = ({ setFile }: BasicInfoFormProps) => {
  const options = {
    maxSizeMB: 1,
    maxWidthOrHeight: 1920,
    useWebWorker: true,
  };

  const handleMainImageChange = async (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const compressedImage = await imageCompression(file, options);

    setFile((prev) => ({
      ...prev,
      mainImage: compressedImage,
    }));

    e.target.value = '';
  };

  const handleAdditionalImageChange = async (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    if (!e.target.files) return;

    const files = Array.from(e.target.files);
    const compressedImages = await Promise.all(
      files.map((file) => imageCompression(file, options))
    );

    setFile((prev) => ({
      ...prev,
      additionalImages: [...prev.additionalImages, ...compressedImages],
    }));

    e.target.value = '';
  };

  return (
    <div className='image-uploader'>
      <h3>Image</h3>
      <div className='image-container main-image'>
        <label htmlFor='mainImage' className='upload-btn'>
          Upload Main Image
        </label>
        <input
          id='mainImage'
          type='file'
          accept='image/*'
          name='mainImage'
          onChange={(e) => handleMainImageChange(e)}
        />
      </div>
      <div className='additional-container'>
        <h5>Addtional images</h5>
        <div className='image-grid'>
          <div className='image-container additional-image'>
            <label htmlFor={`additional-image`} className='upload-btn'>
              Upload Image
            </label>
            <input
              id={`additional-image`}
              onChange={(e) => handleAdditionalImageChange(e)}
              type='file'
              multiple
              accept='image/*'
              name={`additionalImage}`}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageUploader;
