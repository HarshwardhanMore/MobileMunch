// src/components/Carousel.js
import { Button } from '@/components/ui/button';
import { SignedIn } from '@clerk/clerk-react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';


const Carousel1 = ({ images, headings, descriptions, interval = 5000 }: any) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      handleNext();
    }, interval);

    return () => clearInterval(intervalId);
  }, [currentIndex, interval]);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const handleDotClick = (index: any) => {
    setCurrentIndex(index);
  };

  return (
    <div className=' w-full h-full flex justify-center'>
      
      <div style={{ position: 'relative', overflow: 'hidden', width: "90%", height: "100%" }}>
        <div style={{ display: 'flex', transition: 'transform 1s ease-in-out', transform: `translateX(-${currentIndex * 100}%)`, height: "100%", width: "100%" }}>
          {images.map((img: any, index: any) => (
            <div
              key={index}
              style={{
                flex: '0 0 100%',
                opacity: index === currentIndex ? 1 : 0,
                transition: 'opacity 0.5s ease-in-out',
              }}
              className=' flex flex-row h-full'
            >
              <div className=' h-full w-1/2 flex flex-col items-end sm:items-center justify-center px-8 text-right sm:text-center'>
                <div className=' my-4'>
                  <div className=' text-slate-500'>
                    Explore Latest Discounts on
                  </div>
                  <div className=' text-4xl font-semibold'>
                    {headings[index]}
                  </div>
                </div>
                <div className=' text-slate-500 my-4'>
                  {descriptions[index]}
                </div>
                <SignedIn>
                  <Button className=' bg-primary-color my-4'><Link to="/products">Shop Now</Link></Button>
                </SignedIn>
              </div>
              <div className=' h-full w-1/2 flex justify-start items-center'>
                <img src={img} alt={`Slide ${index + 1}`} className=' w-auto h-[90%]' />
              </div>
            </div>
          ))}
        </div>
        <button
          style={{ position: 'absolute', top: '50%', left: '4px', transform: 'translateY(-50%)', fontSize: '2rem', color: 'white', border: 'none', cursor: 'pointer', outline: 'none' }}
          onClick={handlePrev}
        >
          <ChevronLeft color='black'/>
        </button>
        <button
          style={{ position: 'absolute', top: '50%', right: '4px', transform: 'translateY(-50%)', fontSize: '2rem', color: 'white', border: 'none', cursor: 'pointer', outline: 'none' }}
          onClick={handleNext}
        >
          <ChevronRight color='black'/>
        </button>
        <div style={{ position: 'absolute', bottom: '4px', left: '50%', transform: 'translateX(-50%)', display: 'flex', gap: '2px' }}>
          {images.map((_: any, index: any) => (
            <span
              key={index}
              style={{
                width: '10px',
                height: '10px',
                backgroundColor: index === currentIndex ? '#087cfc' : '#bbb',
                borderRadius: '50%',
                cursor: 'pointer',
              }}
              onClick={() => handleDotClick(index)}
            ></span>
          ))}
        </div>
      </div>
      
    </div>
  );
};

export default Carousel1;