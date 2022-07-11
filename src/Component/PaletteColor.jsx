import React, { Component } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/styles';

import style from '../style/paletteColor';

export class PaletteColor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      copying: false,
    };
    this.onCopyHandler = this.onCopyHandler.bind(this);
  }
  onCopyHandler() {
    this.setState({ copying: true });
    setTimeout(() => {
      this.setState({ copying: false });
    }, 1500);
  }
  render() {
    const { name, hex, classes, paletteId, id, isBack } = this.props;
    if (isBack)
      return (
        <div className={classes.ColorBox} style={{ backgroundColor: 'black' }}>
          <Link
            to={`/palettes/${paletteId}`}
            className={`${classes.copyButton} ${classes.backButton}`}
          >
            GO BACK
          </Link>
        </div>
      );
    const colorFormat = this.props[this.props.format];
    return (
      <CopyToClipboard text={colorFormat} onCopy={this.onCopyHandler}>
        <div style={{ backgroundColor: hex }} className={classes.ColorBox}>
          <div
            style={{ backgroundColor: hex }}
            className={`${classes.copyOverlay} ${
              this.state.copying && classes.showOverlay
            }`}
          />
          <div
            className={`${classes.copyMsg} ${classes.copyText} ${
              this.state.copying && classes.showCopyMsg
            }`}
          >
            <h1> copied!</h1>
            <p>{colorFormat}</p>
          </div>
          <div className={classes.boxContent}>
            <span className={classes.colorName}>{name}</span>
            <button className={classes.copyButton}>copy</button>
            {!this.props.isSingleColor && (
              <Link
                to={`/palettes/${paletteId}/${id}`}
                onClick={(e) => {
                  e.stopPropagation();
                }}
                className={classes.seeMore}
              >
                more
              </Link>
            )}
          </div>
        </div>
      </CopyToClipboard>
    );
  }
}
export default withStyles(style)(PaletteColor);
