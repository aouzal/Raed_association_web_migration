import React from 'react'
import { connect } from 'react-redux'
import {getAllGoals} from '../../Actions/UserActions'


class Goals extends React.Component {

  constructor(props) {
    super(props),
      this.state = {

      }
  }

  componentDidMount() {
  this.props.getAllGoals();
  }
  render() {

    // const list= this.props.UserReducer&&this.props.UserReducer.Goals&&this.props.UserReducer.Goals.map((element,key)=>{
      const list= this.props.Goals&&this.props.Goals.map((element,key)=>{
     return(
      <div className="col-xs-12 col-sm-6 col-md-4 col-lg-4 col-xl-4" id={"goal"+element.id} key={key}>
      <div className="card">
        <div className={"card-block block-"+element.id}>
          <h3 className="card-title">{element.title}</h3>
          <p className="card-text">{element.description}</p>
          <a href="javascript:void();" title="Read more" className="read-more" >Lire plus<i className="fa fa-angle-double-right ml-2"></i></a>
        </div>
      </div>
    </div>);

    });
    return (
      // <!-- start Objective section -->
      <div>
        <section id="what-we-do" >
          <div className="container-fluid">
            <h2 className="section-title mb-2 h1 title-howeare">Nos Objectifs</h2>
            <p className="text-center text-muted h5">Ce sont certains de nos objectifs que nous cherchons à atteindre</p>
            <div className="row mt-5">

              {list}
    
              </div>
          </div>
        </section>
      </div>

    );

  }




}

const mapStateToProps = state => ({
  Goals:state.UserReducer.Goals
})

const mapDispatchToProps = dispatch => ({
  getAllGoals: () => dispatch(
    getAllGoals()

  )
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Goals);

