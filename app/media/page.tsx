import { blogCards } from "@/assets/Generic-data";
import MediaCenterLayout from "@/components/Layouts/MediaCenterLayouts";

export default function MediaCenterPage() {
    return <MediaCenterLayout blogs={blogCards} />;
}