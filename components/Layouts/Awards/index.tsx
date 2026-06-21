
import { AwardsData, awardsImagesData, awardsStatsData, collegeAcceptance2025Data, CollegeAcceptanceData, ctaBannerData, logosData, patentStatsData } from "@/assets/Generic-data";
import HeroSlider from "@/components/Widgets/common/HeroSection";

import CtaBanner from "@/components/Widgets/common/CommonCta";
import StatsCard from "@/components/Widgets/common/StatsCard";
import AwardImageGrid from "@/components/Widgets/common/AwardImage";







export default function Awards() {

    
  return (
    <>
      <HeroSlider slides={AwardsData}/>
      <StatsCard stats={awardsStatsData} />
      <AwardImageGrid data={awardsImagesData}/>
      <CtaBanner data={ctaBannerData} />
    </>
  );
}
