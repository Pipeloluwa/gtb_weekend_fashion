'use client';
import React, { useEffect, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { setNavBg } from '@/app/state_management/reducers/client-reducers/navBgState';
import HomeSegment5 from '../../../components/client-components/home-components/HomeSegmentComponent5';
import HomeSegment7 from '../../../components/client-components/home-components/HomeSegmentComponent7';
import HomeSegment8, { IEmbeddedSource } from '../../../components/client-components/home-components/HomeSegmentComponent8';
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
  
  const mapSource: IEmbeddedSource= {
    source: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.749130469827!2d3.4218632747320425!3d6.42626872428615!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103bf53227d3261b%3A0x66efbe21b1b35843!2sEko%20Hotel!5e0!3m2!1sen!2sng!4v1728141670808!5m2!1sen!2sng"
  }

  return (
    <>

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

            <HomeSegment8 source={mapSource.source}/>

            <HomeSegment7 />

            
          </>
        }


      </div>
      

    </>
  )
}

export default HomeIndex