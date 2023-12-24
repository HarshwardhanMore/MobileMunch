import { Button } from '@/components/ui/button';
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from '@/components/ui/input';
import { useUser } from "@clerk/clerk-react";
import axios from "axios";
import { useEffect, useState } from 'react';
import CartCard from "../CartCard";
import Loader from "../Loader";

const CartPage = () => {

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
        const response = await axios.get(`/api/carts/${userId}`); // Replace with your API endpoint
        setData(response.data.products);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []); // The empty dependency array ensures that this effect runs once when the component mounts


  // const uniqueNames = Array.from(new Set(data));
  // console.log(uniqueNames);
  
  // const [data2, setData2] = useState([]);


  const sumOfPrices = data.reduce((total, item:any) => {
    // Parse the price string to an integer (assuming prices are integers)
    const priceAsInteger = parseInt(item.price, 10);

    // Add the parsed integer to the total
    return total + priceAsInteger;
  }, 0);

  if (loading) {
    return <Loader/>;
  }

  return (
    <div className='w-full h-full flex justify-center items-center overflow-y-scroll'>
      <div className='w-[90%] h-full flex flex-col justify-start items-center'>
        <div className='w-full h-[8%] flex items-center justify-end sticky top-0 left-0 bg-transparent z-10'>
          {/* <Popover>
            <PopoverTrigger><Filter /></PopoverTrigger>
            <PopoverContent className=''>Place content for the popover here.</PopoverContent>
          </Popover> */}
        </div>
        <div className='w-full h-[92%] flex sm:flex-col items-center justify-start sm:mb-8'>
          <div className=' w-3/5 sm:w-full mr-8 sm:mb-8 h-full flex flex-row'>
            {data.length != 0 ? (
              <div className='w-full h-[100%] sm:h-auto grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2'>
                {data.map((item: any) => (
                  <CartCard data={item} />
                ))}
              </div>
            ) : (
              <div className='w-full h-full'>No Products To Show</div>
            )}
          </div>
          <div className=' w-2/5 sm:w-full h-full '>
            <div className=' text-2xl font-semibold'>Checkout</div>
            <div className=' text-xl mb-6'>
              <div>Subtotal ({data.length} items) ₹<span className=' font-semibold'>{sumOfPrices}</span></div>
            </div>
            <div className=' w-full text-xl mt-6'>
              <div>Address Details</div>
              <div className=' mt-2 flex'>
                <Input placeholder='Contact number'/>
              </div>
              <div className=' mt-2 flex'>
                <Input placeholder='Address Line 1'/>
              </div>
              <div className=' mt-2 flex'>
                <Input placeholder='Address Line 1'/>
              </div>
              <div className=' mt-2 flex'>
                <Input placeholder='Street / Landmark'/>
              </div>
              <div className=' mt-2 grid grid-cols-2 gap-2'>
                <Input placeholder='City'/>
                <Input placeholder='Zip Code'/>
              </div>
              <div className=' mt-2 flex'>
                <Input placeholder='State'/>
              </div>
              <></>
            </div>
            <div className=' w-full flex flex-col mt-6'>
              <div className="items-top flex space-x-2">
                <Checkbox id="terms1" required/>
                <div className="grid gap-1.5 leading-none">
                  <label
                    htmlFor="terms1"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Accept terms and conditions
                  </label>
                  <p className="text-sm text-muted-foreground">
                    You agree to our Terms of Service and Privacy Policy.
                  </p>
                </div>
              </div>
            </div>
            <div className=' flex w-full mt-6'>
              <Button className='bg-secondary-color hover:bg-secondary-color'>Proceed to Payment</Button>
            </div>
            <div className=' text-sm italic'>(Payment Getway Is Not Integrated Yet!)</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
