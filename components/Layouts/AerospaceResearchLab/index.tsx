
import {aerospaceModulesData, aerospaceResearchLabTextData, ctaBannerData,  innovationCardsData,  NobelLaureatesData, } from "@/assets/Generic-data";
import HeroSlider from "@/components/Widgets/common/HeroSection";
import CtaBanner from "@/components/Widgets/common/CommonCta";
import InfoSection from "@/components/Widgets/common/InfoSection";
import OutcomesSection from "./Outcomes";
import ResearchModulesSection from "./Modules";
import ExploreLabsSection from "@/components/Widgets/common/Explore";
import InnovationShowcaseSection from "@/components/Widgets/common/Researchlab";
import AerospaceVideoSection from "./Aerospacevideo";




export default function AerospaceResearchLab() {

    
  return (
    <>
      <HeroSlider slides={NobelLaureatesData}/>
    
     <InfoSection data={aerospaceResearchLabTextData} />
     <AerospaceVideoSection/>
     <OutcomesSection/>
     <ResearchModulesSection data={aerospaceModulesData} />
     
 <InnovationShowcaseSection
      title="Innovations made by DiscoverSTEM Students in this Research Lab are:"
      items={innovationCardsData.slice(0, 4)}
    />
<ExploreLabsSection/>
      <CtaBanner data={ctaBannerData} />
    </>
  );
}
