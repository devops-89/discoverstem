
import { aerospaceModulesData, aerospaceResearchData, aerospaceResearchLabTextData, AerospacevideoData, ctaBannerData, innovationCardsData, } from "@/assets/Generic-data";

import HeroSlider from "@/components/Widgets/common/HeroSection";
import CtaBanner from "@/components/Widgets/common/CommonCta";
import InfoSection from "@/components/Widgets/common/InfoSection";
import OutcomesSection from "./Outcomes";
import ResearchModulesSection from "./Modules";
import ExploreLabsSection from "@/components/Widgets/common/Explore";
import InnovationShowcaseSection from "@/components/Widgets/common/Researchlab";
import AerospaceVideoSection from "./Aerospacevideo";

const featuredInnovations = innovationCardsData.slice(0, 6);

export default function AerospaceResearchLab() {
  return (
    <>
      <HeroSlider slides={aerospaceResearchData}/>
      <InfoSection data={aerospaceResearchLabTextData} />
      <AerospaceVideoSection {...AerospacevideoData}/>
      <OutcomesSection/>
      <ResearchModulesSection data={aerospaceModulesData} />
      <InnovationShowcaseSection
        title="Innovations made by DiscoverSTEM Students in this Research Lab are:"
        items={featuredInnovations}
      />
      <ExploreLabsSection/>
      <CtaBanner data={ctaBannerData} />
    </>
  );
}
