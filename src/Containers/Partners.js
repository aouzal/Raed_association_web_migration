import React from 'react'
import InfiniteCarousel from 'react-leaf-carousel';


export default class Partner extends React.Component {




    render() {
        return (

            <section className="section-padding-partners  teamimg" id="team-page" tabIndex="-1">
                <div className="container mb-10">
                    <div className="title-howeare">
                        <h2 className="section-title m-0 h1">Nos Partenaires</h2>
                        <p className="text-center text-muted btmpdg-partners h5">Ce sont nos soldats</p></div>
                   


                        <InfiniteCarousel
                            breakpoints={[
                                {
                                    breakpoint: 500,
                                    settings: {
                                        slidesToShow: 2,
                                        slidesToScroll: 2,
                                    },
                                },
                                {
                                    breakpoint: 768,
                                    settings: {
                                        slidesToShow: 5,
                                        slidesToScroll: 1,
                                    },
                                },
                            ]}
                            
                            // dots={true}
                            //showSides={true}
                            sidesOpacity={.5}
                            sideSize={.1}
                            slidesToScroll={4}
                            slidesToShow={4}
                            scrollOnDevice={true}
                        >
                            <div ><img alt='' src="https://grandvincentmarion.github.io/_img/slider-logo1.png" /></div>
                            <div ><img alt='' src="https://grandvincentmarion.github.io/_img/slider-logo2.png" /></div>
                            <div ><img alt='' src="https://grandvincentmarion.github.io/_img/slider-logo3.png" /></div>
                            <div ><img alt='' src="https://grandvincentmarion.github.io/_img/slider-logo1.png" /></div>
                            <div ><img alt='' src="https://grandvincentmarion.github.io/_img/slider-logo2.png" /></div>
                            <div ><img alt='' src="https://grandvincentmarion.github.io/_img/slider-logo3.png" /></div>
                        </InfiniteCarousel>






                   

                </div>
            </section>
        );
    }
}