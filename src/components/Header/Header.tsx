import { Box, Wrapper, Menu, BoxLogo } from './header.style';
import { Link as MenuItem } from '@material-ui/core';
import Link from 'next/link';
import Image from 'next/image';

const Header = () => {
  return (
    <Box>
      <Wrapper>
        <BoxLogo>
          <Link href="/">
            <Image
              src="/images/observatorio-da-biodiversidade-urbana-logo.png"
              alt="Fotos de Animais, Árvores e uma Lupa"
              width={150}
              height={114.34}
            />
          </Link>
        </BoxLogo>
        <Menu>
          <Link href="/sobre">
            <MenuItem>Sobre</MenuItem>
          </Link>
          <Link href="/distribuicao-geografica">
            <MenuItem>Dist.Geográfica</MenuItem>
          </Link>
          <Link href="/links-uteis">
            <MenuItem>Links úteis</MenuItem>
          </Link>
          <Link href="/noticias">
            <MenuItem>Notícias</MenuItem>
          </Link>
          <Link href="/downloads">
            <MenuItem>Downloads</MenuItem>
          </Link>
          <Link href="/fotos">
            <MenuItem>Fotos</MenuItem>
          </Link>
          {/* <Button color="primary" variant="contained">
            Login
          </Button> */}
        </Menu>
      </Wrapper>
    </Box>
  );
};

export { Header };
