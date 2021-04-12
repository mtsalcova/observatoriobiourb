import { Header, Footer, AboveTheFold, PolaroidPhoto } from 'components';
import { Typography } from '@material-ui/core';
import { Content } from './photos.style';

interface Props {
  posts: [
    {
      node: any;
    }
  ];
}

const PhotosTemplate = ({ posts }: Props) => {
  return (
    <>
      <Header />
      <AboveTheFold>
        <Typography variant="h1" color="textPrimary">
          Fotos
        </Typography>
        <Typography variant="h5" color="textPrimary">
          Use a hashtag <strong>#observatoriobiourb</strong> no Instagram!
        </Typography>
      </AboveTheFold>
      <Content>
        {posts.map(({ node }, i) => {
          return (
            <PolaroidPhoto
              imageSrc={node.thumbnail_resources[2].src}
              link={node.display_url}
              key={i}
            />
          );
        })}
      </Content>
      <Footer />
    </>
  );
};

export { PhotosTemplate };
