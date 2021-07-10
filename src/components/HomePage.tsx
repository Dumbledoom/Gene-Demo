import React from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import TopBanner from './TopBanner';
import { Footer } from './Footer';
import { useFetch } from './Utils';
import { GeneCard } from './GeneCards';

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
}));

const HomePage: React.FC = () => {
  const data = useFetch('https://evilfer.github.io/frontend-dev-api/data.json');
  const classes = useStyles();
  return (
    <>
      <CssBaseline />
      <TopBanner />
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
                  <GeneCard data={gene} />
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
