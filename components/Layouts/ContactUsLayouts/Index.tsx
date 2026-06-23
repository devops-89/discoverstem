import { Box } from "@mui/material";

import ContactMapSection from "./ContactMapSection";
import ContactSection from "./ContactSection";
import HeroSection from "./HeroSection";
import ResearchLabs from "./ResearchLabs";
import CtaBanner from "@/components/Widgets/common/CommonCta";
import { ctaBannerData } from "@/assets/Generic-data";

export default function ContactUsLayout(){
    return(
        <Box component="main">
            <HeroSection/>
            <ContactSection/>
            <ResearchLabs/>
            <ContactMapSection/>
            <CtaBanner data={ctaBannerData} />
        </Box>
    )
}