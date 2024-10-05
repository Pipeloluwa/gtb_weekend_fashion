import { Dispatch, SetStateAction } from 'react';
import { Dialog, DialogBody } from '@material-tailwind/react';
import { rubikFont } from '@/app/fonts/fontsConfig';
import Image from 'next/image';


interface IShowcaseData {
    singleClothesCategoryData: {
        picture: string,
        name: string, 
        price: string, 
        vendor_details:{
            name: string, 
            whatsapp_no: string, 
            website: string, 
            social_handle: string
        }
    };

    dialogState: boolean;
    setDialogState: Dispatch<SetStateAction<boolean>>;
}


const DesignerShowcaseDialog:React.FC<IShowcaseData>= ({singleClothesCategoryData, dialogState, setDialogState}) => {
    

    return (
        <div className={`${rubikFont.className} tracking-widest pt-10 z-10 flex justify-between mx-auto`}>
            <Dialog
                open= {dialogState}
                handler={() => {setDialogState(false)}} 
                className='bg-white/70 rounded-3xl'
                size='xs'
                placeholder={""} onPointerEnterCapture={ () => {}} onPointerLeaveCapture={ () => {}}
            >

                <DialogBody className={`${rubikFont.className} tracking-widest flex flex-col gap-y-3 w-full items-center justify-center text-white`} placeholder={""} onPointerEnterCapture={ () => {}} onPointerLeaveCapture={ () => {}}>
                    
                    <div className='relative overflow-hidden h-[300px] w-full mx-auto flex items-center bg-gray-500 rounded-3xl shadow-md drop-shadow-lg shadow-gray-600'>
                        <Image quality={100} alt='picture' src={singleClothesCategoryData.picture} width={350} height={400} className='absolute top-0 bottom-0 left-0 right-0 flex w-full h-full object-cover'>
                        </Image>

                        <div className='absolute bottom-0 left-0 right-0 flex flex-col gap-y-2 p-4 from-black/5 to-gray-800 bg-gradient-to-b'>
                            <p className="text-sm text-white tracking-widest">
                                {singleClothesCategoryData.name}
                            </p>

                            <p className='text-lg text-white tracking-widest'>
                                {singleClothesCategoryData.price}
                            </p>

                        </div>
                    </div>




                    <div className='text-sm flex flex-col rounded-3xl w-full gap-y-2 p-4 bg-gradient-to-b from-orange-600 to-orange-900'>
                        <h1 className='flex w-full justify-between'>
                            NAME: <span>{singleClothesCategoryData.vendor_details.name}</span>
                        </h1>

                        <h1 className='flex w-full justify-between'>
                            WEBSITE: <span>{singleClothesCategoryData.vendor_details.website}</span>
                        </h1>

                        <h1 className='flex w-full justify-between'>
                            PHONE NO: <span>{singleClothesCategoryData.vendor_details.whatsapp_no}</span>
                        </h1>

                        <h1 className='flex w-full justify-between'>
                            SOCIAL: <span>{singleClothesCategoryData.vendor_details.social_handle}</span>
                        </h1>


                        <a target='_blank' rel='noopener noreferrer' href={`https://wa.me/${singleClothesCategoryData.vendor_details.whatsapp_no}`} onClick={() => {}} className={`${rubikFont.className} rounded-3xl flex w-full justify-center items-center tracking-widest text-[15px] bg-white small-button text-orange-800`}>
                            Contact Whatsapp No
                        </a>

                    </div>



                
                </DialogBody>

            </Dialog>


        </div>
    )
}

export default DesignerShowcaseDialog;
