// Card.tsx

import { ArrowRightLeft, Heart } from "lucide-react"
import { Badge } from "../ui/badge"

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"
import { Button } from "../ui/button"
import { Link, useNavigate } from "react-router-dom"
import { toast } from "react-toastify"

import { redirect } from "react-router-dom";

import { useUser } from "@clerk/clerk-react";
import Loader from "./Loader"
import { useEffect, useState } from "react"
import axios from "axios"
import { SignedIn, SignedOut } from "@clerk/clerk-react"

interface CardProps {
  data: {
    _id: string;
    type: string;
    name: string;
    price: string;
    description: string;
    image: string;
  };
}

const Card: React.FC<CardProps> = ({ data }) => {
    
    const [loading, setLoading] = useState(false);

    const { isSignedIn, user, isLoaded } = useUser();

    if (!isLoaded) {
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
            const response = await axios.post(`http://localhost:5000/api/wishlist/${userId}/add`, {
                productId: data._id,
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
            productId: data._id,
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

    const navigate = useNavigate();
    const showDetails = () => {
        navigate('/product',
            {
                state: {
                    data : data
                }
            });
    }

  return (
    
    <div className=" border lg:m-2.5 sm:m-1.5 rounded-md hover:shadow flex flex-col items-center relative h-max sm:h-max sm:w-auto">
        <div className=" flex flex-col absolute md:right-4 md:top-4 lg:top-4 lg:right-4 sm:top-2 sm:right-2">
            <SignedIn>
                <Heart color="orange" className=" mb-1 sm:hidden hover:cursor-pointer" onClick={addToWishlist}/>
                <Heart size={20} color="orange" className=" mb-1 lg:hidden md:hidden hover:cursor-pointer" onClick={addToWishlist} />
            </SignedIn>


            
            <Dialog>
                <DialogTrigger>
                    <ArrowRightLeft className=" sm:hidden hover:cursor-pointer"/>
                    <ArrowRightLeft size={20} className=" lg:hidden md:hidden hover:cursor-pointer"/>
                </DialogTrigger>
                <DialogContent>
                    
                    <div className=" h-full m-2.5 rounded-md flex flex-col items-center relative">
                        <div className=" flex flex-col absolute right-4 top-4 ">
                            <Heart color="orange" className=" mb-1 hover:cursor-pointer" onClick={addToWishlist}/>
                        </div>
                        <div className=" h-4/6 w-full mt-4 flex justify-center items-center ">
                            <img src={`http://localhost:5000/${data?.image}`} alt="" className=" mt-16 mb-8 w-2/3 h-auto mx-4 "/>
                        </div>
                        <div className=" h-2/6 w-full mb-4 flex flex-col justify-center ">
                            <Badge className=" my-1 w-max absolute top-0 left-0">{data?.type}</Badge>
                            <div className=" mt-1 flex flex-row justify-between items-center">
                                <div className=" font-semibold text-xl">{data?.name}</div>
                                <div className="text-sm"><span className=" font-bold text-secondary-color">₹</span>&nbsp; {data?.price}</div>
                            </div>
                            <div className=" mb-1 text-sm text-slate-500">{data?.description}</div>
                            <div className=" mt-2 w-full flex justify-between items-center justify-self-end">
                                <Button onClick={addToCart} className="w-[49%] bg-secondary-color hover:bg-secondary-color">Add To Cart</Button>
                                <Button onClick={()=>{showDetails()}} className="w-[49%] bg-transparent border text-secondary-color border-secondary-color hover:bg-transparent">Details</Button>
                            </div>
                        </div>
                    </div>

                </DialogContent>
            </Dialog>
        </div>
        <Badge variant="secondary" className="font-normal absolute md:left-4 md:top-4 lg:top-4 lg:left-4 sm:top-2 sm:left-2">{data?.type}</Badge>
        <div className=" h-5/6 w-full mt-4 flex justify-center items-center ">
            <div onClick={()=>{showDetails()}} className=" h-full w-full flex justify-center items-center">
                <img src={`http://localhost:5000/${data?.image}`} alt="" className=" mt-8 mb-4 w-4/6 h-auto mx-4 sm:h-auto hover:cursor-pointer"/>
            </div>
        </div>
        <div className=" sm:h-auto w-full mb-4 text-left ">
            <div className="mx-4 flex justify-between items-center h-full sm:text-sm">
                <div className=" block font-semibold">{data?.name}</div>
                <div className="block text-sm"><span className=" font-bold text-secondary-color text-lg">₹</span>{data?.price}</div>
            </div>
        </div>
    </div>
  );
};

export default Card;
