
import { ctaBannerData, FAQData, foundationCoursesData, foundationCoursesSectionData, ILMData, ilmInfoCardsData, ilmOtherProgramsData, ImplementationCoursesData,} from "@/assets/Generic-data";
import HeroSlider from "@/components/Widgets/common/HeroSection";
import CtaBanner from "@/components/Widgets/common/CommonCta";
import FaqSection from "./Questions";





export default function FAQLayouts() {

    
  return (
    <>
      <HeroSlider slides={FAQData}/>
     <FaqSection/>
  
      <CtaBanner data={ctaBannerData} />
    </>
  );
}
