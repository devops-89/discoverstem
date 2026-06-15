
import {
  ctaBannerData,
  NobelLaureatesData,
  innovationDay2023VideoData,
  innovationDay2023HighlightsData,
  innovationDay2023GalleryData,
} from "@/assets/Generic-data";
import HeroSlider from "@/components/Widgets/common/HeroSection";
import CtaBanner from "@/components/Widgets/common/CommonCta";
import VideoContentSection from "@/components/Widgets/common/YoutubeContent";
import GallerySection from "@/components/Widgets/common/GallerySection";
import ImageContentSplitSection from "@/components/Widgets/common/Highlight";
import PatentCertificates2023Section from "./PatentCertificates2023";
import SpecialMessages2023 from "./SpecialMessages2023";

export default function InnovationDay2023() {
  return (
    <>
      <HeroSlider slides={NobelLaureatesData} />
      <VideoContentSection data={innovationDay2023VideoData} />
      <ImageContentSplitSection data={innovationDay2023HighlightsData} />
      <PatentCertificates2023Section />
      <SpecialMessages2023 />
      <GallerySection data={innovationDay2023GalleryData} />
      <CtaBanner data={ctaBannerData} />
    </>
  );
}
