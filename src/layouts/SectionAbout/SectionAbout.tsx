import { Box, Wrapper, TextBox } from './sectionAbout.style';
import { Button } from '@material-ui/core';
import Link from 'next/link';
import { Title } from 'components';

const SectionAbout = () => {
  return (
    <Box>
      <Wrapper>
        <TextBox>
          <Title type="subtitle" variant="h2" color="textPrimary">
            Sobre nós
          </Title>
          <p>
            Somos uma plataforma digital que busca reunir todo conteúdo
            existente a respeito da biodiversidade urbana em todo o Brasil, a
            fim de democratizar o conhecimento sobre a temática. O projeto se
            consiste em compilar, organizar e divulgar informações de forma
            acessível para população e principalmente para a comunidade
            científica, como uma ferramenta para a conservação e valorização da
            biodiversidade.
          </p>
          <Link href="/sobre">
            <Button color="primary" variant="contained">
              Saiba mais
            </Button>
          </Link>
        </TextBox>
      </Wrapper>
    </Box>
  );
};

export { SectionAbout };
