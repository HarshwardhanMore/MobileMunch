// import React, { useEffect, useState } from 'react'
// import Card from '../Card'
// import { Filter, Search } from 'lucide-react'
// import {
//   Popover,
//   PopoverContent,
//   PopoverTrigger,
// } from "@/components/ui/popover"
// import axios from 'axios';
// import { Button } from '@/components/ui/button';
// import { Input } from '@/components/ui/input';

// function Products({data}: any) {

//   return (
//     <div className=' w-full h-full flex flex-col justify-start items-center overflow-y-scroll'>
//       <div className=' w-[90%] h-full flex flex-col justify-start items-center'>
//         <div className=' w-full h-[8%] sm:h-[7%] flex items-center justify-between sticky top-0 left-0 bg-bg-color z-10'>
//           <div className=" w-1/4 sm:w-full h-full flex items-center justify-center">
//               <div className=" w-full h-full flex items-center"><input type="text" placeholder="Search For Product" className=" border border-t-0 border-l-0 border-r-0 pl-3 focus:ring-0 w-full h-2/3 sm:h-3/4 bg-transparent "/></div>
//               <div className=" h-full"><button className=" bg-transparent hover:bg-transparent h-full w-max" ><Search size={20} color='black'/></button></div>
//           </div>
//           <Popover>
//             <PopoverTrigger><Filter /></PopoverTrigger>
//             <PopoverContent className=''>Place content for the popover here.</PopoverContent>
//           </Popover>

        
//         </div>
//         <div className=' w-full h-[92%] flex items-center justify-start '>

//           {
//             data.length != 0 ? (
//             <div className='w-full h-[100%] sm:h-auto grid lg:grid-cols-6 md:grid-cols-4 sm:grid-cols-2  '>
                
//                 {
//                   data?.map((item:any)=>(
//                     <Card data={item}/>
//                   ))
//                 }
                
//             </div> ) : (
//               <div className=' w-full h-full'>No Products To Show</div>
//             ) 
//           }
//       </div>
//       </div>
//     </div>
//   )
// }

// export default Products


import React, { useEffect, useState } from 'react';
import Card from '../Card';
import { Filter, RouteOff, Search } from 'lucide-react';
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import axios from 'axios';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';


import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
  DrawerFooter,
} from "@/components/ui/drawer"
import { Slider } from '@/components/ui/slider';
import Loader from '../Loader';
import { useUser } from '@clerk/clerk-react';


function Products({data}:any) {







  const [searchValue, setSearchValue] = useState<string>('');
  const [filteredData, setFilteredData] = useState(data);

  const [maxValue, setMaxValue] = useState(100000);
  const handleSliderChange = (event:any) => {
    const value = event.target.value;
    setMaxValue(Number(value));
  };



  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  const handleApplySearchFilter = () => {
    const filteredData2 = data.filter((item: any) =>
      (parseInt(item.price) <= maxValue) && (item.name.toLowerCase().includes(searchValue.toLowerCase()) || item.brand.toLowerCase().includes(searchValue.toLowerCase()) || item.ram.toLowerCase().includes(searchValue.toLowerCase()) || item.processor.toLowerCase().includes(searchValue.toLowerCase()) || item.storageCapacity.toLowerCase().includes(searchValue.toLowerCase()) || item.refreshRate.toLowerCase().includes(searchValue.toLowerCase()) || item.cameraPixels.toLowerCase().includes(searchValue.toLowerCase()) || item.selfieCameraPixels.toLowerCase().includes(searchValue.toLowerCase()) || item.type.toLowerCase().includes(searchValue.toLowerCase()) || item.os.toLowerCase().includes(searchValue.toLowerCase()) || item.charging.toLowerCase().includes(searchValue.toLowerCase()))

    );
    setFilteredData(filteredData2);
      console.log()
  };


  const [selectFilters, setSelectFilters] = useState({
    brand: '',
    ram: '',
    processor: '',
    storageCapacity: '',
    refreshRate: '',
    cameraPixels: '',
    selfieCameraPixels: '',
    type: '',
    os: '',
    charging: '',
    price: '',
  });

  const handleResetAllFilter = () => {
    setFilteredData(data);
    setSearchValue('');
    setSelectFilters({
      brand: '',
      ram: '',
      processor: '',
      storageCapacity: '',
      refreshRate: '',
      cameraPixels: '',
      selfieCameraPixels: '',
      type: '',
      os: '',
      charging: '',
      price: '',
    });
    setMaxValue(100000)
  };

  console.log(selectFilters);

  const handleSelectFilterChange = (category: string, value: string) => {
    setSelectFilters((prevFilters) => ({
      ...prevFilters,
      [category]: value,
    }));
  };

  const handleApplySelectFilter = () => {
    console.log("Apply Select Filter Called!");
    const filteredData2 = data.filter((item: any) =>
      item.brand.toLowerCase().includes(selectFilters.brand.toLowerCase()) && item.ram.toLowerCase().includes(selectFilters.ram.toLowerCase()) && item.processor.toLowerCase().includes(selectFilters.processor.toLowerCase()) && item.storageCapacity.toLowerCase().includes(selectFilters.storageCapacity.toLowerCase()) && item.refreshRate.toLowerCase().includes(selectFilters.refreshRate.toLowerCase()) && item.cameraPixels.toLowerCase().includes(selectFilters.cameraPixels.toLowerCase()) && item.selfieCameraPixels.toLowerCase().includes(selectFilters.selfieCameraPixels.toLowerCase()) && item.type.toLowerCase().includes(selectFilters.type.toLowerCase()) && item.os.toLowerCase().includes(selectFilters.os.toLowerCase()) && item.charging.toLowerCase().includes(selectFilters.charging.toLowerCase())

    );
    setFilteredData(filteredData2);
  };

  const brandsSet = new Set();
  const ramSet = new Set();
  const processorSet = new Set();
  const storageCapacitySet = new Set();
  const refreshRateSet = new Set();
  const cameraPixelsSet = new Set();
  const selfieCameraPixelsSet = new Set();
  const typeSet = new Set();
  const osSet = new Set();
  const chargingSet = new Set();
  const priceSet = new Set();


  for(let obj of data){
    brandsSet.add(obj['brand']);
    ramSet.add(obj['ram']);
    processorSet.add(obj['processor']);
    storageCapacitySet.add(obj['storageCapacity']);
    refreshRateSet.add(obj['refreshRate']);
    cameraPixelsSet.add(obj['cameraPixels']);
    selfieCameraPixelsSet.add(obj['selfieCameraPixels']);
    typeSet.add(obj['type']);
    osSet.add(obj['os']);
    chargingSet.add(obj['charging']);
    priceSet.add(parseInt(obj['price']));
  }

  // console.log(priceSet);


  const brandsArray = Array.from(brandsSet);
  const ramArray = Array.from(ramSet);
  const processorArray = Array.from(processorSet);
  const storageCapacityArray = Array.from(storageCapacitySet);
  const refreshRateArray = Array.from(refreshRateSet);
  const cameraPixelsArray = Array.from(cameraPixelsSet);
  const selfieCameraPixelsArray = Array.from(selfieCameraPixelsSet);
  const typeArray = Array.from(typeSet);
  const osArray = Array.from(osSet);
  const chargingArray = Array.from(chargingSet);
  const priceArray = Array.from(priceSet);


  // const maxPrice = Math.max(...priceArray);





  return (
    <div className='w-full h-full flex flex-col justify-start items-center overflow-y-scroll'>
      <div className='w-[90%] h-full flex flex-col justify-start items-center'>
        <div className='w-full h-[8%] sm:h-[7%] flex items-center justify-between sticky top-0 left-0 bg-bg-color z-10'>
          <div className="w-1/2 sm:w-full h-full flex items-center justify-center">
            <div className="w-full h-full flex items-center mr-2">
              <input
                type="text"
                placeholder="Search For Product"
                className="border rounded-full pl-4 focus:ring-0 w-full h-2/3 sm:h-3/4 bg-transparent text-sm"
                value={searchValue}
                onChange={handleSearchChange}
              />
            </div>

            <div className='  w-full h-2/3 flex flex-row items-center justify-center bg-bg-color border rounded-full sm:hidden mr-2'>
              {/* <label className=' ' htmlFor="slider">Slider Value: {sliderValue}</label> */}
              <input
                type="range"
                min="5000"
                max="100000"
                step="5000"
                value={maxValue}
                onChange={handleSliderChange}
                className=' w-full ml-4'
              />
              <div className=' mx-4 md:mx-2 flex items-center'><span className=' text-secondary-color font-semibold text-xl'>₹</span>{maxValue}</div>
            </div>
            
            
            <div className="h-full flex items-center">
                <Search onClick={handleApplySearchFilter} className=' cursor-pointer'/>
              {/* <Button className="bg-transparent hover:bg-transparent h-full w-max" onClick={handleApplySearchFilter}>
              </Button> */}
            </div>
          </div>
          

          {/* <Popover>
            <PopoverTrigger><Filter /></PopoverTrigger>
            <PopoverContent className=''>Place content for the popover here.</PopoverContent>
          </Popover> */}

          
          <div className=' flex items-center h-full'>
            <Drawer>
              <DrawerTrigger> <Filter  className=' mx-2.5 sm:mx-1.5 cursor-pointer'/>  </DrawerTrigger>
              <DrawerContent className=' w-full h-1/2'>
                <DrawerHeader className=' flex flex-col items-center h-full w-full'>
                  <DrawerTitle>Apply Filters</DrawerTitle>
                  {/* <DrawerDescription>This action cannot be undone.</DrawerDescription> */}
                  <div className=' w-full h-full grid grid-cols-4 sm:grid-cols-3 sm:text-sm'>
                    <div className='  w-full h-full col-span-3 flex items-center lg:hidden md:hidden'>
                      {/* <label className=' ' htmlFor="slider">Slider Value: {sliderValue}</label> */}
                      <div className=' w-full border rounded-full flex py-2'>
                      
                        <input
                          type="range"
                          min="5000"
                          max="100000"
                          step="5000"
                          value={maxValue}
                          onChange={handleSliderChange}
                          className=' w-full ml-4'
                        />
                        <div className=' mx-2 md:mx-2 flex items-center'><span className=' text-secondary-color font-semibold text-xl'>₹</span>{maxValue}</div>
                      
                      </div>
                    </div>
                      <select
                        value={selectFilters.brand}
                        onChange={(e) => handleSelectFilterChange('brand', e.target.value)}
                      >
                        <option value="" selected>Brand</option>
                        {
                          brandsArray.map((i:any) => {
                            return (
                              <option value={`${i}`}>{i}</option>
                            )
                          })
                        }
                      </select>
                      <select
                        value={selectFilters.ram}
                        onChange={(e) => handleSelectFilterChange('ram', e.target.value)}
                      >
                        <option value="" selected>Select Ram</option>
                        {
                          ramArray.map((i:any) => {
                            return (
                              <option value={`${i}`}>{i}</option>
                            )
                          })
                        }
                      </select>
                      <select
                        value={selectFilters.processor}
                        onChange={(e) => handleSelectFilterChange('processor', e.target.value)}
                      >
                        <option value="" selected>Processor</option>
                        {
                          processorArray.map((i:any) => {
                            return (
                              <option value={`${i}`}>{i}</option>
                            )
                          })
                        }
                      </select>
                      <select
                        value={selectFilters.storageCapacity}
                        onChange={(e) => handleSelectFilterChange('storageCapacity', e.target.value)}
                      >
                        <option value="" selected>Storage Capacity</option>
                        {
                          storageCapacityArray.map((i:any) => {
                            return (
                              <option value={`${i}`}>{i}</option>
                            )
                          })
                        }
                      </select>
                      <select
                        value={selectFilters.refreshRate}
                        onChange={(e) => handleSelectFilterChange('refreshRate', e.target.value)}
                      >
                        <option value="" selected>Refresh Rate</option>
                        {
                          refreshRateArray.map((i:any) => {
                            return (
                              <option value={`${i}`}>{i}</option>
                            )
                          })
                        }
                      </select>
                      <select
                        value={selectFilters.cameraPixels}
                        onChange={(e) => handleSelectFilterChange('cameraPixels', e.target.value)}
                      >
                        <option value="" selected>Camera Pixels</option>
                        {
                          cameraPixelsArray.map((i:any) => {
                            return (
                              <option value={`${i}`}>{i}</option>
                            )
                          })
                        }
                      </select>
                      <select
                        value={selectFilters.selfieCameraPixels}
                        onChange={(e) => handleSelectFilterChange('selfieCameraPixels', e.target.value)}
                      >
                        <option value="" selected>Selfie Camera Pixels</option>
                        {
                          selfieCameraPixelsArray.map((i:any) => {
                            return (
                              <option value={`${i}`}>{i}</option>
                            )
                          })
                        }
                      </select>
                      <select
                        value={selectFilters.type}
                        onChange={(e) => handleSelectFilterChange('type', e.target.value)}
                      >
                        <option value="" selected>Type</option>
                        {
                          typeArray.map((i:any) => {
                            return (
                              <option value={`${i}`}>{i}</option>
                            )
                          })
                        }
                      </select>
                      <select
                        value={selectFilters.os}
                        onChange={(e) => handleSelectFilterChange('os', e.target.value)}
                      >
                        <option value="" selected>Operating System</option>
                        {
                          osArray.map((i:any) => {
                            return (
                              <option value={`${i}`}>{i}</option>
                            )
                          })
                        }
                      </select>
                      <select
                        value={selectFilters.charging}
                        onChange={(e) => handleSelectFilterChange('charging', e.target.value)}
                      >
                        <option value="" selected>Charging Watts</option>
                        {
                          chargingArray.map((i:any) => {
                            return (
                              <option value={`${i}`}>{i} watt</option>
                            )
                          })
                        }
                      </select>
                      
                    </div>
                </DrawerHeader>
                <DrawerFooter>
                  <div className=' flex flex-row justify-center'>
                    <DrawerClose>
                      <Button onClick={handleApplySelectFilter} className=' mr-2'>
                          Apply
                      </Button>
                    </DrawerClose>
                      <Button variant="outline" onClick={handleResetAllFilter} type="reset">Reset</Button>
                  </div>
                </DrawerFooter>
              </DrawerContent>
            </Drawer>
            
              <RouteOff size={20} onClick={handleResetAllFilter} className=' cursor-pointer' />
            {/* <Button className="bg-transparent hover:bg-transparent h-full w-max pr-0" onClick={handleResetAllFilter}>
            </Button> */}
          </div>



        </div>
        <div className='w-full h-[92%] flex flex-col items-center justify-start '>
          {filteredData.length !== 0 ? (
            <div className='w-full h-[100%] sm:h-auto grid lg:grid-cols-6 md:grid-cols-4 sm:grid-cols-2'>
              {filteredData?.map((item: any) => (
                <Card key={item.id} data={item} />
              ))}
            </div>
          ) : (
            <div className='w-full h-full flex justify-center items-center'>No Products To Show</div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Products;
