import React from 'react'
import {Link} from 'react-router-dom'

export const Navbar_post=()=>{

  return(
    // <!-- start Nav bar component -->

 <nav style={{padding:"0"}} className="navbar navbar-expand-lg navbar-light site-header">
   <Link to="/">
  <a className="navbar-brand" style={{marginLeft:"80px"}} href="#"><img  src="Locale/Theme/img/Raed_logo.png" alt="Raed Logo" className="d-block mx-auto"/></a>
  </Link>
</nav>

  // {/* <!-- End Nav bar component --> */}
  );
}