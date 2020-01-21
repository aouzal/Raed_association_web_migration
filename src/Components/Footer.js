import React from 'react'

export const Footer = () => {
  return (
    // <!-- Footer -->
    <div className="animatemefooter">
      <section id="footer">
        <div className="container">
          <div className="row text-center text-xs-center text-sm-left text-md-left">
            <div className="col-xs-12 col-sm-4 col-md-4">
              <h5>ACCES RAPIDE</h5>
              <ul className="list-unstyled quick-links">
                <li><a href="#"><i className="fa fa-angle-double-right"></i>Accueil</a></li>
                <li><a href="#aboutUs"><i className="fa fa-angle-double-right"></i>Qui somme nous?</a></li>
                <li><a href="#what-we-do"><i className="fa fa-angle-double-right"></i>Objectifs</a></li>
                <li><a href="#team-page"><i className="fa fa-angle-double-right"></i>Notre membres</a></li>
                <li><a href="#fmDnt"><i className="fa fa-angle-double-right"></i>Contribuer</a></li>
              </ul>
            </div>
            {/* <div className="col-xs-12 col-sm-4 col-md-4">
          <h5>NOS BRANCHES</h5>
          <ul className="list-unstyled quick-links">
            <li><a href="javascript:void();"><i className="fa fa-angle-double-right"></i>Home</a></li>
            <li><a href="javascript:void();"><i className="fa fa-angle-double-right"></i>About</a></li>
            <li><a href="javascript:void();"><i className="fa fa-angle-double-right"></i>FAQ</a></li>
            <li><a href="javascript:void();"><i className="fa fa-angle-double-right"></i>Get Started</a></li>
            <li><a href="https://wwwe.sunlimetech.com" title="Design and developed by"><i className="fa fa-angle-double-right"></i>Imprint</a></li>
          </ul>
        </div> */}
            <div className="col-xs-12 col-sm-4 col-md-4">
              <h5>NOTRE GALLERIE</h5>
              <ul className="list-unstyled quick-links">
                <li><a href="/Gallery"><i className="fa fa-angle-double-right"></i>Images</a></li>
                <li><a href="/videos"><i className="fa fa-angle-double-right"></i>Videos</a></li>
              </ul>
            </div>
          </div>
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-12 mt-2 mt-sm-5">
              <ul className="list-unstyled list-inline social text-center">
                <li className="list-inline-item"><a href="https://www.facebook.com/جمعية-رائد-Association-Raed-1639918316090890/" target="_blank"><i className="fa fa-facebook"></i></a></li>
                <li className="list-inline-item"><a href="https://www.instagram.com/associationraed/" target="_blank"><i className="fa fa-instagram"></i></a></li>
                <li className="list-inline-item"><a href="javascript:void();" onClick={() => { alert("0627050623") }}><i className="fa fa-phone"></i></a></li>
                <li className="list-inline-item"><a href="javascript:void();" onClick={() => { alert("zakariaaouzal@gmail.com") }}><i className="fa fa-envelope"></i></a></li>
              </ul>
            </div>
            <hr />
          </div>
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-12 mt-2 mt-sm-2 text-center text-white">
              <p>Association Raed est une association avec des objectifs éducatifs, scientifiques, sociaux et culturels</p>
              <p className="h6">&copy All right Reversed.<a className="text-green ml-2" href="https://www.sunlimetech.com" target="_blank">ASSOCIATION RAED 2018</a></p>
            </div>
            <hr />
          </div>
        </div>
      </section>
    </div>
    //   <!-- ./Footer -->
  );
}