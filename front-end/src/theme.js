import { createMuiTheme } from "@material-ui/core"
require('typeface-montserrat')

const theme = createMuiTheme({
  typography: {
    fontFamily: [
      'Montserrat',
      'Helvetica Neue',
      'Helvetica',
      'Arial',
      'sans-serif'
    ].join(','),
    h1: {
      fontSize: '2rem',
      textTransform: 'uppercase'
    },
    h2: {
      fontSize: '1rem',
      color: 'rgba(0,0,0,0.72)'
    },
    h3: {
      fontSize: '.9rem',
      color: 'rgba(0,0,0,0.64)'
    },
    h4: {
      fontSize: '.95rem',
      textTransform: 'uppercase',
      color: '#3d79f2',
      fontWeight: 'bold',
      marginTop: '2rem',
      marginBottom: '1rem !important'
    },
    body1 : {
      color: 'rgba(0,0,0,0.72)',
      fontSize: '.95rem',
    }
  },

});



export default theme;
