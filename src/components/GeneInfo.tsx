import {
  Typography,
  Card,
  makeStyles,
  CardContent,
  Container,
  IconButton,
  Collapse,
} from '@material-ui/core';
import React from 'react';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import { GeneData } from '../Utils';
import DataTable from './DataTable';
import PubGraph from './PubGraph';

interface GeneCardProps {
  data: GeneData;
}

const useStyles = makeStyles((theme) => ({
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 0),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardContent: {
    flexGrow: 1,
    textAlign: 'left',
  },
  imageBackdrop: {
    backgroundColor: theme.palette.common.black,
    display: 'block',
    width: '30%',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
}));

const GeneInfo: React.FC<GeneCardProps> = (props: GeneCardProps) => {
  const classes = useStyles();
  const [checked, setChecked] = React.useState(false);
  const handleChange = () => {
    setChecked((prev) => !prev);
  };
  const {
    image,
    shortName,
    features,
    fullName,
    description,
    id,
    family,
    numCompounds,
    numStructures,
    publications,
  } = props.data;
  return (
    <>
      <div className={classes.heroContent}>
        <img src={image} className={classes.imageBackdrop} />
        <Container maxWidth="sm">
          <Typography
            component="h1"
            variant="h2"
            align="center"
            color="textPrimary"
            gutterBottom
          >
            {shortName}
          </Typography>
          <Typography
            variant="h5"
            align="center"
            color="textSecondary"
            paragraph
          >
            {fullName}
          </Typography>
        </Container>
      </div>
      <Card className={classes.card} variant="elevation">
        <CardContent className={classes.cardContent}>
          <Typography variant="h5" component="h2">
            Description
            <IconButton onClick={handleChange}>
              {checked ? <ExpandLessIcon /> : <ExpandMoreIcon />}
            </IconButton>
          </Typography>
          <Collapse in={checked}>
            <Typography color="textSecondary">{description}</Typography>
          </Collapse>
        </CardContent>
        <DataTable
          id={id}
          family={family}
          structures={numCompounds}
          compounds={numStructures}
          druggable={features.isDruggable}
          enzyme={features.isEnzyme}
        />
      </Card>
      <PubGraph pubData={publications} />
    </>
  );
};

export default GeneInfo;
