import {
  Button,
  CardActions,
  Typography,
  Card,
  CardMedia,
  Grid,
  makeStyles,
  CardContent,
} from '@material-ui/core';
import React from 'react';
import { GeneData } from './Utils';

interface GeneCardProps {
  data: GeneData;
}

const useStyles = makeStyles((theme) => ({
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
}));

/**
 * Visual card component displaying genetic data
 * @returns
 */
export const GeneCard: React.FC<GeneCardProps> = (props: GeneCardProps) => {
  const classes = useStyles();
  const { id } = props.data;
  return (
    <Grid item key={id} xs={12} sm={6} md={4}>
      <Card className={classes.card}>
        <CardMedia
          className={classes.cardMedia}
          image="https://source.unsplash.com/random"
          title="Image title"
        />
        <CardContent className={classes.cardContent}>
          <Typography gutterBottom variant="h5" component="h2">
            Heading
          </Typography>
          <Typography>
            This is a media card. You can use this section to describe the
            content.
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" color="primary">
            View
          </Button>
          <Button size="small" color="primary">
            Edit
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
};
