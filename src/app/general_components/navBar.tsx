"use client"
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { RootState } from '@/app/state_management/store';
import { Button } from '@material-tailwind/react';
import { rubikFont } from '../fonts/fontsConfig';
import LogoComponent from './logoComponent';


const NavBar = () => {
    const navBgValue= useSelector((state:RootState) => state.nav_bg_state.value);
    const navBgType= useSelector((state:RootState) => state.nav_mobile_state.value);
    const [navBgTypeLocal, setNavBgTypeLocal]= useState(navBgType)

    useEffect(() => {
        setNavBgTypeLocal(navBgType)
      }, [navBgType])

    return (
        <div 
            className={`
                ${rubikFont.className} 
                ${ navBgValue
                    ? " transition-all duration-700 bg-transparent shadow-md"
                    : "text-white from-black to-transparent bg-gradient-to-b"} 
                        text-white font-bold z-40 overflow-hidden sticky top-0 h-[80px] w-full  
                        flex justify-between items-center tracking-widest hover:shadow-none`}
            >

            <div className={`${ navBgValue ? "translate-y-0 duration-700 ease-linear bg-gradient-to-b from-gray-700 to-gray-900" : "-translate-y-20"} backdrop-blur-md absolute left-0 right-0 h-full flex`}/>


            <div className=" absolute left-0 right-0 flex w-[90%] gap-x-4 mx-auto justify-between items-center text-[14px]">

                <ul className='flex justify-center items-center'>
                    <li className='flex rounded-xl overflow-hidden w-[45px] h-[40px]'>
                        <LogoComponent />
                    </li>
                </ul>



                <ul className='flex w-full gap-x-3 justify-center items-center'>
                    <li className={`cursor-pointer ${navBgTypeLocal=== 'home' ? 'bg-white shadow-gray-500 text-orange-600 transition-colors duration-300 ease-linear': ''} hover:bg-orange-400 hover:text-white py-2 px-4 rounded-full`}> 
                        Home
                    </li>

                    <li className={`cursor-pointer ${navBgTypeLocal=== 'about' ? 'base-orange-700 shadow-sm shadow-gray-900 text-white transition-colors duration-300 ease-linear': ''} hover:bg-orange-400 hover:text-white py-2 px-4 rounded-full`}>
                        About
                    </li>

                    <li className={`cursor-pointer ${navBgTypeLocal=== 'apply' ? 'bg-orange-800 shadow-sm shadow-gray-900 text-white transition-colors duration-300 ease-linear': ''} hover:bg-orange-400 hover:text-white py-2 px-4 rounded-full`}>
                        Apply
                    </li>

                    <li className={`cursor-pointer ${navBgTypeLocal=== 'show' ? 'bg-orange-800 shadow-sm shadow-gray-900 text-white transition-colors duration-300 ease-linear': ''} hover:bg-orange-400 hover:text-white py-2 px-4 rounded-full`}>
                        Highlights
                    </li>

                    <li className={`cursor-pointer ${navBgTypeLocal=== 'show' ? 'bg-orange-800 shadow-sm shadow-gray-900 text-white transition-colors duration-300 ease-linear': ''} hover:bg-orange-400 hover:text-white py-2 px-4 rounded-full`}>
                        Live
                    </li>

                    <li className={`cursor-pointer ${navBgTypeLocal=== 'show' ? 'bg-orange-800 shadow-sm shadow-gray-900 text-white transition-colors duration-300 ease-linear': ''} hover:bg-orange-400 hover:text-white py-2 px-4 rounded-full`}>
                        Polls
                    </li>

                    <li className={`cursor-pointer ${navBgTypeLocal=== 'contact' ? 'bg-orange-800 shadow-sm shadow-gray-900 text-white transition-colors duration-300 ease-linear': ''} hover:bg-orange-400 hover:text-white py-2 px-4 rounded-full`}>
                        Contact
                    </li>
                </ul>




                <ul className='flex justify-end items-center gap-x-[20px]'>
                    <Button onClick={() => {}} className={`${rubikFont.className} cursor-pointer border-2 text-white border-white bg-transparent h-10 min-w-32 rounded-lg text-center shadow-sm shadow-gray-700`} placeholder={""} onPointerEnterCapture={ () => {}} onPointerLeaveCapture={ () => {}}>
                        <span className='text-[13px]'>Log In</span>
                    </Button>

                    <Button onClick={() => {}} className={`${rubikFont.className} cursor-pointer text-white bg-orange-800 h-10 min-w-32 rounded-lg text-center shadow-sm shadow-gray-700`} placeholder={""} onPointerEnterCapture={ () => {}} onPointerLeaveCapture={ () => {}}>
                        <span className='text-[13px]'>Sign Up</span>
                    </Button>

                </ul>


            </div>

        </div>
    );
}

export default NavBar