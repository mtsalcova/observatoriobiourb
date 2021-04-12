import { Button } from 'components';
import { Box, Wrapper, TextBox, Subtitle } from './sectionAbout.style';
import Link from 'next/link';

const SectionAbout = () => {
  return (
    <Box>
      <Wrapper>
        <TextBox>
          <Subtitle variant="h2" color="textPrimary">
            Sobre nós
          </Subtitle>
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
            <Button>Saiba mais</Button>
          </Link>
        </TextBox>
      </Wrapper>
    </Box>
  );
};

export { SectionAbout };
