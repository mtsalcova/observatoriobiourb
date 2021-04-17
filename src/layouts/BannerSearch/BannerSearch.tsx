import {
  Box,
  SearchItemBox,
  Title,
  SearchItemForm
} from './bannerSearch.style';

import { TextField, Button } from 'components';

const BannerSearch = () => {
  return (
    <Box>
      <SearchItemBox>
        <Title>
          Seja bem vindo ao <br />
          Observatório da Biodiversidade Urbana!
        </Title>
        {/* <h2>Pesquise a distribuição geográfica de qualquer espécie:</h2> */}
        {/* <SearchItemForm> */}
        {/* <TextField label="Pesquisar" /> */}
        {/* </SearchItemForm> */}
      </SearchItemBox>
    </Box>
  );
};

export { BannerSearch };
