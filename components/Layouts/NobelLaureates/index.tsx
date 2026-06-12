
import { achievementStatsData, ctaBannerData, EventquoteBanner, gallerySectionData, nobelLaureatesContentData, NobelLaureatesData,  nobelLaureatesVideoData,  quoteBannerData, } from "@/assets/Generic-data";
import HeroSlider from "@/components/Widgets/common/HeroSection";
import CtaBanner from "@/components/Widgets/common/CommonCta";
import StatsCard from "@/components/Widgets/common/StatsCard";
import VideoContentSection from "@/components/Widgets/common/YoutubeContent";
import QuoteBanner from "@/components/Widgets/common/QuoteBanner";

import ContentSection from "@/components/Widgets/common/EventsDetails";
import GallerySection from "@/components/Widgets/common/GallerySection";













export default function NobelLaureates() {

    
  return (
    <>
      <HeroSlider slides={NobelLaureatesData}/>
     <StatsCard  stats ={achievementStatsData}/>
     <VideoContentSection data={nobelLaureatesVideoData} />
     <ContentSection data ={nobelLaureatesContentData}/>
     <QuoteBanner data={EventquoteBanner} />
     <GallerySection data={gallerySectionData} />

      <CtaBanner data={ctaBannerData} />
    </>
  );
}
