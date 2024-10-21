import { rubikFont } from '@/app/fonts/fontsConfig'

const HomeSegmentComponent8 = () => {
  return (
    <div className='flex flex-col gap-y-8'>
        <div className='w-full mx-auto flex flex-col justify-center items-center gap-y-6'>
            <h1 className='text-5xl tracking-widest text-orange-800'>
                {"Event Venue"}
            </h1>

            <p className={`${rubikFont.className} w-[60%] mx-auto text-center`}>
                {"Get to know where the event venue is located"}
            </p>



            <div className={`${rubikFont.className} flex items-center min-h-[700px] w-full bg-gray-100`}>
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.749130469827!2d3.4218632747320425!3d6.42626872428615!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103bf53227d3261b%3A0x66efbe21b1b35843!2sEko%20Hotel!5e0!3m2!1sen!2sng!4v1728141670808!5m2!1sen!2sng" width="600" height="450"  allowFullScreen={true} loading="lazy" referrerPolicy="no-referrer-when-downgrade"
                className='w-full h-[700px] flex'
                >
              </iframe>

            </div>
        
        </div>

        <div>

        </div>

    </div>
  )
}

export default HomeSegmentComponent8