import { ctaBannerData, PatentsGrantedSlider, patentStatsData } from "@/assets/Generic-data";
import HeroSlider from "@/components/Widgets/common/HeroSection";
import PatentStats from "./PatentStats";
import PatentIntroSection from "./PatentIntro";
import PatentFilterSection from "./PatentFilter";

import CtaBanner from "@/components/Widgets/common/CommonCta";



export default function PatentGranted() {

    
  return (
    <>
      <HeroSlider slides={PatentsGrantedSlider}/>
       <PatentStats />
      <PatentIntroSection/>
      <PatentFilterSection/>
      <CtaBanner data={ctaBannerData} />

    </>
  );
}