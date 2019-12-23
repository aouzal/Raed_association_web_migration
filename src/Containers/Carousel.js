



import React from 'react';
import Slider from 'react-animated-slider';
import { connect } from 'react-redux'
import  '../../Locale/Theme/Css/slide.css';
import  '../../Locale/Theme/Css/slide2.css';
import "react-animated-slider/build/horizontal.css"
import { getPosts } from '../../Actions/UserActions'
import { createHashHistory } from 'history'


export const history = createHashHistory()

class Carousel extends React.Component {
  constructor(props) {
    super(props),
      this.state = {

      }
  }

  onSubmit(id){
    history.push('/post')
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
      <h1>{item.title}</h1>
      <p>{item.description}</p>
      <button onClick={item=>this.onSubmit(item)}>lire plus...</button>
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

export default connect(mapStateToProps, mapDispatcheToProps)(Carousel);






{/* <Slider classNames={horizontalCss} autoplay={2000}>
.map((item, index) => (
  <div
    key={item.id}

    style={{ background: `url('${item.urlImage}') no-repeat center center` }}
  >
    <div className="center">
      <h1>{item.title}</h1>
      <p>{item.description}</p>
      <button className="button">lire plus...</button>
    </div>
  </div>
))}
</Slider> */}