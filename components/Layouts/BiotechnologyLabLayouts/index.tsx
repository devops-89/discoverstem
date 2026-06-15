import { biotechModulesData, biotechResearchLabTextData, biotechVideoData, ctaBannerData, innovationCardsData, NobelLaureatesData } from "@/assets/Generic-data";
import HeroSlider from "@/components/Widgets/common/HeroSection";
import CtaBanner from "@/components/Widgets/common/CommonCta";
import InfoSection from "@/components/Widgets/common/InfoSection";
import OutcomesSection from "@/components/Layouts/AerospaceResearchLab/Outcomes";
import ResearchModulesSection from "@/components/Layouts/AerospaceResearchLab/Modules";
import ExploreLabsSection from "@/components/Widgets/common/Explore";
import InnovationShowcaseSection from "@/components/Widgets/common/Researchlab";
import VideoSection from "@/components/Layouts/AerospaceResearchLab/Aerospacevideo";

const featuredInnovations = innovationCardsData.slice(0, 6);

export default function BiotechnologyResearchLab() {
  return (
    <>
      <HeroSlider slides={NobelLaureatesData}/>
      <InfoSection data={biotechResearchLabTextData} />
      <VideoSection {...biotechVideoData} />
      <OutcomesSection/>
      <ResearchModulesSection data={biotechModulesData} />
      <InnovationShowcaseSection
        title="Some of the Innovations made by DiscoverSTEM Students in this Research Lab are:"
        items={featuredInnovations}
      />
      <ExploreLabsSection/>
      <CtaBanner data={ctaBannerData} />
    </>
  );
}
