import React from 'react';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Card } from './imageMediaCard.style';

const ImageMediaCard = () => {
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
            Lorem Ipsum
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
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
