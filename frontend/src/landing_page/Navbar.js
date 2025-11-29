import React from 'react';
function Navbar() {
    return (  
    <nav class="navbar navbar-expand-lg border-bottom px-5 pb-2 sticky-top bg-white ">
  <div class="container-fluid">
    <a class="navbar-brand" href="#"><img src="media\images\logo.svg" alt="logo" style={{width:"25%"}} /></a>
    
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item px-3">
          <a class="nav-link active" aria-current="page" href="http://localhost:3000/signup">SignUp</a>
        </li>
        <li class="nav-item px-3">
          <a class="nav-link " href="http://localhost:3000/about">About</a>
        </li>
        <li class="nav-item px-3">
          <a class="nav-link" href="http://localhost:3000/products">Products</a>
        </li>
        <li class="nav-item px-3">
          <a class="nav-link" href="http://localhost:3000/pricing">Pricing</a>
        </li>
        <li class="nav-item px-3">
          <a class="nav-link" href="http://localhost:3000/support">Support</a>
        </li>
        <li class="nav-item px-3">
          <a class="nav-link" href="#"><i class="fa fa-bars" aria-hidden="true"></i></a>
        </li>
      </ul>
    </div>
  </div>
</nav>
    );
}

export default Navbar;