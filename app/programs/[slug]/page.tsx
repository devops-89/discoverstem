import DIPLayouts from "@/components/Layouts/DIPLayout";
import FAQLayouts from "@/components/Layouts/FAQLayouts";
import ILMLayouts from "@/components/Layouts/ILMLayouts";
import SIPLayouts from "@/components/Layouts/SIPLayouts/index";



import { notFound } from "next/navigation";

const routes: Record<string, React.ReactNode> = {
  
 "sip" : <SIPLayouts/>,
 "ilm" : <ILMLayouts/>,
 "dip" : <DIPLayouts/>,
 "faq" : <FAQLayouts/>
 
};

export default async function EventsDynamicPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  return routes[slug] || notFound();
}