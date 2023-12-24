// // components/ProductForm.tsx

// import React, { useState, ChangeEvent, FormEvent } from 'react';
// import axios from 'axios';

// interface ProductData {
//   name: String,
//   description: String,
//   brand: string;
//   ram: string;
//   processor: string;
//   storageCapacity: string;
//   refreshRate: string;
//   cameraPixels: string;
//   selfieCameraPixels: string;
//   type: String, // ios, android
//   os: String,
//   charging: String,
//   price: String,
//   image: File | null;
// }


// const UploadProduct = () => {
//   const [productData, setProductData] = useState<ProductData>({
//     name: '',
//     description: '',
//     brand: '',
//     ram: '',
//     processor: '',
//     storageCapacity: '',
//     refreshRate: '',
//     cameraPixels: '',
//     selfieCameraPixels: '',
//     type: '', // ios, android
//     os: '',
//     charging: '',
//     price: '',
//     image: null,
//   });

//   const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
//     const { name, value } = e.target;
//     setProductData((prevData) => ({ ...prevData, [name]: value }));
//   };

//   const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
//     const file = e.target.files && e.target.files[0];
//     setProductData((prevData) => ({ ...prevData, image: file }));
//   };

//   const handleSubmit = async (e: FormEvent) => {
//     e.preventDefault();

//     const formData = new FormData();

//     for (const key in productData) {
//       formData.append(key, (productData as any)[key]);
//     }

//     try {
//       const response = await axios.post('http://localhost:5000/api/products/add', formData, {
//         headers: {
//           'Content-Type': 'multipart/form-data',
//         },
//       });

//       if (response.status === 200) {
//         console.log('Product added successfully');
//         // onSubmit();
//       }
//     } catch (error) {
//       console.error('Error adding product', error);
//     }

//     // You can also reset the form or perform other actions after a successful submission
//     setProductData({
//       name: '',
//       description: '',
//       brand: '',
//       ram: '',
//       processor: '',
//       storageCapacity: '',
//       refreshRate: '',
//       cameraPixels: '',
//       selfieCameraPixels: '',
//       type: '', // ios, android
//       os: '',
//       charging: '',
//       price: '',
//       image: null,
//     });
//   };

//   return (
//     <form onSubmit={handleSubmit}>

//       <label>
//         Image:
//         <input type="file" name="image" onChange={handleImageChange} />
//       </label>

//       <button type="submit">Add Product</button>
//     </form>
//   );
// };

// export default UploadProduct;


// ProductForm.tsx

import { Button } from '@/components/ui/button';
import axios from 'axios';
import React, { ChangeEvent, FormEvent, useState } from 'react';
import { toast } from 'react-toastify';


interface ProductData {
  name: string;
  description: string;
  brand: string;
  ram: string;
  processor: string;
  storageCapacity: string;
  refreshRate: string;
  cameraPixels: string;
  selfieCameraPixels: string;
  type: string;
  os: string;
  charging: string;
  price: string;
  image: File | null;
}

const ProductForm: React.FC = () => {
  const [productData, setProductData] = useState<ProductData>({
    name: '',
    description: '',
    brand: '',
    ram: '',
    processor: '',
    storageCapacity: '',
    refreshRate: '',
    cameraPixels: '',
    selfieCameraPixels: '',
    type: '', // ios, android
    os: '',
    charging: '',
    price: '',
    image: null,
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setProductData((prevData) => ({ ...prevData, [name]: value }));
  };
  const handleChange2 = (e: ChangeEvent<HTMLSelectElement>) => {
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
      const response = await axios.post('/api/products/add', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      if (response.status === 200) {
        toast.success("Product added successfully")
        // console.log('Product added successfully');
        // onSubmit();
      }
    } catch (error) {
      console.error('Error adding product', error);
    }

    // Send the productData to the server using axios or fetch
    // console.log('Product Data:', productData);
  };

  return (
    <div className=' w-full h-full flex justify-center'>
      <div className=' w-[90%] h-full flex flex-row sm:flex-col'>
        <div className=' w-1/3 sm:w-full h-full sm:h-1/5 flex flex-col justify-center items-center'>
          <div className=' h-[90%] sm:h-full  w-full flex justify-center items-center'>
            {/* <div className=' w-full text-left text-2xl font-semibold mb-2'>Contribute a Product</div> */}
            <div className=' w-full flex items-center justify-center '>
              <img src="/logo-business.png" alt="" className=' w-2/3 '/>
            </div>
          </div>
        </div>
        <div className=' w-2/3 sm:w-full h-full sm:h-4/5 flex flex-col justify-center items-center '>
          <form onSubmit={handleSubmit} className=' w-full h-[90%] flex flex-col items-start'>
              <div className=' w-full h-full flex flex-col items-start overflow-y-scroll'>
                <div className=' my-2 w-full text-xl font-semibold'><span className=' text-3xl text-secondary-color'>C</span>ontribute Product To The Production</div>
                <label className=' mb-2.5 w-full'>
                  {/* <div className=' text-lg'>
                    Name
                  </div> */}
                  <input type="text" required name="name" className=' bg-transparent w-full py-3 px-3 border rounded-md placeholder:text-slate-500 placeholder:text-sm' placeholder='Name of the product' value={productData.name} onChange={handleChange} />
                </label>

                <label className=' mb-2.5  w-full'>
                  {/* <div className='text-lg'>
                    Description
                  </div> */}
                  <input name="description" placeholder='Description' value={productData.description} className=' bg-transparent w-full py-3 px-3 border rounded-md placeholder:text-slate-500 placeholder:text-sm' onChange={handleChange} />
                </label>


                <label className=' mb-2.5  w-full'>
                  {/* <div className='text-lg'>
                    Brand
                  </div> */}
                  <input type="text" name="brand" placeholder='Name of the Brand' value={productData.brand}  className=' bg-transparent w-full py-3 px-3 border rounded-md placeholder:text-slate-500 placeholder:text-sm' onChange={handleChange} />
                </label>

                <label className=' mb-2.5  w-full'>
                  {/* <div className='text-lg'>
                    Processor
                  </div> */}
                  <input type="text" name="processor" placeholder='Name of the Processor' value={productData.processor}  className=' bg-transparent w-full py-3 px-3 border rounded-md placeholder:text-slate-500 placeholder:text-sm' onChange={handleChange} />
                </label>

                <label className=' mb-2  w-full'>
                  {/* <div className='text-lg'>
                    Ram
                  </div> */}
                  <select name="ram" value={productData.ram}  className=' bg-transparent w-full py-3 px-3 border rounded-md placeholder:text-slate-500 placeholder:text-sm' onChange={handleChange2}>
                    <option value="" disabled selected className=''>RAM</option>
                    <option value="4GB">4GB</option>
                    <option value="8GB">8GB</option>
                    <option value="12GB">12GB</option>
                    <option value="16GB">16GB</option>
                    <option value="32GB">32GB</option>
                    <option value="64GB">64GB</option>
                  </select>
                </label>

                <label className=' mb-2  w-full'>
                  {/* <div className='text-lg'>
                    Storage Capacity
                  </div> */}
                  <select name="storageCapacity" value={productData.storageCapacity} className=' bg-transparent w-full py-3 px-3 border rounded-md placeholder:text-slate-500 placeholder:text-sm' onChange={handleChange2}>
                    <option value="" disabled selected>Storage Capacity</option>
                    <option value="32GB">32GB</option>
                    <option value="64GB">64GB</option>
                    <option value="128GB">128GB</option>
                    <option value="256GB">256GB</option>
                    <option value="1024GB">1024GB</option>
                    <option value="2048GB">2048GB</option>
                  </select>
                </label>

                <label className=' mb-2  w-full'>
                  {/* <div className='text-lg'>
                    Refresh Rate
                  </div> */}
                  <select name="refreshRate" value={productData.refreshRate}  className=' bg-transparent w-full py-3 px-3 border rounded-md placeholder:text-slate-500 placeholder:text-sm' onChange={handleChange2}>
                    <option value="" disabled selected>Refresh Rate</option>
                    <option value="60Hz">60Hz</option>
                    <option value="90Hz">90Hz</option>
                    <option value="120Hz">120Hz</option>
                    <option value="144Hz">144Hz</option>
                    <option value="165Hz">165Hz</option>
                  </select>
                </label>

                <label className=' mb-2  w-full'>
                  {/* <div className='text-lg'>
                    Camera Pixels
                  </div> */}
                  <select name="cameraPixels" value={productData.cameraPixels}  className=' bg-transparent w-full py-3 px-3 border rounded-md placeholder:text-slate-500 placeholder:text-sm' onChange={handleChange2}>
                    <option value="" disabled selected>Rear/Back Camera</option>
                    <option value="1MP">1MP</option>
                    <option value="2MP">2MP</option>
                    <option value="4MP">4MP</option>
                    <option value="8MP">8MP</option>
                    <option value="16MP">16MP</option>
                    <option value="32MP">32MP</option>
                    <option value="64MP">64MP</option>
                    <option value="108MP">108MP</option>
                  </select>
                </label>

                <label className=' mb-2  w-full'>
                  {/* <div className='text-lg'>
                    Selfie Camera Pixels
                  </div> */}
                  <select name="selfieCameraPixels" value={productData.selfieCameraPixels}  className=' bg-transparent w-full py-3 px-3 border rounded-md placeholder:text-slate-500 placeholder:text-sm' onChange={handleChange2}>
                    <option value="" disabled selected>Front/Selfie Camera</option>
                    <option value="1MP">1MP</option>
                    <option value="2MP">2MP</option>
                    <option value="4MP">4MP</option>
                    <option value="8MP">8MP</option>
                    <option value="16MP">16MP</option>
                    <option value="32MP">32MP</option>
                    <option value="64MP">64MP</option>
                    <option value="108MP">108MP</option>
                  </select>
                </label>

                <label className=' mb-2  w-full'>
                  {/* <div className='text-lg'>
                    Type
                  </div> */}
                  <select name="type" value={productData.type} required className=' bg-transparent w-full py-3 px-3 border rounded-md placeholder:text-slate-500 placeholder:text-sm' onChange={handleChange2}>
                    <option value="" disabled selected>System Type</option>
                    <option value="ios" className=' bg-transparent'>iOS</option>
                    <option value="android">Android</option>
                  </select>
                </label>
                  
                
                <label className=' mb-2  w-full'>
                  {/* <div className='text-lg'>
                    Os
                  </div> */}
                  <input type="text" name="os" value={productData.os} placeholder='Operating System' className=' bg-transparent w-full py-3 px-3 border rounded-md placeholder:text-slate-500 placeholder:text-sm' onChange={handleChange} />
                </label>
                
                <label className=' mb-2  w-full'>
                  {/* <div className='text-lg'>
                    Charging
                  </div> */}
                  <input type="text" name="charging" value={productData.charging} placeholder='Charging Watt Support' className=' bg-transparent w-full py-3 px-3 border rounded-md placeholder:text-slate-500 placeholder:text-sm' onChange={handleChange} />
                </label>

                <label className=' mb-2  w-full'>
                  {/* <div className='text-lg'>
                    Price
                  </div> */}
                  <input type="text" name="price" required value={productData.price} placeholder='Price' className=' bg-transparent w-full py-3 px-3 border rounded-md placeholder:text-slate-500 placeholder:text-sm' onChange={handleChange} />
                </label>

                <label className=' mb-2  w-full'>
                  {/* <div className='text-lg'>
                    Image
                  </div> */}
                  <input required type="file" name="image" className=' bg-transparent w-full py-3 px-3 border rounded-md placeholder:text-slate-500 placeholder:text-sm' onChange={handleImageChange} />
                </label>
              </div>
              <div className=' w-full h-max flex-col'>
                <Button className=' mb-2 w-full py-3 px-3' type="submit">Submit</Button>
              </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ProductForm;
