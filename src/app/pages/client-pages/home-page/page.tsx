'use client';
import NavBar from '@/app/components/client-components/client-shared-components/NavBarComponent';
import React, { useEffect, useRef, useState } from 'react';
import Countdown from 'react-countdown';
import HomeSegment1 from '../../../components/client-components/home-components/HomeSegmentComponent1';
import IntroShow from '../../../components/client-components/home-components/IntroShowComponent';
import HomeSegment2 from '../../../components/client-components/home-components/HomeSegmentComponent2';
import { useDispatch } from 'react-redux';
import { setNavBg } from '@/app/state_management/reducers/client-reducers/navBgState';
import { pacificoFont } from '@/app/fonts/fontsConfig';
import HomeSegment3 from '../../../components/client-components/home-components/HomeSegmentComponent3';
import HomeSegment4 from '../../../components/client-components/home-components/HomeSegmentComponent4';
import Footer from '@/app/components/client-components/client-shared-components/FooterComponent';
import HomeSegment5 from '../../../components/client-components/home-components/HomeSegmentComponent5';
import HomeSegment6 from '../../../components/client-components/home-components/HomeSegmentComponent6';
import HomeSegment7 from '../../../components/client-components/home-components/HomeSegmentComponent7';
import HomeSegment8 from '../../../components/client-components/home-components/HomeSegmentComponent8';
import { setNavValue } from '@/app/state_management/reducers/client-reducers/navValue';



const HomeIndex = () => {
  const dateTime= new Date();
  dateTime.setMonth(1);

  const parentDivRef :React.MutableRefObject<HTMLDivElement | null>= useRef(null);
  const dispatch= useDispatch();
  const [blackOutDone, setBlackOutDone]= useState<boolean>(true);


  useEffect(() => {
    if (parentDivRef.current){
      const handleScroll= () => {
        dispatch(setNavBg({scrollValue: parentDivRef.current?.scrollTop}));
      }

      parentDivRef.current.addEventListener('scroll', handleScroll);  
    }

  });


  useEffect(() => {
    dispatch(setNavValue({action: "Home"}));
  });

  const countDownData= {
    dateTime: "2024-11-03T01:02:03",
    picture: "/images/pictures/7.webp"
  }
  
  

  return (
    <>
      
      {/* <NavBar /> */}

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
            
            <HomeSegment5 />

            {/* <HomeSegment6 /> */}

            <HomeSegment8 />

            <HomeSegment7 />

            <Footer />

            
          </>
        }


      </div>
      

    </>
  )
}

export default HomeIndex