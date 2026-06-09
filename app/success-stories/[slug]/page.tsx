
import Awards from "@/components/Layouts/Awards";
import CollegeAcceptance from "@/components/Layouts/CollegeAcceptance";
import Impact from "@/components/Layouts/Impact";
import PatentGranted from "@/components/Layouts/PatentGranted";
import StudentInnovations from "@/components/Layouts/StudentInnovations";
import Uvset from "@/components/Layouts/UVSET";
import YoungInvestors from "@/components/Layouts/YoungInvestors";
import { notFound } from "next/navigation";

const routes: Record<string, React.ReactNode> = {
  
  "patents-granted": <PatentGranted />,
  "college-acceptance": <CollegeAcceptance />,
  "awards-recognition": <Awards />,
  "student-innovations": <StudentInnovations />,
  "impact": <Impact />,
  "uvset": <Uvset />,
  "young-investors": <YoungInvestors />,
};

export default async function AboutDynamicPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  return routes[slug] || notFound();
}