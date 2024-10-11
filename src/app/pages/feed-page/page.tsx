
"use client";
import { pacificoFont, rubikFont } from '@/app/fonts/fontsConfig';
import NavBar from '@/app/general_components/navBar';
import { setNavBg, setNavBgManual } from '@/app/state_management/reducers/nav_bg_state';
import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { setYoutubeState } from '@/app/state_management/reducers/youtube_api_state';
import YouTube from 'react-youtube';
import { BiChevronDown, BiChevronUp, BiSolidDislike, BiSolidLike } from 'react-icons/bi';
import { FaEye } from 'react-icons/fa';
import { Button } from '@material-tailwind/react';
import { RootState } from '@/app/state_management/store';
import VideoDetailsDialog from './feed-page-components/videoDetailsDialog';
import { CgClose } from 'react-icons/cg';

interface IVideoItem {
  id: { videoId: string };
  snippet: { title: string; description: string };
  statistics: {
    viewCount: string;
    likeCount: string;
    dislikeCount: string;
  };
}


interface ICommentThread {
  snippet: {
    topLevelComment: {
      snippet: {
        textDisplay: string;
      };
    };
  };
}

interface ISingleData {
  id: { videoId: string };
  snippet: { 
    title: string; 
    description: string;
    topLevelComment: 
      {
        snippet: {
          textDisplay: string;
        };
      }[];
   };
  statistics: {
    viewCount: string;
    likeCount: string;
    dislikeCount: string;
  };
}

const PageIndex = () => {

  const parentDivRef :React.MutableRefObject<HTMLDivElement | null>= useRef(null);
  const dispatch= useDispatch();

  const data= [
    {
      id: {videoId: "/videos/landingPageVideoCut.mp4"},
      snippet: {title: "My worst ever date on Grilling was... | Chatty Patty with Michelle", description: "ever date on Grilling was.ever date on Grilling was.ever date on Grilling was.ever date on Grilling was.ever date on Grilling was.ever date on Grilling was.ever date on Grilling was.ever date on Grilling was.ever date on Grillingever date on Grilling was.ever date on Grilling was.ever date on Grilling was. was.Description"},
      statistics: {
        viewCount: "50",
        likeCount: "10",
        dislikeCount: "30"
      }
    },
    {
      id: {videoId: "/videos/landingPageVideoCut.mp4"},
      snippet: {title: "Title", description: "Description"},
      statistics: {
        viewCount: "50",
        likeCount: "10",
        dislikeCount: "30"
      }
    },
    {
      id: {videoId: "/videos/landingPageVideoCut.mp4"},
      snippet: {title: "Title", description: "Description"},
      statistics: {
        viewCount: "50",
        likeCount: "10",
        dislikeCount: "30"
      }
    },
    {
      id: {videoId: "/videos/landingPageVideoCut.mp4"},
      snippet: {title: "Title", description: "Description"},
      statistics: {
        viewCount: "50",
        likeCount: "10",
        dislikeCount: "30"
      }
    },
    {
      id: {videoId: "/videos/landingPageVideoCut.mp4"},
      snippet: {title: "Title", description: "Description"},
      statistics: {
        viewCount: "50",
        likeCount: "10",
        dislikeCount: "30"
      }
    },
    {
      id: {videoId: "/videos/landingPageVideoCut.mp4"},
      snippet: {title: "Title", description: "Description"},
      statistics: {
        viewCount: "50",
        likeCount: "10",
        dislikeCount: "30"
      }
    },
    {
      id: {videoId: "/videos/landingPageVideoCut.mp4"},
      snippet: {title: "Title", description: "Description"},
      statistics: {
        viewCount: "50",
        likeCount: "10",
        dislikeCount: "30"
      }
    }
  ]
  const [videos, setVideos] = useState<IVideoItem[]>([]);
  const [nextPageToken, setNextPageToken] = useState(null);
  const channelId= "UCPTp1DKGYEyUDjdjA_p1tbQ";
  const youtubeApiKey= "AIzaSyCcbmgZJVVRWWsknqQQNdsULT18V1PVFD4";
  const [dialogState, setDialogState]= useState(false);
  const [singleData, setSingleData]= useState<ISingleData>();

  
  useEffect(() => {
    dispatch(setNavBgManual({navValue: true}));
 
  });



  // useEffect(() => {
  //   if (!fetchStatus){
  //     fetchVideos();
  //   }

    
  // }, []);




  const fetchVideos = async () => {
    try {
      console.log("Started fetching videos");
      const response = await axios.get(
        `https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=${channelId}&type=video&order=date&maxResults=10&key=${youtubeApiKey}${   

          nextPageToken ? `&pageToken=${nextPageToken}` : ''
        }`
      );

      const newVideos = response.data.items;

      setVideos([...videos, ...newVideos]);
      setNextPageToken(response.data.nextPageToken);
      dispatch(setYoutubeState({stateValue: true}));
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };


  const loadMoreVideos = () => {
    if (nextPageToken) {
      fetchVideos();
    }
  };


  const singleDataFunction= async (video: IVideoItem) => {
    try {
      // const commentResponse = await axios.get(
      //   `https://www.googleapis.com/youtube/v3/commentThreads?part=snippet&videoId=${video.id}&key=YOUR_API_KEY`
      // );

      // console.log(commentResponse);

      // setSingleData(
      //   {
      //     id: { videoId: `${video.id}` },
      //     snippet: { 
      //       title: `${video.snippet.title}`,
      //       description: `${video.snippet.description}`,
      //       topLevelComment: [... commentResponse.data.items]
      //     },
      //     statistics: {
      //       viewCount: `${video.statistics.viewCount}}`,
      //       likeCount: `${video.statistics.likeCount}}`,
      //       dislikeCount: `${video.statistics.dislikeCount}}`
      //     }
      //   }
      // );

      setDialogState(value => !value);

    } catch (error) {
      console.error(error);
    }
  }









  
  return (

    
    <div ref={parentDivRef} className={`${rubikFont.className} text-gray-800 h-svh overflow-hidden overflow-y-scroll`}>
      <NavBar />



      {/* <VideoDetailsDialog singleData={singleData!} dialogState={dialogState} setDialogState={setDialogState}/> */}

      <div className='mt-10 gap-y-6 flex flex-col'>

        <h1 className={`${pacificoFont.className} text-orange-800 text-5xl tracking-widest flex w-full justify-center`}>
          Live Social Feeds
        </h1>

        <p className={`${rubikFont.className} w-[60%] mx-auto text-center`}>
            Keep updated right here and watch us!
        </p>


        <div className='mt-6 w-[75%] mx-auto'>

          <div className='flex flex-col gap-y-24'>
            {data.map((video) => (
              <div key={video.id.videoId} className='flex flex-col gap-y-5' >
                <video src={video.id.videoId}  className='aspect-auto shadow-md drop-shadow-lg shadow-gray-800'>

                </video>

                {/* <YouTube videoId={video.id.videoId} opts={{ height: '390', width: '640' }} /> */}
                <div className='w-full flex flex-col items-start gap-y-4'>

                  <div className='w-full flex items-center justify-between p-3 shadow-sm shadow-gray-300'>
                    
                    <h2 className='text-xl font-bold'>{video.snippet.title}</h2>

                    <div className='flex gap-x-5 items-center text-orange-900'>

                      <div className='flex items-center gap-x-1'>
                        <FaEye className='size-5'/>
                        <p>{video.statistics.viewCount} </p>
                      </div>

                      <div className='flex items-center gap-x-1'>
                        <BiSolidLike className='size-5'/>
                        <p>{video.statistics.likeCount} </p>
                      </div>

                      <div className='flex items-center gap-x-1'>
                        <BiSolidDislike className='size-5'/>
                        <p>{video.statistics.dislikeCount} </p>
                      </div>

                    </div>

                  </div>

                
                  <div className='w-full flex flex-col gap-y-2'>
                    <div>
                        <span>
                          {video.snippet.description}
                        </span>
                        
                        <button className='pl-3 text-orange-800'>
                          Read more...
                      </button>
                    </div>


                    <Button onClick={() => {return singleDataFunction(video)}} className={`border ${dialogState ? "border-orange-800" : "border-gray-300"} p-2 bg-gray-100 text-orange-800 flex justify-between items-center`}  placeholder={""} onPointerEnterCapture={ () => {}} onPointerLeaveCapture={ () => {}}>
                      <span className={`${rubikFont.className} tracking-widest`}>
                        View All Comments
                      </span>

                      <span>
                        {
                          dialogState
                          ? <BiChevronUp className='size-[30px]'/>

                          : <BiChevronDown className='size-[30px]'/>
                        }
                        
                      </span>
                    </Button>

                  </div>


                  {
                    dialogState
                    &&

                    <div className='text-gray-800 ml-8 '>
                      <p className='border-b border-gray-500 pb-2'>
                        My worst ever date on Grilling was... | Chatty Patty with Michelle", description: "ever date on Grilling was.ever date on Grilling was.ever date on Grilling was.ever date on Grilling was.ever date on Grilling was.ever date on Grilling was.ever date on Grilling was.ever date on Grilling was.ever date on Grillingever date on Grilling was.ever date on Grilling was.ever date on Grilling was. was.Description
                      </p>
                    </div>
                  
                  }


                </div>

                
                
              </div>
            ))}
            {nextPageToken && (
              <button onClick={loadMoreVideos}>Load More</button>
            )}
          </div>

        </div>


        {/* <iframe src="https://widget.tagembed.com/2131509" className='w-full h-[600px] border-none'>
        </iframe> */}

      </div>

    </div>
  );

}

export default PageIndex;