import { Box, Subtitle, Wrapper, Photos } from './sectionPhotos.style';
import { PolaroidPhoto } from 'components';

const SectionPhotos = () => {
  return (
    <Box>
      <Wrapper>
        <Subtitle variant="h2" color="textPrimary">
          Fotos
        </Subtitle>
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
