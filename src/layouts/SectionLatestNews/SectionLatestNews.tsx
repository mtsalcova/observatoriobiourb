import { ImageMediaCard, Button } from 'components';
import {
  Box,
  Wrapper,
  Title,
  BoxNews,
  BoxActions
} from './sectionLatestNews.style';

import Link from 'next/link';

const SectionLatestNews = () => {
  return (
    <Box>
      <Wrapper>
        <Title type="subtitle" variant="h2" colorCustom="#fff">
          Últimas notícias
        </Title>
        <BoxNews>
          <ImageMediaCard
            title="Procurador do TCU pede afastamento de Salles do Ministério do Meio Ambiente"
            paragraph="O procurador do Ministério Público junto ao Tribunal de Contas da União (TCU), Lucas Rocha Furtado, pediu à corte de contas que determine à Casa Civil de Jair Bolsonaro o afastamento cautelar do ministro do Meio Ambiente, Ricardo Salles, de suas funções."
            link="https://blogs.oglobo.globo.com/malu-gaspar/post/procurador-do-mp-de-contas-pedira-ao-tcu-afastamento-de-salles-do-ministerio-do-meio-ambiente.html"
            image="/images/news/image_2021-04-15_at_22.47.58.jpeg"
          />
          <ImageMediaCard
            title="Sustentabilidade é primordial para o desenvolvimento de São Paulo"
            paragraph="No entanto, para Buckeridge, uma cidade sustentável não pode prescindir da diminuição da desigualdade"
            link="https://www.institutodeengenharia.org.br/site/2020/02/12/sustentabilidade-e-primordial-para-o-desenvolvimento-de-sao-paulo/"
            image="/images/news/sao-paulo.jpeg"
          />
          <ImageMediaCard
            title="Epidemias aumentam quando biodiversidade declina, alerta estudo"
            paragraph="A pesquisa oferece uma primeira visão global de como as mudanças na cobertura florestal potencialmente contribuem para doenças zoonóticas e transmitidas por vetores"
            link="https://www.oc.eco.br/epidemias-aumentam-quando-biodiversidade-declina-alerta-estudo/"
            image="/images/news/virus.jpeg"
          />
        </BoxNews>
        <BoxActions>
          <Link href="/noticias" passHref>
            <Button variant="outlined" color="secondary">
              Saiba mais
            </Button>
          </Link>
        </BoxActions>
      </Wrapper>
    </Box>
  );
};

export { SectionLatestNews };
