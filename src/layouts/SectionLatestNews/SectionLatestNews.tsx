import { ImageMediaCard } from 'components';
import { Box, Wrapper, Subtitle, BoxNews } from './sectionLatestNews.style';

const SectionLatestNews = () => {
  return (
    <Box>
      <Wrapper>
        <Subtitle variant="h2" color="textPrimary">
          Últimas notícias
        </Subtitle>
        <BoxNews>
          <ImageMediaCard />
          <ImageMediaCard />
          <ImageMediaCard />
        </BoxNews>
      </Wrapper>
    </Box>
  );
};

export { SectionLatestNews };
