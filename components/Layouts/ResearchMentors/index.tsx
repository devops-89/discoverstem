import { ctaBannerData, NobelLaureatesData, researchMentorsTextData } from "@/assets/Generic-data";

import CtaBanner from "@/components/Widgets/common/CommonCta";
import InfoSection from "@/components/Widgets/common/InfoSection";
import ImpactQuoteSection from "./ImpactQuote";
import MentorsSection from "./MentorsSection";
import HeroSlider from "@/components/Widgets/common/HeroSection";

export default function ResearchMentors() {
  return (
    <>
      <HeroSlider slides={NobelLaureatesData}/>
      <InfoSection data={researchMentorsTextData}/>
      <ImpactQuoteSection/>
      <MentorsSection/>
      <CtaBanner data={ctaBannerData} />
    </>
  );
}
