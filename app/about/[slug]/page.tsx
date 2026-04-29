import AboutUsLayout from "@/components/Layouts/AboutLayouts/Index";
import AdvisoryBoardLayout from "@/components/Layouts/AdvisoryBoardLayouts";
import DiscoverStemFoundationLayout from "@/components/Layouts/DiscoverStemFoundationLayouts";
import PanelofExpertsLayouts from "@/components/Layouts/PanelofExpertsLayouts";
import { notFound } from "next/navigation";

const routes: Record<string, React.ReactNode> = {
  founder: <AboutUsLayout />,
  "panel-of-experts": <PanelofExpertsLayouts />,
  "advisory-board": <AdvisoryBoardLayout />,
  "discoverstem-foundation":<DiscoverStemFoundationLayout/>
};

export default async function AboutDynamicPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  return routes[slug] || notFound();
}