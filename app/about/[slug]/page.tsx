import AboutUsLayout from "@/components/Layouts/AboutLayouts/Index";
import { notFound } from "next/navigation";

export default async function AboutDynamicPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  if (slug === "founder") {
    return <AboutUsLayout />;
  }

  return notFound();
}