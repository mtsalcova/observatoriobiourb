import { Box, Title, Wrapper, Photos } from './sectionPhotos.style';
import { PolaroidPhoto } from 'components';

const SectionPhotos = () => {
  return (
    <Box>
      <Wrapper>
        <Title variant="subtitle">Fotos</Title>
        <p>
          Use a hashtag <strong>#observatoriobiourb</strong> no Instagram
        </p>
        <Photos>
          <PolaroidPhoto />
          <PolaroidPhoto />
          <PolaroidPhoto />
          <PolaroidPhoto />
          <PolaroidPhoto />
          <PolaroidPhoto />
          <PolaroidPhoto />
          <PolaroidPhoto />
        </Photos>
      </Wrapper>
    </Box>
  );
};

export { SectionPhotos };
