import { Header, Footer, AboveTheFold, PolaroidPhoto, Title } from 'components';
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
        <Title type="title" variant="h1" colorCustom="#fff">
          Fotos
        </Title>
        <Title type="subtitle" variant="h5" colorCustom="#fff">
          Use a hashtag <strong>#observatoriobiourb</strong> no Instagram!
        </Title>
      </AboveTheFold>
      <Content>
        {posts.map(({ node }, i) => {
          return (
            <PolaroidPhoto
              imageSrc={`/api/instagram-web-api?src=${node.thumbnail_resources[2].src}`}
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
