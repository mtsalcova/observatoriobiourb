import {
  Header,
  Footer,
  AboveTheFold,
  ImageMediaCard,
  Title
} from 'components';
import { Content } from './news.style';

const NewsTemplate = () => {
  return (
    <>
      <Header />
      <AboveTheFold>
        <Title type="title" variant="h1" colorCustom="#fff">
          Notícias
        </Title>
      </AboveTheFold>
      <Content>
        <ImageMediaCard
          title="Adote uma Praça: espaços públicos de Sorocaba podem ser adotados!"
          paragraph="A Prefeitura de Sorocaba, por meio da Secretaria do Meio Ambiente (Sema), incentiva a adoção de espaços públicos, por meio do programa Adote uma Praça."
          link="http://noticias.sorocaba.sp.gov.br/adote-uma-praca-espacos-publicos-de-sorocaba-podem-ser-adotados"
        />
        <ImageMediaCard
          title="Procurador do TCU pede afastamento de Salles do Ministério do Meio Ambiente"
          paragraph="O procurador do Ministério Público junto ao Tribunal de Contas da União (TCU), Lucas Rocha Furtado, pediu à corte de contas que determine à Casa Civil de Jair Bolsonaro o afastamento cautelar do ministro do Meio Ambiente, Ricardo Salles, de suas funções. "
          link="https://blogs.oglobo.globo.com/malu-gaspar/post/procurador-do-mp-de-contas-pedira-ao-tcu-afastamento-de-salles-do-ministerio-do-meio-ambiente.html"
        />

        {/* <ImageMediaCard title="Lorem Ipsum" />
        <ImageMediaCard title="Lorem Ipsum" />
        <ImageMediaCard title="Lorem Ipsum" />
        <ImageMediaCard title="Lorem Ipsum" />
        <ImageMediaCard title="Lorem Ipsum" /> */}
      </Content>
      <Footer />
    </>
  );
};

export { NewsTemplate };
