import { Header, Footer, AboveTheFold, ImageMediaCard } from 'components';
import { Typography } from '@material-ui/core';
import { Content } from './news.style';

const NewsTemplate = () => {
  return (
    <>
      <Header />
      <AboveTheFold>
        <Typography variant="h1" color="textPrimary">
          Notícias
        </Typography>
      </AboveTheFold>
      <Content>
        <ImageMediaCard
          title="Lorem Ipsum"
          paragraph=" ajsidasio hauisdhuaishd ahsiudhasiudhas haisudhasiudhasui hasidhasiudhas asiudhasiudhsaiuh haidhiusa hduias dh"
        />
        <ImageMediaCard title="Lorem Ipsum" />
        <ImageMediaCard title="Lorem Ipsum" />
        <ImageMediaCard title="Lorem Ipsum" />
        <ImageMediaCard title="Lorem Ipsum" />
        <ImageMediaCard title="Lorem Ipsum" />
      </Content>
      <Footer />
    </>
  );
};

export { NewsTemplate };
