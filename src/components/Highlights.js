import React from 'react'

function Highlights() {
  return (
    <div className='flex justify-around  my-12 '>
      <div className=' h-[300px] w-[350px] flex flex-col items-center justify-around rounded-2xl cursor-pointer'>
        <img src='https://pwskills.com/images/landing-page/statistics/books-icon.svg' alt='popular programs img' className='w-40'/>
        <h2 className='font-bold text-3xl'> 600+</h2>
        <h2 className='font-bold text-4xl text-gray-500'>Different Courses</h2>
      </div>
      <div className='h-[300px] w-[350px]  flex flex-col items-center justify-around rounded-2xl cursor-pointer'>
        <img src='https://pwskills.com/images/landing-page/statistics/student-icon.svg' alt='Community programs img' className='w-40'/>
        <h2 className='font-bold pl-5 text-3xl'> 700000+</h2>
        <h2 className='font-bold text-4xl text-gray-500'> Students Enrolled</h2>
      </div>
      <div className='h-[300px] w-[375px]  flex flex-col items-center justify-around rounded-2xl cursor-pointer'>
        <img src='https://pwskills.com/images/landing-page/statistics/credit-card-icon.svg' alt='Community programs img' className='w-40'/>
        <h2 className='font-bold pl-5 text-3xl'> 10000+</h2>
        <h2 className='font-bold text-4xl text-gray-500'> Successful Transition</h2>
      </div>
    </div>
  )
}

export default Highlights