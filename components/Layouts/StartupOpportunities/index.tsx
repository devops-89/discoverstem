
import { ctaBannerData, EcosystemTextData, NobelLaureatesData, partnersEcosystemTextData } from "@/assets/Generic-data";
import HeroSlider from "@/components/Widgets/common/HeroSection";
import CtaBanner from "@/components/Widgets/common/CommonCta";
import SimpleTextSection from "@/components/Widgets/common/StartupText";
import EntrepreneurshipFunding from "./Entrepreneurship";















export default function StartupOpportunities() {

    
  return (
    <>
      <HeroSlider slides={NobelLaureatesData}/>
    
     <SimpleTextSection data={partnersEcosystemTextData} />
     < EntrepreneurshipFunding/>
<SimpleTextSection data={ EcosystemTextData} />
      <CtaBanner data={ctaBannerData} />
    </>
  );
}
