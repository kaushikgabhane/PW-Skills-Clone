import React from 'react'

function Carousel() {
  return (
    <>
        <div className="carousel w-full">
            <div id="item1" className="carousel-item w-full">
              <img src="https://cdn.pwskills.com/assets/uploads/banners/63a18d428076281d608f5290/web.jpg" alt="" className="w-full" />
            </div> 
            <div id="item2" className="carousel-item w-full">
              <img src="https://cdn.pwskills.com/assets/uploads/banners/63fe288a182c6764a94bd85f/web.jpg" alt="" className="w-full" />
            </div> 
            <div id="item3" className="carousel-item w-full">
              <img src="https://cdn.pwskills.com/assets/uploads/banners/63a18d18807628ba7c8f528e/web.jpg" alt="" className="w-full" />
            </div> 
            <div id="item4" className="carousel-item w-full">
              <img src="https://cdn.pwskills.com/assets/uploads/banners/63a18d078076282a178f528c/web.jpg" alt="" className="w-full" />
            </div>
            <div id="item5" className="carousel-item w-full">
              <img src="https://cdn.pwskills.com/assets/uploads/banners/63a18cca807628f5968f528a/web.jpg" alt="" className="w-full" />
            </div>
        </div> 
        <div className="flex justify-center w-full relative bottom-8 gap-2">
          <a href="#item1" className="btn btn-xs bg-white text-black hover:text-white border-none rounded-full">1</a> 
          <a href="#item2" className="btn btn-xs bg-white text-black hover:text-white border-none rounded-full">2</a> 
          <a href="#item3" className="btn btn-xs bg-white text-black hover:text-white border-none rounded-full">3</a> 
          <a href="#item4" className="btn btn-xs bg-white text-black hover:text-white border-none rounded-full">4</a>
          <a href="#item5" className="btn btn-xs bg-white text-black hover:text-white border-none rounded-full">5</a>
        </div>
    </>
  )
}

export default Carousel