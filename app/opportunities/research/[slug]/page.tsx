import ResearchMentors from "@/components/Layouts/ResearchMentors";
import AerospaceResearchLab from "@/components/Layouts/AerospaceResearchLab";
import { notFound } from "next/navigation";

const routes: Record<string, React.ReactNode> = {
  "research_mentors": <ResearchMentors />,
  "aerospace_research_lab": <AerospaceResearchLab />,
};

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  return routes[slug] || notFound();
}