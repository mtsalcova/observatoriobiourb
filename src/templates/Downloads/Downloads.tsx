import { Header, Footer, AboveTheFold } from 'components';
import { Typography } from '@material-ui/core';
import { Content } from './downloads.style';

const DownloadsTemplate = () => {
  return (
    <>
      <Header />
      <AboveTheFold>
        <Typography variant="h1" color="textPrimary">
          Downloads
        </Typography>
      </AboveTheFold>
      <Content></Content>
      <Footer />
    </>
  );
};

export { DownloadsTemplate };
