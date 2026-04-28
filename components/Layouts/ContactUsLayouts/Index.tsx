import { Box } from "@mui/material";
import CtaBanner from "../HomeLayouts/CtaBanner";
import ContactMapSection from "./ContactMapSection";
import ContactSection from "./ContactSection";
import HeroSection from "./HeroSection";
import ResearchLabs from "./ResearchLabs";

export default function ContactUsLayout(){
    return(
        <Box component="main">
            <HeroSection/>
            <ContactSection/>
            <ResearchLabs/>
            <ContactMapSection/>
            <CtaBanner/>
        </Box>
    )
}