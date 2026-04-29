import { Box } from "@mui/material";
import CtaBanner from "../HomeLayouts/CtaBanner";
import ExpertsNavbar from "./ExpertsNavbar";
import ExpertsSection from "./ExpertsSection";
import HeroSection from "./HeroSection";

export default function PanelofExpertsLayouts(){
    return(
        <Box component="main">
        <HeroSection/>
        <ExpertsNavbar/>
        <ExpertsSection/>
        <CtaBanner/>
        </Box>
    )
}