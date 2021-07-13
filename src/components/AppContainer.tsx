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

  // State variables manage filter settings, TopBanner.tsx is controlled by these
  const [isEnzyme, setIsEnzyme] = useState<string>('');
  const [isDruggable, setIsDruggable] = useState<string>('');

  /**
   * Function that determines a boolean rule to filter genetic 'features'
   * @param gene GeneData
   * @returns Boolean
   */
  const setFilterRule = (gene: GeneData) => {
    // If both filters are set, return a union of the state variables
    if (isEnzyme !== '' && isDruggable !== '') {
      return (
        String(gene.features.isDruggable) === isDruggable &&
        String(gene.features.isEnzyme) === isEnzyme
      );
      // if only one filter is set, return only that rule
    } else if (isEnzyme !== '' || isDruggable !== '') {
      return isEnzyme !== ''
        ? String(gene.features.isEnzyme) === isEnzyme
        : String(gene.features.isDruggable) === isDruggable;
    }
    // if no filter are set, return true for everything in the data
    return true;
  };

  return (
    <>
      <CssBaseline />
      <TopBanner
        enzymeFilter={setIsEnzyme}
        druggableFilter={setIsDruggable}
        isEnzyme={String(isEnzyme)}
        isDruggable={String(isDruggable)}
      />
      {pathname === '/' && (
        <HomePage data={data.filter((gene) => setFilterRule(gene))} />
      )}
      <Switch>
        {data
          .filter((gene) => setFilterRule(gene))
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
