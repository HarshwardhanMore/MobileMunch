import React from 'react'
import Card from '../Card'
import { Link } from 'react-router-dom'
import { ChevronRight } from 'lucide-react'

function FeaturedProducts({data}: any) {
  return (
    <div className=' w-full h-full flex items-center justify-center'>
        <div className='w-[90%] h-[100%] sm:h-auto grid lg:grid-cols-6 md:grid-cols-4 sm:grid-cols-2'>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
        </div>
    </div>
  )
}

export default FeaturedProducts