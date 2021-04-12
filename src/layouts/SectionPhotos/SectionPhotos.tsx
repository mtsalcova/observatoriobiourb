import {
  Box,
  Subtitle,
  Wrapper,
  Photos,
  ActionBox
} from './sectionPhotos.style';
import { PolaroidPhoto, Button } from 'components';

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
          {/* <PolaroidPhoto />
          <PolaroidPhoto />
          <PolaroidPhoto />
          <PolaroidPhoto />
          <PolaroidPhoto />
          <PolaroidPhoto />
          <PolaroidPhoto />
          <PolaroidPhoto /> */}
        </Photos>
        <ActionBox>
          <Button variant="outlined" color="secondary">
            Veja mais
          </Button>
        </ActionBox>
      </Wrapper>
    </Box>
  );
};

export { SectionPhotos };
