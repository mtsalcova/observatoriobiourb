import { Header, Footer, AboveTheFold, RaisedBox } from 'components';
import { Typography } from '@material-ui/core';
import { Content } from './about.style';

const AboutTemplate = () => {
  return (
    <>
      <Header />
      <AboveTheFold>
        <Typography variant="h1" color="textPrimary">
          Sobre nós
        </Typography>
      </AboveTheFold>
      <Content>
        <RaisedBox>
          <p>
            Somos uma plataforma digital que busca reunir todo conteúdo
            existente a respeito da biodiversidade urbana em todo o Brasil, a
            fim de democratizar o conhecimento sobre a temática. O projeto se
            consiste em compilar, organizar e divulgar informações de forma
            acessível para população e principalmente para a comunidade
            científica, como uma ferramenta para a conservação e valorização da
            biodiversidade.
          </p>
        </RaisedBox>
      </Content>
      <Footer />
    </>
  );
};

export { AboutTemplate };
