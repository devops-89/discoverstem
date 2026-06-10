
import {  ctaBannerData,  NobelLaureatesData,  nobelLaureatesVideoData,  quoteBannerData, texasInnovationDayContentData, } from "@/assets/Generic-data";
import HeroSlider from "@/components/Widgets/common/HeroSection";
import CtaBanner from "@/components/Widgets/common/CommonCta";

import VideoContentSection from "@/components/Widgets/common/YoutubeContent";

import GallerySection from "@/components/Widgets/common/GallerySection";
import ImageContentSplitSection from "./Highlights";

import PatentCertificatesSection from "./PatentCertificates";
import ChiefGuestSection from "./Guest";
import GrandFinale from "./GrandFinale";
import CategoryAwardsSection from "./CategoryAward";















export default function InnovationDay2025() {

    
  return (
    <>
      <HeroSlider slides={NobelLaureatesData}/>
    
     <VideoContentSection data={nobelLaureatesVideoData} />
     <ImageContentSplitSection/>
     <PatentCertificatesSection/>
     <ChiefGuestSection/>
     <GrandFinale/>
     <CategoryAwardsSection/>
    
     <GallerySection/>

      <CtaBanner data={ctaBannerData} />
    </>
  );
}
