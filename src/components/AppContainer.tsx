import React from 'react';
import { Switch, Route, useLocation } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';

import GeneInfo from './GeneInfo';
import HomePage from './HomePage';
import { useFetch } from './Utils';
import TopBanner from './TopBanner';

const AppContainer: React.FC = () => {
  // Load data into the page on mount
  const data = useFetch('https://evilfer.github.io/frontend-dev-api/data.json');
  const { pathname } = useLocation();
  return (
    <>
      <CssBaseline />
      <TopBanner />
      {pathname === '/' && <HomePage data={data} />}
      <Switch>
        {data?.map((gene) => (
          <Route
            key={gene.id}
            path={`/${gene.id}`}
            render={(props) => <GeneInfo {...props} data={gene} />}
          />
        ))}
      </Switch>
    </>
  );
};

export default AppContainer;
