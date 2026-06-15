import { ctaBannerData, innovationCardsData, NobelLaureatesData, roboticsResearchLabTextData } from "@/assets/Generic-data";
import HeroSlider from "@/components/Widgets/common/HeroSection";
import CtaBanner from "@/components/Widgets/common/CommonCta";
import InfoSection from "@/components/Widgets/common/InfoSection";
import ExploreLabsSection from "@/components/Widgets/common/Explore";
import InnovationShowcaseSection from "@/components/Widgets/common/Researchlab";

const featuredInnovations = innovationCardsData.slice(0, 6);

export default function RoboticsResearchLab() {
  return (
    <>
      <HeroSlider slides={NobelLaureatesData}/>
      <InfoSection data={roboticsResearchLabTextData} />
      <InnovationShowcaseSection
        title="Some of the Innovations made by DiscoverSTEM Students in this Research Lab are:"
        items={featuredInnovations}
      />
      <ExploreLabsSection/>
      <CtaBanner data={ctaBannerData} />
    </>
  );
}
