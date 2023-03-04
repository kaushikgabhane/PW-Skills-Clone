import React from 'react'

function OurProducts() {
  return (
    <>
        <div >
            <h1 className='text-5xl font-semibold text-[#645CBB] mb-2 text-center py-20'>Our Products</h1>
        </div>
        <div className=' flex justify-center gap-10 pb-20'>

            <div className='flex flex-col items-center gap-8 pt-6'>
                <img src='https://pwskills.com/images/landing-page/products/neurolab-icon.svg' alt='LabIcon' />
                <h1 className='text-2xl font-semibold'>PW Skills Lab</h1>
                <p className='text-gray-500 w-[300px] text-center text-xl text-bold leading-8'>Supercharge your project development with our robust lab.</p>
            </div>

            <div className='flex flex-col items-center gap-5'>
                <img src='https://pwskills.com/images/landing-page/products/jobPortal-icon.svg' alt='LabIcon'/>
                <h1 className='text-2xl font-semibold'>Job Portal</h1>
                <p className='text-gray-500 w-[300px] text-center text-xl text-bold'>Use exceptional templates for a stand-out resume minus the sign up process.</p>
            </div>

            <div className='flex flex-col items-center gap-5'>
                <img src='https://pwskills.com/images/landing-page/products/Internship-icon.svg' alt='LabIcon' />
                <h1 className='text-2xl font-semibold'>Expirence Portal</h1>
                <p className='text-gray-500 w-[325px] text-center text-xl text-bold'>PW Skills's self-paced experience portal prioritises hands-on training with 570+ internship projects.</p>
            </div>
        </div>

        <div className='flex justify-center gap-16 pb-20'>
            <div className='flex flex-col items-center pr-16  gap-5'>
                <img src='https://pwskills.com/images/landing-page/products/affilitatePortal-icon.svg' alt='LabIcon' />
                <h1 className='text-2xl font-semibold'>Become an affiliate</h1>
                <p className='text-gray-500 w-[300px] text-center text-xl text-bold'>Explore affiliate marketing opportunities with PW Skills and attain financial freedom.</p>
            </div>

            <div className='flex flex-col items-center  gap-6 pt-8'>
                <img src='https://pwskills.com/images/landing-page/products/halloffame-icon.svg' alt='LabIcon' />
                <h1 className='text-2xl font-semibold'>Hall of fame</h1>
                <p className='text-gray-500 w-[330px] text-center text-xl text-bold'>Our student placements and 100K+ career transitions speak volumes about our courses.</p>
            </div>

        </div>
    </>
  )
}

export default OurProducts