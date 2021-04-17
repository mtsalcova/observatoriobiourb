import { Header, Footer, AboveTheFold, Title } from 'components';
import { Content } from './downloads.style';

const DownloadsTemplate = () => {
  return (
    <>
      <Header />
      <AboveTheFold>
        <Title type="title" variant="h1" colorCustom="#fff">
          Downloads
        </Title>
      </AboveTheFold>
      <Content></Content>
      <Footer />
    </>
  );
};

export { DownloadsTemplate };
