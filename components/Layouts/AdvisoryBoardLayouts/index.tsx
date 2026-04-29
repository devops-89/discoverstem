import { Box } from "@mui/material";
import CtaBanner from "../HomeLayouts/CtaBanner";
import AdvisorySection from "./AdvisorySection";
import HeroSection from "./HeroSection";
export default function AdvisoryBoardLayout(){
    return(
        <Box component='main'>
            <HeroSection/>
            <AdvisorySection/>
            <CtaBanner/>
        </Box>
    )
}