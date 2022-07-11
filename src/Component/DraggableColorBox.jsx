import React, { Component } from 'react';
import { withStyles } from '@material-ui/styles';
import DeleteIcon from '@mui/icons-material/Delete';
import { SortableElement } from 'react-sortable-hoc';
import style from '../style/draggableColorBox';

export class DraggableColorBox extends Component {
  render() {
    const { classes, name, onDelete } = this.props;
    return (
      <div className={classes.root}>
        <div className={classes.boxContent}>
          <span>{name}</span>
          <span className={classes.svgContainer}>
            <DeleteIcon onClick={onDelete} />
          </span>
        </div>
      </div>
    );
  }
}

export default withStyles(style)(SortableElement(DraggableColorBox));
