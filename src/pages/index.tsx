import { Header, Footer } from 'components';
import { getPhotosByHashtagInstagram } from 'helpers';
import {
  BannerSearch,
  SectionAbout,
  SectionLatestNews,
  SectionPhotos
} from 'layouts';
import { GetStaticProps } from 'next';

interface Props {
  posts: [
    {
      node: any;
    }
  ];
}

export default function Home({ posts }: Props) {
  return (
    <>
      <Header />
      <BannerSearch />
      <SectionAbout />
      <SectionPhotos posts={posts} />
      <SectionLatestNews />
      <Footer />
    </>
  );
}

export async function getStaticProps(context: GetStaticProps) {
  const data = await getPhotosByHashtagInstagram(4);
  return {
    props: { ...data },
    revalidate: 21600
  };
}
