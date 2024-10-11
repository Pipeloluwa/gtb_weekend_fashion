import { Dispatch, SetStateAction } from 'react';
import { Dialog, DialogBody } from '@material-tailwind/react';
import { rubikFont } from '@/app/fonts/fontsConfig';
import Image from 'next/image';
import { CgClose } from 'react-icons/cg';


interface IShowcaseData {
    singleData: {
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
    };

    dialogState: boolean;
    setDialogState: Dispatch<SetStateAction<boolean>>;
}


const VideoDetailsDialog:React.FC<IShowcaseData>= ({singleData, dialogState, setDialogState}) => {
    

    return (
        <div className={`${rubikFont.className} h-[50%] bg-gray-100 rounded-3xl overflow-hidden z-10 fixed bottom-0 left-0 right-0 flex justify-between mx-auto`}>

            <div className='cursor-pointer absolute right-10 m-4 size-[35px] bg-white rounded-full flex justify-center items-center shadow-sm shadow-black'>
                <CgClose className='size-[25px] text-red-500'/>
            </div>

            <div className='w-[75%] mx-auto pt-10 flex flex-col gap-y-3'>
                <p className='border-b border-gray-500 pb-2'>
                    My worst ever date on Grilling was... | Chatty Patty with Michelle", description: "ever date on Grilling was.ever date on Grilling was.ever date on Grilling was.ever date on Grilling was.ever date on Grilling was.ever date on Grilling was.ever date on Grilling was.ever date on Grilling was.ever date on Grillingever date on Grilling was.ever date on Grilling was.ever date on Grilling was. was.Description
                </p>
            </div>

        </div>
    )
}

export default VideoDetailsDialog;
