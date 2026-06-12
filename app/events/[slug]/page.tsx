

import InnovationDay from "@/components/Layouts/InnovationDay";
import InnovationDay2020 from "@/components/Layouts/InnovationDay2020";
import InnovationDay2023 from "@/components/Layouts/InnovationDay2023";
import InnovationDay2024 from "@/components/Layouts/InnovationDay2024";
import InnovationDay2025 from "@/components/Layouts/InnovationDay2025";
import NobelLaureates from "@/components/Layouts/NobelLaureates";
import { notFound } from "next/navigation";

const routes: Record<string, React.ReactNode> = {
  
 "meeting_with_nobel_laureates" : <NobelLaureates/>,
 "innovation_day_at_texas_state_capitol" : <InnovationDay/>,
 "innovation_day_2025" : <InnovationDay2025/>,
 "innovation_day_2024" : <InnovationDay2024/>,
 "innovation_day_2023" : <InnovationDay2023/>,
 "innovation_day_2020" : <InnovationDay2020/>
};

export default async function EventsDynamicPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  return routes[slug] || notFound();
}