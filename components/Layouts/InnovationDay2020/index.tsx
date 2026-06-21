
import {
  ctaBannerData,
  NobelLaureatesData,
  innovationDay2020VideoData,
  innovationDay2020HighlightsData,
  innovationDay2020GalleryData,
  chiefGuestsData2020,
} from "@/assets/Generic-data";
import HeroSlider from "@/components/Widgets/common/HeroSection";
import CtaBanner from "@/components/Widgets/common/CommonCta";
import VideoContentSection from "@/components/Widgets/common/YoutubeContent";
import GallerySection from "@/components/Widgets/common/GallerySection";
import ImageContentSplitSection from "@/components/Widgets/common/Highlight";

import ChiefGuestsSection from "@/components/Widgets/common/ChiefGuest";

export default function InnovationDay2020() {
  return (
    <>
      <HeroSlider slides={NobelLaureatesData} />
      <VideoContentSection data={innovationDay2020VideoData} />
      <ImageContentSplitSection data={innovationDay2020HighlightsData} />
      <ChiefGuestsSection
      year="2020"
      data={chiefGuestsData2020}
    />
      <GallerySection data={innovationDay2020GalleryData} />
      <CtaBanner data={ctaBannerData} />
    </>
  );
}
