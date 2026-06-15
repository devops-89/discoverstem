
import {  categoryAwardsData, ctaBannerData,  grandFinaleSectionData,  innovationDay2025GalleryData,  innovationDay2025VideoData,  innovationDayHighlightsData,  NobelLaureatesData,  quoteBannerData, } from "@/assets/Generic-data";
import HeroSlider from "@/components/Widgets/common/HeroSection";
import CtaBanner from "@/components/Widgets/common/CommonCta";

import VideoContentSection from "@/components/Widgets/common/YoutubeContent";

import GallerySection from "@/components/Widgets/common/GallerySection";


import PatentCertificatesSection from "./PatentCertificates";
import ChiefGuestSection from "./Guest";

import CategoryAwardsSection from "../../Widgets/common/CategoryAward";
import ImageContentSplitSection from "@/components/Widgets/common/Highlight";
import GrandFinaleSection from "../../Widgets/common/GrandFinale";
import AccordionSection from "../../Widgets/common/CategoryAward";



export default function InnovationDay2025() {

    
  return (
    <>
      <HeroSlider slides={NobelLaureatesData}/>
    
     <VideoContentSection data={innovationDay2025VideoData} />
     <ImageContentSplitSection data={innovationDayHighlightsData}/>
     <PatentCertificatesSection/>
     <ChiefGuestSection/>
     < GrandFinaleSection data={grandFinaleSectionData} />
    <AccordionSection data={categoryAwardsData} defaultOpenIndex={2}/>
    
    <GallerySection data={innovationDay2025GalleryData} />

      <CtaBanner data={ctaBannerData} />
    </>
  );
}
