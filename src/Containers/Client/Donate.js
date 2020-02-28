import React from 'react'
import { Field, reduxForm } from 'redux-form'
import FormDonate from './FormDonate'
import {connect} from 'react-redux'
 import {sendMessage} from '../../../Actions/UserActions'






class  Donate extends React.Component {


    constructor(props){
        super(props);
        this.state={
            
        };
    };

 

    render(){


const {sendMessage}=this.props;

        
    // <!-- donate section 1 -->
    return(
    <section className="title-howeare gray-bg" id="fmDnt">
        <h2 className="section-title mb-2 h1 animateme">Contribuer</h2>
        <p className="text-center text-muted h5">Donnez même un peu pour une société consciente</p>

        {/* <!-- donate section 2 --> */}
        <div className="donate-section"></div>
        <div className="space-medium">
            <div className="container">
                <div className="row">
                    <div className="col-xl-5 col-lg-12 col-md-12 col-sm-12 col-12" id="formleft-part">
                        <div className="feature-description">
                            <h2>Nous sommes prêts à vous écouter et à toutes vos suggestions et à répondre à toutes vos questions dans les plus brefs délais!</h2>
                            <hr />
                            {/* <!-- feature-left --> */}
                            <div className="feature-left">
                                <div className="feature-icon"><i className="fa fa-money"></i></div>
                                <div className="feature-content">
                                    <p>Nous déclarons que nous sommes une organisation à but non lucratif</p>
                                </div>
                            </div>
                            {/* <!-- /.feature-left -->
                            <!-- feature-left --> */}
                            <div className="feature-left">
                                <div className="feature-icon"><i className="fa fa-graduation-cap"></i></div>
                                <div className="feature-content">
                                    <p>Toutes vos contributions au service des étudiants</p>
                                </div>
                            </div>
                            {/* <!-- /.feature-left -->
                            <!-- feature-left --> */}
                            <div className="feature-left">
                                <div className="feature-icon"><i className="fa fa-question"></i></div>
                                <div className="feature-content">
                                    <p>Pour poser vos questions s'il vous plaît contactez-nous</p>
                                </div>
                            </div>
                            {/* <!-- /.feature-left --> */}
                            <hr />
                            <p>Note: vous pouvez écrire ce que vous voulez décrire ici.</p>
                        </div>
                    </div>
                    {/* <!-- /.feature-sections --> */}
                    <div className="offset-xl-1 col-xl-6 offset-lg-1 col-lg-10 offset-md-1 col-md-10 col-sm-12 col-12 mt30">
                        <form>
                            {/* <!-- service-form --> */}
                            <div className="service-form">
                                <div className="row">
                                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 mb10 ">
                                        <h3>Entrez vos informations ici (ne seront pas utilisées dans le commercial)</h3>
                                    </div>
<FormDonate onSubmit={sendMessage}/>
                                   
                                </div>
                            </div>
                        </form>
                        {/* <!-- /.service-form --> */}
                    </div>
                </div>
            </div>
        </div>
        {/* <!-- donate section 2 --> */}
    </section>
    // {/* <!-- /donate section 1 --> */ }
);
}
    
}


const mapStateToProps=state=>({
...state
});

const mapDispatcheToProps=dispatch=>({
    sendMessage:(message)=>dispatch(
        sendMessage(message)
    )
})


export default connect(mapStateToProps,mapDispatcheToProps)(Donate)