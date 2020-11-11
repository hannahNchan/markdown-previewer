import React, { useEffect, useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

import InputTextField from '../../components/TextField';

import './styles.css';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginTop: '70px'
  },
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  }
}));

const Home = () => {
  const classes = useStyles();
  const [vh, setVh] = useState(null);

  useEffect(() => {
    const vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0);
    setVh(vh);
  },[]);

  return (
    <div className={classes.root}>
      <Grid container spacing={2}>
        <Grid item xs>
          <InputTextField setLines name="MARKDOWN" vh={vh} />
        </Grid>
        <Grid item xs>
          <InputTextField name="PREVIEW" vh={vh} />
        </Grid>
      </Grid>
    </div>
  )
}

export default Home;
