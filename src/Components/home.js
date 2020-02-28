import React from 'react';
import {Navbar} from './Navbar'
import {About} from '../Containers/Client/About'
import Goals from '../Containers/Client/Goals'
import Team from '../Containers/Client/Team'
import Donate from '../Containers/Client/Donate'
import {Footer} from './Footer'
import Carousel from '../Containers/Client/Carousel'
import Parters from '../Containers/Client/Partners'


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
