import React from 'react'


export default class Scroll extends React.Component{


    render(){
        return(
            <div className="card mb-4 wow fadeIn">  
            {/* <!--Card content--> */}
            <div className="card-body text-center">

              {/* <!-- Logo carousel --> */}
              <div id="carouselExampleSlidesOnly" className="carousel slide" data-ride="carousel" data-interval="1800">
                <div className="carousel-inner">
                  {/* <!-- First slide --> */}
                  <div className="carousel-item">
                    {/* <!--Grid row--> */}
                    <div className="row">

                      {/* <!--First column--> */}
                      <div className="col-lg-3 col-md-6 d-flex align-items-center justify-content-center">
                        <img src="https://mdbootstrap.com/img/logo/brands/nike.png" className="img-fluid px-4" alt="Nike - logo"
                          style={{maxHeight: "40px"}}/>
                      </div>
                      {/* <!--/First column--> */}

                      {/* <!--Second column--> */}
                      <div className="col-lg-3 col-md-6 d-flex align-items-center justify-content-center">
                        <img src="https://mdbootstrap.com/img/logo/brands/amazon.png" className="img-fluid px-4" alt="Amazon - logo"
                          style={{maxHeight: "40px"}}/>
                      </div>
                      {/* <!--/Second column--> */}

                      {/* <!--Third column--> */}
                      <div className="col-lg-3 col-md-6 d-flex align-items-center justify-content-center">
                        <img src="https://mdbootstrap.com/img/logo/brands/sony.png" className="img-fluid px-4" alt="Sony - logo"
                          style={{maxHeight: "40px"}}/>
                      </div>
                      {/* <!--/Third column--> */}

                      {/* <!--Fourth column--> */}
                      <div className="col-lg-3 col-md-6 d-flex align-items-center justify-content-center">
                        <img src="https://mdbootstrap.com/img/logo/brands/samsung.png" className="img-fluid px-4" alt="Samsung - logo"
                          style={{maxHeight: "40px"}}/>
                      </div>
                      {/* <!--/Fourth column--> */}

                    </div>
                    {/* <!--/Grid row--> */}
                  </div>
                  {/* <!-- First slide --> */}

                  {/* <!-- Second slide --> */}
                  <div className="carousel-item active carousel-item-left">
                    {/* <!--Grid row--> */}
                    <div className="row">

                      {/* <!--First column--> */}
                      <div className="col-lg-3 col-md-6 d-flex align-items-center justify-content-center">
                        <img src="https://mdbootstrap.com/img/logo/brands/airbus.png" className="img-fluid px-4" alt="Airbus - logo"
                          style={{maxHeight: "40px"}}/>
                      </div>
                      {/* <!--/First column--> */}

                      {/* <!--Second column--> */}
                      <div className="col-lg-3 col-md-6 d-flex align-items-center justify-content-center">
                        <img src="https://mdbootstrap.com/img/logo/brands/yahoo.png" className="img-fluid px-4" alt="Yahoo - logo"
                          style={{maxHeight: "40px"}}/>
                      </div>
                      {/* <!--/Second column--> */}

                      {/* <!--Third column--> */}
                      <div className="col-lg-3 col-md-6 d-flex align-items-center justify-content-center">
                        <img src="https://mdbootstrap.com/img/logo/brands/deloitte.png" className="img-fluid px-4" alt="Deloitte - logo"
                          style={{maxHeight: "40px"}}/>
                      </div>
                      {/* <!--/Third column--> */}

                      {/* <!--Fourth column--> */}
                      <div className="col-lg-3 col-md-6 d-flex align-items-center justify-content-center">
                        <img src="https://mdbootstrap.com/img/logo/brands/ge.png" className="img-fluid px-4" alt="GE - logo"
                          style={{maxHeight: "40px"}}/>
                      </div>
                      {/* <!--/Fourth column--> */}

                    </div>
                    {/* <!--/Grid row--> */}
                  </div>
                  {/* <!-- Second slide --> */}

                  {/* <!-- Third slide --> */}
                  <div className="carousel-item carousel-item-next carousel-item-left">
                    {/* <!--Grid row--> */}
                    <div className="row">

                      {/* <!--First column--> */}
                      <div className="col-lg-3 col-md-6 d-flex align-items-center justify-content-center">
                        <img src="https://mdbootstrap.com/img/logo/brands/kpmg.png" className="img-fluid px-4" alt="KPMG - logo"
                          style={{maxHeight: "40px"}}/>
                      </div>
                      {/* <!--/First column--> */}

                      {/* <!--Second column--> */}
                      <div className="col-lg-3 col-md-6 d-flex align-items-center justify-content-center">
                        <img src="https://mdbootstrap.com/img/logo/brands/unity.png" className="img-fluid px-4" alt="Unity - logo"
                          style={{maxHeight: "40px"}}/>
                      </div>
                      {/* <!--/Second column--> */}

                      {/* <!--Third column--> */}
                      <div className="col-lg-3 col-md-6 d-flex align-items-center justify-content-center">
                        <img src="https://mdbootstrap.com/img/logo/brands/ikea.png" className="img-fluid px-4" alt="Ikea - logo"
                          style={{maxHeight: "40px"}}/>
                      </div>
                      {/* <!--/Third column--> */}

                      {/* <!--Fourth column--> */}
                      <div className="col-lg-3 col-md-6 d-flex align-items-center justify-content-center">
                        <img src="https://mdbootstrap.com/img/logo/brands/aegon.png" className="img-fluid px-4" alt="Aegon - logo"
                          style={{maxHeight: "40px"}}/>
                      </div>
                      {/* <!--/Fourth column--> */}

                    </div>
                    {/* <!--/Grid row--> */}
                  </div>
                  {/* <!-- Third slide --> */}
                </div>
              </div>
              {/* <!-- Logo carousel --> */}

              <hr/>

             
            </div>

          </div>
        );
    }
}
