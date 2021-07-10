import {
  Typography,
  Card,
  CardMedia,
  makeStyles,
  CardContent,
} from '@material-ui/core';
import React from 'react';
import { Features, GeneData } from './Utils';

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
    textAlign: 'left',
  },
}));

const handleFeatures = (features: Features): string => {
  return (
    '' +
    (features.isDruggable ? 'Druggable' : 'Non-druggable') +
    (features.isEnzyme ? ' enzyme' : ', non-enzyme')
  );
};

/**
 * Visual card component displaying genetic data
 * @returns
 */
export const GeneCard: React.FC<GeneCardProps> = (props: GeneCardProps) => {
  const classes = useStyles();
  const { image, shortName, features } = props.data;
  return (
    <Card className={classes.card} variant="elevation">
      <CardMedia
        className={classes.cardMedia}
        image={image}
        title={shortName}
      />
      <CardContent className={classes.cardContent}>
        <Typography variant="h5" component="h2">
          {shortName}
        </Typography>
        <Typography color="textSecondary">
          {handleFeatures(features)}
        </Typography>
      </CardContent>
    </Card>
  );
};
