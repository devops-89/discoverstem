
import {   aerospaceModulesData, aerospaceResearchLabTextData, ctaBannerData,  innovationCardsData,  NobelLaureatesData, } from "@/assets/Generic-data";
import HeroSlider from "@/components/Widgets/common/HeroSection";
import CtaBanner from "@/components/Widgets/common/CommonCta";
import InfoSection from "@/components/Widgets/common/InfoSection";
import OutcomesSection from "./Outcomes";
import ResearchModulesSection from "@/components/Widgets/common/Modules";

import InnovationShowcaseSection from "./InnovationResearch";
import ExploreLabsSection from "./ExploreLabs";



export default function AerospaceResearchLab() {

    
  return (
    <>
      <HeroSlider slides={NobelLaureatesData}/>
    
     <InfoSection data={aerospaceResearchLabTextData} />
     <OutcomesSection/>
     <ResearchModulesSection data={aerospaceModulesData} />
     
<InnovationShowcaseSection/>
<ExploreLabsSection/>
      <CtaBanner data={ctaBannerData} />
    </>
  );
}
