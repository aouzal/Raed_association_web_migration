
import React from 'react';
import Slider from 'react-animated-slider';
import { connect } from 'react-redux'
import  '../../../Locale/Theme/Css/slide.css';
import  '../../../Locale/Theme/Css/slide2.css';
import "react-animated-slider/build/horizontal.css"
import { getPosts } from '../../../Actions/UserActions'
import {withRouter} from 'react-router-dom'

///export const history = createHashHistory()


class Carousel extends React.Component {
  constructor(props) {
    super(props),
      this.state = {

      }
  }

  onSubmit(id){
   this.props.history.push('/post/'+id)
  }

  componentDidMount() {
    this.props.getPosts()
  }



  render(){
  
		return (
      <div>
<Slider className="slider-wrapper">
{this.props.Posts && this.props.Posts.map((item, index) => (
  <div
    key={item.id}
    className="slider-content"
    style={{ background: `url('${item.urlImage}') no-repeat center center` }}
  >
    <div className="inner">
      <h1>{item.title+ "/"+item.id}</h1>
      <p>{item.description}</p>
      <button onClick={()=>this.onSubmit(item.id)}>lire plus...</button>
    </div>
  </div>
))}
</Slider>
        
      </div>
    );
}
}


const mapStateToProps = state => ({
  Posts: state.UserReducer.Posts
});

const mapDispatcheToProps = dispatch => ({
  getPosts: () => dispatch(
    getPosts()
  )
});

export default connect(mapStateToProps, mapDispatcheToProps)(withRouter(Carousel));


