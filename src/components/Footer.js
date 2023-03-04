import React from 'react'

function Footer() {
  return (
    <footer className='bg-black pt-20 pl-24 pb-10 flex justify-around'>
        <div className='w-[20%] flex flex-col gap-8 '>
            <div className='w-44'>
                <img src='https://pwskills.com/images/PWSkills-white.png' alt='logo' />
            </div>
            <div className='flex gap-10'>
                <i className="fa-solid fa-envelope text-white"></i>
                <div className='text-white'>
                    <h4 className='font-bold'>Email us:</h4>
                    <a>support@pwskills.com</a>
                </div>
            </div>
            <div className='text-white flex justify-center gap-5'>
                <i class="fa-brands fa-facebook-f text-xl"></i>
                <i class="fa-brands fa-instagram text-xl"></i>
                <i class="fa-brands fa-telegram text-xl"></i>
                <i class="fa-brands fa-youtube text-xl"></i>
                <i class="fa-brands fa-twitter text-xl"></i>
                <i class="fa-brands fa-linkedin text-xl"></i>
                <i class="fa-brands fa-discord text-xl"></i>
            </div>
        </div>
        <div className=''>
            <h1 className='text-3xl text-white font-semibold pb-4'> PW Skills</h1>
            <hr className='w-40 border-none h-[3px] bg-[#F99417]'/>
            <div className='flex gap-5 pt-10'>
                <div className='text-white flex flex-col justify-center gap-5 font-semibold'>
                    <a>About us</a>
                    <a>FAQ's</a>
                    <a>Privacy policy</a>
                </div>
                <div className='text-white flex flex-col justify-center gap-5 font-semibold'>
                    <a>Contact us</a>
                    <a>Job assistance</a>
                    <a>Terms and conditions</a>
                </div>
            </div>
        </div>
        <div className=''>
            <h1 className='text-3xl text-white font-semibold pb-4'>Products</h1>
            <hr className='w-40 border-none h-[3px] bg-[#F99417]'/>
            <div className='text-white flex flex-col justify-center gap-3 pt-10 font-semibold'>
                <a>PW Skills Lab</a>
                <a>Job Portal</a>
                <a>Experience Portal</a>
                <a>Experience Portal</a>
                <a>Hall of fame</a>
            </div>
           
        </div>
    </footer>
  )
}

export default Footer