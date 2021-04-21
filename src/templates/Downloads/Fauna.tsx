// import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import { DownloadItem } from 'components';
import {
  Accordion,
  AccordionSummary,
  AccordionDetails
} from '@material-ui/core';

const Fauna = () => {
  return (
    <>
      <Accordion>
        <AccordionSummary
          // expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          Peixes
        </AccordionSummary>
        <AccordionDetails style={{ flexWrap: 'wrap' }}>
          <DownloadItem
            title="The fish community of the Sorocaba"
            link="https://drive.google.com/file/d/1lEUBqDqWgg7GeX1rm-0w0ltjNCO9D5GM/view?usp=sharing"
          />
          <DownloadItem
            title="Peixes do Rio Piragibu-Mirim em Sorocaba/SP"
            link="https://drive.google.com/file/d/1SD-I-l8ky6sKjcqwzc-I2wVmetoqymR5/view?usp=sharing"
          />
          <DownloadItem
            title="Length-weight relationship for two fish species"
            link="https://drive.google.com/file/d/1gkSnlXcrYhhw6ZJBXfqbF-3R6GQ9S51p/view?usp=sharing"
          />
          <DownloadItem
            title="Relação peso-comprimento e fator de condição de comprimento"
            link="https://drive.google.com/file/d/17cxbDy1n15qKxjxegzzieCIw667fZPL9/view?usp=sharing"
          />
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          // expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          Mamíferos
        </AccordionSummary>
        <AccordionDetails style={{ flexWrap: 'wrap' }}>
          <DownloadItem
            title="Urban fauna mammals present in forest fragments in the state of Sao Paulo"
            link="https://drive.google.com/file/d/1P3pSx8iy22WlO3jZkhTB-yj-Gf4w11eJ/view?usp=sharing"
          />
          <DownloadItem
            title="Levantamento Secundário do Estado"
            link="https://drive.google.com/file/d/1XCFgY3wUAS43zJBuZju4kknGVegtwRMb/view?usp=sharing"
          />
          <DownloadItem
            title="Inventário mastofaunístico do fragmento de mata adjacente"
            link="https://drive.google.com/file/d/1aeobg91HpoCYpUc_bdFsYSgNMTSOZL6K/view?usp=sharing"
          />
          <DownloadItem
            title="Estruturas das comunidades de pequenos mamíferos roedores do parque"
            link="https://drive.google.com/file/d/1ubuBgthrNWk8FgHC5D9DnHun0x44LX-h/view?usp=sharing"
          />
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          // expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          Aves
        </AccordionSummary>
        <AccordionDetails style={{ flexWrap: 'wrap' }}>
          <DownloadItem
            title="Malófagos parasitas de aves Campestres Cativas do Zoológico"
            link="https://drive.google.com/file/d/1ARpCXazHCDzIJTcVcH-XOQrucCj_PiR9/view?usp=sharing"
          />
          <DownloadItem
            title="Inventário da avifauna do parque natural municipal corredores de biodiversidade"
            link="https://drive.google.com/file/d/1wlz4Q7rF_zuwUK16SRJuBYvSpLhd6rGo/view?usp=sharing"
          />
          <DownloadItem
            title="Enriquecimento Ambiental no Recinto do Mutum-de-Penacho"
            link="https://drive.google.com/file/d/1OgynsgdE_NZs8SOVyYBGnL4CP6NOZ37L/view?usp=sharing"
          />
          <DownloadItem
            title="Carrapatos em aves selvagens no Zoológico de Sorocaba – São Paulo, Brasil"
            link="https://drive.google.com/file/d/1VtUwE-ImobeBs8cBeL8vbtSlg7FaGNWw/view?usp=sharing"
          />
          <DownloadItem
            title="Avifauna em uma Área de Cerrado no Bairro do Central Parque, Município de Sorocaba"
            link="https://drive.google.com/file/d/1p7qRfxRPh4Uwgtik7vkNW6ZB89iLj_Jg/view?usp=sharing"
          />
          <DownloadItem
            title="Aves do Rio Sorocaba"
            link="https://drive.google.com/file/d/1DYSI1pqkomf30_Zg6qtKBDWtmVEhSaZI/view?usp=sharing"
          />
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          // expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          Invertebrados
        </AccordionSummary>
        <AccordionDetails style={{ flexWrap: 'wrap' }}>
          <DownloadItem
            title="Ocorrência de um molusco invasor"
            link="https://drive.google.com/file/d/1O2ZfNfTgHahXlKBBuMCyaDdcx1PqfSqv/view?usp=sharing"
          />
          <DownloadItem
            title="Inventário da biodiversidade de lacraias (Arthropoda, Chilopoda)"
            link="https://drive.google.com/file/d/1MkzlTSKe6LXCuKYNLPnNqqDUgczIMs1c/view?usp=sharing"
          />
          <DownloadItem
            title="Fauna de besouros bioluminescentes"
            link="https://drive.google.com/file/d/1oUFE8FN0-AU0gflbqFpd0_byN6CWWlLL/view?usp=sharing"
          />
          <DownloadItem
            title="Dipterofauna de fragmentos vegetacionais da UFSCar - campus Sorocaba, SP, Brasil."
            link="https://drive.google.com/file/d/1NeInTaLTMcUdn59Bx2p8zLZsN4tRmCDi/view?usp=sharing"
          />
        </AccordionDetails>
      </Accordion>
    </>
  );
};

export { Fauna };
