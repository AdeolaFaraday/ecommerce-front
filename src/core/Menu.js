import React from "react";
import { Link, withRouter } from "react-router-dom";
import { signout, isAuthenticated } from "../auth";
import { itemTotal } from "./cartHelpers";

const isActive = (history, path) => {
  if(history.location.pathname === path) {
    return {color : "#ffffff"}
  } else {
    return {color: "#ffffff"}
  }
}

const Menu = ({history}) => (

    <body>
    <div className="py-2 bg-primary">
    <div className="container">
        <div className="row no-gutters d-flex align-items-start align-items-center px-3 px-md-0">
            <div className="col-lg-12 d-block">
                <div className="row d-flex">
                    <div className="col-md-5 pr-4 d-flex topper align-items-center">
                        <div className="icon bg-fifth mr-2 d-flex justify-content-center align-items-center"><span className="icon-map"></span></div>
                        <span className="text">Kolaba road, Alaja Ayobo, Ipaja, Lagos State</span>
                    </div>
                    <div className="col-md pr-4 d-flex topper align-items-center">
                        <div className="icon bg-secondary mr-2 d-flex justify-content-center align-items-center"><span className="icon-paper-plane"></span></div>
                        <span className="text">ayeniolajumoke@gmail.com</span>
                    </div>
                    <div className="col-md pr-4 d-flex topper align-items-center">
                        <div className="icon bg-tertiary mr-2 d-flex justify-content-center align-items-center"><span className="icon-phone2"></span></div>
                        <span className="text">09058328175</span>
                    </div>
                </div>
            </div>
        </div>
      </div>
</div>

    <nav className="navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light" id="ftco-navbar">
    <div className="container">
      <Link className="navbar-brand" to="/">MyBabesNG</Link>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#ftco-nav" aria-controls="ftco-nav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="oi oi-menu"></span> Menu
      </button>

      <div className="collapse navbar-collapse" id="ftco-nav">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item active"><Link to="/" className="nav-link">Home</Link></li>
          {isAuthenticated() && isAuthenticated().user.role === 0 && (
            <li className="nav-item active"><Link to="/user/dashboard" className="nav-link">Dashboard</Link></li>
          )}

          {isAuthenticated() && isAuthenticated().user.role === 1 && (
            <li className="nav-item active"><Link to="/admin/dashboard" className="nav-link">Dashboard</Link></li>
          )}
          <li className="nav-item dropdown">
              <Link className="nav-link dropdown-toggle" href="#" id="dropdown04" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Shop</Link>
              <div className="dropdown-menu" aria-labelledby="dropdown04">
              	<Link className="dropdown-item" to="/shop">Shop</Link>
              	<Link className="dropdown-item" to="/cart">Cart</Link>
              </div>
            </li>
          {!isAuthenticated() && (
            <li className="nav-item"><Link to="/signin" className="nav-link">Signin</Link></li>
          )}
          {!isAuthenticated() && (
            <li className="nav-item"><Link to="/signup" className="nav-link">Signup</Link></li>
          )}
          {isAuthenticated() && (
            <li className="nav-item"><span onClick={() => signout(() => {history.push('/')})} style={{cursor: 'pointer'}} className="nav-link">Signout</span></li>
          )}
          <li className="nav-item cta cta-colored"><Link to="/cart" className="nav-link"><span className="icon-shopping_cart"></span>[{itemTotal()}]</Link></li>

        </ul>
      </div>
    </div>
  </nav>
  </body>
);

export default withRouter(Menu);
