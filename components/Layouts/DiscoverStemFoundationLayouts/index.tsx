"use client";

import { Box } from "@mui/material";

import FoundationNav from "./FoundationNav";

import StemEducationSection from "./StemEducationSection";
import { useState } from "react";
import CtaBanner from "@/components/Widgets/common/CommonCta";
import { ctaBannerData } from "@/assets/Generic-data";
import HeroSection from "@/components/Widgets/common/HeroSection";
export default function DiscoverStemFoundationLayout(){
    const [activeTab, setActiveTab] = useState("Foundation");

    const mySlides = [
    { 
      title: "DiscoverSTEM Foundation",
      image: "/Images/AboutUs/HeroSection.png" 
    },
    { 
      title: "DiscoverSTEM Foundation",
      image: "/Images/AboutUs/HeroSection.png" 
    },
    { 
      title: "DiscoverSTEM Foundation",
      image: "/Images/AboutUs/HeroSection.png" 
    },
  ];

    return(
        <Box component='main'>
            <HeroSection  slides={mySlides}/>
            <FoundationNav active={activeTab} onChange={setActiveTab}/>
            <StemEducationSection activeSection={activeTab}/>
           <CtaBanner data={ctaBannerData}/>
        </Box>
    )
}