import React from "react";

const Header = () => {
  return (
    <nav className="navbar navbar-light bg-light py-lg-3 px-lg-5 position-sticky top-0 left-0 w-100 shadow-sm" style={{ zIndex: "99" }}>
      <div className="container-fluid">
        <a className="navbar-brand text-dark fw500 fs-2">
          India<span className="text-primary">Reality</span>
        </a>
        <div className="d-flex">
          <button className="btn btn-lg btn-light border-secondary fs-6 px-md-4 py-md-3 py-2 px-2  me-lg-4 me-2 defaultRound">Login</button>
          <button className="btn btn-lg btn-primary defaultRound fs-6 px-md-4 py-md-3 py-2 px-2">
            Get Started <img className="ms-2" src="./icons/arrowdup.svg" />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Header;
