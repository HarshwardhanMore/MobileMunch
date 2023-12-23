
import { Heart, Menu, Search, ShoppingCart, UserRound } from "lucide-react"
import { Link } from "react-router-dom"
import { Input } from "@/components/ui/input"
import { Button } from "../ui/button"

import { ModeToggle } from "./mode-toggle"

import { SignedIn, SignedOut, UserButton } from "@clerk/clerk-react"

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"

import { SignInButton } from "@clerk/clerk-react";

function Navbar() {
  return (
    <div className=" w-full h-full flex flex-col justify-start items-start">
        <div className=" w-full h-3/5 flex justify-center items-center">
            <div className=" h-full w-[90%] flex justify-between items-center">
                <Link to="/" className=" w-[20%] sm:w-1/2 h-full flex items-center"><img src="/logo.png" alt="" className=" h-[35%] w-auto"/></Link>
                <div className=" w-[60%] h-full flex items-center justify-center sm:hidden">
                    <div></div>
                    <div className=" w-1/2"><Input type="text" placeholder="Search For Product" className=" w-full"/></div>
                    <div><Button className=" bg-transparent hover:bg-transparent" ><Search color="black"/></Button></div>
                </div>
                <div className=" flex justify-end w-[20%] sm:w-1/2 h-full items-center">
                    <SignedIn>
                        <ModeToggle/>
                        <Link to="/wishlist" className=" mr-3 h-full flex items-center"><Heart className=" sm:hidden" /> <Heart size={20} className=" lg:hidden md:hidden"/></Link>
                        <Link to="/cart" className=" mr-3 h-full flex items-center"><ShoppingCart className=" sm:hidden" /> <ShoppingCart size={20} className=" lg:hidden md:hidden"/></Link>
                        <UserButton afterSignOutUrl="/"/>
                    </SignedIn>
                    <SignedOut>
                        <SignInButton><Button className=" sm:text-sm sm:px-2 sm:py-1 sm:h-1/2 bg-secondary-color hover:bg-secondary-color">Sign In</Button></SignInButton>
                    </SignedOut>
                    {/* <Link to="" className=" h-full flex items-center"><UserRound className=" sm:hidden"/> <UserRound size={20} className=" lg:hidden md:hidden"/></Link> */}
                </div>
            </div>
        </div>
        <div className=" w-full h-2/5 bg-primary-color flex flex-row items-center justify-center text-md text-bg-color">
            <div className=" w-[90%] h-full flex flex-row items-center justify-center sm:justify-between">
                
                <div className=" w-[50%] h-[90%] flex items-center justify-center lg:hidden md:hidden">
                    <div className=" w-full h-full"><Input type="text" placeholder="Search For Product" className=" w-full h-full bg-transparent border-t-0 border-r-0 border-l-0 border-b-1 rounded-none focus:border-transparent focus:ring-0 placeholder:text-bg-lite-color placeholder:text-opacity-50"/></div>
                    <div className=" h-full"><Button className=" bg-transparent hover:bg-transparent h-full w-max" ><Search size={20}/></Button></div>
                </div>

                <Link to="/" className=" mx-4 sm:hidden">Home</Link>
                <Link to="/" className=" mx-4 sm:hidden">Shop</Link>
                <Link to="/categories" className=" mx-4 sm:hidden">Categories</Link>
                <Link to="/products" className=" mx-4 sm:hidden">Products</Link>
                <Link to="/brands" className=" mx-4 sm:hidden">Brands</Link>
                <Link to="/blogs" className=" mx-4 sm:hidden">Blogs</Link>
                <Link to="/business" className=" mx-4 sm:hidden">Business</Link>
                <DropdownMenu>
                    <DropdownMenuTrigger  className=" mx-4 lg:hidden md:hidden"><Menu /></DropdownMenuTrigger>
                    <DropdownMenuContent>
                        <DropdownMenuLabel>Navigations</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>Home</DropdownMenuItem>
                        <DropdownMenuItem>Shop</DropdownMenuItem>
                        <DropdownMenuItem>Categories</DropdownMenuItem>
                        <DropdownMenuItem>Products</DropdownMenuItem>
                        <DropdownMenuItem>Brands</DropdownMenuItem>
                        <DropdownMenuItem>Blogs</DropdownMenuItem>
                        <DropdownMenuItem>Business</DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>

        </div>
    </div>
  )
}

export default Navbar