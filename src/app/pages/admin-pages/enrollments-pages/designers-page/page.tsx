"use client";
import p1 from "../../assets/images/p1.jpeg";
import { TiThMenu } from "react-icons/ti";
import { IoClose } from "react-icons/io5";
import { IoAddCircle } from "react-icons/io5";
import { MdDelete } from "react-icons/md";
import { useEffect, useState } from "react";
import axios from "axios";
import PieChart from "@/app/components/admin-components/analytics-components/PieChartComponent";
import Image from "next/image";
import HistogramChartComponent from "@/app/components/admin-components/analytics-components/HistogramChartComponent";
import DesktopMenuComponent from "@/app/components/admin-components/admin-shared-components/MenuComponent";
import NavBarComponent from "@/app/components/admin-components/admin-shared-components/NavBarComponent";
import MobileMenuComponent from "@/app/components/admin-components/admin-shared-components/MobileMenuComponent";
import { interFont } from "@/app/fonts/fontsConfig";
import { userAgent } from "next/server";
import { setNavAdminValue } from "@/app/state_management/reducers/admin-reducers/navAdminValue";
import { useDispatch } from "react-redux";
import SearchComponent from "@/app/components/admin-components/admin-shared-components/SearchComponent";
import MenuComponent from "@/app/components/admin-components/admin-shared-components/MenuComponent";

import DialogFormViewComponent from "@/app/components/admin-components/enrollments-component/designers-components/DesignerDialogFormComponent";
import UsersTabsComponents from "@/app/components/admin-components/admin-shared-components/UsersTabsComponent";
import PaginationComponent from "@/app/components/admin-components/admin-shared-components/PaginationComponent";
import DesignerDialogFormComponent from "@/app/components/admin-components/enrollments-component/designers-components/DesignerDialogFormComponent";



interface IDesignerUsersBase{
  username: string;
  email: string;
  created: Date;
  picture: string;
}


const PageIndex= ()=> {

    const dispatch= useDispatch();

    const searchUrl= "https://";


    useEffect(() => {
        dispatch(setNavAdminValue({action: "Designer"}));
      });



    let designerUsers:IDesignerUsersBase[]= [
      {username: "Aladewfuhweufhwefwefwejdba", email:"aalfhlajhfalf@slfjaf.afadf", created: new Date("2024-10-18T10:00:00"), picture: "/images/pictures/1.webp"},
      {username: "Sade Adu", email:"liwrleaalfhlajhfalf@slfjaf.afadf", created: new Date("2024-10-18T10:00:00"), picture: "/images/pictures/2.webp"},
      {username: "Sade Adu", email:"poiqpenaalfhlajhfalf@slfjaf.afadf", created: new Date("2024-10-18T10:00:00"), picture: "/images/pictures/3.webp"}
    ]
    


    return (        
        <div className="lg:col-span-4 h-full w-[90%] mx-auto mt-[50px] flex flex-col items-center gap-y-[50px]">
            <SearchComponent searchUrl={searchUrl}/> 

            <UsersTabsComponents designerUsers={designerUsers} DialogFormViewComponent={DesignerDialogFormComponent}/>

            <PaginationComponent  totalPageNo={5}/>
        </div>
    );
  }


export default PageIndex;