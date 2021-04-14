import {
  Box,
  Subtitle,
  Wrapper,
  Photos,
  ActionBox
} from './sectionPhotos.style';
import { PolaroidPhoto, Button } from 'components';

import Link from 'next/link';

interface Props {
  posts: [
    {
      node: any;
    }
  ];
}

const SectionPhotos = ({ posts }: Props) => {
  console.log(posts);
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
          {posts.map(({ node }, i) => {
            return (
              <PolaroidPhoto
                imageSrc={node.thumbnail_resources[2].src}
                link={node.display_url}
                key={i}
              />
            );
          })}
        </Photos>
        <ActionBox>
          <Link href="/fotos" passHref>
            <Button variant="outlined" color="secondary">
              Veja mais
            </Button>
          </Link>
        </ActionBox>
      </Wrapper>
    </Box>
  );
};

export { SectionPhotos };
