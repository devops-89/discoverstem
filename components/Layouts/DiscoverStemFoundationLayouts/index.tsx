"use client";

import { Box } from "@mui/material";
import CtaBanner from "../HomeLayouts/CtaBanner";
import FoundationNav from "./FoundationNav";
import HeroSection from "./HeroSection";
import StemEducationSection from "./StemEducationSection";
import { useState } from "react";
export default function DiscoverStemFoundationLayout(){
    const [activeTab, setActiveTab] = useState("Foundation");
    return(
        <Box component='main'>
            <HeroSection/>
            <FoundationNav active={activeTab} onChange={setActiveTab}/>
            <StemEducationSection activeSection={activeTab}/>
            <CtaBanner/>
        </Box>
    )
}