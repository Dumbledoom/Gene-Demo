import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { Footer } from './Footer';
import { GeneData } from './Utils';
import { GeneCard } from './GeneCards';
import { ButtonBase } from '@material-ui/core';
import { Link } from 'react-router-dom';

interface HomeProps {
  data: GeneData[];
}

const useStyles = makeStyles((theme) => ({
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 0),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  cardAction: {
    display: 'block',
    textAlign: 'initial',
    width: '100%',
    height: '100%',
  },
}));

const HomePage: React.FC<HomeProps> = (props: HomeProps) => {
  const { data } = props;
  const classes = useStyles();
  return (
    <>
      <main>
        {/* Hero unit */}
        <div className={classes.heroContent}>
          <Container maxWidth="sm">
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="textPrimary"
              gutterBottom
            >
              Genenome Data
            </Typography>
            <Typography
              variant="h5"
              align="center"
              color="textSecondary"
              paragraph
            >
              Click a gene for detailed information.
            </Typography>
          </Container>
        </div>
        {data && (
          <Container className={classes.cardGrid} maxWidth="md">
            {/* End hero unit */}
            <Grid container spacing={4}>
              {data?.map((gene) => (
                <Grid key={gene.id} item xs={12} sm={6} md={4}>
                  <ButtonBase
                    className={classes.cardAction}
                    component={Link}
                    to={`/${gene.id}`}
                  >
                    <GeneCard data={gene} />
                  </ButtonBase>
                </Grid>
              ))}
            </Grid>
          </Container>
        )}
      </main>
      {/* Footer */}
      <Footer />
      {/* End footer */}
    </>
  );
};

export default HomePage;
