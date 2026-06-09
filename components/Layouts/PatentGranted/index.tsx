import { ctaBannerData, PatentsGrantedSlider, patentStatsData } from "@/assets/Generic-data";
import HeroSlider from "@/components/Widgets/common/HeroSection";
import PatentStats from "./PatentStats";
import PatentIntroSection from "./PatentIntro";
import PatentFilterSection from "./PatentFilter";
import StatsCard from "@/components/Widgets/common/StatsCard";
import CtaBanner from "@/components/Widgets/common/CommonCta";



export default function PatentGranted() {

    
  return (
    <>
      <HeroSlider slides={PatentsGrantedSlider}/>
       <StatsCard stats={patentStatsData} />;
      <PatentIntroSection/>
      <PatentFilterSection/>
      <CtaBanner data={ctaBannerData} />

    </>
  );
}