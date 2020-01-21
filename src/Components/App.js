import React from 'react';
import Home from './home'
import Post from './Post'

import { Switch, Route, withRouter, BrowserRouter } from 'react-router-dom'

class App extends React.Component {





  render() {


    return (
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/post/:id' component={Post} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;