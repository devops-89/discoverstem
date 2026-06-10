
import {  ctaBannerData,  NobelLaureatesData, } from "@/assets/Generic-data";
import HeroSlider from "@/components/Widgets/common/HeroSection";
import CtaBanner from "@/components/Widgets/common/CommonCta";















export default function StartupOpportunities() {

    
  return (
    <>
      <HeroSlider slides={NobelLaureatesData}/>
    
     

      <CtaBanner data={ctaBannerData} />
    </>
  );
}
