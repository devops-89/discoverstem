
import {  categoryAwardsData, ctaBannerData,  gallerySectionData,  grandFinaleSectionData,  innovationDayHighlightsData,  NobelLaureatesData,  nobelLaureatesVideoData,  quoteBannerData, texasInnovationDayContentData, } from "@/assets/Generic-data";
import HeroSlider from "@/components/Widgets/common/HeroSection";
import CtaBanner from "@/components/Widgets/common/CommonCta";
import VideoContentSection from "@/components/Widgets/common/YoutubeContent";
import GallerySection from "@/components/Widgets/common/GallerySection";
import ImageContentSplitSection from "@/components/Widgets/common/Highlight";
import GrandFinaleSection from "../../Widgets/common/GrandFinale";
import AccordionSection from "../../Widgets/common/CategoryAward";















export default function InnovationDay2020() {

    
  return (
    <>
      <HeroSlider slides={NobelLaureatesData}/>
          
           <VideoContentSection data={nobelLaureatesVideoData} />
           <ImageContentSplitSection data={innovationDayHighlightsData}/>
          
           < GrandFinaleSection data={grandFinaleSectionData} />
          <AccordionSection data={categoryAwardsData} defaultOpenIndex={2}/>
          
          <GallerySection data={gallerySectionData} />
      
            <CtaBanner data={ctaBannerData} />
    </>
  );
}
