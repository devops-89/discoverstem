import MediaCenterDetailLayout from "@/components/Layouts/MediaDetail";


type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function MediaDetailPage({ params }: Props) {
  const { slug } = await params;

  return <MediaCenterDetailLayout slug={slug} />;
}