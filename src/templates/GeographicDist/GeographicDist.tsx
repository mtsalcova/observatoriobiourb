import { Header, Footer, AboveTheFold, Title } from 'components';
import { MapContainer } from './MapContainer';

interface Props {
  Map: any;
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
      <MapContainer Map={Map} />
      <Footer />
    </>
  );
};

export { GeographicDistTemplate };
