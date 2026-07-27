import { ASSETS } from "@/assets/images";
import { Box } from "@mui/material";

import AdvisorySection from "./AdvisorySection";

import CtaBanner from "@/components/Widgets/common/CommonCta";
import { ctaBannerData } from "@/assets/Generic-data";
import HeroSection from "@/components/Widgets/common/HeroSection";
export default function AdvisoryBoardLayout(){

    const advisorySlides = [
    {
      image: ASSETS.IMAGES.ABOUTUS_HEROSECTION,
      title: "Advisory Board",
      description:
        "A distinguished group of leaders from aerospace, medicine, entrepreneurship, and law — guiding DiscoverSTEM's mission to inspire the next generation of innovators.",
    },
    {
      image: ASSETS.IMAGES.ABOUTUS_HEROSECTION,
      title: "Advisory Board",
      description:
        "A distinguished group of leaders from aerospace, medicine, entrepreneurship, and law — guiding DiscoverSTEM's mission to inspire the next generation of innovators.",
    },
    {
      image: ASSETS.IMAGES.ABOUTUS_HEROSECTION,
      title: "Advisory Board",
      description:
        "A distinguished group of leaders from aerospace, medicine, entrepreneurship, and law — guiding DiscoverSTEM's mission to inspire the next generation of innovators.",
    },
  ];
    return(
        <Box component='main'>
             <HeroSection slides={advisorySlides} />
            <AdvisorySection/>
             <CtaBanner data={ctaBannerData} />
        </Box>
    )
}