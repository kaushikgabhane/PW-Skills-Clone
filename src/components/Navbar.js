import React from 'react'


function Navbar() {
  return (
    <>
        <div className="navbar bg-base-100 flex flex-col gap-5 ">

            <div className='mx-24 mt-3 flex gap-12'>

                <div className='w-[150px] '>
                    <img src='https://pwskills.com/images/PWSkills-main.png'></img>
                </div>
        
                <div style={{border : "1px solid #4d4d4d"}}  className="p-2 rounded flex gap-2 items-center" >
                    <i className="fa-solid fa-magnifying-glass"></i>
                    <input type="text" placeholder="What do you want to learn?" className="outline-none w-[50vw] " />    
                </div>
                <div className="flex-1">
                  <a href="" className="btn btn-primary normal-case text-base py-2 px-8">Login / Register</a>
                </div>

            </div>
            <div className="font-semibold text-black mx-24">
            
              <ul className="menu menu-horizontal px-1 flex gap-4 text-lg">
                <li tabIndex={0} className="bg-white">
                  <a  href="">
                    Courses
                    <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"/></svg>
                  </a>
                  <ul className="p-2 text-gray-500 bg-white">
                    <li><a  href="">Web Development</a></li>
                    <li><a  href="">Data Science</a></li>
                    <li><a  href="">Java</a></li>
                    <li><a  href=""> C++ </a></li>
                    <li><a  href="">Finance </a></li>

                  </ul>
                </li>
                <li><a  href="">PW Skills Lab</a></li>
                <li><a  href="">Job Portal</a></li>
                <li><a  href="">Experience Portal</a></li>
                <li><a  href="">Become an affiliate </a></li>
                <li><a  href="">Hall of fame</a></li>
                <li tabIndex={0}>
                  <a  href="">
                    More
                    <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"/></svg>
                  </a>
                  <ul className="p-2 bg-base-100 text-gray-500">
                    <li><a  href="">About us</a></li>
                    <li><a  href="">FAQ's</a></li>
                    <li><a  href="">Privacy policy</a></li>
                    <li><a  href=""> Contact us</a></li>
                    <li><a  href="">Job assistance</a></li>
                    <li><a  href="">Terms and conditions</a></li>

                  </ul>
                </li>
              </ul>
            </div>
        </div>

    </>
  )
}

export default Navbar