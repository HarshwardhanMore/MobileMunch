import React from 'react'
import Card from '../Card'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import { Filter } from 'lucide-react'

function WishlistPage() {
  return (
    <div className=' w-full h-full flex flex-col justify-start items-center overflow-y-scroll'>
    <div className=' w-[90%] h-full flex flex-col justify-start items-center'>
      <div className=' w-full h-[8%] flex items-center justify-end sticky top-0 left-0 bg-bg-color z-10'>
        <Popover>
          <PopoverTrigger><Filter /></PopoverTrigger>
          <PopoverContent className=''>Place content for the popover here.</PopoverContent>
        </Popover>

      
      </div>
      <div className=' w-full h-[92%] flex items-center justify-start'>
        <div className='w-full h-[100%] sm:h-auto grid lg:grid-cols-6 md:grid-cols-4 sm:grid-cols-2 '>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            
        </div>
        <br /><br /><br />
    </div>
    </div>
  </div>
  )
}

export default WishlistPage