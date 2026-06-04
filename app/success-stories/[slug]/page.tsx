
import PatentGranted from "@/components/Layouts/PatentGranted";
import { notFound } from "next/navigation";

const routes: Record<string, React.ReactNode> = {
  
  "patents-granted": <PatentGranted />,
  
  
};

export default async function AboutDynamicPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  return routes[slug] || notFound();
}