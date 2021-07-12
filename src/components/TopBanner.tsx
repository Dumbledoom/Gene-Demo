import React from 'react';
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Select,
} from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import HomeIcon from '@material-ui/icons/Home';

interface TopBannerProps {
  enzymeFilter: (value: boolean | null) => void;
  druggableFilter: (value: boolean | null) => void;
  isEnzyme: string;
  isdruggable: string;
}

const useStyles = makeStyles((theme) => ({
  menuButton: {
    marginRight: theme.spacing(2),
  },
}));

const TopBanner: React.FC<TopBannerProps> = (props: TopBannerProps) => {
  const classes = useStyles();
  const history = useHistory();
  const handleEnzymeChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    props.enzymeFilter(Boolean(event.target.value));
  };
  const handleDruggableChange = (
    event: React.ChangeEvent<{ value: unknown }>,
  ) => {
    props.druggableFilter(Boolean(event.target.value));
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
        <Typography variant="h6" color="inherit" noWrap>
          Genetic Demo
        </Typography>
        <Select
          native
          onChange={handleEnzymeChange}
          value={props.isEnzyme}
          inputProps={{
            name: 'Enzyme Filter',
          }}
        >
          <option aria-label="None" value="" />
          <option value={'true'}>Enzyme</option>
          <option value={'false'}>Non-enzyme</option>
        </Select>
        <Select
          native
          onChange={handleDruggableChange}
          value={props.isEnzyme}
          inputProps={{
            name: 'Druggable Filter',
          }}
        >
          <option aria-label="None" value="" />
          <option value={'true'}>Druggable</option>
          <option value={'false'}>Not druggable</option>
        </Select>
      </Toolbar>
    </AppBar>
  );
};

export default TopBanner;
