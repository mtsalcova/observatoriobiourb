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
        <ImageMediaCard
          title="MMA cria programa para resgatar animais silvestres"
          paragraph="Iniciativa tem objetivo de proteger e recuperar a fauna silvestre em situação de risco e vulnerabilidade"
          link="https://www.gov.br/pt-br/noticias/meio-ambiente-e-clima/2021/10/mma-cria-programa-para-resgatar-animais-silvestres"
          image="/images/news/macaco.jpeg"
        />
        <ImageMediaCard
          title="O fenômeno La Niña está de volta: o que isso significa para o clima do Brasil e da região"
          paragraph="Fenômeno climático responsável por invernos rigorosos e secas severas em todo o mundo voltou e seus efeitos serão sentidos por vários meses, diz agência do governo americano."
          link="https://g1.globo.com/meio-ambiente/noticia/2021/10/19/o-fenomeno-la-nina-esta-de-volta-o-que-isso-significa-para-o-clima-do-brasil-e-da-regiao.ghtml"
          image="/images/news/la-nina.jpeg"
        />
        <ImageMediaCard
          title="Avanço do mar saliniza rio Amazonas e deixa comunidades em estado de emergência"
          paragraph="Para pesquisador, fenômeno pode estar relacionado ao aumento global do nível do mar e a atividades humanas que contribuíram com o assoreamento de um importante rio na região."
          link="https://g1.globo.com/meio-ambiente/noticia/2021/10/19/avanco-do-mar-saliniza-rio-amazonas-e-deixa-comunidades-em-estado-de-emergencia.ghtml"
          image="/images/news/surf.jpeg"
        />
        <ImageMediaCard
          title="JBS investe em inteligência artificial para controlar incêndios no Pantanal"
          paragraph="Nova plataforma será capaz de detectar fogo em até três minutos, em um sistema de cruzamento de dados de satélites e dados meteorológicos, diz multinacional."
          link="https://g1.globo.com/economia/agronegocios/noticia/2021/10/18/jbs-investe-em-inteligencia-artificial-para-controlar-incendios-no-pantanal.ghtml"
          image="/images/news/fogos.jpeg"
        />
        <ImageMediaCard
          title="Nova tempestade de areia atinge ao menos 11 cidades do interior de SP; entenda o fenômeno"
          paragraph="Fenômeno ocorre especialmente em áreas de plantação; é a quarta vez que grandes nuvens de poeira são registradas no interior paulista"
          link="https://www.cnnbrasil.com.br/nacional/nova-tempestade-de-areia-atinge-o-interior-de-sp-meteorologista-explica-fenomeno/"
          image="/images/news/tempestade-de-areia.jpeg"
        />
        <ImageMediaCard
          title="Um guia rápido para entender as mudanças climáticas"
          paragraph="A temperatura do planeta está aumentando em decorrência das atividades humanas, e as mudanças climáticas ameaçam todos os aspectos da nossa vida na Terra."
          link="https://g1.globo.com/meio-ambiente/aquecimento-global/noticia/2021/10/18/um-guia-rapido-para-entender-as-mudancas-climaticas.ghtml"
          image="/images/news/mudancas-climaticas.jpeg"
        />
        <ImageMediaCard
          title="Após reunião com Duque, Bolsonaro diz que Brasil e Colômbia vão à COP 26 'unidos' sobre a Amazônia"
          paragraph="Presidentes do Brasil e Colômbia se reuniram no Palácio do Planalto a pouco menos de duas semanas da conferência da ONU. Duque defendeu uma luta eficaz contra os crimes ambientais."
          link="https://g1.globo.com/politica/noticia/2021/10/19/apos-reuniao-com-duque-bolsonaro-diz-que-brasil-e-colombia-vao-a-cop-26-unidos-sobre-a-amazonia.ghtml"
          image="/images/news/bolsonaro.jpeg"
        />
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
