import React from 'react';
import { useNavigate } from 'react-router-dom';
import { withStyles } from '@material-ui/styles';
import Delete from '@mui/icons-material/Delete';

import style from '../style/miniPalette';

function MiniPalette(props) {
  const history = useNavigate();

  const { classes, paletteName, emoji, colors, id, onOpenDialog } = props;
  const handleDeletePalette = (event) => {
    event.stopPropagation();
    onOpenDialog(id);
  };

  return (
    <div onClick={() => history(`/palettes/${id}`)} className={classes.link}>
      <div className={classes.root}>
        <Delete onClick={handleDeletePalette} />
        <div className={classes.colors}>
          {colors.map((el) => {
            return (
              <div
                className={classes.miniColor}
                key={el.color}
                style={{ backgroundColor: el.color }}
              ></div>
            );
          })}
        </div>
        <h5 className={classes.title}>
          {paletteName}
          <span className={classes.emoji}>{emoji}</span>
        </h5>
      </div>
    </div>
  );
}

export default withStyles(style)(MiniPalette);
