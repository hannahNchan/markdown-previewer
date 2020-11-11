import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

import LineNumber from '../LineNumber';

import './styles.css';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(0),
      paddingLeft: theme.spacing(0),
    },
  },
  textArea: {
    height: 'inherit',
  },
  columnNumber: {
    width: '10%',
    paddingTop: '10px',
    marginRight: '10px',
    backgroundColor: 'rgba(250,251,253,0.52)',
  },
  field: {
    textAlign: 'center',
    fontSize: 'x-small',
    border: '1px solid black',
    borderLeft: '0px',
    borderRight: '0px',
    borderBottom: '0px',
    height: '19px',
    backgroundColor: '#fbfbfb',
    color: '#989898',
  },
  fieldActive: {
    textAlign: 'center',
    fontSize: 'x-small',
    border: '1px solid black',
    borderLeft: '0px',
    borderRight: '0px',
    borderBottom: '0px',
    height: '19px',
    backgroundColor: 'aliceblue',
    color: 'blue',
  },
}));

const InputTextField = ({ vh, name, setLines }) => {
  const classes = useStyles();
  const [value, setValue] = React.useState('Controlled');
  const [rowN, setRowN] = React.useState(1);

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const styler = { height: `${vh - 95}px` };

  const handleChangeText = e => {
    const readTXT = document.querySelector('textarea').value;
    const lines = readTXT.split(/\r|\r\n|\n/);
    const count = lines.length; 
    e.preventDefault();
    setRowN(count);
  };

  const SetLiner = () => {
    if (setLines) {
      return (
        <div className={classes.columnNumber} style={styler}>
          {[...Array(rowN).keys()].map((it,id) => {
            let index = id + 1;
            return (
              <div 
                key={id} 
                className={rowN !== index ? classes.field : classes.fieldActive}
              >
                {it + 1}
              </div>
            )
          })
          }
        </div>
      )
    }
    return null;
  };

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <div style={{ height: `${vh}px` }}>
        <TextField
          onChange={(e) => handleChangeText(e)}
          className={classes.textArea}
          fullWidth
          id="standard-textarea"
          label={name}
          multiline
          variant="outlined"
          rows={Math.ceil(vh / 23 )}
          size="medium"
          margin="normal"
          type="text"
          InputProps={{
            startAdornment: (
              <SetLiner />
            )
          }}
        />
      </div>
    </form>
  )
};

export default InputTextField;

