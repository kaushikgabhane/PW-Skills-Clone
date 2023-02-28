import React from 'react'

function Heading() {
    let date = new Date();

    function SetHeader() {
        if (date.getHours() >= 0 && date.getHours() <= 12) {
            return <div className='ml-24 mt-16'>
                <h1 className='text-4xl font-bold text-[#645CBB] mb-2 ' style={{fontFamily: " Golos Text, sans-serif"}}>Good Morning, There!</h1>
                <hr className='w-40 h-[6px] bg-[#FFC93C]'/>
            </div>
        }
        else if(date.getHours() >= 12 && date.getHours() <= 17){
            return  <div className='ml-24 mt-16'>
                <h1 className='text-4xl font-bold text-[#645CBB] mb-2 ' style={{fontFamily: " Golos Text, sans-serif"}}>Good Afternoon, There!</h1>
                <hr className='w-40 h-[6px] bg-[#FFC93C]'/>
            </div>
        }
        else if(date.getHours() >= 17 && date.getHours() <= 23){
            return (
                <div className='ml-24 mt-16'>
                    <h1 className='text-4xl font-bold text-[#645CBB] mb-2 ' style={{fontFamily: " Golos Text, sans-serif"}}>Good Evening, There!</h1>
                    <hr className='w-40 h-[6px] bg-[#FFC93C]'/>
                
                </div>
            );
        }
    }


  return (
    
    <SetHeader />
    
  )
}

export default Heading;