import {  ctaBannerData,  NobelLaureatesData,  quoteBannerData, texasGalleryData, texasInnovationDayContentData, texasVideoData, } from "@/assets/Generic-data";
import HeroSlider from "@/components/Widgets/common/HeroSection";
import CtaBanner from "@/components/Widgets/common/CommonCta";
import VideoContentSection from "@/components/Widgets/common/YoutubeContent";
import ContentSection from "@/components/Widgets/common/EventsDetails";
import GallerySection from "@/components/Widgets/common/GallerySection";



export default function InnovationDay() {
  
  return (
    <>
      <HeroSlider slides={NobelLaureatesData}/>
    
     <VideoContentSection data={texasVideoData} />
     <ContentSection data ={texasInnovationDayContentData}/>
    
     <GallerySection data={texasGalleryData} />

      <CtaBanner data={ctaBannerData} />
    </>
  );
}
