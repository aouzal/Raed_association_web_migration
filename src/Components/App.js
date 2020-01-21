import React from 'react';
import Home from './home'
import Post from './Post/Post'
import {Galerie} from './Galerie/Galerie'
import { Switch, Route, withRouter, BrowserRouter } from 'react-router-dom'
import NotFound from '../Tools/Notfound'

class App extends React.Component {





  render() {


    return (
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/post/:id' component={Post} />
          <Route path='/gallery/' component={Galerie} />
          <Route path="*" component={NotFound} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;