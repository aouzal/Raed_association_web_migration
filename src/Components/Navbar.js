import React from 'react'


export const Navbar=()=>{

  return(
    // <!-- start Nav bar component -->

 <nav style={{padding:"0"}} className="navbar navbar-expand-lg navbar-light site-header">
  <a className="navbar-brand" style={{marginLeft:"80px"}} href="#"><img  src="Locale/Theme/img/Raed_logo.png" alt="Raed Logo" className="d-block mx-auto"/></a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
    <ul style={{marginRight:"50px"}} className="navbar-nav ml-auto mt-2 mt-lg-0">

      <li className="nav-item active"><a className="nav-link" href="#">ACCUEIL<span className="sr-only">(current)</span></a></li>
      <li className="nav-item"><a className="nav-link trigger" href="#aboutUs">QUI SOMME NOUS?</a> </li>  
      <li className="nav-item"><a className="nav-link" href="#what-we-do">OBJECTIFS</a> </li> 
      <li className="nav-item"><a className="nav-link" href="#team-page">NOTRE MEMBRES</a> </li> 
      <li className="nav-item"><a className="nav-link" href="#fmDnt">CONTRIBUER</a> </li> 
      <li className="nav-item"><a className="nav-link" href="/Gallery">GALLERY</a> </li> 

    </ul>
    
  </div>
</nav>

  // {/* <!-- End Nav bar component --> */}
  );
}