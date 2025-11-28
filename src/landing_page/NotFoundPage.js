import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
function NotFoundPage() {
  return (
    <>
      <Navbar></Navbar>
      <div className="container text-center p-5">
        <h1 className="fs-2">Error 404</h1>
        <br />
        <p className="text-secondary">Page Not Found</p>
        {/* <button className='btn btn-primary mt-3'>SignUp For Free</button> */}
      </div>
      <Footer></Footer>
    </>
  );
}

export default NotFoundPage;
