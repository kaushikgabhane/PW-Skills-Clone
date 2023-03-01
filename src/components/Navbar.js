import React from 'react'


function Navbar() {
  return (
    <>
        <div className="navbar bg-base-100 flex flex-col gap-5 ">

            <div className='mx-24 mt-3 flex gap-10'>

                <div className='w-[150px] '>
                    <img src='https://pwskills.com/images/PWSkills-main.png' alt='logo-image'></img>
                </div>
        
                <div style={{border : "1px solid #4d4d4d"}}  className="p-2 rounded flex gap-2 items-center" >
                    <i className="fa-solid fa-magnifying-glass"></i>
                    <input type="text" placeholder="What do you want to learn?" className="outline-none w-[50vw] " />    
                </div>
                <div className="flex-1">
                  <a className="btn btn-primary normal-case text-base py-2 px-8">Login / Register</a>
                </div>

            </div>
            <div className="font-semibold text-black mx-24">
            
              <ul className="menu menu-horizontal px-1 flex gap-4 text-lg">
                <li tabIndex={0} className="bg-white">
                  <a  >
                    Courses
                    <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"/></svg>
                  </a>
                  <ul className="p-2 text-gray-500 bg-white">
                    <li><a>Web Development</a></li>
                    <li><a>Data Science</a></li>
                    <li><a>Java</a></li>
                    <li><a> C++ </a></li>
                    <li><a>Finance </a></li>

                  </ul>
                </li>
                <li><a>PW Skills Lab</a></li>
                <li><a>Job Portal</a></li>
                <li><a>Experience Portal</a></li>
                <li><a>Become an affiliate </a></li>
                <li><a>Hall of fame</a></li>
                <li tabIndex={0}>
                  <a>
                    More
                    <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"/></svg>
                  </a>
                  <ul className="p-2 bg-base-100 text-gray-500">
                    <li><a>About us</a></li>
                    <li><a>FAQ's</a></li>
                    <li><a>Privacy policy</a></li>
                    <li><a> Contact us</a></li>
                    <li><a>Job assistance</a></li>
                    <li><a>Terms and conditions</a></li>

                  </ul>
                </li>
              </ul>
            </div>
        </div>

    </>
  )
}

export default Navbar