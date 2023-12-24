import { Link } from "react-router-dom";
import Navbar from "../Navbar";
import Carousel1 from "./Carousel1";
import FeaturedProducts from "./FeaturedProducts";
import OsSection from "./OsSection";
import { ChevronRight } from "lucide-react";
import Carousel2 from "./Carousel2";
import Brands from "./Brands";
import Bottom from "./Bottom";
import Blogs from "./Blogs";
import OtherAccesories from "./OtherAccesories";

import { Routes, Route } from "react-router-dom";
import Carousel1Sm from "./Carousel1Sm";
import Carousel2Sm from "./Carousel2Sm";
import Footer from "../Footer";

function HeroPage({ data }: any) {
  return (

    <div className="w-full h-full overflow-y-scroll text-center">


        <div className="w-full bg-primary-lite-color h-3/4 sm:hidden">
            <Carousel1 images={["/mobile-images/iphone-14-pro-max-colors.png", "/mobile-images/s23seriesgroup.jpg", "/mobile-images/OnePlus-Nord-3-1019x573.avif"]} 
                        headings={["IPhones", "Samsung Note", "OnePlus Series"]} 
                        descriptions={["lorem lorem lorem lorem lorem lorem lorem lorem", "lorem lorem lorem lorem lorem lorem lorem lorem", "lorem lorem lorem lorem lorem lorem lorem lorem"]}
            />
        </div>
        <div className="w-full bg-primary-lite-color h-3/4 lg:hidden md:hidden">
            <Carousel1Sm images={["/mobile-images/iphone-14-pro-max-colors.png", "/mobile-images/s23seriesgroup.jpg", "/mobile-images/OnePlus-Nord-3-1019x573.avif"]} 
                        headings={["IPhones", "Samsung Note", "OnePlus Series"]} 
                        descriptions={["lorem lorem lorem lorem lorem lorem lorem lorem", "lorem lorem lorem lorem lorem lorem lorem lorem", "lorem lorem lorem lorem lorem lorem lorem lorem"]}
            />
        </div>




        <div className=" w-[100%] h-[12%] flex justify-center items-center">
            <div className=" w-[90%] flex items-center font-semibold text-xl">Popular Operating Systems</div>
        </div>
        <div className="  w-full h-1/4 sm:h-auto">
            <OsSection/>
        </div>
        


        <div className=" w-[100%] h-[12%] flex justify-center items-center ">
            <div className=" w-[90%] flex items-center justify-between ">
                <div className='  font-semibold text-xl'>Featured Products</div>
                <Link to="/products" className=' flex items-center text-sm'>Explore More <ChevronRight color='gray' size={16}/></Link>
            </div>
        </div>
        <div className=" w-full h-[100%] sm:h-auto">
            <FeaturedProducts data = {data}/>
        </div>





        <div className="w-full bg-primary-lite-color h-3/4 sm:hidden">
            <Carousel2 images={["/mobile-images/iPhone-11-3.jpg", "/mobile-images/All-the-iphones-2023-to-2024-1.jpg", "https://www.macworld.com/wp-content/uploads/2023/01/iphone_13_group_shots_review_5-1.jpg?quality=50&strip=all"]} 
                        headings={["Old is Gold Iphone 11 Refurbished", "IPhones 14 New lanches", "IPhone Ecosystem Series"]} 
                        descriptions={["lorem lorem lorem lorem lorem lorem lorem lorem", "lorem lorem lorem lorem lorem lorem lorem lorem", "lorem lorem lorem lorem lorem lorem lorem lorem"]}/>
        </div>
        <div className="w-full bg-primary-lite-color h-3/4 lg:hidden md:hidden">
            <Carousel2Sm images={["/mobile-images/iPhone-11-3.jpg", "/mobile-images/All-the-iphones-2023-to-2024-1.jpg", "https://www.macworld.com/wp-content/uploads/2023/01/iphone_13_group_shots_review_5-1.jpg?quality=50&strip=all"]} 
                        headings={["Old is Gold Iphone 11 Refurbished", "IPhones 14 New lanches", "IPhone Ecosystem Series"]} 
                        descriptions={["lorem lorem lorem lorem lorem lorem lorem lorem", "lorem lorem lorem lorem lorem lorem lorem lorem", "lorem lorem lorem lorem lorem lorem lorem lorem"]}/>
        </div>







        {/* <div className=" w-[100%] h-[12%] flex justify-center items-center ">
            <div className=" w-[90%] flex items-center justify-between ">
                <div className='  font-semibold text-xl'>Other Accesories</div>
                <Link to="" className=' flex items-center text-sm'>Explore More <ChevronRight color='gray' size={16}/></Link>
            </div>
        </div>
        <div className=" w-full h-[100%]  sm:h-auto">
            <OtherAccesories/>
        </div> */}
        





        <div className=" w-[100%] h-[12%] flex justify-center items-center">
            <div className=" w-[90%] flex items-center font-semibold text-xl">Top Brands</div>
        </div>
        <div className=" w-full h-1/4 sm:h-1/4 flex justify-center">
            <div className=" w-[90%] h-full">
                <Brands/>
            </div>
        </div>





        <div className=" w-[100%] h-[12%] flex justify-center items-center">
            <div className=" w-[90%] flex items-center font-semibold text-xl">Recent Blogs</div>
        </div>
        <div className="  w-full h-1/3">
            <Blogs/>
        </div>



        <div className=" w-[100%] h-[12%]">
            
        </div>
        <div className=" w-full h-1/2 bg-text-color">
            <Footer/>
        </div>

    </div>
    
  );
}

export default HeroPage;
