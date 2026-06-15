import { ctaBannerData, ImpactData } from "@/assets/Generic-data";
import HeroSlider from "@/components/Widgets/common/HeroSection";
import CtaBanner from "@/components/Widgets/common/CommonCta";
import SuccessStoriesCards from "./TestimonialCard";

export default function Impact() {
  return (
    <>
      <HeroSlider slides={ImpactData}/>
      <SuccessStoriesCards />
      <CtaBanner data={ctaBannerData} />
    </>
  );
}
