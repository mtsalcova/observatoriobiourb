import { Header, Footer, AboveTheFold, Title } from 'components';
import { Content } from './geographicDist.style';
import { SearchGeographicDist } from 'layouts';

interface Props {
  Map: React.ReactNode;
}

const GeographicDistTemplate = ({ Map }: Props) => {
  return (
    <>
      <Header />
      <AboveTheFold>
        <Title type="title" variant="h1" colorCustom="#fff">
          Distribuição Geográfica
        </Title>
      </AboveTheFold>
      <Content>
        <SearchGeographicDist />
      </Content>
      <Map />
      <Footer />
    </>
  );
};

export { GeographicDistTemplate };
