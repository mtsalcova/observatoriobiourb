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
        <ImageMediaCard
          title="Adote uma Praça: espaços públicos de Sorocaba podem ser adotados!"
          paragraph="A Prefeitura de Sorocaba, por meio da Secretaria do Meio Ambiente (Sema), incentiva a adoção de espaços públicos, por meio do programa Adote uma Praça."
          link="http://noticias.sorocaba.sp.gov.br/adote-uma-praca-espacos-publicos-de-sorocaba-podem-ser-adotados"
          image="/images/news/noticias.sorocaba.sp.gov.br-img-0683-1024x683.jpg"
        />
        <ImageMediaCard
          title="A proposta do Brasil para o novo marco para a Biodiversidade pós 2020"
          paragraph="Relatório lançado nesta quarta-feira busca contribuir com as negociações brasileiras na aprovação do acordo global para conservação"
          link="https://veja.abril.com.br/blog/radar/a-proposta-do-brasil-para-o-novo-marco-para-a-biodiversidade-pos-2020/"
          image="/images/news/biodiversidade-floresta.jpeg"
        />

        <ImageMediaCard
          title="O Brasil é o país-chave na gestão mundial da água"
          paragraph="Ensaísta Davi Lago elenca os quatro desafios da nação que detém 13,7% de toda a água doce e 20% das águas subterrâneas do planeta"
          link="https://veja.abril.com.br/blog/matheus-leitao/o-brasil-e-o-pais-chave-na-gestao-mundial-da-agua/"
          image="/images/news/gestao-mundial-da-agua-brasil.jpeg"
        />
        <ImageMediaCard
          title="ONGs acusam falta de transparência e abandonam diálogo com governo sobre clima"
          paragraph="Parceria para Governo Aberto, que conta pontos para adesão do Brasil à OCDE, visava a construir de forma participativa ações associadas às mudanças climáticas"
          link="https://www.oc.eco.br/ongs-acusam-falta-de-transparencia-e-abandonam-dialogo-com-governo-sobre-clima/"
          image="/images/news/ongs.jpeg"
        />
      </Content>
      <Footer />
    </>
  );
};

export { NewsTemplate };
