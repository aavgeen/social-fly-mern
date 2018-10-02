import React from 'react'
import { hot } from 'react-hot-loader'
import MainRouter from './MainRouter';
import { BrowserRouter } from 'react-router-dom';

import {MuiThemeProvider, createMuiTheme} from '@material-ui/core/styles'
import {cyan, teal, red, blueGrey} from '@material-ui/core/colors'

// Create a theme instance.
const theme = createMuiTheme({
  palette: {
    primary: {
    light: blueGrey['100'],
    main:  blueGrey['700'],
    dark: blueGrey['900'],
    contrastText: '#fff',
  },
  secondary: {
    light: '#ff79b0',
    main: teal['50'],
    dark: teal['100'],
    contrastText: '#000',
  },
    openTitle: cyan['400'], //INDIGO['300'] should be  used to make cards with shadow
    protectedTitle: red['400'],
    type: 'light'
  }
})

const App = () => (
    <MuiThemeProvider theme={theme}>
      <BrowserRouter>
        <MainRouter/>
      </BrowserRouter>
    </MuiThemeProvider>
      )
export default hot(module)(App)
// export default App;