"use client"
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { RootState } from '@/app/state_management/stores/store';
import { Button } from '@material-tailwind/react';
import { rubikFont } from '../../../fonts/fontsConfig';
import Link from 'next/link';
import LogoComponent from './LogoComponent';


const NavBar = () => {
    const navBgState= useSelector((state:RootState) => state.navBgState.value);
    const navValue= useSelector((state:RootState) => state.navValue.value);
    const [navValueLocal, setNavBgTypeLocal]= useState(navValue)

    useEffect(() => {
        setNavBgTypeLocal(navValue)
      }, [navValue])

    return (
        <div 
            className={`
                ${rubikFont.className} 
                ${ navBgState
                    ? " transition-all duration-700 bg-transparent shadow-md"
                    : "text-white from-black to-transparent bg-gradient-to-b"} 
                        text-white font-bold z-40 overflow-hidden sticky top-0 h-[80px] w-full  
                        flex justify-between items-center tracking-widest hover:shadow-none`}
            >

            <div className={`${ navBgState ? "translate-y-0 duration-700 ease-linear bg-gradient-to-b from-gray-700 to-gray-900" : "-translate-y-20"} backdrop-blur-md absolute left-0 right-0 h-full flex`}/>


            <div className=" absolute left-0 right-0 flex w-[90%] gap-x-4 mx-auto justify-between items-center text-[14px]">

                <ul className='flex justify-center items-center'>
                    <li className='flex rounded-xl overflow-hidden w-[45px] h-[40px]'>
                        <LogoComponent />
                    </li>
                </ul>



                <ul className='flex w-full gap-x-3 justify-center items-center'>
                    <Link href={"/pages/client-pages/home-page"} className={`cursor-pointer ${navValueLocal=== 'Home' ? 'bg-white shadow-gray-500 text-orange-600 transition-colors duration-300 ease-linear': ''} hover:bg-orange-400 hover:text-white py-2 px-4 rounded-full`}> 
                        Home
                    </Link>

                    <li className={`cursor-pointer ${navValueLocal=== 'About' ? 'bg-white shadow-gray-500 text-orange-600 transition-colors duration-300 ease-linear': ''} hover:bg-orange-400 hover:text-white py-2 px-4 rounded-full`}>
                        About
                    </li>

                    <li className={`cursor-pointer ${navValueLocal=== 'Apply' ? 'bg-white shadow-gray-500 text-orange-600 transition-colors duration-300 ease-linear': ''} hover:bg-orange-400 hover:text-white py-2 px-4 rounded-full`}>
                        Apply
                    </li>

                    <li className={`cursor-pointer ${navValueLocal=== 'Show' ? 'bg-white shadow-gray-500 text-orange-600 transition-colors duration-300 ease-linear': ''} hover:bg-orange-400 hover:text-white py-2 px-4 rounded-full`}>
                        Highlights
                    </li>

                    <Link href={"/pages/client-pages/feed-page"} className={`cursor-pointer ${navValueLocal=== 'Feeds' ? 'bg-white shadow-gray-500 text-orange-600 transition-colors duration-300 ease-linear': ''} hover:bg-orange-400 hover:text-white py-2 px-4 rounded-full`}>
                        Feeds
                    </Link>

                    <Link href={"/pages/client-pages/polls-page"}  className={`cursor-pointer ${navValueLocal=== 'Polls' ? 'bg-white shadow-gray-500 text-orange-600 transition-colors duration-300 ease-linear': ''} hover:bg-orange-400 hover:text-white py-2 px-4 rounded-full`}>
                        Polls
                    </Link>

                    <li className={`cursor-pointer ${navValueLocal=== 'Contact' ? 'bg-orange-800 shadow-sm shadow-gray-900 text-white transition-colors duration-300 ease-linear': ''} hover:bg-orange-400 hover:text-white py-2 px-4 rounded-full`}>
                        Contact
                    </li>
                </ul>




                <ul className='flex justify-end items-center gap-x-[20px] text-[13px]'>
                    <Link href={"/pages/client-pages/designer-enroll-page"} className={`${rubikFont.className} cursor-pointer border-2 text-white border-white bg-transparent h-10 min-w-[150px] flex justify-center items-center rounded-lg text-center shadow-sm shadow-gray-700`}>
                        Designer Enroll
                    </Link>

                    <Link href={"/pages/client-pages/model-enroll-page"}  onClick={() => {}} className={`${rubikFont.className} cursor-pointer text-white bg-orange-800 h-10 min-w-[150px] flex justify-center items-center rounded-lg text-center shadow-sm shadow-gray-700`}>
                        Model Enroll
                    </Link>

                </ul>


            </div>

        </div>
    );
}

export default NavBar