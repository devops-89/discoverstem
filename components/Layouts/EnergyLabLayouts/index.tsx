
import {   aerospaceModulesData, aerospaceResearchLabTextData, ctaBannerData,  innovationCardsData,  NobelLaureatesData, } from "@/assets/Generic-data";
import HeroSlider from "@/components/Widgets/common/HeroSection";
import CtaBanner from "@/components/Widgets/common/CommonCta";
import InfoSection from "@/components/Widgets/common/InfoSection";

import ExploreLabsSection from "@/components/Widgets/common/Explore";
import InnovationShowcaseSection from "@/components/Widgets/common/Researchlab";



export default function EnergyResearchLab() {

    
  return (
    <>
      <HeroSlider slides={NobelLaureatesData}/>
    
     <InfoSection data={aerospaceResearchLabTextData} />
     
     
 <InnovationShowcaseSection
      title="Innovations made by DiscoverSTEM Students in this Research Lab are:"
      items={innovationCardsData.slice(0, 4)}
    />
<ExploreLabsSection/>
      <CtaBanner data={ctaBannerData} />
    </>
  );
}
