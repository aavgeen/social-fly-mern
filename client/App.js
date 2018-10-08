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
      // light: blueGrey['100'],
      light: '#FFA726',
      // main:  blueGrey['700'],
      main: '#009688',
      // dark: blueGrey['900'],
      dark: '#00897B',
      contrastText: '#fff',
    },
    secondary: {
      light: '#ff79b0',
      // main: teal['50'],
      main: '#FDD835',
      dark: teal['100'],
      contrastText: '#000',
    }
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