import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/styles';
import MiniPalette from './MiniPalette';
import style from '../style/palettesList';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { Dialog } from '@material-ui/core';
import Avatar from '@mui/material/Avatar';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import DialogTitle from '@mui/material/DialogTitle';
import Check from '@mui/icons-material/Check';
import Close from '@mui/icons-material/Close';
import { red, blue } from '@mui/material/colors';
export class PalettesList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      paletteId: '',
    };
    this.handleClosePalette = this.handleClosePalette.bind(this);
    this.handleOpenPalette = this.handleOpenPalette.bind(this);
    this.onDeletePalette = this.onDeletePalette.bind(this);
  }

  handleClosePalette() {
    this.setState({ isOpen: false });
  }
  handleOpenPalette(id) {
    this.setState({ isOpen: true, paletteId: id });
  }
  onDeletePalette() {
    this.props.deletePalette(this.state.paletteId);
    this.setState({ isOpen: false, paletteId: '' });
  }
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <div className={classes.container}>
          <nav className={classes.nav}>
            <h1>React Colors</h1>
            <Link to="/palettes/new" className={classes.link}>
              new palette
            </Link>
          </nav>
          <TransitionGroup className={classes.palettes}>
            {this.props.palettes.map((el) => (
              <CSSTransition key={el.id} classNames="fade" timeout={500}>
                <MiniPalette onOpenDialog={this.handleOpenPalette} {...el} />
              </CSSTransition>
            ))}
          </TransitionGroup>
        </div>
        <Dialog open={this.state.isOpen} onClose={this.handleClosePalette}>
          <DialogTitle>do you want to delete this</DialogTitle>
          <List>
            <ListItemButton onClick={this.onDeletePalette}>
              <ListItemAvatar>
                <Avatar
                  style={{
                    backgroundColor: blue[100],
                    color: blue[800],
                  }}
                >
                  <Check></Check>
                </Avatar>
              </ListItemAvatar>
              <ListItemText>Confirm</ListItemText>
            </ListItemButton>
            <ListItemButton onClick={this.handleClosePalette}>
              <ListItemAvatar>
                <Avatar
                  style={{
                    backgroundColor: red[100],
                    color: red[800],
                  }}
                >
                  <Close></Close>
                </Avatar>
              </ListItemAvatar>
              <ListItemText>Cancel</ListItemText>
            </ListItemButton>
          </List>
        </Dialog>
      </div>
    );
  }
}

export default withStyles(style)(PalettesList);
