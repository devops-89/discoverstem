
import {  ctaBannerData,  NobelLaureatesData,  nobelLaureatesVideoData,  quoteBannerData, texasInnovationDayContentData, } from "@/assets/Generic-data";
import HeroSlider from "@/components/Widgets/common/HeroSection";
import CtaBanner from "@/components/Widgets/common/CommonCta";

import VideoContentSection from "@/components/Widgets/common/YoutubeContent";

import GallerySection from "@/components/Widgets/common/GallerySection";
import ContentSection from "@/components/Widgets/common/EventsDetails";













export default function InnovationDay() {

    
  return (
    <>
      <HeroSlider slides={NobelLaureatesData}/>
    
     <VideoContentSection data={nobelLaureatesVideoData} />
     <ContentSection data ={texasInnovationDayContentData}/>
    
     <GallerySection/>

      <CtaBanner data={ctaBannerData} />
    </>
  );
}
