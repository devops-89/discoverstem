
import { ctaBannerData, foundationCoursesData, foundationCoursesSectionData, ILMData, ilmInfoCardsData, ilmOtherProgramsData, ImplementationCoursesData,} from "@/assets/Generic-data";
import HeroSlider from "@/components/Widgets/common/HeroSection";
import CtaBanner from "@/components/Widgets/common/CommonCta";

import ProcessSection from "@/components/Widgets/common/ProccessSelection";

import OtherProgramsSection from "@/components/Widgets/common/OtherProgram";
import InfoCardsSection from "@/components/Widgets/common/InfoCards";
import DipProgramDetailsSection from "./DIPProgram";
import CoursesSection from "@/components/Widgets/common/Courses";
















export default function DIPLayouts() {

    
  return (
    <>
      <HeroSlider slides={ILMData}/>
   
   <DipProgramDetailsSection/>
 
   
   <InfoCardsSection data={ilmInfoCardsData} />
  <CoursesSection
      data={foundationCoursesData}
    />

     <CoursesSection
      data={ImplementationCoursesData}
    />
   <ProcessSection/>
   <OtherProgramsSection data={ilmOtherProgramsData} />

      <CtaBanner data={ctaBannerData} />
    </>
  );
}
