import React from 'react'
import { Navbar_post } from './Navbar_post'
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';
import { withRouter } from 'react-router-dom'
import { getPostsByid } from '../../Actions/UserActions'
import dateFormat from 'dateformat';
import {Footer} from './Footer_post'

dateFormat.i18n = {
  dayNames: [
    'Dim', 'lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam',
    'Dimanche', 'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi'
  ],
  monthNames: [
    'Jan', 'Fev', 'Mar', 'Avr', 'Mai', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec',
    'Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juilet', 'aout', 'Septembre', 'Octobre', 'Novembre', 'Decembre'
  ],
  timeNames: [
    'a', 'p', 'am', 'pm', 'A', 'P', 'AM', 'PM'
  ]
};
class Post extends React.Component {

  constructor(props) {
    super(props),
      this.state = {
        Post: {}
      }

  }

  async componentDidMount() {
    await this.props.getPostsByid(this.props.match.params.id)
    console.log("this.props.match.params.id", this.props.match.params.id);
    console.log("this.props.Post", this.props.Post);

    this.setState({ Post: this.props.Post });
    console.log("Post", Post);
  }

  render() {


    return (
      // <!--Main layout-->
      <div>
        <Navbar_post />
        <main className="">
          <div className="container">
            <section className="">
              <div className="row">
                <div className="col-md-12 ">
                  <div className="card ">
                    <img src={this.props.Post && this.props.Post.urlImage} className="img-fluid" alt="" />
                  </div>
                  <div className="card mb-4 wow fadeIn">
                    <div className="card-body">
                      <p className="h5 my-4">{this.props.Post && this.props.Post.title}</p>
                      {this.props.Post && this.props.Post.description}
                      <blockquote className="blockquote" style={{ float: "right", marginTop: "40px" }}>
                        <footer className="blockquote-footer">
                          <cite title="Source Title">{this.props.Post && this.props.Post.author}</cite>
                        </footer>
                        <footer className="blockquote-footer">
                          <cite title="Source Title">{this.props.Post ? dateFormat(new Date(this.props.Post.updatedAt), "dddd, mmmm dS, yyyy, h:MM:ss TT"):" "}</cite>
                        </footer>
                      </blockquote>
                    </div>
                  </div>               
                  <div className="card mb-3 wow fadeIn">
                    {/* <div className="card-header font-weight-bold">Leave a reply</div> */}
                    {/* <div className="card-body"> */}
                    {/* <!-- Default form reply --> */}
                    {/* <form>          
                            <!-- Comment -->
                            <div className="form-group">
                              <label for="replyFormComment">Your comment</label>
                              <textarea className="form-control" id="replyFormComment" rows="5"></textarea>
                            </div>       
                            <!-- Name -->
                            <label for="replyFormName">Your name</label>
                            <input type="text" id="replyFormName" className="form-control"/>
          
                            <br>
                                                       <div className="text-center mt-4">
                              <button className="btn btn-info btn-md" type="submit">Post</button>
                            </div>

                          </form> */}
                    {/* <!-- Default form reply --> */}

                    {/* </div> */}
                  </div>
                </div>
              </div>
            </section>
          </div>
        </main>
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  Post: state.UserReducer.Post
})
const mapDispatcheToProps = dispatch => ({
  getPostsByid: (id) => dispatch(
    getPostsByid(id)
  )
});

export default connect(mapStateToProps, mapDispatcheToProps)(withRouter(Post));