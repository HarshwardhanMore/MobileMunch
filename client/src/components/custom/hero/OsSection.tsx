import { SignedIn, SignedOut } from "@clerk/clerk-react"
import { ChevronRight } from "lucide-react"
import { Link } from "react-router-dom"

const OsSectionCard = ({title, imgUrl}: any) => {
    return (
        <div className=" w-full h-full rounded-xl bg-primary-lite-color flex items-center justify-center">
            <div className=" w-5/6 h-5/6 flex items-center justify-center">
                <div className=" flex flex-col justify-evenly items-start h-full w-1/2">
                    <div className=" font-semibold text-xl">{title}</div>
                    <SignedIn>
                        <Link to="/products" className=" text-sm flex items-center">Explore <ChevronRight size={16} /></Link>
                    </SignedIn>
                </div>
                <div className=" flex justify-center items-center h-full w-1/2">
                    <img className=" lg:w-[124px] lg:h-[124px] md:w-[96px] md:h-[96px] sm:w-[64px] sm:h-[64px] sm:my-4" src={imgUrl} alt="" />
                </div>
            </div>
        </div>
    )
}

function OsSection() {
  return (
    <div className=" w-full h-full flex justify-center items-center">
        <div className=" w-[90%] h-full flex flex-col">
            <div className=" h-[100%] grid lg:grid-cols-3 lg:gap-x-5 md:grid-cols-2 md:gap-x-5 sm:grid-cols-1 sm:gap-x-0 sm:gap-y-3">
                <OsSectionCard title="IOS" imgUrl="https://img.icons8.com/glyph-neue/256/087cfc/mac-os.png"/>
                <OsSectionCard title="Android" imgUrl="https://img.icons8.com/ios-filled/150/087cfc/android-os.png"/>
            </div>
        </div>
    </div>
  )
}

export default OsSection