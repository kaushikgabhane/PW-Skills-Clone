import React from 'react'

function Cards() {
  return (
    <div className="w-max  p-10 flex mb-10 gap-8 bg-gray-100 border-[1px] rounded-3xl">
        <figure className=' w-[300px] '>
            <img src="https://cdn.pwskills.com/assets/uploads/thumbnails/63f6f3b4a9d3a25d2eb43ba3.jpg" alt="Card img" className='rounded-lg'/>
        </figure>
        <div className="flex flex-col gap-5">
          <h2 className="font-bold text-xl">Stock Market Fundamentals</h2>
          <p className='w-[500px]'>Stock market illiterate? After this course, not anymore! India has a financial literacy problem. We have been conditioned to invest poorly.</p>
          <h3 className='font-bold text-md'>Kanan Balh</h3>
          <span className='font-bold text-[#6F1AB6] text-xl'>FREE</span>
        </div>
    </div>
  )
}

export default Cards