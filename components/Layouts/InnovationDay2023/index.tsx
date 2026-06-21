
import {
  ctaBannerData,
  NobelLaureatesData,
  innovationDay2023VideoData,
  innovationDay2023HighlightsData,
  innovationDay2023GalleryData,
  patentCertificatesData2023,
  specialMessagesData2023,
} from "@/assets/Generic-data";
import HeroSlider from "@/components/Widgets/common/HeroSection";
import CtaBanner from "@/components/Widgets/common/CommonCta";
import VideoContentSection from "@/components/Widgets/common/YoutubeContent";
import GallerySection from "@/components/Widgets/common/GallerySection";
import ImageContentSplitSection from "@/components/Widgets/common/Highlight";


import PatentCertificatesShared from "@/components/Widgets/common/PatentCertificates";
import SpecialMessagesShared from "@/components/Widgets/common/SpecialMessage";

export default function InnovationDay2023() {
  return (
    <>
      <HeroSlider slides={NobelLaureatesData} />
      <VideoContentSection data={innovationDay2023VideoData} />
      <ImageContentSplitSection data={innovationDay2023HighlightsData} />
       <PatentCertificatesShared 
      data={patentCertificatesData2023} 
      uniqueId="2023" 
    />
       <SpecialMessagesShared data={specialMessagesData2023} />
      <GallerySection data={innovationDay2023GalleryData} />
      <CtaBanner data={ctaBannerData} />
    </>
  );
}
