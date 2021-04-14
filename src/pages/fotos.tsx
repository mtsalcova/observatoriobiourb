import { PhotosTemplate } from 'templates';
import { GetStaticProps } from 'next';
import { getPhotosByHashtagInstagram } from 'helpers';

interface Props {
  posts: [
    {
      node: any;
    }
  ];
}

export default function Fotos({ posts }: Props) {
  return (
    <>
      <PhotosTemplate posts={posts} />
    </>
  );
}

export async function getStaticProps(context: GetStaticProps) {
  const data = await getPhotosByHashtagInstagram(20);
  return {
    props: { ...data }
  };
}
