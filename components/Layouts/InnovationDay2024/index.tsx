
import {
  ctaBannerData,
  NobelLaureatesData,
  innovationDay2024VideoData,
  innovationDay2024HighlightsData,
  innovationDay2024GrandFinaleData,
  innovationDay2024CategoryAwards,
  innovationDay2024GalleryData,
} from "@/assets/Generic-data";
import HeroSlider from "@/components/Widgets/common/HeroSection";
import CtaBanner from "@/components/Widgets/common/CommonCta";
import VideoContentSection from "@/components/Widgets/common/YoutubeContent";
import GallerySection from "@/components/Widgets/common/GallerySection";
import ImageContentSplitSection from "@/components/Widgets/common/Highlight";
import GrandFinaleSection from "../../Widgets/common/GrandFinale";
import AccordionSection from "../../Widgets/common/CategoryAward";
import PatentCertificatesSection from "./PatentCertificates";
import ChiefGuests2024 from "./ChiefGuests2024";
import SpecialMessages2024 from "./SpecialMessages2024";

export default function InnovationDay2024() {
  return (
    <>
      <HeroSlider slides={NobelLaureatesData} />
      <VideoContentSection data={innovationDay2024VideoData} />
      <ImageContentSplitSection data={innovationDay2024HighlightsData} />
      <PatentCertificatesSection />
      <ChiefGuests2024 />
      <SpecialMessages2024 />
      <GrandFinaleSection data={innovationDay2024GrandFinaleData} />
      <AccordionSection data={innovationDay2024CategoryAwards} defaultOpenIndex={2} />
      <GallerySection data={innovationDay2024GalleryData} />
      <CtaBanner data={ctaBannerData} />
    </>
  );
}
