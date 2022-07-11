import sizer from './sizes';
const style = {
  Navbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    height: '7.5%',
    '& a': {
      textDecoration: 'none',
      color: 'black',
      marginRight: '15px',
      padding: '0 13px',
      fontSize: '22px',
      backgroundColor: '#eceff1',
      height: '100%',
      display: 'flex',
      alignItems: 'center',
      fontFamily: 'Roboto',
      [sizer.down('xs')]: {
        display: (props) => (props.isSingleColor ? 'flex' : 'none'),
      },
    },
  },

  slider: {
    width: '340px',
    margin: '0 10px',
    display: 'inline-block',
    '& .rc-slider-track': {
      backgroundColor: 'transparent',
    },
    '& .rc-slider-rail': {
      height: '8px',
    },
    '& .rc-slider-handle, .rc-slider-handle:active, .rc-slider-handle:focus,.rc-slider-handle:hover':
      {
        backgroundColor: 'green',
        outline: 'none',
        border: ' 2px solid green !important',
        boxShadow: 'none !important',
        width: '13px',
        height: '13px',
        marginLeft: '0px',
        marginTop: '-3px',
      },
    [sizer.down('md')]: { width: '200px' },
    [sizer.down('xs')]: { width: '150px' },
  },
  selectContainer: {
    marginLeft: 'auto',
    marginRight: '1rem',
  },
};

export default style;
