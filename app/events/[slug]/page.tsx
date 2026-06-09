

import NobelLaureates from "@/components/Layouts/NobelLaureates";
import { notFound } from "next/navigation";

const routes: Record<string, React.ReactNode> = {
  
 "meeting_with_nobel_laureates" : <NobelLaureates/>
};

export default async function EventsDynamicPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  return routes[slug] || notFound();
}