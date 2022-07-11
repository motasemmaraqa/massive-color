import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { withStyles } from '@material-ui/styles';

import Slider from 'rc-slider';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import 'rc-slider/assets/index.css';

import style from '../style/navBar';

export class NavBar extends Component {
  render() {
    const { handleChange, handleFormatChange, currentFormat, classes } =
      this.props;
    return (
      <header className={classes.Navbar}>
        <Link to="/">reactcolorpicker</Link>
        {!this.props.isSingleColor && (
          <div>
            <span>Level:{this.props.sliderValue}</span>
            <div className={classes.slider}>
              <Slider
                max={900}
                min={100}
                step={100}
                defaultValue={500}
                onChange={handleChange}
              ></Slider>
            </div>
          </div>
        )}
        <div className={classes.selectContainer}>
          <Select value={currentFormat} onChange={handleFormatChange}>
            <MenuItem value={'rgb'}>RGB - rgb(255,255,255)</MenuItem>
            <MenuItem value={'rgba'}>RGBA - rgba(255,255,255,1)</MenuItem>
            <MenuItem value={'hex'}>HEX - #ffffff</MenuItem>
          </Select>
        </div>
      </header>
    );
  }
}

export default withStyles(style)(NavBar);
