"use client";

import { useState } from "react";
import { Box } from "@mui/material";

import ExpertsNavbar from "./ExpertsNavbar";
import ExpertsSection from "./ExpertsSection";
import HeroSection from "./HeroSection";
import CtaBanner from "@/components/Widgets/common/CommonCta";
import { ctaBannerData } from "@/assets/Generic-data";

export default function PanelofExpertsLayouts(){
    const [activeTab, setActiveTab] = useState("All experts");

    return(
        <Box component="main">
        <HeroSection/>
        <ExpertsNavbar active={activeTab} onChange={setActiveTab}/>
        <ExpertsSection activeTab={activeTab}/>
        <CtaBanner data={ctaBannerData} />
        </Box>
    )
}