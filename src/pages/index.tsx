import { Header, Footer } from 'components';
import {
  BannerSearch,
  SectionAbout,
  SectionLatestNews,
  SectionPhotos
} from 'layouts';

export default function Home() {
  return (
    <>
      <Header />
      <BannerSearch />
      <SectionAbout />
      <SectionPhotos />
      <SectionLatestNews />
      <Footer />
    </>
  );
}
