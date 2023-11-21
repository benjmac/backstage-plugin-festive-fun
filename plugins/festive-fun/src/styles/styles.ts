import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles({
  container: {
    top: '0px',
    width: '100%',
    height: '100%',
    position: 'absolute',
    left: '0%',
    background: 'transparent',
    backgroundSize: 'cover',
    overflow: 'hidden',
    zIndex: -1,
  },
  loader: {
    textAlign: 'center',
  },
  itemContainer: {
    display: 'inline-block',
    width: '80px',
    height: '80px',
    margin: '-280px 40px 54px  -34px',
    animation: '$itemLoader linear infinite',
    animationDuration: '10s',

    '&:nth-child(5n+5)': {
      '-webkit-animation-delay': '1.3s',
      '-moz-animation-delay': '1.3s',
    },

    '&:nth-child(3n+2)': {
      '-webkit-animation-delay': '1.5s',
      '-moz-animation-delay': '1.5s',
    },

    '&:nth-child(2n+5)': {
      '-webkit-animation-delay': '1.7s',
      '-moz-animation-delay': '1.7s',
    },

    '&:nth-child(3n+10)': {
      '-webkit-animation-delay': '2.7s',
      '-moz-animation-delay': '2.7s',
    },

    '&:nth-child(7n+2)': {
      '-webkit-animation-delay': '3.5s',
      '-moz-animation-delay': '3.5s',
    },

    '&:nth-child(4n+5)': {
      '-webkit-animation-delay': '5.5s',
      '-moz-animation-delay': '5.5s',
    },

    '&:nth-child(3n+7)': {
      '-webkit-animation-delay': '8s',
      '-moz-animation-delay': '8s',
    },
  },
  itemImage: {
    width: '80px',
    height: '80px',
  },
  '@keyframes itemLoader': {
    '0%': {
      width: '80px',
      height: '80px',
      opacity: 1,
      transform: 'translate(0, 0px) rotateZ(0deg)',
    },
    '75%': {
      width: '80px',
      height: '80px',
      opacity: 1,
      transform: 'translate(100px, 600px) rotateZ(270deg)',
    },
    '100%': {
      width: '80px',
      height: '80px',
      opacity: 0,
      transform: 'translate(150px, 800px) rotateZ(360deg)',
    },
  },
  summerContainer: {
    display: 'flex',
    flexDirection: 'column',
    height: 'inherit',
  },
});
