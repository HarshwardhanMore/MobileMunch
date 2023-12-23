import React, { useEffect, useState } from 'react'
import Card from '../Card'
import { Filter } from 'lucide-react'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import axios from 'axios';

function Products() {


  
  const [data, setData] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/products'); // Replace with your API endpoint
        setData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []); // The empty dependency array ensures that this effect runs once when the component mounts

  if(!data) return null; //

  return (
    <div className=' w-full h-full flex flex-col justify-start items-center overflow-y-scroll'>
      <div className=' w-[90%] h-full flex flex-col justify-start items-center'>
        <div className=' w-full h-[8%] flex items-center justify-end sticky top-0 left-0 bg-text-color z-10'>
          <Popover>
            <PopoverTrigger><Filter /></PopoverTrigger>
            <PopoverContent className=''>Place content for the popover here.</PopoverContent>
          </Popover>

        
        </div>
        <div className=' w-full h-[92%] flex items-center justify-start '>
          <div className='w-full h-[100%] sm:h-auto grid lg:grid-cols-6 md:grid-cols-4 sm:grid-cols-2 '>
            {JSON.stringify(data)}
              {
                data.map((item:any)=>{
                  console.log(item.image);
                  return (
                    <div>
                      <img src={`${item?.image}`} alt="" />
                    </div>
                  )
                })
              }
              {/* <Card/>
              <Card/>
              <Card/>
              <Card/>
              <Card/>
              <Card/>
              <Card/>
              <Card/>
              <Card/>
              <Card/>
              <Card/>
              <Card/>
              <Card/>
              <Card/> */}
              
          </div>
          <br /><br /><br />
      </div>
      </div>
    </div>
  )
}

export default Products