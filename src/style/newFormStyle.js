import sizer from '../style/sizes';
const style = {
  btnContainer: {
    display: 'flex',
    alignItems: 'center',
    marginRight: '8px',
    '& a': {
      textDecoration: 'none',
    },

    [sizer.down('xs')]: {
      marginRight: '2px',
      fontSize: '0.5rem',
    },
  },
  firstBtn: {
    marginRight: '8px',
    [sizer.down('xs')]: {
      marginRight: '2px',
      fontSize: '0.6rem',
    },
  },
  secondBtn: {
    [sizer.down('xs')]: {
      fontSize: '0.6rem',
    },
  },
  title: {
    [sizer.down('xs')]: {
      fontSize: '0.8rem !important',
      padding: '0px !important',
      margin: '0px !important',
    },
  },
};
export default style;
