import React, { useState } from 'react'
import { IoCloseOutline } from "react-icons/io5";
import { HiMenuAlt1 } from "react-icons/hi";

export const Navbar = () => {
    let Links =[
        {name:"Home", Link:"/"},
        {name:"About Us", Link:"/"},
        {name:"Service", Link:"/"},
        {name:"Doctors", Link:"/"},
    ]

    const [isOpen,SetisOpen] = useState(false)
  return (
    <div className='shadow-md w-full sticky top-0 left-0 bg-custom-gradient'>
        <div className='md:px-8 py-3 px-7 md:flex  justify-between items-center'>
            <div className='flex font-bold cursor-pointer'>
                <h1 className='text-[30px] text-[#112437]'>Medi</h1>
                <h1 className='text-[30px] text-[#01BF89]'>Reach</h1>
            </div>
            
            <div onClick={()=> SetisOpen(!isOpen)} className=' text-[#112437] absolute right-5 top-2 cursor-pointer md:hidden'>
                {
                    isOpen ? <IoCloseOutline className='text-[60px] font-thin'/> : <HiMenuAlt1 className='text-[50px]'/>
                }
            </div>

            <div>
                <ul className={`rounded-xl bg-custom-gradient md:flex pl-9 md:pl-5 md:pb-0 pb-12 absolute md:static md:z-auto z-[-1]
                               left-0 w-full transition-all duration-500 ease-in ${isOpen ? "top-12" : "top-[-500px]"}`}>
                    {
                        Links.map(link => (
                            <li className='font-[500] my-7 md:my-0 md:ml-7 text-[20px] text-[#112437] flex items-center'>
                                <a href="/">{link.name}</a>
                            </li>
                        ))
                    }
                    <button  className='bg-[#01BF89] text-white font-bold px-7 py-1.5 text-[20px] md:ml-7 rounded-2xl'>Login</button>
                </ul>
            </div>
        </div>
    </div>
  )
}
