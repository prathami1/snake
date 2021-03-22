import React from 'react';
import { Route, Switch } from 'react-router-dom'

import Board from './pages/Board'
import Intro from './pages/Intro'

function App() {
  return(
    <main>
      <Switch>
        <Route 
          path='/'
          component={Intro}
          exact
        />
        <Route 
          path='/play'
          component={Board}
          exact
        />
      </Switch>
    </main>
  );
}

export default App;