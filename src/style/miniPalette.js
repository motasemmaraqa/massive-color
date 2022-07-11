const style = {
  root: {
    backgroundColor: 'white',
    borderRadius: '5px',
    border: '1px solid black',
    margin: '5px',
    padding: '0.5rem',
    position: 'relative',
    overflow: 'hidden',
    '& svg': {
      position: 'absolute',
      right: '0',
      top: '0',
      zIndex: '10',
      color: 'white',
      backgroundColor: '#eb3d30',
      padding: '2px',
      transition: 'all 0.3s ease-in-out',
      opacity: '0',
    },
    '&:hover svg': {
      opacity: '1',
    },
  },
  title: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItem: 'center',
    margin: '0',
    paddingTop: '0.5rem',
    fontSize: '1rem',
  },
  emoji: {
    fontSize: '1.5rem',
  },
  link: {
    cursor: 'pointer',
  },
  colors: {
    backgroundColor: '#dae1e4',
    height: '90px',
    width: '100%',
    borderRadius: '5px',
    overflow: 'hidden',
  },
  miniColor: {
    height: '25%',
    width: '20%',
    display: 'inline-block',
    margin: '0 auto',
    position: 'relative',
    marginBottom: '-3.5px',
  },
};

export default style;
