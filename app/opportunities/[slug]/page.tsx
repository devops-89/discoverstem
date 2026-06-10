import StartupOpportunities from "@/components/Layouts/StartupOpportunities";
import PartnersEcosystem from "@/components/Layouts/PartnersEcosystem";
import { notFound } from "next/navigation";

const routes: Record<string, React.ReactNode> = {
  "startup_opportunities": <StartupOpportunities />,
  "partners_ecosystem": <PartnersEcosystem />,
};

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  return routes[slug] || notFound();
}