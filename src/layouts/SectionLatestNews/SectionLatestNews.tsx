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
            title="Pesquisa revela rota de migração do bem-te-vi-rajado"
            paragraph="Espécie viaja da Amazônia até o Sudeste para reprodução; aparelhos de GPS foram usados para entender o percurso."
            link="https://g1.globo.com/sp/campinas-regiao/terra-da-gente/noticia/2021/09/24/pesquisa-revela-rota-de-migracao-do-bem-te-vi-rajado.ghtml"
            image="/images/news/bem-te-vi-rajado-01.jpeg"
          />
          <ImageMediaCard
            title="Ave marinha anilhada é reencontrada após 25 anos"
            paragraph="Trinta-réis recebeu credencial em 1995 quando ainda estava no ninho; nova localização foi a 1.000 quilômetros do primeiro registro."
            link="https://g1.globo.com/sp/campinas-regiao/terra-da-gente/noticia/2021/10/18/ave-marinha-anilhada-e-reencontrada-apos-25-anos.ghtml"
            image="/images/news/ave-marinha-anilhada.jpeg"
          />
          <ImageMediaCard
            title="Dez cidades vão receber ecopontos para coleta de lixo eletroeletrônico até novembro"
            paragraph="A meta é que 400 cidades brasileiras tenham sistema implementado até 2025"
            link="https://www.gov.br/pt-br/noticias/meio-ambiente-e-clima/2021/09/dez-cidades-vao-receber-ecopontos-para-coleta-de-lixo-eletroeletronico-ate-novembro"
            image="/images/news/ecopontos.jpeg"
          />
        </BoxNews>
        <BoxActions>
          <Link href="/noticias" passHref>
            <Button variant="outlined" color="secondary">
              Veja mais
            </Button>
          </Link>
        </BoxActions>
      </Wrapper>
    </Box>
  );
};

export { SectionLatestNews };
