import { Button, Header } from 'components';
import { BannerSearch, SectionAbout, SectionPhotos } from 'layouts';

export default function Home() {
  return (
    <>
      <Header />
      <BannerSearch />
      <SectionAbout />
      <SectionPhotos />
    </>
  );
}
