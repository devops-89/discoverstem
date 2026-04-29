type Props = {
  params: {
    slug: string;
  };
};

export default async function MediaDetailPage({ params }: Props) {
  const {slug}  = await params;
  return (
    <div style={{ padding: "100px", }}>
      <h1>Media Detail Page</h1>

      <p>Slug: {slug}</p>

    </div>
  );
}