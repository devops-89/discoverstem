
import {  ctaBannerData,  DesignPartnersData,  NobelLaureatesData, productDesignPartnersData, } from "@/assets/Generic-data";
import HeroSlider from "@/components/Widgets/common/HeroSection";
import CtaBanner from "@/components/Widgets/common/CommonCta";
import ImageTextPartnerSection from "@/components/Widgets/common/PartnersDesign";















export default function ResearchMentors() {

    
  return (
    <>
      <HeroSlider slides={NobelLaureatesData}/>
    
     <ImageTextPartnerSection data={productDesignPartnersData} />
     <ImageTextPartnerSection data={DesignPartnersData} />

      <CtaBanner data={ctaBannerData} />
    </>
  );
}
