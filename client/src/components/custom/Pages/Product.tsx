import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { CheckSquare } from 'lucide-react'
import React from 'react'

function Product() {
  return (
    <div className=' w-full h-full flex items-center justify-center overflow-x-hidden overflow-y-scroll '>
        <div className=' w-[90%] h-full flex sm:flex-col py-16 sm:px-0'>
            <div className=' h-full w-[30%] sm:h-auto sm:w-full flex items-center'>
              <img src="/mobile-images/Apple_iphone_11-rosette-family-lineup-091019_big.jpg.large.jpg" alt="" />
            </div>
            <div className=' h-full w-[50%] mx-8 sm:h-auto sm:w-full sm:mx-0 sm:my-8 flex flex-col items-start justify-start'>
              <div className=' w-full'>
                <div className=' text-3xl font-semibold sm:text-2xl'>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</div>
                <div className=' text-md sm:text-sm'>Description Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel voluptatem libero quos iure ducimus repudiandae dolore id reiciendis rem cupiditate?</div>
              </div>
              <hr className=' w-full my-4'/>
              <div>
                <div className=' text-2xl font-semibold'><span>$</span>Price</div>
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
                <div className=' font-semibold mb-2 text-xl'>Color</div>
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
                    <div>8GB RAM</div>
                    <div>128GB STORAGE</div>
                  </div>
                  <div className=' border p-2 rounded-md shadow-sm text-sm cursor-pointer'>
                    <div>12GB RAM</div>
                    <div>256GB STORAGE</div>
                  </div>
                </div>
              </div>
              <hr className=' w-full my-4'/>
              <div className=' flex flex-col w-full'>
                <div className=' w-full h-full flex'>
                  <div className=' w-1/2 h-full font-semibold'>Brand</div>
                  <div className=' w-1/2 h-full'>Brand</div>
                </div>
                <div className=' w-full h-full flex'>
                  <div className=' w-1/2 h-full font-semibold'>Model Name</div>
                  <div className=' w-1/2 h-full'>Model Name</div>
                </div>
                <div className=' w-full h-full flex'>
                  <div className=' w-1/2 h-full font-semibold'>Network Service Provider</div>
                  <div className=' w-1/2 h-full'>Network Service Provider</div>
                </div>
                <div className=' w-full h-full flex'>
                  <div className=' w-1/2 h-full font-semibold'>Operating System</div>
                  <div className=' w-1/2 h-full'>Operating System</div>
                </div>
                <div className=' w-full h-full flex'>
                  <div className=' w-1/2 h-full font-semibold'>Cellular Technology</div>
                  <div className=' w-1/2 h-full'>Cellular Technology</div>
                </div>
              </div>
              <hr className=' w-full my-4'/>
              <div className=' flex flex-col'>
                <div className=' font-semibold text-xl mb-2'>About this item</div>
                <div>
                    <div><span className=' font-semibold mb-1'>Camera:</span> 108 MP Main Camera with EIS; 2MP Depth-Assist Lens and 2MP Macro Lens; Front Selfie Camera: 16MP</div>
                    <div><span className=' font-semibold mb-1'>Rear Camera Mode:</span> Hi-res 108MP mode, 3x Lossles Zoom, Photo, Video, Nightscape, Expert, Panoramic, Portrait, Macro, Time-lapse, Slow-motion, Long exposure, Dual-view video, Text Scanner, 1080p/720p@30fps, Video zoom: 1080P@30fps, 720P@30fps, Slow motion: 720P@120fps, Time-Lapse: 1080P@30fps, Steady Video EIS support</div>
                    <div><span className=' font-semibold mb-1'>Display:</span> 6.72 Inches; 120 Hz Adaptive refresh rate; FHD+1080 x 2400, Colors: 16.7 Million colors, 391 ppi, Aspect Ratio: 20:9, Brightness: 550 nits (typical), 680 nits (HBM)</div>
                    <div><span className=' font-semibold mb-1'>Operating System:</span> Oxygen OS based on Android 13.1</div>
                    <div><span className=' font-semibold mb-1'>Processor:</span> Qualcomm Snapdragon 695 5G</div>
                    <div><span className=' font-semibold mb-1'>Battery & Charging:</span> 5000 mAh with 67W SUPERVOOC Endurance Edition</div>
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
                  <Button className=' w-full'>Add To Wishlist</Button>
                  <Button className=' w-full my-1.5'>Add To Cart</Button>
                  <Button className=' w-full'>Buy Now</Button>
                </div>
              </div>
            </div>
        </div>
    </div>
  )
}

export default Product