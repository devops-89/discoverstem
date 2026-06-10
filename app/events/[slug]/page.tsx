

import InnovationDay from "@/components/Layouts/InnovationDay";
import InnovationDay2025 from "@/components/Layouts/InnovationDay2025";
import NobelLaureates from "@/components/Layouts/NobelLaureates";
import { notFound } from "next/navigation";

const routes: Record<string, React.ReactNode> = {
  
 "meeting_with_nobel_laureates" : <NobelLaureates/>,
 "innovation_day_at_texas_state_capitol" : <InnovationDay/>,
 "innovation_day_2025" : <InnovationDay2025/>
};

export default async function EventsDynamicPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  return routes[slug] || notFound();
}