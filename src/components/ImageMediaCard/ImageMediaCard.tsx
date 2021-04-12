import React from 'react';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Card } from './imageMediaCard.style';

interface Props {
  title: string;
  paragraph?: string;
}

const ImageMediaCard = ({ title, paragraph }: Props) => {
  return (
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
          <Typography color="primary" gutterBottom variant="h5" component="h2">
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
  );
};

export { ImageMediaCard };
