import Card from '../Card';

function FeaturedProducts({data}: any) {

  let showElements = 10;
  if(data.length > showElements){
    data = data.slice(0, showElements)
  }
  return (
    <div className=' w-full h-full flex items-center justify-center'>
      {
            data.length != 0 ? (
              <div className='w-[90%] h-[100%] sm:h-auto grid lg:grid-cols-6 md:grid-cols-4 sm:grid-cols-2'>
                {
                  data?.map((item:any)=>(
                    <Card data={item}/>
                  ))
                }
              </div>
            ) : (
              <div className=' w-full h-max'>No Products To Show</div>
            )
      }
    </div>
  )
}

export default FeaturedProducts