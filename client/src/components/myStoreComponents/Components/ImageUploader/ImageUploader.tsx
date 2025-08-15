import './imageUploader.css';
import type { fileState } from '../../interface';

interface BasicInfoFormProps {
  setFile: React.Dispatch<React.SetStateAction<fileState>>;
}
const ImageUploader = ({ setFile }: BasicInfoFormProps) => {
  const handleMainImageChange = async (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setFile((prevFile) => ({
      ...prevFile,
      mainImage: file,
    }));
  };

  const handleAdditionalImageChange = async (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    if (e.target.files) {
      const arrayFiles = Array.from(e.target.files);

      setFile((prevFile) => ({
        ...prevFile,
        additionalImages: [...(prevFile.additionalImages || []), ...arrayFiles],
      }));
    }
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
        <h5>Upload addtional images</h5>
        <div className='image-grid'>
          {Array.from({ length: 4 }).map((_, index) => (
            <div className='image-container additional-image' key={index}>
              <label
                htmlFor={`additional-image${index}`}
                className='upload-btn'
              >
                Upload Image
              </label>
              <input
                id={`additional-image${index}`}
                onChange={(e) => handleAdditionalImageChange(e)}
                type='file'
                multiple
                accept='image/*'
                name={`additionalImage${index}`}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ImageUploader;
