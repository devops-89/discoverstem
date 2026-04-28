import SIPLayouts from "@/components/Layouts/SIPLayouts/index";
import { notFound } from "next/navigation";

export default async function ProgramDynamicPage({
params,
}: {
params: Promise<{ slug: string }>;
}) {
    const { slug } = await params;

    if (slug === "sip") {
    return <SIPLayouts />;
    }

    return notFound();
}