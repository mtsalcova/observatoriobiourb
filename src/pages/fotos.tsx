import { PhotosTemplate } from 'templates';
import Instagram from 'instagram-web-api';
import { GetStaticProps } from 'next';

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
  const client = new Instagram({
    username: 'fotos.obs',
    password: 'senhafotos11'
  });

  await client.login();

  const response = await client.getPhotosByHashtag({
    hashtag: 'observatoriobiourb',
    first: 20
  });

  const { hashtag } = response;
  const { edge_hashtag_to_media } = hashtag;
  const { edges } = edge_hashtag_to_media;

  return {
    props: {
      posts: edges
    }
  };
}
