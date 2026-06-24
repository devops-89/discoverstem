
import {  ctaBannerData, InnovationData, innovationStatsData,  } from "@/assets/Generic-data";
import HeroSlider from "@/components/Widgets/common/HeroSection";

import CtaBanner from "@/components/Widgets/common/CommonCta";
import StatsCard from "@/components/Widgets/common/StatsCard";
import CenterTextSection from "./InnovationDetail";
import InnovationCardGrid from "./InnovationCard";

export default function StudentInnovations() { 
  return (
    <>
      <HeroSlider slides={InnovationData}/>
      <StatsCard stats={innovationStatsData} />
     <CenterTextSection/>
     <InnovationCardGrid/>
      <CtaBanner data={ctaBannerData} />
    </>
  );
}
