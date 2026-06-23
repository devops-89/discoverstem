
import { Heromedia } from "@/assets/Generic-data";
import HeroSection from "@/components/Widgets/common/HeroSection";

export default function HomePage() {
  
  const homeSlides = [
    {
      image: Heromedia.image,
      title: Heromedia.title,
      description: Heromedia.description,
    },
    {
      image: Heromedia.image,
      title: Heromedia.title,
      description: Heromedia.description,
    },
    {
      image: Heromedia.image,
      title: Heromedia.title,
      description: Heromedia.description,
    },
  ];

  return (
    <main>
    
      <HeroSection slides={homeSlides} />
    
    </main>
  );
}