import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { useUser } from "@clerk/clerk-react";
import axios from "axios";
import { Filter } from 'lucide-react';
import { useEffect, useState } from 'react';
import Loader from "../Loader";
import WishlistCard from "../WishlistCard";

const WishlistPage = () => {

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const { isSignedIn, user, isLoaded } = useUser();

  if (!isLoaded) {
      return <Loader/>;
  }
      
  if (!isSignedIn || !user) {
      return <div>You are not signed in.</div>;
  }

  const userId = user.id;

  

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/wishlist/${userId}`); 
        setData(response.data.products);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []); // The empty dependency array ensures that this effect runs once when the component mounts


  const uniqueNames = Array.from(new Set(data));
  console.log(uniqueNames);

    
  if (loading) {
    return <Loader/>;
  }
  
  // const [data2, setData2] = useState([]);
  

  return (
    <div className='w-full h-full flex flex-col justify-start items-center overflow-y-scroll'>
      <div className='w-[90%] h-full flex flex-col justify-start items-center'>
        <div className='w-full h-[8%] flex items-center justify-end sticky top-0 left-0 bg-bg-color z-10'>
          <Popover>
            <PopoverTrigger><Filter /></PopoverTrigger>
            <PopoverContent className=''>Place content for the popover here.</PopoverContent>
          </Popover>
        </div>
        <div className='w-full h-[92%] flex flex-col items-center justify-start'>
          {data.length != 0 ? (
            <div className='w-full h-[100%] sm:h-auto grid lg:grid-cols-6 md:grid-cols-4 sm:grid-cols-2'>
              {data.map((item: any) => (
                <WishlistCard data={item} wishlist={data} />
              ))}
            </div>
          ) : (
            <div className='w-full h-full'>No Products To Show</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default WishlistPage;
