import { Box, Wrapper, Menu } from './header.style';
import Link from '@material-ui/core/Link';

import { Button } from './../../components/';

const Header = () => {
  return (
    <Box>
      <Wrapper>
        <div>{/* <img width="200px" src="/images/teste.png" /> */}</div>
        <Menu>
          <Link href="#">Sobre</Link>
          <Link href="#">Dist.Geográfica</Link>
          <Link href="#">Links úteis</Link>
          <Link href="#">Downloads</Link>
          <Link href="#">Fotos</Link>
          <Button color="primary" variant="contained">
            Login
          </Button>
        </Menu>
      </Wrapper>
    </Box>
  );
};

export { Header };
