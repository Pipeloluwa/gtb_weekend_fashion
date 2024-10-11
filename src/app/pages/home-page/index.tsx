'use client';
import NavBar from '@/app/general_components/navBar';
import React, { useEffect, useRef, useState } from 'react';
import HomeSegment1 from './home-page-components/homeSegment1';
import IntroShow from './home-page-components/introShow';
import HomeSegment2 from './home-page-components/homeSegment2';
import { useDispatch } from 'react-redux';
import { setNavBg } from '@/app/state_management/reducers/nav_bg_state';
import { pacificoFont } from '@/app/fonts/fontsConfig';
import HomeSegment3 from './home-page-components/homeSegment3';
import Countdown from 'react-countdown';
import HomeSegment4 from './home-page-components/homeSegment4';
import Footer from '@/app/general_components/footer';
import HomeSegmentt5 from './home-page-components/homeSegment5';
import HomeSegment6 from './home-page-components/homeSegment6';
import HomeSegment7 from './home-page-components/homeSegment7';
import HomeSegment8 from './home-page-components/homeSegment8';



const HomeIndex = () => {
  const dateTime= new Date();
  dateTime.setMonth(1);

  const parentDivRef :React.MutableRefObject<HTMLDivElement | null>= useRef(null);
  const dispatch= useDispatch();

  const countDownData= {
    dateTime: "2024-11-03T01:02:03",
    picture: "/images/pictures/7.webp"
  }
  
  useEffect(() => {
    if (parentDivRef.current){
      const handleScroll= () => {
        dispatch(setNavBg({scrollValue: parentDivRef.current?.scrollTop}));
      }

      parentDivRef.current.addEventListener('scroll', handleScroll);  
    }
 
  });
  

  const [blackOutDone, setBlackOutDone]= useState<boolean>(true);

  return (
    <div ref={parentDivRef} className={`${pacificoFont.className} text-gray-800 h-svh overflow-hidden overflow-y-scroll`}>
      
      <NavBar />

      {/* {
        !blackOutDone
        &&
        <IntroShow setBlackOutDone={setBlackOutDone}/>

      } */}



      <div className='space-y-44 '>
        {/* <HomeSegment1 blackOutDone= {blackOutDone}/> */}

              
        {
          blackOutDone
          &&
          <>            

            {/* <HomeSegment2 /> */}

            {/* <Countdown date={countDownData.dateTime} renderer={HomeSegment4}>
            </Countdown> */}

            {/* <HomeSegment3 /> */}
            
            <HomeSegmentt5 />

            {/* <HomeSegment6 /> */}

            {/* <HomeSegment8 /> */}

            <HomeSegment7 />

            <Footer />

            
          </>
        }


      </div>
      

    </div>
  )
}

export default HomeIndex