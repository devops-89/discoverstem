
import { ctaBannerData, quoteBannerData, YoungInvestorData,} from "@/assets/Generic-data";
import HeroSlider from "@/components/Widgets/common/HeroSection";
import CtaBanner from "@/components/Widgets/common/CommonCta";
import CenterDescriptionSection from "./YoungInvestors";
import QuoteBanner from "@/components/Widgets/common/QuoteBanner";
import PatentFacesSection from "./PatentFaces";


export default function YoungInvestors() {

    
  return (
    <>
      <HeroSlider slides={YoungInvestorData}/>
      <CenterDescriptionSection/>
      <QuoteBanner data={quoteBannerData}/>
      <PatentFacesSection/>
      <CtaBanner data={ctaBannerData} />
    </>
  );
}
