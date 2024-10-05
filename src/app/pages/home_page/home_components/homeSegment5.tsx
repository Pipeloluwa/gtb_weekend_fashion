import { rubikFont } from "@/app/fonts/fontsConfig";
import Slider from "@ant-design/react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import { useRef, useState } from "react";
import { GrLinkNext, GrLinkPrevious } from "react-icons/gr";
import { Button, IconButton } from "@material-tailwind/react";
import DesignerShowcaseDialog from "./designerShowcaseDialog";

 
const HomeSegmentt5=()=> {

  const clothesCategoryData= [
    {picture: "/images/pictures/woman-6670772_1280.webp", name: "Royal Apparel", price:"#10000000", vendor_details:{name: "Louious Vuitton", whatsapp_no: "923094824223", "website": "www.louious.com", social_handle: "louious@instagram.com"}},
    {picture: "/images/pictures/woman-6771288_1280.webp", name: "Agbada", price:"#10000000", vendor_details:{name: "Louious Vuitton", whatsapp_no: "923094824223", "website": "www.louious.com", social_handle: "louious@instagram.com"}},
    {picture: "/images/pictures/ai-generated-8195533_1280.webp", name: "Dandogo", price:"#10000000", vendor_details:{name: "Louious Vuitton", whatsapp_no: "923094824223", "website": "www.louious.com", social_handle: "louious@instagram.com"}},
    {picture: "/images/pictures/AdobeStock_485804515.webp", name: "Siki", price:"#10000000", vendor_details:{name: "Louious Vuitton", whatsapp_no: "923094824223", "website": "www.louious.com", social_handle: "louious@instagram.com"}},
    {picture: "/images/pictures/fashion-3080626_1280.webp", name: "Vintage", price:"#10000000", vendor_details:{name: "Louious Vuitton", whatsapp_no: "923094824223", "website": "www.louious.com", social_handle: "louious@instagram.com"}},
    {picture: "/images/pictures/drake-s-takes-vKnRYW-mtek-unsplash.webp", name: "Versace", price:"#10000000", vendor_details:{name: "Louious Vuitton", whatsapp_no: "923094824223", "website": "www.louious.com", social_handle: "louious@instagram.com"}}
  ];


  const shoesCategoryData= [
    {picture: "/images/pictures/shoes-1433925_1280.webp", name: "Akube Shoe", price:"#10000000", vendor_details:{name: "Louious Vuitton", whatsapp_no: "923094824223", "website": "www.louious.com", social_handle: "louious@instagram.com"}},
    {picture: "/images/pictures/oxford-shoes-6078993_1280.webp", name: "Aba Shoe", price:"#10000000", vendor_details:{name: "Louious Vuitton", whatsapp_no: "923094824223", "website": "www.louious.com", social_handle: "louious@instagram.com"}},
    {picture: "/images/pictures/mohammad-metri-E-0ON3VGrBc-unsplash.webp", name: "Adidas", price:"#10000000", vendor_details:{name: "Louious Vuitton", whatsapp_no: "923094824223", "website": "www.louious.com", social_handle: "louious@instagram.com"}},
    {picture: "/images/pictures/malvestida-DMl5gG0yWWY-unsplash.webp", name: "Abibas", price:"#10000000", vendor_details:{name: "Louious Vuitton", whatsapp_no: "923094824223", "website": "www.louious.com", social_handle: "louious@instagram.com"}},
    {picture: "/images/pictures/fashion-1284496_1280.webp", name: "Nike", price:"#10000000", vendor_details:{name: "Louious Vuitton", whatsapp_no: "923094824223", "website": "www.louious.com", social_handle: "louious@instagram.com"}},
    {picture: "/images/pictures/domino-studio-164_6wVEHfI-unsplash.webp", name: "Puma", price:"#10000000", vendor_details:{name: "Louious Vuitton", whatsapp_no: "923094824223", "website": "www.louious.com", social_handle: "louious@instagram.com"}},
    {picture: "/images/pictures/brogue-shoes-5983822_1280.webp", name: "Timberland", price:"#10000000", vendor_details:{name: "Louious Vuitton", whatsapp_no: "923094824223", "website": "www.louious.com", social_handle: "louious@instagram.com"}},
    {picture: "/images/pictures/balancing-1868051_1280.webp", name: "Cover Shoe", price:"#10000000", vendor_details:{name: "Louious Vuitton", whatsapp_no: "923094824223", "website": "www.louious.com", social_handle: "louious@instagram.com"}},
    {picture: "/images/pictures/allyson-johnson-lY3d_sIzBXg-unsplash.webp", name: "Flawless Leather", price:"#10000000", vendor_details:{name: "Louious Vuitton", whatsapp_no: "923094824223", "website": "www.louious.com", social_handle: "louious@instagram.com"}}
  ];


  const shoesAccessoriesCategoryData= [
    {picture: "/images/pictures/accessory-3002608_1280.webp", name: "Oju Igo", price:"#10000000", vendor_details:{name: "Louious Vuitton", whatsapp_no: "923094824223", "website": "www.louious.com", social_handle: "louious@instagram.com"}},
    {picture: "/images/pictures/male-watch-144648_1280.webp", name: "Adidas", price:"#10000000", vendor_details:{name: "Louious Vuitton", whatsapp_no: "923094824223", "website": "www.louious.com", social_handle: "louious@instagram.com"}},
    {picture: "/images/pictures/cap-1662654_1280.webp", name: "Abibas", price:"#10000000", vendor_details:{name: "Louious Vuitton", whatsapp_no: "923094824223", "website": "www.louious.com", social_handle: "louious@instagram.com"}},
    {picture: "/images/pictures/glasses-3965545_1280.webp", name: "Nike", price:"#10000000", vendor_details:{name: "Louious Vuitton", whatsapp_no: "923094824223", "website": "www.louious.com", social_handle: "louious@instagram.com"}},
    {picture: "/images/pictures/male-watch-188780_1280.webp", name: "Puma", price:"#10000000", vendor_details:{name: "Louious Vuitton", whatsapp_no: "923094824223", "website": "www.louious.com", social_handle: "louious@instagram.com"}},
    {picture: "/images/pictures/portrait-7676482_1280.webp", name: "Timberland", price:"#10000000", vendor_details:{name: "Louious Vuitton", whatsapp_no: "923094824223", "website": "www.louious.com", social_handle: "louious@instagram.com"}},
    {picture: "/images/pictures/watch-140487_1280.webp", name: "Cover Shoe", price:"#10000000", vendor_details:{name: "Louious Vuitton", whatsapp_no: "923094824223", "website": "www.louious.com", social_handle: "louious@instagram.com"}},
    {picture: "/images/pictures/time-3091031_1280.webp", name: "Flawless Leather", price:"#10000000", vendor_details:{name: "Louious Vuitton", whatsapp_no: "923094824223", "website": "www.louious.com", social_handle: "louious@instagram.com"}}
  ];

  const [singleClothesCategoryData, setSingleClothesCategoryData]= useState({
    picture: "/images/pictures/woman-6670772_1280.webp",
    name: "Royal Apparel", 
    price:"#10000000", 
    vendor_details:{
      name: "Louious Vuitton", 
      whatsapp_no: "923094824223", 
      website: "www.louious.com", 
      social_handle: "louious@instagram.com"
    }
  });

  const [dialogState, setDialogState]= useState(false);

  const sliderRef = useRef<Slider|null>(null);
  const sliderShoesRef = useRef<Slider|null>(null);
  const sliderCapSpecRef = useRef<Slider|null>(null);



  
  return (

    <div className='flex flex-col justify-center items-center w-[75%] mx-auto gap-y-6'>
      
      <DesignerShowcaseDialog singleClothesCategoryData={singleClothesCategoryData} dialogState={dialogState} setDialogState={setDialogState}/>
      
      
      <h1 className='text-5xl tracking-widest text-orange-800'>
          Designers' Showcase
      </h1>

      <p className={`${rubikFont.className} w-[60%] mx-auto text-center`}>
          From boardrooms to courtrooms to runways and everywhere in between, we all have our unique sense of style, and Together, we are Africa's Finest.
      </p>
      

      <div className="mt-4 p-5 flex flex-col gap-y-6 w-full h-full justify-center items-center ">

        {/* ++++++++++++++++++++++++ CLOTHES +++++++++++++++++++++++++++ */}
        <div className="flex flex-col gap-y-8 w-full h-full justify-center items-center border bg-gray-100 p-5 shadow-xl shadow-300">
          <h1 className={`${rubikFont.className} text-2xl text-orange-800`}>
            Clothes Category
          </h1>

          <div className="image-slider-container flex w-full h-full gap-x-3 justify-center items-center">
            <IconButton onClick={()=> {sliderRef.current&& sliderRef.current.slickPrev(); }}  className="cursor-pointer flex justify-center items-center rounded-full size-[40px] bg-orange-800 text-white" placeholder={""} onPointerEnterCapture={ () => {}} onPointerLeaveCapture={ () => {}}>
              <GrLinkPrevious className="size-[20px]"/>
            </IconButton>

            <Slider  
              ref={slider => {
                sliderRef.current = slider;
              }}
              arrows={false}
              dots={false} 
              slidesToShow={3} 
              infinite={true} 
              speed={1400} 
              autoplay={true} 
              pauseOnHover={true}
              className="w-[85%] h-full flex justify-center items-center overflow-hidden rounded-3xl"
            >
              {
                    clothesCategoryData.map((item, index) => {
                        return (
                            <div key={`inspirationalKey${index}`} className='overflow-hidden h-[320px] w-[350px] flex justify-center items-center'>
                                
                                <div key={`inspirationalKey${index}`} className='relative overflow-hidden h-[300px] w-[90%] mx-auto flex items-center bg-gray-500 rounded-3xl shadow-md drop-shadow-lg shadow-gray-800'>
                                  <Image quality={100} alt='picture' src={item.picture} width={350} height={300} className='absolute top-0 bottom-0 left-0 right-0 flex w-full h-full object-cover'>
                                  </Image>

                                  <div className='absolute bottom-0 left-0 right-0 flex flex-col gap-y-2 p-4 from-black/5 to-gray-800 bg-gradient-to-b'>
                                      <p className={`${rubikFont.className} text-sm text-white tracking-widest`}>
                                          {item.name}
                                      </p>

                                      <p className={`${rubikFont.className} text-lg text-white tracking-widest`}>
                                          {item.price}
                                      </p>

                                      <Button onClick={() => {setSingleClothesCategoryData(item); setDialogState(true);}} className={`${rubikFont.className} rounded-3xl flex w-full justify-center items-center tracking-widest text-[15px] bg-orange-700/80 small-button sm:hover:bg-[#f0f0f0] sm:hover:text-orange-800 sm:hover:transition-colors hover:ease-linear sm:hover:duration-500`}  placeholder={""} onPointerEnterCapture={ () => {}} onPointerLeaveCapture={ () => {}}>
                                          Get Now
                                      </Button>

                                  </div>
                                </div>
                              
                            </div>
                        )
                    })
                }
            </Slider>


            <IconButton onClick={()=> {sliderRef.current&& sliderRef.current.slickNext();}} className="cursor-pointer flex justify-center items-center rounded-full size-[40px] bg-orange-800 text-white" placeholder={""} onPointerEnterCapture={ () => {}} onPointerLeaveCapture={ () => {}}>
              <GrLinkNext  className="size-[20px]"/>
            </IconButton>   

          </div>
        </div>



        <br />
        <br />
        <br />
          
        {/* ++++++++++++++++++++++++ SHOES +++++++++++++++++++++++++++ */}
        <div className="flex flex-col gap-y-8 w-full h-full justify-center items-center border bg-gray-100 p-5 shadow-xl shadow-300">
          <h1 className={`${rubikFont.className} text-2xl text-orange-800`}>
            Shoes Category
          </h1>

          <div className="image-slider-container flex w-full h-full gap-x-3 justify-center items-center">
            <IconButton onClick={()=> {sliderShoesRef.current&& sliderShoesRef.current.slickPrev();}} className="cursor-pointer flex justify-center items-center rounded-full size-[40px] bg-orange-800 text-white" placeholder={""} onPointerEnterCapture={ () => {}} onPointerLeaveCapture={ () => {}}>
              <GrLinkPrevious className="size-[20px]"/>
            </IconButton>

            <Slider  
              ref={slider => {
                sliderShoesRef.current = slider;
              }}
              arrows={false}
              dots={false} 
              slidesToShow={3} 
              infinite={true} 
              speed={1400} 
              autoplay={true} 
              pauseOnHover={true}
              className="w-[85%] h-full flex justify-center items-center overflow-hidden rounded-3xl"
            >
              {
                    shoesCategoryData.map((item, index) => {
                        return (
                            <div key={`shoesCategoryKey${index}`} className='overflow-hidden h-[320px] w-[350px] flex justify-center items-center'>
                                
                                <div key={`shoesCategoryKey${index}`} className='relative overflow-hidden h-[300px] w-[90%] mx-auto flex items-center bg-gray-500 rounded-3xl shadow-md drop-shadow-lg shadow-gray-800'>
                                  <Image quality={100} alt='picture' src={item.picture} width={350} height={300} className='absolute top-0 bottom-0 left-0 right-0 flex w-full h-full object-cover'>
                                  </Image>

                                  <div className='absolute bottom-0 left-0 right-0 flex flex-col gap-y-2 p-4 from-black/5 to-gray-800 bg-gradient-to-b'>
                                      <p className={`${rubikFont.className} text-sm text-white tracking-widest`}>
                                          {item.name}
                                      </p>

                                      <p className={`${rubikFont.className} text-lg text-white tracking-widest`}>
                                          {item.price}
                                      </p>

                                      <Button onClick={() => {setSingleClothesCategoryData(item); setDialogState(true);}} className={`${rubikFont.className} rounded-3xl flex w-full justify-center items-center tracking-widest text-[15px] bg-orange-700/80 small-button sm:hover:bg-[#f0f0f0] sm:hover:text-orange-800 sm:hover:transition-colors hover:ease-linear sm:hover:duration-500`}  placeholder={""} onPointerEnterCapture={ () => {}} onPointerLeaveCapture={ () => {}}>
                                          Get Now
                                      </Button>

                                  </div>
                                </div>
                              
                            </div>
                        )
                    })
                }
            </Slider>


            <IconButton onClick={()=> {sliderShoesRef.current&& sliderShoesRef.current.slickNext();}} className="cursor-pointer flex justify-center items-center rounded-full size-[40px] bg-orange-800 text-white" placeholder={""} onPointerEnterCapture={ () => {}} onPointerLeaveCapture={ () => {}}>
              <GrLinkNext  className="size-[20px]"/>
            </IconButton>   

          </div>
        </div>



        <br />
        <br />
        <br />

        {/* ++++++++++++++++++++++++ ACCESSORIES +++++++++++++++++++++++++++ */}
        <div className="flex flex-col gap-y-8 w-full h-full justify-center items-center border bg-gray-100 p-5 shadow-xl shadow-300">
          <h1 className={`${rubikFont.className} text-2xl text-orange-800`}>
            Accessories Category
          </h1>

          <div className="image-slider-container flex w-full h-full gap-x-3 justify-center items-center">
            <IconButton onClick={()=> {sliderCapSpecRef.current&& sliderCapSpecRef.current.slickPrev();}} className="cursor-pointer flex justify-center items-center rounded-full size-[40px] bg-orange-800 text-white" placeholder={""} onPointerEnterCapture={ () => {}} onPointerLeaveCapture={ () => {}}>
              <GrLinkPrevious className="size-[20px]"/>
            </IconButton>

            <Slider  
              ref={slider => {
                sliderCapSpecRef.current = slider;
              }}
              arrows={false}
              dots={false} 
              slidesToShow={3} 
              infinite={true} 
              speed={1400} 
              autoplay={true} 
              pauseOnHover={true}
              className="w-[85%] h-full flex justify-center items-center overflow-hidden rounded-3xl"
            >
              {
                    shoesAccessoriesCategoryData.map((item, index) => {
                        return (
                            <div key={`shoesAccessoriesKey${index}`} className='overflow-hidden h-[320px] w-[350px] flex justify-center items-center'>
                                
                                <div key={`shoesAccessoriesKey${index}`} className='relative overflow-hidden h-[300px] w-[90%] mx-auto flex items-center bg-gray-500 rounded-3xl shadow-md drop-shadow-lg shadow-gray-800'>
                                  <Image quality={100} alt='picture' src={item.picture} width={350} height={300} className='absolute top-0 bottom-0 left-0 right-0 flex w-full h-full object-cover'>
                                  </Image>

                                  <div className='absolute bottom-0 left-0 right-0 flex flex-col gap-y-2 p-4 from-black/5 to-gray-800 bg-gradient-to-b'>
                                      <p className={`${rubikFont.className} text-sm text-white tracking-widest`}>
                                          {item.name}
                                      </p>

                                      <p className={`${rubikFont.className} text-lg text-white tracking-widest`}>
                                          {item.price}
                                      </p>

                                      <Button onClick={() => {setSingleClothesCategoryData(item); setDialogState(true);}} className={`${rubikFont.className} rounded-3xl flex w-full justify-center items-center tracking-widest text-[15px] bg-orange-700/80 small-button sm:hover:bg-[#f0f0f0] sm:hover:text-orange-800 sm:hover:transition-colors hover:ease-linear sm:hover:duration-500`}  placeholder={""} onPointerEnterCapture={ () => {}} onPointerLeaveCapture={ () => {}}>
                                          Get Now
                                      </Button>

                                  </div>
                                </div>
                              
                            </div>
                        )
                    })
                }
            </Slider>


            <IconButton onClick={()=> {sliderCapSpecRef.current&& sliderCapSpecRef.current.slickNext();}} className="cursor-pointer flex justify-center items-center rounded-full size-[40px] bg-orange-800 text-white" placeholder={""} onPointerEnterCapture={ () => {}} onPointerLeaveCapture={ () => {}}>
              <GrLinkNext  className="size-[20px]"/>
            </IconButton>   

          </div>
        </div>


      </div>

    </div>
  );
}

export default HomeSegmentt5;