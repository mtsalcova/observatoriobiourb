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
        <p>
          Com o objetivo de fomentar a relevância da biodiversidade que habita
          as cidades, a ideia do projeto teve início em 2019 com o
          desenvolvimento de uma Iniciação Científica. Usando como base
          observatórios já existentes como o Observatório do Clima, das Águas e
          do Cinema, o projeto foi montado inicialmente visando à cidade de
          Sorocaba e sua região metropolitana. Ao decorrer do desenvolvimento do
          projeto as ideias apareceram e aprimoramos algumas ferramentas, como a
          de distribuição geográfica e expandimos alguns dados a fim de abranger
          todo o Brasil.
        </p>

        <p>
          O Observatório conta com ferramentas como Notícias, que serão
          atualizadas periodicamente com os principais assuntos em alta
          relacionados ao meio ambiente e biodiversidade. Links Úteis onde você
          encontra os principais sites para busca com a temática meio
          ambiente/biodiversidade como IBAMA, ICMBio e Secretarias do Meio
          Ambiente, conta também com os principais parques do estado de São
          Paulo. Distribuição geográfica onde os usuários poderão adicionar seus
          registros de fauna de todo Brasil, auxiliando assim nos dados de
          distribuição geográfica das espécies. Download que conta com livros,
          guias, artigos científicos e documentos de referência, materiais que
          visam auxiliam em pesquisas e projetos futuros que envolvam assuntos
          de fauna, flora, políticas públicas, gestão ambiental e urbanização, e
          uma Galeria de Fotos integrada com o instagram, usando nossa hashtag{' '}
          <a href="">#observatoriobiourb</a>, a foto é automaticamente é
          importada para a galeria do site.
        </p>
        <p>
          O projeto compila, organiza e divulga informações de forma acessível
          para população e principalmente para a comunidade científica, como uma
          ferramenta primordial na conservação e valorização da biodiversidade,
          fortalecendo o diálogo entre a população, academia e governos.
        </p>
      </Content>
      <Footer />
    </>
  );
};

export { AboutTemplate };
