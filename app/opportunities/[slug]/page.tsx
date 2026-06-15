import AerospaceResearchLab from "@/components/Layouts/AerospaceResearchLab";
import BiotechnologyResearchLab from "@/components/Layouts/BiotechnologyLabLayouts";
import EnergyResearchLab from "@/components/Layouts/EnergyLabLayouts";
import FintechResearchLab from "@/components/Layouts/FintechLabLayouts";
import NeurotechnologyResearchLab from "@/components/Layouts/NeurotechnologyLabLayouts";
import PartnersEcosystem from "@/components/Layouts/PartnersEcosystem";
import ResearchMentors from "@/components/Layouts/ResearchMentors";
import RoboticsResearchLab from "@/components/Layouts/RoboticsLabLayout";
import StartupOpportunities from "@/components/Layouts/StartupOpportunities";
import { notFound } from "next/navigation";

const routes: Record<string, React.ReactNode> = {
"startup-opportunities": <StartupOpportunities />,
"partners-ecosystem": <PartnersEcosystem />,
"research-mentors": <ResearchMentors />,
"aerospace_research_lab": <AerospaceResearchLab />,
"ai-autonomous-tech-and-robotics-research-lab": <RoboticsResearchLab />,
"banking-finance-fintech-research-lab": <FintechResearchLab />,
"energy-environment-research-lab": <EnergyResearchLab />,
"genomics-biotechnology-health-sciences-research-lab": <BiotechnologyResearchLab />,
"neurotech-brain-computer-interface": <NeurotechnologyResearchLab />,
};

export default async function DynamicPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  if (!routes[slug]) {
    notFound();
  }

  return routes[slug];
}