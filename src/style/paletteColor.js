import chroma from 'chroma-js';
import sizer from './sizes';
const style = {
  ColorBox: {
    width: '20%',
    height: (props) => (props.isSingleColor ? '50%' : '25%'),
    margin: '0 auto',
    display: 'inline-block',
    position: 'relative',
    cursor: 'pointer',
    marginBottom: '-4px',
    '&:hover button': {
      opacity: 1,
    },

    [sizer.down('lg')]: {
      width: '25%',
      height: (props) => (props.isSingleColor ? '33.333%' : '20%'),
    },
    [sizer.down('md')]: {
      width: '50%',
      height: (props) => (props.isSingleColor ? '50%' : '10%'),
    },

    [sizer.down('xs')]: {
      width: '100%',
      height: (props) => (props.isSingleColor ? '10%' : '5%'),
    },
  },

  boxContent: {
    display: 'flex',
    height: '100%',
    width: '100%',
    cursor: 'pointer',
  },
  copyText: {
    color: (props) => {
      if (props.isBack) return 'black';
      return chroma(props.hex).luminance() >= 0.7 ? 'black' : 'white';
    },
  },

  seeMore: {
    color: (props) => {
      if (props.isBack) return 'black';
      return chroma(props.hex).luminance() >= 0.7 ? 'rgba(0,0,0,0.6)' : 'white';
    },
    background: 'rgba(255, 255, 255, 0.3)',
    position: 'absolute',
    border: 'none',
    right: '0px',
    bottom: '0px',
    width: '60px',
    height: '30px',
    textAlign: 'center',
    lineHeight: '30px',
    textTransform: 'uppercase',
    textDecoration: 'none',
    [sizer.down('xs')]: {
      height: '100%',
    },
  },
  copyButton: {
    color: (props) => {
      if (props.isBack) return 'black';
      return chroma(props.hex).luminance() >= 0.7 ? 'rgba(0,0,0,0.6)' : 'white';
    },
    width: '100px',
    height: '30px',
    position: 'absolute',
    display: 'inline-block',
    top: '50%',
    left: '50%',
    marginLeft: '-50px',
    marginTop: '-15px',
    textAlign: 'center',
    outline: 'none',
    background: 'rgba(255, 255, 255, 0.3)',
    fontSize: '1rem',
    lineHeight: '30px',
    textTransform: 'uppercase',
    border: 'none',
    textDecoration: 'none',
    opacity: 0,
  },
  colorName: {
    position: 'absolute',
    bottom: '5px',
    left: '5px',
    color: (props) => {
      if (props.isBack) return 'black';
      return chroma(props.hex).luminance() <= 0.08 ? 'white' : 'black';
    },
  },

  copyOverlay: {
    opacity: '0',
    width: '100%',
    height: '100%',
    position: 'absolute',
    transform: ' scale(0.1)',
    zIndex: '-1',
    transition: ' transform 0.6s ease-in-out',
  },

  showOverlay: {
    opacity: '1',
    zIndex: '10',
    position: 'absolute',
    transform: ' scale(50)',
  },

  copyMsg: {
    position: 'fixed',
    left: '0',
    right: '0',
    bottom: '0',
    top: '0',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: '4rem',
    color: 'white',
    opacity: '0',
    transform: 'scale(0.1)',
    '& h1': {
      fontWeight: '400',
      textShadow: '1px 2px black',
      background: 'rgba(255, 255, 255, 0.2)',
      width: '100%',
      textAlign: 'center',
      marginBottom: '0',
      padding: '1rem',
      textTransform: 'uppercase',
      [sizer.down('xs')]: {
        fontWeight: '200',
        fontSize: '4rem',
      },
    },
    '& p': {
      fontSize: '2rem',
      fontWeight: '100',
    },
  },

  showCopyMsg: {
    opacity: '1',
    transform: 'scale(1)',
    zIndex: '25',
    transition: ' all 0.4s ease-in-out',
    transitionDelay: '0.6s',
  },

  backButton: {
    color: 'white',
    opacity: '1',
    textDecoration: 'none',
    width: '80px',
    height: '40px',
    marginTop: '-20px',
    marginRight: '-40px',
    lineHeight: '40px',
    textAlign: 'center',
  },
};

export default style;
