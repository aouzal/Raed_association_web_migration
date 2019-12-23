import React from 'react';
import {Navbar} from './Navbar'
import {About} from '../Containers/About'
import Goals from '../Containers/Goals'
import Team from '../Containers/Team'
import Donate from '../Containers/Donate'
import {Footer} from './Footer'
import Carousel from '../Containers/Carousel'
import Parters from '../Containers/Partners'


export default class Home extends React.Component {

   


    
    render() {

        
        return (
         

            <div >
                <Navbar />
                {/* <Slider /> */}
                <Carousel />
                <About />
                <Goals/>
                <Team />
                <Parters/>
                <Donate />
                <Footer />

            </div>
        );
    }
}
