import sizer from './sizes';
const style = {
  root: {
    width: '20%',
    height: '25%',
    margin: '0 auto',
    display: 'inline-block',
    position: 'relative',
    cursor: 'pointer',
    // marginBottom: '-4px',
    backgroundColor: (props) => props.background,
    '&:hover svg': {
      color: 'white',
      transform: 'scale(1.3)',
    },
    '& svg': {
      color: 'rgba(0,0,0,0.5)',
      transition: 'all 0.4s ease-in-out',
    },

    // [sizer.down('xs')]: {
    //   width: (props) => (props.isOpen ? '100%' : '100%'),
    //   height: (props) => (props.isOpen ? '5%' : '5%'),
    // },
    [sizer.down('lg')]: {
      width: '25%',
      height: '20%',
    },
    [sizer.down('md')]: {
      width: (props) => (props.isOpen ? '100%' : '50%'),
      height: (props) => (props.isOpen ? '5%' : '10%'),
    },
    [sizer.down('sm')]: {
      width: (props) => (props.isOpen ? '100%' : '50%'),
      height: (props) => (props.isOpen ? '5%' : '10%'),
    },
    [sizer.down('xs')]: {
      width: (props) => (props.isOpen ? '100%' : '100%'),
      height: (props) => (props.isOpen ? '5%' : '5%'),
      '& svg': {
        color: 'rgba(0,0,0,0.5)',
        transition: 'all 0.4s ease-in-out',
        transform: 'scale(0.8)',
      },
      '&:hover svg': {
        color: 'white',
        transform: 'scale(1.0)',
      },
    },
  },
  boxContent: {
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'end',
    padding: '5px 10px',
    [sizer.down('xs')]: { padding: 0 },
  },
  svgContainer: { display: 'flex', alignItems: 'center' },
};
export default style;
