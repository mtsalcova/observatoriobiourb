import React from 'react';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { Card, Image } from './imageMediaCard.style';

interface Props {
  title: string;
  paragraph?: string;
  link: string;
  image: string;
}

const ImageMediaCard = ({ title, paragraph, link, image }: Props) => {
  return (
    <a href={link} target="_blank" rel="noreferrer">
      <Card>
        <CardActionArea>
          <Image src={image} width={345} height={180} />
          <CardContent>
            <Typography
              color="primary"
              gutterBottom
              variant="h5"
              component="h2"
            >
              {title}
            </Typography>
            {paragraph && (
              <Typography variant="body2" color="textSecondary" component="p">
                {paragraph}
              </Typography>
            )}
          </CardContent>
        </CardActionArea>
      </Card>
    </a>
  );
};

export { ImageMediaCard };
