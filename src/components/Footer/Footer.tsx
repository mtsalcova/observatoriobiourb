import { Box, Wrapper } from './footer.style';
import Image from 'next/image';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <Box>
      <Wrapper>
        <div>
          <p>Copyright © {currentYear} - Todos os direitos reservados.</p>
          <a href="mailto:observatoriobiodiversidadeurb@gmail.com">
            observatoriobiodiversidadeurb@gmail.com
          </a>
        </div>

        <a
          href="https://www.instagram.com/observatoriobiourb/"
          rel="noreferrer"
          target="_blank"
        >
          <Image
            src="/images/icons/insta-icon.svg"
            alt="Ícone de uma camera fotográfica"
            width={30}
            height={30}
          />
        </a>
      </Wrapper>
    </Box>
  );
};

export { Footer };
