import { Box } from "@mui/material";
import CtaBanner from "../HomeLayouts/CtaBanner";
import FoundationNav from "./FoundationNav";
import HeroSection from "./HeroSection";
import StemEducationSection from "./StemEducationSection";
export default function DiscoverStemFoundationLayout(){
    return(
        <Box component='main'>
            <HeroSection/>
            <FoundationNav/>
            <StemEducationSection/>
            <CtaBanner/>
        </Box>
    )
}