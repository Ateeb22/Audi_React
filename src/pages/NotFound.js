import React from "react";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div id="mid" className="he" >
      <h2 className="d-flex justify-content-center">Page Not Found</h2>

      <p className="p-2">A home page (or homepage) is the main web page of a website. The term may also refer to the start page shown in a web browser when the application first opens.
         Usually, the home page is located at the root of the website's domain or subdomain.</p>

      <p className="d-flex justify-content-center">Cannot found the Page Must Write Valid section to Proceed. </p>

      <p className="d-flex justify-content-center">Go to <Link to={"/login"}>Login</Link> </p>   
    </div>
  );
}

export default NotFound;
