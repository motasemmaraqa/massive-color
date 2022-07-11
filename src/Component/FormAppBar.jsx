import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Button } from '@material-ui/core';
import { withStyles } from '@material-ui/styles';

import NewPaletteDialog from './NewPaletteDialog';

import AppBar from '../style/appBar';
import style from '../style/newFormStyle';

function FormAppBar(props) {
  const [isDialogOpen, toggleDialog] = useState(false);

  const { open, handleDrawerOpen, onFormSubmit, classes, Palette } = props;
  const onToggle = () => {
    toggleDialog((st) => {
      return !st;
    });
  };

  return (
    <AppBar position="fixed" open={open} color="default">
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={handleDrawerOpen}
          edge="start"
          sx={{ mr: 2, ...(open && { display: 'none' }) }}
        >
          <MenuIcon />
        </IconButton>
        <Typography
          variant="h6"
          noWrap
          component="div"
          className={classes.title}
        >
          ADD YOUR CUSTOM PALETTE
        </Typography>
      </Toolbar>
      <div className={classes.btnContainer}>
        <Button
          variant="contained"
          color="primary"
          onClick={onToggle}
          className={classes.firstBtn}
        >
          SAVE
        </Button>
        <Link to="/">
          <Button
            variant="contained"
            color="secondary"
            className={classes.secondBtn}
          >
            GO BACK
          </Button>
        </Link>
        {isDialogOpen && (
          <NewPaletteDialog
            handleClose={onToggle}
            palette={Palette}
            onFormSubmit={onFormSubmit}
          />
        )}
      </div>
    </AppBar>
  );
}

export default withStyles(style)(FormAppBar);
