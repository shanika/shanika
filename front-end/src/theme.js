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
    },
    h3: {
      fontSize: '.9rem'
    },
    h4: {
      fontSize: '.9rem',
      textTransform: 'uppercase',
      color: '#3d79f2',
      fontWeight: 'bold',
      marginTop: '2rem',
      marginBottom: '1rem !important'
    }
  },

});



export default theme;
