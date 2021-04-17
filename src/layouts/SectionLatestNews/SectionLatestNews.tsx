import { ImageMediaCard, Button } from 'components';
import {
  Box,
  Wrapper,
  Title,
  BoxNews,
  BoxActions
} from './sectionLatestNews.style';

import Link from 'next/link';

const SectionLatestNews = () => {
  return (
    <Box>
      <Wrapper>
        <Title type="subtitle" variant="h2" colorCustom="#fff">
          Últimas notícias
        </Title>
        <BoxNews>
          <ImageMediaCard
            title="Lorem Ipsum"
            paragraph="test uhsdiuhas aiudhsudh hasiudhsauidh"
            link=""
          />
          <ImageMediaCard
            title="Lorem Ipsum"
            paragraph="test uhsdiuhas aiud"
            link=""
          />
          <ImageMediaCard
            title="Lorem Ipsum"
            paragraph="test uhsdiuhas aiudhsudh hasiudhsauidh asdd asdsadddasd"
            link=""
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
