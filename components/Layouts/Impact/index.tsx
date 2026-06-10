
import { ctaBannerData, ImpactData } from "@/assets/Generic-data";
import HeroSlider from "@/components/Widgets/common/HeroSection";
import CtaBanner from "@/components/Widgets/common/CommonCta";
import TestimonialGrid from "./TestimonialCard";








export default function Impact() {

    
  return (
    <>
      <HeroSlider slides={ImpactData}/>
      <TestimonialGrid/>
      
      <CtaBanner data={ctaBannerData} />
    </>
  );
}
