import { Box, Wrapper, Photos, ActionBox } from './sectionPhotos.style';
import { PolaroidPhoto, Button, Title } from 'components';

import Link from 'next/link';

interface Props {
  posts: [
    {
      node: any;
    }
  ];
}

const SectionPhotos = ({ posts }: Props) => {
  return (
    <Box>
      <Wrapper>
        <Title type="subtitle" variant="h2" colorCustom="#fff">
          Fotos
        </Title>
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
