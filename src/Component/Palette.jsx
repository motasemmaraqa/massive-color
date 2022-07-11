import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { generatePalette } from '.././seeder/colorHelper';
import Pallettes from '.././seeder/paletteSeeder';

import Snackbar from '@material-ui/core/Snackbar';
import CloseIcon from '@mui/icons-material/Close';
import { withStyles } from '@material-ui/styles';

import PaletteColor from './PaletteColor';
import NavBar from './NavBar';

import style from '../style/palette';

class Palette extends Component {
  constructor(props) {
    super(props);
    this.state = { wight: 500, format: 'hex', snackbarShown: false };
    this.onWightChange = this.onWightChange.bind(this);
    this.onFormatChange = this.onFormatChange.bind(this);
    this.handelSnackbarClose = this.handelSnackbarClose.bind(this);
    this.getPalettes = this.getPalettes.bind(this);
  }

  getPalettes(id) {
    console.log(this.props.Palette);
    return this.props.Palette.find((el) => el.id === id);
  }

  onWightChange(value) {
    this.setState({ wight: value });
  }
  onFormatChange(event) {
    this.setState({ format: event.target.value, snackbarShown: true });
  }
  handelSnackbarClose() {
    this.setState({ snackbarShown: false });
  }
  render() {
    const { classes, isSingleColor, prams } = this.props;
    let palettes;
    if (isSingleColor) {
      palettes = generatePalette(this.getPalettes(prams.paletteId));
      const index = palettes.colors['50'].findIndex((el) => {
        return el.id === prams.colorId;
      });
      let newColor = {
        colors: [],
        paletteName: palettes.paletteName,
        emoji: palettes.emoji,
        id: palettes.id,
      };
      for (let color in palettes.colors) {
        newColor.colors.push(palettes.colors[color][index]);
      }
      palettes = newColor;
    } else {
      palettes = generatePalette(this.getPalettes(prams.id));
    }
    let { colors, paletteName, emoji, id } = palettes;
    const colorsList = isSingleColor
      ? colors.slice(1)
      : colors[this.state.wight];
    const colorBoxes = colorsList.map((color) => {
      return (
        <PaletteColor
          isSingleColor={isSingleColor}
          {...color}
          paletteId={id}
          format={this.state.format}
          key={color.name}
        />
      );
    });
    if (isSingleColor)
      colorBoxes.push(<PaletteColor isBack paletteId={id} isSingleColor />);

    return (
      <>
        <div className={classes.palette}>
          <NavBar
            isSingleColor={isSingleColor}
            handleChange={this.onWightChange}
            sliderValue={this.state.wight}
            handleFormatChange={this.onFormatChange}
            currentFormat={this.state.format}
          ></NavBar>
          <div className={classes.paletteColors}>{colorBoxes}</div>
          <footer className={classes.paletteFooter}>
            {paletteName}
            <span className={classes.emoji}>{emoji}</span>
          </footer>
          <Snackbar
            anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
            open={this.state.snackbarShown}
            autoHideDuration={3000}
            onClose={this.handelSnackbarClose}
            message={`Format changed to ${this.state.format.toUpperCase()}`}
            action={[
              <CloseIcon onClick={this.handelSnackbarClose}></CloseIcon>,
            ]}
          />
        </div>
      </>
    );
  }
}

export default withStyles(style)(Palette);
