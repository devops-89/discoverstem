
import { ctaBannerData, ILMData, ilmInfoCardsData, ilmOtherProgramsData,} from "@/assets/Generic-data";
import HeroSlider from "@/components/Widgets/common/HeroSection";
import CtaBanner from "@/components/Widgets/common/CommonCta";
import IlmSuccessStorySection from "./SuccessStory";
import ProcessSection from "@/components/Widgets/common/ProccessSelection";
import ProgramDetailsSection from "./ProgramDetails";
import IlmLearningTracksSection from "./LearningTrack";
import OtherProgramsSection from "@/components/Widgets/common/OtherProgram";
import InfoCardsSection from "@/components/Widgets/common/InfoCards";

export default function ILMLayouts() {
  return (
    <>
      <HeroSlider slides={ILMData}/>
      <IlmSuccessStorySection/>
      <ProgramDetailsSection/>
      <IlmLearningTracksSection/>
      <InfoCardsSection data={ilmInfoCardsData} />
      <ProcessSection/>
      <OtherProgramsSection data={ilmOtherProgramsData} />
      <CtaBanner data={ctaBannerData} />
    </>
  );
}
