
import { AcceptanceData, collegeAcceptance2025Data, CollegeAcceptanceData, ctaBannerData, logosData } from "@/assets/Generic-data";
import HeroSlider from "@/components/Widgets/common/HeroSection";
import CollegeAcceptanceSection from "./AcceptanceSection";
import LogoSlider from "@/components/Widgets/common/LogoSlider";
import TextSection from "@/components/Widgets/common/TextSection";
import AdmissionSuccessSection from "./AdmissionSuccess";
import CtaBanner from "@/components/Widgets/common/CommonCta";







export default function CollegeAcceptance() {

    
  return (
    <>
      <HeroSlider slides={CollegeAcceptanceData}/>
      {/* <CollegeAcceptanceSection/> */}  <TextSection data={AcceptanceData} />
      <LogoSlider logos={logosData}  />
      <TextSection data={collegeAcceptance2025Data} />
      <AdmissionSuccessSection/>
      <CtaBanner data={ctaBannerData} />
    </>
  );
}
