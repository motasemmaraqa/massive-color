import sizer from './sizes';
import bg from '../background.svg';

const style = {
  '@global': {
    '.fade-exit': {
      opacity: '1',
    },
    '.fade-exit-active': {
      opacity: '0',
      transition: 'opacity 500ms ease-in',
    },
  },

  root: {
    height: '100vh',
    backgroundColor: '#080856',
    backgroundImage: `url(${bg})`,
    display: 'flex',
    // flexDirection: 'column',
    backgroundAttachment: 'fixed',
    alignItems: 'flex-start',
    justifyContent: 'center',
    flexWrap: 'wrap',
    overflow: 'auto',
  },
  container: {
    width: '60%',
    display: 'flex',
    alignItems: 'flex-start',
    flexDirection: 'column',
    // flexWrap: 'wrap',
    // height: '100%',
    [sizer.down('xl')]: { width: '70%' },
    [sizer.down('lg')]: { width: '80%' },
    [sizer.down('md')]: { width: '90%' },
    [sizer.down('xs')]: { width: '80%' },
  },
  nav: {
    display: 'flex',
    width: '93%',
    justifyContent: 'space-between',
    color: 'white',
    alignItems: 'center',
    '& a': {
      color: 'white',
    },
    '& a:hover': {
      color: 'grey',
    },

    [sizer.down('sm')]: { width: '100%' },
  },
  palettes: {
    boxSizing: 'border-box',
    width: '100%',
    height: '100%',
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 30%)',
    gridGap: '1.2rem',
    [sizer.down('sm')]: { gridTemplateColumns: 'repeat(2, 50%)' },
    [sizer.down('xs')]: {
      gridTemplateColumns: 'repeat(1, 100%)',
      gridGap: '0.8rem',
    },
  },
};

export default style;
