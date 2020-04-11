import { makeStyles, Theme } from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles((theme: Theme) => ({
  hello: {
    color: theme.colors.green,
  },
}));

export const Hello: React.FC = () => {
  const classes = useStyles();

  return <div className={classes.hello}>Hello</div>;
};
