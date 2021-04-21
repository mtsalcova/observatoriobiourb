import {
  Header,
  Footer,
  AboveTheFold,
  Title,
  TabPanel,
  DownloadItem
} from 'components';
import { Content } from './downloads.style';
import { AppBar, Tabs, Tab } from '@material-ui/core';
import { useState } from 'react';

import { Fauna } from './Fauna';

const DownloadsTemplate = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event: React.ChangeEvent<any>, newValue: number) => {
    setValue(newValue);
  };

  return (
    <>
      <Header />
      <AboveTheFold>
        <Title type="title" variant="h1" colorCustom="#fff">
          Downloads
        </Title>
      </AboveTheFold>
      <Content>
        <AppBar
          position="static"
          color="default"
          style={{ borderRadius: '4px' }}
        >
          <Tabs
            value={value}
            onChange={handleChange}
            indicatorColor="primary"
            textColor="primary"
            variant="fullWidth"
          >
            <Tab label="Livros" />
            <Tab label="Guias" />
            <Tab label="Doc. de Referência" />
            <Tab label="Artigos Científicos" />
          </Tabs>
        </AppBar>
        <TabPanel value={value} index={0}>
          <DownloadItem
            title="Biodiversidade no Campus - UNIP Sorocaba"
            link="https://drive.google.com/file/d/1RK5L3kBCkTtwdTcVjGHIPjFqMWdNlZ4v/view?usp=sharing"
          />
          <DownloadItem
            title="Peixes de Água Doce"
            link="https://drive.google.com/file/d/1S5ytlEopS4xrPW4FA_HzDGOFpqR4j88Q/view?usp=sharing"
          />
          <DownloadItem
            title="Parque Natural Municipal Corredores da Biodiversidade"
            link="https://drive.google.com/file/d/1S5ytlEopS4xrPW4FA_HzDGOFpqR4j88Q/view?usp=sharing"
          />
          <DownloadItem
            title="Panorama da Biodiversidade nas Cidades"
            link="https://drive.google.com/file/d/1p7jcoyojvZSDUIHiARLubpAWmUlTqTB_/view?usp=sharing"
          />
          <DownloadItem
            title="Biodiversidade em Unidades de Conservação"
            link="https://drive.google.com/file/d/1luFenDf76uNbHtrf1aD-YGfA5PGRayAt/view?usp=sharing"
          />
          <DownloadItem
            title="Mamíferos do Brasil"
            link="https://drive.google.com/file/d/1sfvyvHbvZOM9J73o7mQ3FtrCZLdVkzYy/view?usp=sharing"
          />
          <DownloadItem
            title="Instituto Chico Mendes de Conservação da Biodiversidade"
            link="https://drive.google.com/file/d/1t8JTkdf4W5WBmPXaYDBV-6CHoRKE4-JA/view?usp=sharing "
          />
          <DownloadItem
            title="Jardins que fazem a cidade de Sorocaba"
            link="https://drive.google.com/file/d/1Cx3zkHLFHzOzqqtlgTMlYVsReTN_RXWu/view?usp=sharing"
          />
          <DownloadItem
            title="II Seminário Conectando Peixes, Rios e Pessoas"
            link="https://drive.google.com/file/d/1fI1P2XTO_v0tZvDS0-1kjPHkcWxzTLEc/view?usp=sharing"
          />
          <DownloadItem
            title="Conectando Peixes, Rios e Pessoas"
            link="https://drive.google.com/file/d/1wmsj4ab4ug9--UZ6vEk_sdWcE7veaLNN/view?usp=sharing"
          />
          <DownloadItem
            title="Comportamento Animal"
            link="https://drive.google.com/file/d/1BhggGk-7CVVJSy4G5yiYET99yOGLoQg5/view?usp=sharing"
          />
          <DownloadItem
            title="Biodiversidade na APA ITUPARARANGA"
            link="https://drive.google.com/file/d/1RUd--U9OdUUhKwxBWgrm4_8owGZ9CjEf/view?usp=sharing"
          />
          <DownloadItem
            title="Biodiversidade do Município de Sorocaba"
            link="https://drive.google.com/file/d/1nH5cm14SoBq3uRqeBvS7vLNbb462u4la/view?usp=sharing"
          />
          <DownloadItem
            title="Biodiversidade do Município de Sorocaba: Atualização e Subsídios para a sua Conservação"
            link="https://drive.google.com/file/d/1MdClkZgzHVa-YoVJj0MWaEQS2dgJAK5Z/view?usp=sharing"
          />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <DownloadItem
            title="Pegadas"
            link="https://drive.google.com/file/d/1n4kqt-ppb9KA_ZEUfEcKvcdX6fxah-sr/view?usp=sharing"
          />
          <DownloadItem
            title="Guia Fotográfico de Identificação da Herpetofauna"
            link="https://drive.google.com/file/d/1EnxboQZ0CV8mJdXQ14Cb7zgKkZxMFKvi/view?usp=sharing"
          />
          <DownloadItem
            title="Guia de Campo - Pegadas"
            link="https://drive.google.com/file/d/1KYkt-NJod1lJss195FK_eOxdm6vgJoT-/view?usp=sharing"
          />
          <DownloadItem
            title="100 Aves - Parque Nacional da Serra da Canastra"
            link="https://drive.google.com/file/d/127DGoXMFpJXUHY365JqgmDZ4JJCAo19j/view?usp=sharing"
          />
          <DownloadItem
            title="Aves da Cidade - São Paulo"
            link="https://drive.google.com/file/d/1g649i-40myjrP9KM1V1vc7XZJ-vhxz2V/view?usp=sharing"
          />
          <DownloadItem
            title="Aves do Cerrado"
            link="https://drive.google.com/file/d/130owrjQwJpmZG6Aa3eO51csN_SqQQLYC/view?usp=sharing"
          />
          <DownloadItem
            title="Aves da Cidade - Sorocaba"
            link="https://drive.google.com/file/d/1zAmMyvgdTU-pQon89oPf2EcXnEnb-jRa/view?usp=sharing"
          />
        </TabPanel>

        <TabPanel value={value} index={2}>
          <DownloadItem
            title="Valoração Econômica da Biodiversidade"
            link="https://drive.google.com/file/d/1Knc8Hbi08GMTz_oUHnlqAOzQjyhKJ3FO/view?usp=sharing"
          />
          <DownloadItem
            title="Meio Ambiente de Sorocaba"
            link="https://drive.google.com/file/d/1OQ6MfQnZrJk-75XZtIF7c1NH5KuFaAzb/view?usp=sharing"
          />
          <DownloadItem
            title="Sorocaba - A Cidade da Biodiversidade"
            link="https://drive.google.com/file/d/1-LrJ-UEK_bhp7pRLeAiciHvU986khPh-/view?usp=sharing"
          />
          <DownloadItem
            title="Programa Muni. de Edução Ambiental de Sorocaba"
            link="https://drive.google.com/file/d/12gVfm_XKiY7lamb8wHW9bvfqyEYg228j/view?usp=sharing"
          />
          <DownloadItem
            title="Políticas Públicas e Biodiversidade no Brasil"
            link="https://drive.google.com/file/d/1UDUGIzWhIhQqJW1rusppy48oQNwbp970/view?usp=sharing"
          />
          <DownloadItem
            title="Plano Diretor Ambiental de Sorocaba - Volume 1"
            link="https://drive.google.com/file/d/1TQX-c9O0USxLIm6_5NocffQXRLrQe0Kc/view?usp=sharing"
          />
          <DownloadItem
            title="Plano Diretor Ambiental de Sorocaba - Volume 2"
            link="https://drive.google.com/file/d/1O3pwvKhzXMds3dqqkwCqHqbHM6-PtpHz/view?usp=sharing"
          />
          <DownloadItem
            title="Biodiversidade e Comunidades Tradicionais no Brasil"
            link="https://drive.google.com/file/d/1RDiTu4FOQ5ubiDT4Z5KlI2p918GGvX5x/view?usp=sharing"
          />
          <DownloadItem
            title="Lista das Aves do Brasil"
            link="https://drive.google.com/file/d/1o0LDSa66R4vfqbblysAf-VAHDjNNc3zu/view?usp=sharing"
          />
          <DownloadItem
            title="Herpetologia Brasileira - Volume 8 Número 1"
            link="https://drive.google.com/file/d/1Hv-8QzPBUOmunOoj4Ne_n0JIaKLGJDYY/view?usp=sharing"
          />
          <DownloadItem
            title="Herpetologia Brasileira - Volume 7 Número 1"
            link="https://drive.google.com/file/d/15MjcnwO4CciVNoE5JUqthkmtQ2DC_LTm/view?usp=sharing"
          />
          <DownloadItem
            title="Herpetologia Brasileira - Volume 7 Número 1"
            link="https://drive.google.com/file/d/15MjcnwO4CciVNoE5JUqthkmtQ2DC_LTm/view?usp=sharing"
          />
          <DownloadItem
            title="Lei: Refúgios da Biodiversidade no Município de Sorocaba"
            link="https://drive.google.com/file/d/1aShhgs9bKdOdh-93YePu4Sd2CXkEKRLw/view?usp=sharing"
          />
          <DownloadItem
            title="Estudo sobre formas de Repartição de Benefícios em atividades de Prospecção Biológica"
            link="https://drive.google.com/file/d/1UoF9jPdhiJePkq_Yamtbs-aZ9yOOoh6c/view?usp=sharing"
          />
          <DownloadItem
            title="Estratégia e Plano de Ação Nacionais para a Biodiversidade"
            link="https://drive.google.com/file/d/1HzykS4_06E70e-nXrTf3snJHhR1dHHHQ/view?usp=sharing"
          />
          <DownloadItem
            title="Análise comparativa - Biodiversidade de diversos Países"
            link="https://drive.google.com/file/d/1zW0rRxpVWI0msBLN-Tml8BpbxLaP2_h9/view?usp=sharing"
          />
          <DownloadItem
            title="A adequação da legislação ambiental à Convenção sobre Diversidade Biológica"
            link="https://drive.google.com/file/d/1uauG3yWI_B6iJ5aYi7TcmvNqBi30Hcwb/view?usp=sharing"
          />
          <DownloadItem
            title="5º Relatório Nacional para a convenção sobre Diversidade Biológica"
            link="https://drive.google.com/file/d/1BnJyrMm0SsMw_dCgmneQ-4EVYQFZSrqj/view?usp=sharing"
          />
        </TabPanel>
        <TabPanel value={value} index={3}>
          <Title
            style={{ margin: '20px 0' }}
            type="subtitle"
            variant="h5"
            color="primary"
          >
            Flora
          </Title>
          <DownloadItem
            title="Potencial Contribuição da Arborização Urbana"
            link="https://drive.google.com/file/d/1AGrCibCPAk-Oym02rvlv_kpiL8H8Jh9L/view?usp=sharing"
          />
          <DownloadItem
            title="Florestas Urbanas"
            link="https://drive.google.com/file/d/1QCc82avjxavcp5NPnXWjM4qL8ZPhl9W6/view?usp=sharing"
          />
          <DownloadItem
            title="Estudo da Vegetação - Parque Municipal de Sorocaba"
            link="https://drive.google.com/file/d/1a5YkFcWO3-5uZfmBbyZducueOF_7wCjw/view?usp=sharing"
          />
          <DownloadItem
            title="Composição Florística e Caracterização Sucessional como Subsídio"
            link="https://drive.google.com/file/d/1NDZY7hF7Xed-DPrmGxGPhxoWPeKn_ZwK/view?usp=sharing"
          />
          <DownloadItem
            title="Áreas verdes públicas urbanas: conceitos, usos e funções"
            link="https://drive.google.com/file/d/1BZaiS--wtC2gggUHlmfJH0BDeY3LwpAv/view?usp=sharing"
          />
          <DownloadItem
            title="Areas verdes urbanas"
            link="https://drive.google.com/file/d/1WQ8bkS_QiQCDrmjZmjfA68skRN--n8qh/view?usp=sharing"
          />
          <DownloadItem
            title="Arborização e Florestas Urbanas"
            link="https://drive.google.com/file/d/1IWJdzrfU2exaM9lQ0XK7y33VrDjmHyCG/view?usp=sharing"
          />

          <Title
            style={{ margin: '30px 0' }}
            type="subtitle"
            variant="h5"
            color="primary"
          >
            Biodiversidade e Políticas Públicas
          </Title>
          <DownloadItem
            title="Técnicas usuais de estimativa da Biodiversidade"
            link="https://drive.google.com/file/d/1h11ckcgARnZRtn7oW8AcKTxG4Yh4aArQ/view?usp=sharing"
          />
          <DownloadItem
            title="Sorocaba e Biodiversidade"
            link="https://drive.google.com/file/d/1KMiV4zaets8KzAf2x11I7qxUrNEr8Tpl/view?usp=sharing"
          />
          <DownloadItem
            title="Proteção da biodiversidade, legislação e políticas públicas - Sorocaba"
            link="https://drive.google.com/file/d/1Yr49kBmOWSqMPlJVP2-CQGX55HZwBf4c/view?usp=sharing"
          />
          <DownloadItem
            title="Proposição de Corredor Ecológico - Sorocaba"
            link="https://drive.google.com/file/d/1LPF2ZhUl_X-nWq9-RvgAwb9kCax5zdw-/view?usp=sharing"
          />
          <Title
            style={{ margin: '30px 0' }}
            type="subtitle"
            variant="h5"
            color="primary"
          >
            Fauna
          </Title>
          <Fauna />
        </TabPanel>
      </Content>
      <Footer />
    </>
  );
};

export { DownloadsTemplate };
