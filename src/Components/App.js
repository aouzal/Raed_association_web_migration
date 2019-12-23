import React from 'react';
import Home from './home'
import Post from './Post'

import { Switch, Route,withRouter } from 'react-router-dom'

 class App extends React.Component {

   


    
    render() {

        
        return (
            <Switch>
            <Route exact path='/' component={Home}/>
            <Route path='/post' component={Post}/>
          </Switch>

        );
    }
}

export default App;