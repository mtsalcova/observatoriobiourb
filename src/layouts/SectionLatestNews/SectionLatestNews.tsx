import { ImageMediaCard, Button } from 'components';
import {
  Box,
  Wrapper,
  Subtitle,
  BoxNews,
  BoxActions
} from './sectionLatestNews.style';

import Link from 'next/link';

const SectionLatestNews = () => {
  return (
    <Box>
      <Wrapper>
        <Subtitle variant="h2" color="textPrimary">
          Últimas notícias
        </Subtitle>
        <BoxNews>
          <ImageMediaCard
            title="Lorem Ipsum"
            paragraph="test uhsdiuhas aiudhsudh hasiudhsauidh"
          />
          <ImageMediaCard title="Lorem Ipsum" paragraph="test uhsdiuhas aiud" />
          <ImageMediaCard
            title="Lorem Ipsum"
            paragraph="test uhsdiuhas aiudhsudh hasiudhsauidh asdd asdsadddasd"
          />
        </BoxNews>
        <BoxActions>
          <Link href="/noticias" passHref>
            <Button variant="outlined" color="secondary">
              Saiba mais
            </Button>
          </Link>
        </BoxActions>
      </Wrapper>
    </Box>
  );
};

export { SectionLatestNews };
