
import {  ctaBannerData,  NobelLaureatesData, researchMentorsTextData, } from "@/assets/Generic-data";
import HeroSlider from "@/components/Widgets/common/HeroSection";
import CtaBanner from "@/components/Widgets/common/CommonCta";
import InfoSection from "@/components/Widgets/common/InfoSection";
import ImpactQuoteSection from "./ImpactQuote";















export default function ResearchMentors() {

    
  return (
    <>
      <HeroSlider slides={NobelLaureatesData}/>
    
     <InfoSection data={researchMentorsTextData}/>
     <ImpactQuoteSection/>

      <CtaBanner data={ctaBannerData} />
    </>
  );
}
