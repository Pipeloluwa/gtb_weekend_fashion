"use client";
import { useState } from "react";
import LogoComponent from "../../client-components/client-shared-components/LogoComponent";


const MobileMenuComponent= ()=> {
    const mobileMenu= false;

    const [current_active, setCurrentActive] = useState("dashboard");
   
    return (
        <div className="lg:hidden h-screen ">
            {
                mobileMenu 
                    ? 
                    <div className="lg:hidden transition pb-8 pt-4 bg-[#363636] z-10 fixed left-0 flex flex-col justify-between items-start py-8 px-8 h-full w-[50%]">
                        <LogoComponent />

                        <div className="h-full flex w-full items-center justify-center py-4">
                            <div className="flex flex-col justify-between h-full  mt-6 ">
                                <div className="flex flex-col justify-center gap-y-4 w-[100px] "> 
                                    <div className= " flex">
                                        <label className={`${current_active === "dashboard" ? "font-medium border-2 border-green-300 " : "font-normal opacity-65 border-transparent border-2"} rounded-2xl hover:border-2 hover:border-yellow-300 cursor-pointer text-white p-[8px]`}>
                                        Dashboard
                                        </label>
                                    </div>

                                    <div className= " flex">
                                        <label className={`${current_active === "models" ? "font-medium border-2 border-green-300 " : "font-normal opacity-65 border-transparent border-2"} rounded-2xl hover:border-2 hover:border-yellow-300 cursor-pointer text-white p-[8px]`}>
                                        Models
                                        </label>
                                    </div>

                                    <div className= " flex ">
                                        <label className={`${current_active === "users" ? "font-medium border-2 border-green-300 " : "font-normal opacity-65 border-transparent border-2"} rounded-2xl hover:border-2 hover:border-yellow-300 cursor-pointer text-white p-[8px]`}>
                                        Users
                                        </label>
                                    </div>

                                    <div className= " flex pointer-events-none opacity-30">
                                        <label className={`${current_active === "locations" ? "font-medium border-2 border-green-300 " : "font-normal opacity-65 border-transparent border-2"} rounded-2xl hover:border-2 hover:border-yellow-300 cursor-pointer text-white p-[8px]`}>
                                        Locations
                                        </label>
                                    </div>

                                    <div className= " flex pointer-events-none opacity-30">
                                        <label className={`${current_active === "report" ? "font-medium border-2 border-green-300 " : "font-normal opacity-65 border-transparent border-2"} rounded-2xl hover:border-2 hover:border-yellow-300 cursor-pointer text-white p-[8px]`}>
                                            Report
                                        </label>
                                    </div>

                                </div>


                                <div className="cursor-pointer text-white"> 
                                    Sign out
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    
                    : ""
            }

        </div>
 
    )
}


export default MobileMenuComponent;
