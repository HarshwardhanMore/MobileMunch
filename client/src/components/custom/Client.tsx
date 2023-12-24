import HeroPage from "./hero/HeroPage"
import { Route, Routes } from "react-router-dom"
import Navbar from "./Navbar"
import Product from "./Pages/Product"
import Products from "./Pages/Products"
import WishlistPage from "./Pages/WishlistPage"
import CartPage from "./Pages/CartPage"
import UploadProduct from "./Pages/UploadProduct"
import { useEffect, useState } from "react"
import axios from "axios"
import Loader from "./Loader"
import Brands from "./Pages/BrandsPage"
import { useUser } from "@clerk/clerk-react"


function Client() {

  

  const { isSignedIn, user, isLoaded } = useUser();

  if(!isLoaded){
    return <Loader/>
  }

  // if(!isSignedIn || !user) {
  //   return <div >Plese Sign In First</div>
  // }


  const userId = user?.id;

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await axios.get('http://localhost:5000/api/products'); // Replace with your API endpoint
        setData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if(loading) return <Loader/>














  // const [searchString, setSearchString] = useState('');

  // const handleSearch = () => {
  //   const filteredData = data.filter((item: any) =>
  //     item.name.toLowerCase().includes(searchString.toLowerCase())
  //   );
  //   setData(filteredData);
  // };

  // console.log(searchString);

  // useEffect(() => {
  //   setLoading(false);
  // }, [data]);

  return (

    <div className="w-full h-screen flex flex-col items-center justify-start overflow-hidden ">


      <div className="h-[12%] w-full flex justify-start sticky top-0 left-0">
        <Navbar />
      </div>

      {loading ? 
        <div className=" h-[88%] w-full flex items-center justify-center">
          <Loader/>
        </div> : 
        <div className="w-full h-[88%]">
          <Routes>
            

            <Route path="/" element={<HeroPage data={data}/>}/>
            <Route path="/product" element={<Product/>}/>
            <Route path="/products" element={<Products data={data}/>}/>
            <Route path="/blogs" element={<Products/>}/>
            <Route path="/contribute" element={<UploadProduct />}/>

            <Route path="/wishlist" element={<WishlistPage />}/>
            <Route path="/cart" element={<CartPage/>}/>

            
          </Routes>
        </div>
      }
    </div>
  )
}

export default Client