import React from 'react'
import { hot } from 'react-hot-loader'
import MainRouter from './MainRouter';
import { BrowserRouter } from 'react-router-dom';

const App = () => (
        <BrowserRouter>
          <MainRouter/>
        </BrowserRouter>
      )
export default hot(module)(App)
// export default App;