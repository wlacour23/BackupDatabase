import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
// import classes from "./Conditions.module.css";

const NonProfits = (props) => {
  const useStyles = makeStyles({
    root: {
      maxWidth: 345,
    },
    media: {
      height: 140,
    },
  });
  const classes = useStyles();
    return (
        <div className={classes.Wrapper}>
          {props.error && (
            <small className={classes.Small}>Please enter a valid city.</small>
          )}
          {props.loading && <div className={classes.Loader}>Loading...</div>}
    
          {props.responseArray.cod === 200 ? (
            <div>
              {props.data.map((item, key) => {
                  return <li key={key}>{item.name}{item.address}</li>
              }
              )}
            </div>
          ) : null}
        </div>
      );
    };
    export default NonProfits;