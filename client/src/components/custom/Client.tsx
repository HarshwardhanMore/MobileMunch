

import { ChevronRight } from "lucide-react"
import HeroPage from "./hero/HeroPage"
import { Link, Route, Routes } from "react-router-dom"
import Navbar from "./Navbar"
import Product from "./Pages/Product"
import Products from "./Pages/Products"
import WishlistPage from "./Pages/WishlistPage"
import CartPage from "./Pages/CartPage"

function Client({data}: any) {
  return (

    <div className="w-full h-screen flex flex-col items-center justify-start overflow-hidden ">


      <div className="h-[12%] w-full flex justify-start sticky top-0 left-0">
        <Navbar />
      </div>

      <div className="w-full h-[88%]">
        <Routes>
          

          <Route path="/" element={<HeroPage data={data}/>}/>
          <Route path="/product" element={<Product/>}/>
          <Route path="/products" element={<Products/>}/>
          <Route path="/categories" element={<Products/>}/>
          <Route path="/brands" element={<Products/>}/>
          <Route path="/blogs" element={<Products/>}/>
          <Route path="/business" element={<Products/>}/>

          <Route path="/wishlist" element={<WishlistPage/>}/>
          <Route path="/cart" element={<CartPage/>}/>

          
        </Routes>
      </div>
    </div>
  )
}

export default Client