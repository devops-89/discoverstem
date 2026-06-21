"use client";

import { Box } from "@mui/material";

import FoundationNav from "./FoundationNav";
import HeroSection from "./HeroSection";
import StemEducationSection from "./StemEducationSection";
import { useState } from "react";
import CtaBanner from "@/components/Widgets/common/CommonCta";
import { ctaBannerData } from "@/assets/Generic-data";
export default function DiscoverStemFoundationLayout(){
    const [activeTab, setActiveTab] = useState("Foundation");
    return(
        <Box component='main'>
            <HeroSection/>
            <FoundationNav active={activeTab} onChange={setActiveTab}/>
            <StemEducationSection activeSection={activeTab}/>
           <CtaBanner data={ctaBannerData}/>
        </Box>
    )
}