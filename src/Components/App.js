import React from 'react';
import {Navbar} from './Navbar'
import {Slider} from '../Containers/Slider'
import {About} from '../Containers/About'
import Goals from '../Containers/Goals'
import Team from '../Containers/Team'
import {Donate} from '../Containers/Donate'
import {Footer} from './Footer'
import { getTeam } from '../../Actions/UserActions';
import {getAllGoals} from '../../Actions/UserActions'
import { connect } from 'react-redux'

export default class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {


        }}


    
    render() {
        return (
            <div>
                <Navbar />
                <Slider />
                <About />
                <Goals/>
                <Team />
                <Donate />
                <Footer />

            </div>
        );
    }
}


// const mapStateToProps = state => ({
//     Goals:state.UserReducer.Goals,
//     Team:state.UserReducer.Team
//   })
  
//   const mapDispatchToProps = dispatch => ({
//     getAllGoals: () => dispatch(
//       getAllGoals(),
     
  
//     ),
//     getTeam: () => dispatch(
//         getTeam(),

    
//       )
//   })
  
//   export default connect(
//     mapStateToProps,
//     mapDispatchToProps
//   )(App);





