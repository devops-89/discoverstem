
import {
  ctaBannerData,
  NobelLaureatesData,
  innovationDay2024VideoData,
  innovationDay2024HighlightsData,
  innovationDay2024GrandFinaleData,
  innovationDay2024CategoryAwards,
  innovationDay2024GalleryData,
  chiefGuestsData2024,
  patentCertificatesData2024,
  specialMessagesData2024,
} from "@/assets/Generic-data";
import HeroSlider from "@/components/Widgets/common/HeroSection";
import CtaBanner from "@/components/Widgets/common/CommonCta";
import VideoContentSection from "@/components/Widgets/common/YoutubeContent";
import GallerySection from "@/components/Widgets/common/GallerySection";
import ImageContentSplitSection from "@/components/Widgets/common/Highlight";
import GrandFinaleSection from "../../Widgets/common/GrandFinale";
import AccordionSection from "../../Widgets/common/CategoryAward";



import ChiefGuestsSection from "@/components/Widgets/common/ChiefGuest";
import PatentCertificatesShared from "@/components/Widgets/common/PatentCertificates";
import SpecialMessagesShared from "@/components/Widgets/common/SpecialMessage";

export default function InnovationDay2024() {
  return (
    <>
      <HeroSlider slides={NobelLaureatesData} />
      <VideoContentSection data={innovationDay2024VideoData} />
      <ImageContentSplitSection data={innovationDay2024HighlightsData} />
      <PatentCertificatesShared
      data={patentCertificatesData2024} 
      uniqueId="2024" 
    />
     
       <ChiefGuestsSection
      year="2024"
      data={chiefGuestsData2024}
    />
      <SpecialMessagesShared data={specialMessagesData2024} />;
      <GrandFinaleSection data={innovationDay2024GrandFinaleData} />
      <AccordionSection data={innovationDay2024CategoryAwards} defaultOpenIndex={2} />
      <GallerySection data={innovationDay2024GalleryData} />
      <CtaBanner data={ctaBannerData} />
    </>
  );
}
