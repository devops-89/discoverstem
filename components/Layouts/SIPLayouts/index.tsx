import { Box } from "@mui/material";

import PatentsSection from "../HomeLayouts/PatentsSection";
import SpotlightSection from "../HomeLayouts/SpotlightSection";
import HeroSection from "./HeroSection";

import ProgramDetails from "./ProgramDetails";
import ResearchSection from "./ResearchSection";
import SipSection from "./SipSection";
import StartupCard from "./StartUpCard";
import StudentStories from "./StudentStories";
import UniversitySlider from "./UniversitySlider";
import ProcessSection from "@/components/Widgets/common/ProccessSelection";
import OtherProgramsSection from "@/components/Widgets/common/OtherProgram";
import { ctaBannerData, SipOtherProgramsData } from "@/assets/Generic-data";
import CtaBanner from "@/components/Widgets/common/CommonCta";

export default function SIPLayouts(){
    return(
        <Box component="main">
            <HeroSection/>
            <SipSection/>
            <SpotlightSection/>
            <ProgramDetails/>
            <UniversitySlider/>
            <PatentsSection/>
            <StartupCard/>
            <ResearchSection/>
            <StudentStories/>
            <ProcessSection/>
            <OtherProgramsSection data={SipOtherProgramsData} />
            <CtaBanner data={ctaBannerData}/>
        </Box>
        
    )
}