import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { arrayMove } from 'react-sortable-hoc';

import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import { Button } from '@material-ui/core';
import { withStyles } from '@material-ui/styles';

import DraggableBoxList from './DraggableBoxList';
import FormAppBar from './FormAppBar';
import ColorPickerForm from './ColorPickerForm';

import style from '../style/drawerFormStyle';
import DrawerHeader from '../style/DrawerHeader';
import Main from '../style/Main';

import { DRAWER_WIDTH } from '../constant';
import paletteSeeder from '../seeder/paletteSeeder';

const drawerWidth = DRAWER_WIDTH;

const NewPaletteForm = (props) => {
  const [open, setOpen] = React.useState(false);

  const [colors, setColors] = useState(paletteSeeder[0].colors);

  const navigate = useNavigate();
  const isPaletteFull = colors.length >= 20;
  const onSubmit = (color) => {
    setColors((pre) => {
      return [...pre, color];
    });
  };
  const onClearPalette = (e) => {
    setColors([]);
  };
  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handelDeleteColor = (id) => {
    setColors(colors.filter((el) => el.name !== id));
  };
  const randomColorHandler = () => {
    const palettesList =
      props.Palette.length === 0 ? paletteSeeder : props.Palette;
    const colorsList = palettesList
      .map((palette) => {
        return palette.colors;
      })
      .flat();

    let index = Math.floor(Math.random() * colorsList.length);
    let randomColor = colorsList[index];
    while (
      !colors.every((el) => {
        return el.name !== randomColor.name;
      })
    ) {
      index = Math.floor(Math.random() * colorsList.length);
      randomColor = colorsList[index];
    }
    setColors((pre) => {
      return [...pre, randomColor];
    });
  };

  const onFormSubmit = (palette) => {
    palette.colors = colors;
    props.addPalettes(palette);
    navigate('/');
  };
  const onSortEnd = ({ oldIndex, newIndex }) => {
    setColors((oldState) => {
      return arrayMove(oldState, oldIndex, newIndex);
    });
  };
  const { classes, Palette } = props;
  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <FormAppBar
        Palette={Palette}
        open={open}
        handleDrawerOpen={handleDrawerOpen}
        onFormSubmit={onFormSubmit}
      />
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            <ChevronLeftIcon />
          </IconButton>
        </DrawerHeader>
        <Divider />
        <div className={classes.container}>
          <div className={classes.content}>
            <Typography variant="h4">Design Your Palette</Typography>
            <div className={classes.btn}>
              <Button
                variant="contained"
                color="secondary"
                onClick={onClearPalette}
              >
                CLEAR PALETTE
              </Button>

              <Button
                variant="contained"
                color="primary"
                onClick={randomColorHandler}
                disabled={isPaletteFull}
              >
                RANDOM COLOR
              </Button>
            </div>
            <ColorPickerForm
              isPaletteFull={isPaletteFull}
              onSubmit={onSubmit}
              colors={colors}
            />
          </div>
        </div>
      </Drawer>
      <Main open={open}>
        <DrawerHeader />

        <DraggableBoxList
          isOpen={open}
          colors={colors}
          axis="xy"
          handelDeleteColor={handelDeleteColor}
          onSortEnd={onSortEnd}
        ></DraggableBoxList>
      </Main>
    </Box>
  );
};

export default withStyles(style)(NewPaletteForm);
