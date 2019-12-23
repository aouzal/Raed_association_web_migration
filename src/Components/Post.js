import React from 'react'
import {Navbar_post} from './Navbar_post'
export default class Post extends React.Component{

    render(){
        return(
            // <!--Main layout-->
            <div>
            <Navbar_post/>          
            
            <main className="">
              <div className="container">
                {/* <!--Section: Post--> */}
                <section className="">
          
                  {/* <!--Grid row--> */}
                  <div className="row">
          
                    {/* <!--Grid column--> */}
                    <div className="col-md-12 ">
          
                      {/* <!--Featured Image--> */}
                      <div className="card ">
          
                        <img src="https://mdbootstrap.com/img/Photos/Slides/img%20(144).jpg" className="img-fluid" alt=""/>
          
                      </div>
                      {/* <!--/.Featured Image--> */}
          
                      {/* <!--Card--> */}
                    
                      {/* <!--/.Card--> */}
          
                      {/* <!--Card--> */}
                      <div className="card mb-4 wow fadeIn">
          
                        {/* <!--Card content--> */}
                        <div className="card-body">
          
                          <p className="h5 my-4">That's a very long heading </p>
          
          
                          <blockquote className="blockquote">
                            <p className="mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
                            <footer className="blockquote-footer">Someone famous in
                              <cite title="Source Title">Source Title</cite>
                            </footer>
                          </blockquote>
          
                          <p className="h5 my-4">That's a very long heading </p>
          
                          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae, ut rerum deserunt corporis
                            ducimus at, deleniti ea alias dolor reprehenderit sit vel. Incidunt id illum doloribus,
                            consequuntur maiores sed eligendi.</p>
          
                          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae, ut rerum deserunt corporis
                            ducimus at, deleniti ea alias dolor reprehenderit sit vel. Incidunt id illum doloribus,
                            consequuntur maiores sed eligendi.</p>
          
                          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae, ut rerum deserunt corporis
                            ducimus at, deleniti ea alias dolor reprehenderit sit vel. Incidunt id illum doloribus,
                            consequuntur maiores sed eligendi.</p>
          
                        </div>
          
                      </div>
                      {/* <!--/.Card--> */}
          
                      {/* <!--Reply--> */}
                      <div className="card mb-3 wow fadeIn">
                        <div className="card-header font-weight-bold">Leave a reply</div>
                        <div className="card-body">
          
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
          
          
          
                        </div>
                      
                      </div>
                      {/* <!--/.Reply--> */}
          
                    </div>
                    {/* <!--Grid column--> */}
          
          
          
                  </div>
                  {/* <!--Grid row--> */}
          
                </section>
                {/* <!--Section: Post--> */}
          
              </div>
            </main>
            </div>
        );
    }
}