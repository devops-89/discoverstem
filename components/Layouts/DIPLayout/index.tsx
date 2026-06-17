import { ctaBannerData, DIPData, DipOtherProgramsData, dipInfoCardsData, foundationCoursesData, ImplementationCoursesData } from "@/assets/Generic-data";
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
      <HeroSlider slides={DIPData}/>
      <DipProgramDetailsSection/>
      <InfoCardsSection data={dipInfoCardsData} />
      <CoursesSection data={foundationCoursesData} showLevel={false} showDuration={false} />
      <CoursesSection data={ImplementationCoursesData} showLevel={false} showDuration={false} />
      <ProcessSection/>
      <OtherProgramsSection data={DipOtherProgramsData} />
      <CtaBanner data={ctaBannerData} />
    </>
  );
}
