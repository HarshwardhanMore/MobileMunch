// components/ProductForm.tsx

import React, { useState, ChangeEvent, FormEvent } from 'react';
import axios from 'axios';

interface ProductData {
  brand: string;
  ram: string;
  processor: string;
  storageCapacity: string;
  refreshRate: string;
  cameraPixels: string;
  selfieCameraPixels: string;
  os: string;
  image: File | null;
}


const UploadProduct = () => {
  const [productData, setProductData] = useState<ProductData>({
    brand: '',
    ram: '',
    processor: '',
    storageCapacity: '',
    refreshRate: '',
    cameraPixels: '',
    selfieCameraPixels: '',
    os: '',
    image: null,
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setProductData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files && e.target.files[0];
    setProductData((prevData) => ({ ...prevData, image: file }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    const formData = new FormData();

    for (const key in productData) {
      formData.append(key, (productData as any)[key]);
    }

    try {
      const response = await axios.post('http://localhost:5000/api/products/add', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      if (response.status === 200) {
        console.log('Product added successfully');
        // onSubmit();
      }
    } catch (error) {
      console.error('Error adding product', error);
    }

    // You can also reset the form or perform other actions after a successful submission
    setProductData({
      brand: '',
      ram: '',
      processor: '',
      storageCapacity: '',
      refreshRate: '',
      cameraPixels: '',
      selfieCameraPixels: '',
      os: '',
      image: null,
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* <label>
        Brand:
        <input type="text" name="brand" value={productData.brand} onChange={handleChange} />
      </label> */}

      {/* ... Other input fields ... */}

      <label>
        Image:
        <input type="file" name="image" onChange={handleImageChange} />
      </label>

      <button type="submit">Add Product</button>
    </form>
  );
};

export default UploadProduct;
