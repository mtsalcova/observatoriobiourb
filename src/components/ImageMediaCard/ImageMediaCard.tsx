import React from 'react';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { Card } from './imageMediaCard.style';

interface Props {
  title: string;
  paragraph?: string;
  link: string;
}

const ImageMediaCard = ({ title, paragraph, link }: Props) => {
  return (
    <a href={link} target="_blank" rel="noreferrer">
      <Card>
        <CardActionArea>
          <CardMedia
            component="img"
            alt="Contemplative Reptile"
            height="180"
            image="https://via.placeholder.com/345x180"
            title="Contemplative Reptile"
          />
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
        {/* <CardActions>
          <Button size="small" color="primary">
            Veja mais
          </Button>
        </CardActions> */}
      </Card>
    </a>
  );
};

export { ImageMediaCard };
