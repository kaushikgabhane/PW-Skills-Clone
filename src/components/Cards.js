import React from 'react'

function Cards() {
  return(
    <div className="card w-96 h-[400px] bg-base-100 shadow-xl  drop-shadow-2xl">
      <figure><img src="https://cdn.pwskills.com/assets/uploads/thumbnails/63a2ecdd88994300d47eb9ad.jpg" alt="Sigma batch" className='w-[80%] mt-5'/></figure>
      <div className="card-body flex flex-col justify-between">
        <h2 className="card-title text-[#645CBB] font-bold text-xl">Full Stack Web Development</h2>
        <div className="">
          <p className='text-lg font-semibold'>Hitesh Choudhary</p>
          <var className="text-lg font-bold">	<span>&#8377;</span> 2975.0</var>
        </div>
      </div>
    </div>
  );
    
}

export default Cards