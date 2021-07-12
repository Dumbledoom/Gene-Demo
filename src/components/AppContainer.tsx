import React, { useState } from 'react';
import { Switch, Route, useLocation } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import TopBanner from './TopBanner';
import GeneInfo from './GeneInfo';
import HomePage from './HomePage';
import { GeneData, useFetch } from '../Utils';

const AppContainer: React.FC = () => {
  // Load data into the page on mount
  const data = useFetch('https://evilfer.github.io/frontend-dev-api/data.json');
  const { pathname } = useLocation();
  const [isEnzyme, setIsEnzyme] = useState<boolean | null>(null);
  const [isDruggable, setIsDruggable] = useState<boolean | null>(null);
  const setFilterRule = (gene: GeneData) => {
    if (!!isEnzyme && !!isDruggable) {
      return (
        gene.features.isDruggable === isDruggable &&
        gene.features.isEnzyme === isEnzyme
      );
    } else if (!!isEnzyme || !!isDruggable) {
      return (
        gene.features.isDruggable === isDruggable &&
        gene.features.isEnzyme === isEnzyme
      );
    }
    return undefined;
  };
  return (
    <>
      <CssBaseline />
      <TopBanner
        enzymeFilter={setIsEnzyme}
        druggableFilter={setIsDruggable}
        isEnzyme={String(isEnzyme)}
        isdruggable={String(isDruggable)}
      />
      {pathname === '/' && <HomePage data={data} />}
      <Switch>
        {data
          ?.filter((gene) => setFilterRule(gene))
          .map((gene) => (
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
