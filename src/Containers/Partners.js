import React from 'react'
import InfiniteCarousel from 'react-leaf-carousel';
import { getPartners } from '../../Actions/UserActions'
import { connect } from "react-redux";

 class Partner extends React.Component {



    componentDidMount(){
        this.props.getPartners();
      };

    render() {
        const list=this.props.Partners&&this.props.Partners.map((element,key)=>{
            return(
           <div ><img  src={element.urlImage}/></div>

            );
        });
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
                            <div ><img src="https://image.freepik.com/free-vector/luxury-letter-e-logo-design_1017-8903.jpg"/></div>
                            <div ><img src="http://www.webcoderskull.com/img/logo.png"/></div>
                            <div ><img src="https://image.freepik.com/free-vector/3d-box-logo_1103-876.jpg"/></div>
                            <div ><img src="https://image.freepik.com/free-vector/blue-tech-logo_1103-822.jpg"/></div>
                            <div ><img src="https://image.freepik.com/free-vector/colors-curl-logo-template_23-2147536125.jpg"/></div>
                            <div ><img src="https://image.freepik.com/free-vector/abstract-cross-logo_23-2147536124.jpg"/></div>
                            <div ><img src="https://image.freepik.com/free-vector/football-logo-background_1195-244.jpg"/></div>
                            <div ><img src="https://image.freepik.com/free-vector/background-of-spots-halftone_1035-3847.jpg"/></div>
                            <div ><img src="https://image.freepik.com/free-vector/retro-label-on-rustic-background_82147503374.jpg"/></div>
                        </InfiniteCarousel>
                </div>
            </section>
        );
    }
}


const mapStateToProps=state=>({
    Partners:state.UserReducer.Partners
    })
    const mapDispatchToProps = dispatch => ({
        getPartners: () => dispatch(
            getPartners()
      
        )
      })

      export default connect(mapStateToProps,mapDispatchToProps)(Partner);  