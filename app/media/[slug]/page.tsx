type Props = {
  params: {
    slug: string;
  };
};

export default function MediaDetailPage({ params }: Props) {
  const { slug } = params;

  return <h1>Blog Details: {slug}</h1>;
}