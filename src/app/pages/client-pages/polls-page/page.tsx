"use client";
import { interFont, pacificoFont, rubikFont } from '@/app/fonts/fontsConfig';
import NavBar from '@/app/components/client-components/client-shared-components/NavBarComponent';
import { setNavBg, setNavBgManual } from '@/app/state_management/reducers/client-reducers/navBgState';
import Image from "next/image";
import { setNavValue } from '@/app/state_management/reducers/client-reducers/navValue';
import { Button } from '@material-tailwind/react';
import React, { useEffect, useRef, useState } from 'react'
import { useDispatch } from 'react-redux';

const PageIndex = () => {
    const parentDivRef :React.MutableRefObject<HTMLDivElement | null>= useRef(null);
    const dispatch= useDispatch();
    const [voteClothes, setVoteClothes]= useState<string>("");
    const [voteShoes, setVoteShoes]= useState<string>("");
    const [voteAccessories, setVoteAccessories]= useState<string>("");


    const winnersData= [
        {
            id: "sfsdfsdfsdvvwe",
            title: "Clothes Designer",
            votes: 500,
            userName: "Danjuma Buremo",
            userDescription: "Lorem ipsium Lorem ipsium Lorem ipsium Lorem ipsium Lorem ipsium Lorem ipsium Lorem ipsium Lorem ipsium Lorem ipsium Lorem ipsium",
            userImage: '/images/pictures/1.webp'
        },

        {
            id: "sfsdfsdfsdvvwe",
            title: "Shoes Designer",
            votes: 234,
            userName: "Lakasegbe Onyeka",
            userDescription: "Lorem ipsium Lorem ipsium Lorem ipsium Lorem ipsium Lorem ipsium Lorem ipsium Lorem ipsium Lorem ipsium Lorem ipsium Lorem ipsium",
            userImage: '/images/pictures/2.webp'
        },

        {
            id: "sfsdfsdfsdvvwe",
            title: "Accessories Designer",
            votes: 411,
            userName: "Chinyere Damudu",
            userDescription: "Lorem ipsium Lorem ipsium Lorem ipsium Lorem ipsium Lorem ipsium Lorem ipsium Lorem ipsium Lorem ipsium Lorem ipsium Lorem ipsium",
            userImage: '/images/pictures/4.webp'
        },
    ];


    
    const userVoteClothData= [
        {
            id: "sfsdfsdfsdvvwe",
            userName: "Ajanlekoko Sangbafo",
            userDescription: "Lorem ipsium Lorem ipsium Lorem ipsium Lorem ipsium Lorem ipsium Lorem ipsium Lorem ipsium Lorem ipsium Lorem ipsium Lorem ipsium",
            userImage: '/images/pictures/2.webp'
        },

        {
            id:"wyeuioyweufwhkfwifb",
            userName: "Aminoberen Jinodu",
            userDescription: "Lorem ipsium Lorem ipsium Lorem ipsium Lorem ipsium Lorem ipsium Lorem ipsium Lorem ipsium Lorem ipsium Lorem ipsium Lorem ipsium",
            userImage: '/images/pictures/3.webp'
        },

        {
            id:"fhwifhweoifhwee",
            userName: "Daudu Dauda",
            userDescription: "Lorem ipsium Lorem ipsium Lorem ipsium Lorem ipsium Lorem ipsium Lorem ipsium Lorem ipsium Lorem ipsium Lorem ipsium Lorem ipsium",
            userImage: '/images/pictures/1.webp'
        },

        {
            id: "pwouiensfsdfsdfsdvvwe",
            userName: "Ajanlekoko Sangbafo",
            userDescription: "Lorem ipsium Lorem ipsium Lorem ipsium Lorem ipsium Lorem ipsium Lorem ipsium Lorem ipsium Lorem ipsium Lorem ipsium Lorem ipsium",
            userImage: '/images/pictures/4.webp'
        },

        {
            id:"afhyohcwyeuioyweufwhkfwifb",
            userName: "Aminoberen Jinodu",
            userDescription: "Lorem ipsium Lorem ipsium Lorem ipsium Lorem ipsium Lorem ipsium Lorem ipsium Lorem ipsium Lorem ipsium Lorem ipsium Lorem ipsium",
            userImage: '/images/pictures/2.webp'
        },

        {
            id:"akfojisdffhwifhweoifhwee",
            userName: "Daudu Dauda",
            userDescription: "Lorem ipsium Lorem ipsium Lorem ipsium Lorem ipsium Lorem ipsium Lorem ipsium Lorem ipsium Lorem ipsium Lorem ipsium Lorem ipsium",
            userImage: '/images/pictures/1.webp'
        },
    ];

    const userVoteShoeData= [
        {
            id: "sfsdfsdfsdvvwe",
            userName: "Ajanlekoko Sangbafo",
            userDescription: "Lorem ipsium Lorem ipsium Lorem ipsium Lorem ipsium Lorem ipsium Lorem ipsium Lorem ipsium Lorem ipsium Lorem ipsium Lorem ipsium",
            userImage: '/images/pictures/2.webp'
        },

        {
            id:"wyeuioyweufwhkfwifb",
            userName: "Aminoberen Jinodu",
            userDescription: "Lorem ipsium Lorem ipsium Lorem ipsium Lorem ipsium Lorem ipsium Lorem ipsium Lorem ipsium Lorem ipsium Lorem ipsium Lorem ipsium",
            userImage: '/images/pictures/3.webp'
        },

        {
            id:"fhwifhweoifhwee",
            userName: "Daudu Dauda",
            userDescription: "Lorem ipsium Lorem ipsium Lorem ipsium Lorem ipsium Lorem ipsium Lorem ipsium Lorem ipsium Lorem ipsium Lorem ipsium Lorem ipsium",
            userImage: '/images/pictures/1.webp'
        },

        {
            id: "pwouiensfsdfsdfsdvvwe",
            userName: "Ajanlekoko Sangbafo",
            userDescription: "Lorem ipsium Lorem ipsium Lorem ipsium Lorem ipsium Lorem ipsium Lorem ipsium Lorem ipsium Lorem ipsium Lorem ipsium Lorem ipsium",
            userImage: '/images/pictures/4.webp'
        },

        {
            id:"afhyohcwyeuioyweufwhkfwifb",
            userName: "Aminoberen Jinodu",
            userDescription: "Lorem ipsium Lorem ipsium Lorem ipsium Lorem ipsium Lorem ipsium Lorem ipsium Lorem ipsium Lorem ipsium Lorem ipsium Lorem ipsium",
            userImage: '/images/pictures/2.webp'
        },

        {
            id:"akfojisdffhwifhweoifhwee",
            userName: "Daudu Dauda",
            userDescription: "Lorem ipsium Lorem ipsium Lorem ipsium Lorem ipsium Lorem ipsium Lorem ipsium Lorem ipsium Lorem ipsium Lorem ipsium Lorem ipsium",
            userImage: '/images/pictures/1.webp'
        },
    ];

    const userVoteAccessoryData= [
        {
            id: "sfsdfsdfsdvvwe",
            userName: "Ajanlekoko Sangbafo",
            userDescription: "Lorem ipsium Lorem ipsium Lorem ipsium Lorem ipsium Lorem ipsium Lorem ipsium Lorem ipsium Lorem ipsium Lorem ipsium Lorem ipsium",
            userImage: '/images/pictures/2.webp'
        },

        {
            id:"wyeuioyweufwhkfwifb",
            userName: "Aminoberen Jinodu",
            userDescription: "Lorem ipsium Lorem ipsium Lorem ipsium Lorem ipsium Lorem ipsium Lorem ipsium Lorem ipsium Lorem ipsium Lorem ipsium Lorem ipsium",
            userImage: '/images/pictures/3.webp'
        },

        {
            id:"fhwifhweoifhwee",
            userName: "Daudu Dauda",
            userDescription: "Lorem ipsium Lorem ipsium Lorem ipsium Lorem ipsium Lorem ipsium Lorem ipsium Lorem ipsium Lorem ipsium Lorem ipsium Lorem ipsium",
            userImage: '/images/pictures/1.webp'
        },

        {
            id: "pwouiensfsdfsdfsdvvwe",
            userName: "Ajanlekoko Sangbafo",
            userDescription: "Lorem ipsium Lorem ipsium Lorem ipsium Lorem ipsium Lorem ipsium Lorem ipsium Lorem ipsium Lorem ipsium Lorem ipsium Lorem ipsium",
            userImage: '/images/pictures/4.webp'
        },

        {
            id:"afhyohcwyeuioyweufwhkfwifb",
            userName: "Aminoberen Jinodu",
            userDescription: "Lorem ipsium Lorem ipsium Lorem ipsium Lorem ipsium Lorem ipsium Lorem ipsium Lorem ipsium Lorem ipsium Lorem ipsium Lorem ipsium",
            userImage: '/images/pictures/2.webp'
        },

        {
            id:"akfojisdffhwifhweoifhwee",
            userName: "Daudu Dauda",
            userDescription: "Lorem ipsium Lorem ipsium Lorem ipsium Lorem ipsium Lorem ipsium Lorem ipsium Lorem ipsium Lorem ipsium Lorem ipsium Lorem ipsium",
            userImage: '/images/pictures/1.webp'
        },
    ];

    useEffect(() => {
        dispatch(setNavValue({action: "Polls"}));
      });



    
    return (
        <div className='mt-10 gap-y-6 flex flex-col'>

            <h1 className={`${pacificoFont.className} text-orange-800 text-5xl tracking-widest flex w-full justify-center`}>
            {"Polls"}
            </h1>

            <p className={`${rubikFont.className} w-[60%] mx-auto text-center`}>
                {"Designers with the highest vote in the respective category has the slot to showcase his or her designs for the year. So your voice matters! Cast your vote and see what the community thinks."}
            </p>

            <div className='w-[75%] mt-[50px] mx-auto flex flex-col items-center gap-y-[150px]'>
                
                <div className='w-full flex flex-col justify-center items-center gap-y-[30px]'>
                    <h1 className={`${rubikFont.className} text-2xl text-orange-800`}>
                        {"Winners of 2023 Poll"}
                    </h1>


                    <div className='w-full grid grid-cols-3 space-x-3'>
    
                        {
                        winnersData.map((item, index) => 
    
                            <div key={`winners${index}`} className={`${index%2 !==0 ? "animated-background-2 " : "animated-background-2-reverse"} p-8 h-[450px] w-[360px] flex flex-col gap-y-3 rounded-3xl overflow-hidden shadow-md drop-shadow-lg shadow-gray-500`}>
                                <div className='w-[200px] h-[200px] mx-auto overflow-hidden rounded-full border-[7px] border-white shadow-md shadow-gray-700 '>
                                    <Image quality={100} alt='' src={item.userImage} width={200} height={0}  className='w-full h-full object-cover'></Image>
                                </div>

                                <h1 className='w-full flex flex-col justify-center items-center text-xl text-orange-800'>
                                    {item.title} <span className="text-sm">{`(${item.votes} Votes)`}</span>
                                </h1>

                                <div className='flex flex-col justify-center items-center w-full gap-y-2'>

                                    <h1 className={`${interFont.className} text-sm font-bold`}>
                                        -{item.userName}
                                    </h1>

                                    <p className={`${interFont.className} text-sm text-center`}>
                                        {item.userDescription}
                                    </p>
                                </div>

                            </div>

                            )
                        }

                    </div>
                    
                    
                </div>




                <div className='w-full flex flex-col justify-center items-center gap-y-[30px]'>
                    <h1 className={`${rubikFont.className} text-2xl text-orange-800`}>
                        {"Clothes Category Poll"}
                    </h1>
                    

                    <div className='w-full grid grid-cols-3 gap-x-3 gap-y-8 border bg-gray-100 p-5 shadow-xl shadow-300'>
                        {
                            userVoteClothData.map((item, index) => 
                                <div key={`userVotesCloth${index}`} className={`${voteClothes=== item.id ? "bg-green-200" : "bg-white"} p-4 h-[450px] w-[360px] flex flex-col justify-center gap-y-3 rounded-3xl overflow-hidden shadow-md drop-shadow-lg shadow-gray-500`}>
                                    
                                    <div className='w-[200px] h-[200px] mx-auto overflow-hidden rounded-full border-[7px] border-white shadow-md shadow-gray-700 '>
                                        <Image quality={100} alt='' src={item.userImage} width={200} height={0}  className='w-full h-full object-cover'></Image>
                                    </div>

                                    <h1 className='text-center'>
                                        -{item.userName}
                                    </h1>

                                    <p className={`${interFont.className} text-sm text-center`}>
                                        {item.userDescription}
                                    </p>

                                    <div>
                                        <Button onClick={() => voteClothes!== item.id ? setVoteClothes(item.id) : setVoteClothes("")} className={`${rubikFont.className} ${voteClothes=== item.id ? "bg-green-500" : "bg-orange-700/80 sm:hover:bg-[#f0f0f0] sm:hover:text-orange-800 sm:hover:transition-colors hover:ease-linear sm:hover:duration-500"} outline-none rounded-3xl flex w-full justify-center items-center tracking-widest text-[15px]`}  >
                                            {voteClothes=== item.id ? "Cancel Vote" : "Vote"}
                                        </Button>
                                        
                                    </div>

                                </div>
                            )
                        }
    

                    </div>

                </div>




                <div className='w-full flex flex-col justify-center items-center gap-y-[30px]'>
                    <h1 className={`${rubikFont.className} text-2xl text-orange-800`}>
                        {"Shoes Category Poll"}
                    </h1>
                    

                    <div className='w-full grid grid-cols-3 gap-x-3 gap-y-8 border bg-gray-200 p-5 shadow-xl shadow-300'>
                        {
                            userVoteShoeData.map((item, index) => 
                                <div key={`userVotesShoe${index}`} className={`${voteShoes=== item.id ? "bg-green-100" : "bg-white"} p-4 h-[450px] w-[360px] flex flex-col justify-center gap-y-3 rounded-3xl overflow-hidden shadow-md drop-shadow-lg shadow-gray-500`}>
                                    
                                    <div className='w-[200px] h-[200px] mx-auto overflow-hidden rounded-full border-[7px] border-white shadow-md shadow-gray-700 '>
                                        <Image quality={100} alt='' src={item.userImage} width={200} height={0}  className='w-full h-full object-cover'></Image>
                                    </div>

                                    <h1 className='text-center'>
                                        -{item.userName}
                                    </h1>

                                    <p className={`${interFont.className} text-sm text-center`}>
                                        {item.userDescription}
                                    </p>

                                    <div>
                                        <Button onClick={() => voteShoes!== item.id ? setVoteShoes(item.id) : setVoteShoes("")} className={`${rubikFont.className} ${voteShoes=== item.id ? "bg-green-500" : "bg-orange-700/80 sm:hover:bg-[#f0f0f0] sm:hover:text-orange-800 sm:hover:transition-colors hover:ease-linear sm:hover:duration-500"} outline-none rounded-3xl flex w-full justify-center items-center tracking-widest text-[15px]`}  >
                                            {voteShoes=== item.id ? "Cancel Vote" : "Vote"}
                                        </Button>
                                        
                                    </div>

                                </div>
                            )
                        }
    

                    </div>

                </div>





                <div className='w-full flex flex-col justify-center items-center gap-y-[30px]'>
                    <h1 className={`${rubikFont.className} text-2xl text-orange-800`}>
                        {"Accessories Category Poll"}
                    </h1>
                    

                    <div className='w-full grid grid-cols-3 gap-x-3 gap-y-8 border bg-gray-200 p-5 shadow-xl shadow-300'>
                        {
                            userVoteAccessoryData.map((item, index) => 
                                <div key={`userVotesAccessory${index}`} className={`${voteAccessories=== item.id ? "bg-green-100" : "bg-white"} p-4 h-[450px] w-[360px] flex flex-col justify-center gap-y-3 rounded-3xl overflow-hidden shadow-md drop-shadow-lg shadow-gray-500`}>
                                    
                                    <div className='w-[200px] h-[200px] mx-auto overflow-hidden rounded-full border-[7px] border-white shadow-md shadow-gray-700 '>
                                        <Image quality={100} alt='' src={item.userImage} width={200} height={0}  className='w-full h-full object-cover'></Image>
                                    </div>

                                    <h1 className='text-center'>
                                        -{item.userName}
                                    </h1>

                                    <p className={`${interFont.className} text-sm text-center`}>
                                        {item.userDescription}
                                    </p>

                                    <div>
                                        <Button onClick={() => voteAccessories!== item.id ? setVoteAccessories(item.id) : setVoteAccessories("")} className={`${rubikFont.className} ${voteAccessories=== item.id ? "bg-green-500" : "bg-orange-700/80 sm:hover:bg-[#f0f0f0] sm:hover:text-orange-800 sm:hover:transition-colors hover:ease-linear sm:hover:duration-500"} outline-none rounded-3xl flex w-full justify-center items-center tracking-widest text-[15px]`}  >
                                            {voteAccessories=== item.id ? "Cancel Vote" : "Vote"}
                                        </Button>
                                        
                                    </div>

                                </div>
                            )
                        }
    

                    </div>

                </div>


            </div>

        </div>
    );
}

export default PageIndex