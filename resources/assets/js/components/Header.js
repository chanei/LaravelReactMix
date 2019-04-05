import React from "react";
import { Link } from "react-router-dom";

const Header = () => (
  // <nav className="navbar navbar-expand-md navbar-light navbar-laravel">
  //   <div className="container">
  //     <Link className="navbar-brand" to="/">
  //       Check out
  //     </Link>
  //   </div>
  // </nav>
  <div className="container">
    <nav className="navbar navbar-expand-md navbar-light navbar-laravel">
      <div className="container-fluid">
        <div className="navbar-header">
          <a className="navbar-brand" href="#">
            AppDividend
          </a>
        </div>
        <ul className="nav navbar-nav">
          <li className="active">
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/create">Page 1</Link>
          </li>
          <li>
            <Link to="/">Page 2</Link>
          </li>
          <li>
            <Link to="/">Page 3</Link>
          </li>
        </ul>
      </div>
    </nav>
  </div>
);

export default Header;
