import { Box } from "@mui/material";

import PatentsSection from "../HomeLayouts/PatentsSection";
import SpotlightSection from "../HomeLayouts/SpotlightSection";

import { Heromedia } from "@/assets/Generic-data";
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
import HeroSection from "@/components/Widgets/common/HeroSection";

export default function SIPLayouts(){
    const SipSlides = [
   {
      image: Heromedia.image,
      title: Heromedia.title,
      description: Heromedia.description,
    },
    {
      image: Heromedia.image,
      title: Heromedia.title,
      description: Heromedia.description,
    },
    {
      image: Heromedia.image,
      title: Heromedia.title,
      description: Heromedia.description,
    },
  ];

    return(
        <Box component="main">
            <HeroSection slides={SipSlides} />
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