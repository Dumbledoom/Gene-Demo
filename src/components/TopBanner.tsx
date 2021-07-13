import React from 'react';
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Select,
} from '@material-ui/core';
import { useHistory, useLocation } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import HomeIcon from '@material-ui/icons/Home';

interface TopBannerProps {
  enzymeFilter: (value: string) => void;
  druggableFilter: (value: string) => void;
  isEnzyme: string;
  isDruggable: string;
}

const useStyles = makeStyles((theme) => ({
  menuButton: {
    marginRight: theme.spacing(2),
  },
}));

const TopBanner: React.FC<TopBannerProps> = (props: TopBannerProps) => {
  const classes = useStyles();
  const location = useLocation();
  const history = useHistory();

  // Change handlers set the filter state in AppContainer.tsx
  const handleEnzymeChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    props.enzymeFilter(String(event.target.value));
  };
  const handleDruggableChange = (
    event: React.ChangeEvent<{ value: unknown }>,
  ) => {
    props.druggableFilter(String(event.target.value));
  };

  return (
    <AppBar position="fixed">
      <Toolbar>
        <IconButton
          edge="start"
          className={classes.menuButton}
          color="inherit"
          aria-label="open drawer"
          onClick={() => history.push('/')}
        >
          <HomeIcon />
        </IconButton>
        &nbsp;
        {location.pathname === '/' ? (
          <>
            <Typography variant="h6" color="inherit" noWrap>
              Filters:
            </Typography>
            &nbsp;
            <Select
              native
              onChange={handleEnzymeChange}
              value={props.isEnzyme}
              inputProps={{
                name: 'Enzyme Filter',
              }}
            >
              <option aria-label="None" value="" label="None" />
              <option value={'true'}>Enzyme</option>
              <option value={'false'}>Non-enzyme</option>
            </Select>
            &nbsp;
            <Select
              native
              onChange={handleDruggableChange}
              value={props.isDruggable}
              inputProps={{
                name: 'Druggable Filter',
              }}
            >
              <option aria-label="None" value="" label="None" />
              <option value={'true'}>Druggable</option>
              <option value={'false'}>Not druggable</option>
            </Select>
          </>
        ) : (
          <Typography variant="h6" color="inherit" noWrap>
            Details
          </Typography>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default TopBanner;
