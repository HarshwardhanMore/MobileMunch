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
import { Link } from "react-router-dom"
import { toast } from "react-toastify"
  


function Card() {
    const notify = () => toast.success("Product Added To The Wishlist!");
  return (
    <div className=" border lg:m-2.5 sm:m-1.5 rounded-md hover:shadow flex flex-col items-center relative sm:h-max sm:w-auto">
        <div className=" flex flex-col absolute md:right-4 md:top-4 lg:top-4 lg:right-4 sm:top-2 sm:right-2">
            <Heart color="orange" className=" mb-1 sm:hidden hover:cursor-pointer" onClick={notify}/>
            <Heart size={20} color="orange" className=" mb-1 lg:hidden md:hidden hover:cursor-pointer"/>
            
            <Dialog>
                <DialogTrigger>
                    <ArrowRightLeft className=" sm:hidden hover:cursor-pointer"/>
                    <ArrowRightLeft size={20} className=" lg:hidden md:hidden hover:cursor-pointer"/>
                </DialogTrigger>
                <DialogContent>
                    
                    <div className=" m-2.5 rounded-md flex flex-col items-center relative">
                        <div className=" flex flex-col absolute right-4 top-4 ">
                            <Heart color="orange" className=" mb-1 hover:cursor-pointer"/>
                            </div>
                        <div className=" h-4/6 w-full mt-4 flex justify-center items-center ">
                            <img src="/mobile-images/card/270412_wkimjt.png" alt="" className=" h-full w-auto mx-4 "/>
                        </div>
                        <div className=" h-2/6 w-full mb-4 flex flex-col ">
                            <Badge className=" my-1 w-max absolute top-0 left-0">Badge</Badge>
                            <div className=" mt-1 flex flex-row justify-between items-center">
                                <div className=" font-semibold text-xl">Heading</div>
                                <div className="text-sm"><span className=" font-bold text-secondary-color">₹</span>&nbsp; Price</div>
                            </div>
                            <div className=" mb-1 text-sm text-slate-500">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur quibusdam voluptate, corrupti explicabo animi rem consequatur dolorum repellat! Aliquid, inventore.</div>
                            <div className=" mt-2 w-full flex justify-between items-center justify-self-end">
                                <Button className="w-[49%] bg-secondary-color">Add To Cart</Button>
                                <Button className="w-[49%] bg-transparent border text-secondary-color border-secondary-color">Checkout</Button>
                            </div>
                        </div>
                    </div>

                </DialogContent>
            </Dialog>
        </div>
            <Badge variant="secondary" className="font-normal absolute md:left-4 md:top-4 lg:top-4 lg:left-4 sm:top-2 sm:left-2">Badge</Badge>
        <div className=" h-5/6 sm:h-auto w-full mt-4 flex justify-center items-center ">
            <Link to="/product" className=" h-full w-full flex justify-center items-center">
                <img src="/mobile-images/card/270412_wkimjt.png" alt="" className=" h-5/6 w-auto mx-4 sm:h-auto hover:cursor-pointer"/>
            </Link>
        </div>
        <div className=" h-1/6 sm:h-auto w-full mb-4 text-left ">
            <div className="mx-4 flex justify-between items-center h-full sm:text-sm">
                <div className=" block font-semibold">Heading</div>
                <div className="block text-sm"><span className=" font-bold text-secondary-color text-lg">₹</span>Price</div>
            </div>
        </div>
    </div>
  )
}

export default Card