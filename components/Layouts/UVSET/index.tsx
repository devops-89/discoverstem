
import { ctaBannerData, UVsetData, uvsetData,mediaSectionData } from "@/assets/Generic-data";
import HeroSlider from "@/components/Widgets/common/HeroSection";
import CtaBanner from "@/components/Widgets/common/CommonCta";

import StartupDetail from "./StartUp";
import MediaSection from "./Media";











export default function Uvset() {

    
  return (
    <>
      <HeroSlider slides={UVsetData}/>
      <StartupDetail data={uvsetData} />
      <MediaSection data={mediaSectionData} />
      <CtaBanner data={ctaBannerData} />
    </>
  );
}
