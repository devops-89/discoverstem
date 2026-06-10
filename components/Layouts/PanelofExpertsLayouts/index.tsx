"use client";

import { useState } from "react";
import { Box } from "@mui/material";
import CtaBanner from "../HomeLayouts/CtaBanner";
import ExpertsNavbar from "./ExpertsNavbar";
import ExpertsSection from "./ExpertsSection";
import HeroSection from "./HeroSection";

export default function PanelofExpertsLayouts(){
    const [activeTab, setActiveTab] = useState("All experts");

    return(
        <Box component="main">
        <HeroSection/>
        <ExpertsNavbar active={activeTab} onChange={setActiveTab}/>
        <ExpertsSection activeTab={activeTab}/>
        <CtaBanner/>
        </Box>
    )
}