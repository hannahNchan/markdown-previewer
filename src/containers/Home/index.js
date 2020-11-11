import React, { useEffect, useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import marked from 'marked';

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
  },
  editable: {
    border: '1px solid gray',
    borderRadius: '8px',
    backgroundColor: 'gray'
  },
}));

const Home = () => {
  const classes = useStyles();
  const [vh, setVh] = useState(null);
  const [markedHTML, setMarkedHTML] = useState(null);

  useEffect(() => {
    const vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0);
    setVh(vh);
  },[]);

  const onReadHTML = text => {
    const getData = marked(text);
    setMarkedHTML(getData);
  };

  const MarkedContent = () => {
    return markedHTML;
  };

  return (
    <div className={classes.root}>
      <Grid container spacing={2}>
        <Grid item xs>
          <InputTextField setLines name="MARKDOWN" vh={vh} readHTML={(e) => onReadHTML(e)} />
        </Grid>
        <Grid item xs>
          <div 
            id="preview"
            dangerouslySetInnerHTML={{ __html: markedHTML }} 
            className={classes.editable} 
            style={{ height: `${vh}px` }} 
            contentEditable="true"
          >
          </div>
        </Grid>
      </Grid>
    </div>
  )
}

export default Home;
