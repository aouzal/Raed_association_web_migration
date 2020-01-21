import React,{useEffect} from 'react'
import compose from "redux";
import { connect } from "react-redux";
import { getTeam } from '../../Actions/UserActions'

 class Teams extends React.Component{

    constructor(props) {
        super(props);
        this.state = {


        }}
  componentDidMount(){
    this.props.getTeam();
  };


render(){
  const list=this.props.Team&&this.props.Team.map((element,key)=>{
  return(
    <div className="col-xs-12 col-sm-6 col-md-3" id={"member"+element.id} key={key}>
    <div className="single-team">
        <div className="team-photo">
            <img src={element.urlImage} alt={element.role}/>
        </div>
        <h5>{element.firstName.toUpperCase()+" "+element.lastName.toUpperCase()}</h5>
        <h6>{element.role.toUpperCase()}</h6>
        <ul className="social-menu">
            <li><a href="javascript:void();" onClick={()=>{console.log(element.phone)}}><i className="fa fa-facebook"></i></a></li>
            <li><a href="javascript:void();" onClick={()=>{console.log(element.phone)}}><i className="fa fa-twitter"></i></a></li>
            <li><a href="javascript:void();" onClick={()=>{console.log(element.phone)}}><i className="fa fa-linkedin"></i></a></li>
            <li><a href="javascript:void();" onClick={()=>{console.log(element.email)}}><i className="fa fa fa-envelope"></i></a></li>
        </ul>
    </div>
</div>
   ) }
   );

return(
  <section className=".section-padding-members gray-bg teamimg" id="team-page" tabIndex="-1">
        <div className="container">
          <div className="title-howeare">
            <h2 className="section-title mb-2 h1">Notre Membres</h2>
      <p className="text-center text-muted btmpdg h5">Ce sont nos soldats</p></div>
            <div className="row" id="member-sec">



                {list}
                
                
               
           
            </div>

        </div>
    </section>
    
//   {/* <!-- ./Team member --> */}
);
}
 }

const mapStateToProps=state=>({
Team:state.UserReducer.Team
})
const mapDispatchToProps = dispatch => ({
    getTeam: () => dispatch(
        getTeam()
  
    )
  })

// const TeamWrapper=compose(
//     Teams,connect(mapStateToProps,mapDispatchToProps)
// );

export default connect(mapStateToProps,mapDispatchToProps)(Teams);

