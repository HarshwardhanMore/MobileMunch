import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { useUser } from '@clerk/clerk-react';
import axios from 'axios';
import { CheckSquare } from 'lucide-react';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { toast } from 'react-toastify';
import Loader from '../Loader';


function Product() {

  // const searchParams = new URLSearchParams(props.location.search);
  // const data = JSON.parse(searchParams.get('data')!);

  // const data = JSON.parse(props.match.params);

  // const valueParams = useParams();
  
  const { state } = useLocation();

  
  const [loading, setLoading] = useState(false);

  const { isSignedIn, user, isLoaded } = useUser();

  if (!isLoaded || loading) {
      return <Loader/>;
  }
      
  if (!isSignedIn || !user) {
      return <div>You are not signed in.</div>;
  }

  const userId = user.id;

  console.log(userId);
  

  const addToWishlist = async () => {
      try {
          setLoading(true);
          const response = await axios.post(`/api/wishlist/${userId}/add`, {
              productId: state?.data?._id,
          });

          if (response.status === 200) {
              toast.success("Product added to wishlist successfully!")
          } else {
              toast.error("Failed to add product to wishlist!")
          }
      } catch (error) {
          toast.error("Failed to add product to wishlist!" + error)
      } finally {
      setLoading(false);
      }
  };

  const addToCart = async () => {
      try {
      setLoading(true);
      const response = await axios.post(`http://localhost:5000/api/carts/${userId}/add`, {
          productId: state?.data?._id,
      });

      if (response.status === 200) {
          toast.success("Product added to cart successfully!")
      } else {
          toast.error("Failed to add product to cart!")
      }
      } catch (error) {
          toast.error("Failed to add product to cart!" + error)
      } finally {
      setLoading(false);
      }
  };

  return (
    <div className=' w-full h-full flex items-center justify-center overflow-x-hidden overflow-y-scroll '>
        <div className=' w-[90%] h-full flex sm:flex-col py-16 sm:px-0'>
            <div className=' h-full w-[30%] sm:h-auto sm:w-full flex items-start justify-center'>
              <img src={`http://localhost:5000/${state?.data?.image}`} alt="" className='w-3/4 h-auto'/>
            </div>
            <div className=' h-full w-[50%] mx-8 sm:h-auto sm:w-full sm:mx-0 sm:my-8 flex flex-col items-start justify-start'>
              <div className=' w-full'>
                <div className=' text-3xl font-semibold sm:text-2xl'>{state?.data?.name}</div>
                <div className=' text-md sm:text-sm'>{state?.data?.description}</div>
              </div>
              <hr className=' w-full my-4'/>
              <div>
                <div className=' text-2xl font-semibold'><span>₹</span>{state?.data?.price}</div>
                <div className=' text-sm'>Inclusive of all taxes</div>
              </div>
              <hr className=' w-full my-4'/>
              <div className=' w-full flex flex-col justify-start items-start'>
                <div className=' flex flex-row items-center justify-center p-2 text-center'>
                    <CheckSquare className=' mr-2'/>
                    <div className=' text-sm'>7 Day Replacement</div>
                </div>
                <div className=' flex flex-row items-center justify-center p-2 text-center'>
                  <CheckSquare className=' mr-2'/>
                  <div className=' text-sm'>
                    Free Delivary
                  </div>
                </div>
                <div className=' flex flex-row items-center justify-center p-2 text-center'>
                  <CheckSquare className=' mr-2'/>
                  <div className=' text-sm'>
                    1 Year Warranty
                  </div>
                </div>
                <div className=' flex flex-row items-center justify-center p-2 text-center'>
                  <CheckSquare className=' mr-2'/>
                  <div className=' text-sm'>
                    Pay on Delivery
                  </div>
                </div>
                <div className=' flex flex-row items-center justify-center p-2 text-center'>
                  <CheckSquare className=' mr-2'/>
                  <div className=' text-sm'>
                    Top Brand
                  </div>
                </div>
              </div>
              <hr className=' w-full my-4'/>
              <div className=' flex flex-col items-start'>
                <div className=' font-semibold mb-2 text-xl'>Colors</div>
                <div className=' flex flex-row justify-start items-center'>
                  <div className=' h-8 aspect-square rounded-full bg-red-600 mr-2 cursor-pointer'></div>
                  <div className=' h-8 aspect-square rounded-full bg-blue-600 mr-2 cursor-pointer'></div>
                </div>
              </div>
              <hr className=' w-full my-4'/>
              <div className=' flex flex-col items-start'>
                <div className=' mb-2 font-semibold text-xl'>Size</div>
                <div className=' flex flex-row justify-start items-center'>
                  <div className=' border p-2 rounded-md mr-2 shadow-sm text-sm cursor-pointer'>
                    <div>{state?.data?.ram}</div>
                    <div>{state?.data?.storageCapacity}</div>
                  </div>
                </div>
              </div>
              <hr className=' w-full my-4'/>
              <div className=' flex flex-col w-full'>
                <div className=' w-full h-full flex'>
                  <div className=' w-1/2 h-full font-semibold'>Brand</div>
                  <div className=' w-1/2 h-full'>{state?.data?.brand}</div>
                </div>
                <div className=' w-full h-full flex'>
                  <div className=' w-1/2 h-full font-semibold'>Model Name</div>
                  <div className=' w-1/2 h-full'>{state?.data?.name}</div>
                </div>
                <div className=' w-full h-full flex'>
                  <div className=' w-1/2 h-full font-semibold'>Network Service Provider</div>
                  <div className=' w-1/2 h-full'>5G</div>
                </div>
                <div className=' w-full h-full flex'>
                  <div className=' w-1/2 h-full font-semibold'>Operating System</div>
                  <div className=' w-1/2 h-full'>{state?.data?.type}</div>
                </div>
                <div className=' w-full h-full flex'>
                  <div className=' w-1/2 h-full font-semibold'>Cellular Technology</div>
                  <div className=' w-1/2 h-full'>5G</div>
                </div>
              </div>
              <hr className=' w-full my-4'/>
              <div className=' flex flex-col'>
                <div className=' font-semibold text-xl mb-2'>About this item</div>
                <div>
                    <div><span className=' font-semibold mb-1'>Camera:</span> {state?.data?.cameraPixels}</div>
                    <div><span className=' font-semibold mb-1'>Rear Camera Mode:</span>  {state?.data?.selfieCameraPixels} </div>
                    <div><span className=' font-semibold mb-1'>Display:</span> {state?.data?.refreshRate}</div>
                    <div><span className=' font-semibold mb-1'>Specific Operating System and UI:</span>{state?.data?.os}</div>
                    <div><span className=' font-semibold mb-1'>Processor:</span> {state?.data?.processor}</div>
                    <div><span className=' font-semibold mb-1'>Battery & Charging:</span>{state?.data?.charging}</div>
                </div>

                

              </div>
              
            </div>
            <div className=' h-full w-[20%]  sm:h-auto sm:w-full flex flex-col justify-center items-center'>
              <div className=' h-full w-5/6 sm:w-full border rounded-md py-4 px-4 flex flex-col justify-between items-start'>
                <div>  
                  <div className=' w-full'>
                    <Badge>Free Delivary</Badge>
                    <div>Tomorrow, 24 December</div>
                  </div>
                  <div className=' w-full mt-4 font-semibold text-xl text-green-600'>
                    In stock
                  </div>
                  <div className=' w-full mt-4'>
                    <div className=' font-semibold text-xl'>Seller</div>
                    <div className=' text-sm'>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</div>
                  </div>
                </div>
                <div className=' w-full mt-4'>
                  <Button onClick={()=>{addToWishlist()}} className=' w-full'>Add To Wishlist</Button>
                  <Button onClick={()=>{addToCart()}} className=' w-full my-1.5'>Add To Cart</Button>
                </div>
              </div>
            </div>
        </div>
    </div>
  )
}

export default Product