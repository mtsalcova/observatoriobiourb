import { Link } from '@material-ui/core';
import { Typography } from '@material-ui/core';
import { Content, BoxLinks, BoxParks, SectionParks } from './usefulLinks.style';
import {
  Header,
  Footer,
  AboveTheFold,
  Wrapper,
  ImageMediaCard
} from 'components';

const UsefulLinks = () => {
  return (
    <>
      <Header />
      <AboveTheFold>
        <Typography variant="h1" color="textPrimary">
          Links úteis
        </Typography>
      </AboveTheFold>
      <Content>
        <BoxLinks>
          <Link href="https://meioambiente.sorocaba.sp.gov.br/" target="_blank">
            Secretaria do Meio Ambiente, Parques e Jardins
          </Link>
          <Link href="http://cbee.ufla.br/portal/index.php" target="_blank">
            CBEE – Centro Brasileiro de Estudos em Ecologia de Estradas
          </Link>
          <Link
            href="https://www.prefeitura.sp.gov.br/cidade/secretarias/meio_ambiente/"
            target="_blank"
          >
            Cidade de São Paulo Verde e Meio Ambiente
          </Link>
          <Link
            href="https://www.infraestruturameioambiente.sp.gov.br/biodiversidade/"
            target="_blank"
          >
            Portal da Biodiversidade
          </Link>
          <Link href="http://www.icmbio.gov.br/portal/" target="_blank">
            ICMBio – Instituto Chico Mendes de Conservação da Biodiversidade
          </Link>
          <Link href="http://ibama.gov.br/" target="_blank">
            IBAMA – Instituto Brasileiro do Meio Ambiente e dos Recursos
            Naturais Renováveis
          </Link>
          <Link
            href="https://www.mma.gov.br/biodiversidade/comissao-nacional-de-biodiversidade"
            target="_blank"
          >
            CONABIO – Comissão Nacional da Biodiversidade
          </Link>
          <Link href="https://www.mma.gov.br/" target="_blank">
            MMA – Ministérios do Meio Ambiente
          </Link>
          <Link href="https://www.ana.gov.br/" target="_blank">
            Agência Nacional de Águas
          </Link>
          <Link href="https://www.funbio.org.br/" target="_blank">
            FUNBIO – Fundo Brasileiro para a Biodiversidade
          </Link>
          <Link
            href="http://floradobrasil.jbrj.gov.br/reflora/listaBrasil/PrincipalUC/PrincipalUC.do#CondicaoTaxonCP"
            target="_blank"
          >
            Flora do Brasil 2020
          </Link>
          <Link
            href="http://fauna.jbrj.gov.br/fauna/listaBrasil/PrincipalUC/PrincipalUC.do?lingua=pt"
            target="_blank"
          >
            Catálogo Taxonômico da Fauna do Brasil
          </Link>
          <Link
            href="https://www.infraestruturameioambiente.sp.gov.br/fundacaoflorestal/
            "
            target="_blank"
          >
            Fundação Florestal
          </Link>
        </BoxLinks>
      </Content>

      <SectionParks>
        <Wrapper>
          <Typography variant="h2" color="textPrimary" align="center">
            Parques do estado de São Paulo
          </Typography>
          <BoxParks>
            <ImageMediaCard
              title="Parque da Água Vermelha"
              paragraph="test uhsdiuhas aiudhsudh hasiudhsauidh"
            />
            <ImageMediaCard
              title="Lorem Ipsum"
              paragraph="test uhsdiuhas aiudhsudh hasiudhsauidh"
            />
            <ImageMediaCard
              title="Lorem Ipsum"
              paragraph="test uhsdiuhas aiudhsudh hasiudhsauidh"
            />
            <ImageMediaCard
              title="Lorem Ipsum"
              paragraph="test uhsdiuhas aiudhsudh hasiudhsauidh"
            />
            <ImageMediaCard
              title="Lorem Ipsum"
              paragraph="test uhsdiuhas aiudhsudh hasiudhsauidh"
            />
            <ImageMediaCard
              title="Lorem Ipsum"
              paragraph="test uhsdiuhas aiudhsudh hasiudhsauidh"
            />
            <ImageMediaCard
              title="Lorem Ipsum"
              paragraph="test uhsdiuhas aiudhsudh hasiudhsauidh"
            />
            <ImageMediaCard
              title="Lorem Ipsum"
              paragraph="test uhsdiuhas aiudhsudh hasiudhsauidh"
            />
            <ImageMediaCard
              title="Lorem Ipsum"
              paragraph="test uhsdiuhas aiudhsudh hasiudhsauidh"
            />
          </BoxParks>
        </Wrapper>
      </SectionParks>

      <Footer />
    </>
  );
};

export { UsefulLinks };
