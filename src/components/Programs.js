import React from 'react'

function Programs() {
  return (
    <div className='flex my-12 ml-24 gap-12'>
        <div className='border-[1px] border-gray-400 w-[250px] flex items-center justify-around rounded-2xl cursor-pointer'>
            <img src='https://pwskills.com/images/popular-programs.svg' alt='popular programs img'/>
            <h2 className='font-bold'> Popular programs</h2>
        </div>
        <div className='border-[1px] border-gray-400 w-[250px] flex items-center justify-around rounded-2xl cursor-pointer'>
            <img src='https://pwskills.com/images/community-programs.svg' alt='Community programs img'/>
            <h2 className='font-bold pl-5'> Community programs</h2>
        </div>
    </div>
  )
}

export default Programs