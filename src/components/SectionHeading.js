import React from 'react'

function SectionHeading(props) {
  return (
    <div className='py-20 flex flex-col items-center'>
      <h1 className='text-5xl font-bold text-[#645CBB] mb-2 ' style={{fontFamily: " Golos Text, sans-serif"}}>{props.Heading}</h1>
      <p className='text-xl text-gray-500'>{props.Description}</p>
    </div>
  )
}

export default SectionHeading