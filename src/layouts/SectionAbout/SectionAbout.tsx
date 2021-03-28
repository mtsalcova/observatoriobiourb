import { Button } from 'components';
import { Box, Wrapper, TextBox } from './sectionAbout.style';

const SectionAbout = () => {
  return (
    <Box>
      <Wrapper>
        <TextBox>
          <h2>O que é o Observatório da Biodiversidade Urbana?</h2>
          <p>
            É uma plataforma digital que busca reunir todo conteúdo existente a
            respeito da biodiversidade urbana em todo o Brasil, a fim de
            democratizar o conhecimento sobre a temática. O projeto se consiste
            em compilar, organizar e divulgar informações de forma acessível
            para população e principalmente para a comunidade científica, como
            uma ferramenta para a conservação e valorização da biodiversidade.
          </p>
          <Button>Saiba mais</Button>
        </TextBox>
      </Wrapper>
    </Box>
  );
};

export { SectionAbout };
