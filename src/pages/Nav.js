import React, { Component } from "react";
import { NavLink, Outlet, Link } from "react-router-dom";

export default class Nav extends Component {
  render() {
    // console.log(this.props.prop)
    return (
      <div>
        <nav className="navbar navbar-dark navbar-expand-lg  bg-dark">
          <div className="container-fluid">
            <NavLink exact='true' className="navbar-brand" to="/">
              <h1 className="display-5">Dog<span className="text-danger">Finder</span></h1>
            </NavLink>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <NavLink
                    exact='true'
                    className="nav-link"
                    to="/"
                  >
                    Home
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink exact='true' className="nav-link" to="/about">
                    About
                  </NavLink>
                </li>
                <li className="nav-item dropdown">
                  <div className="btn-group">
                    <NavLink
                      exact='true'
                      className="nav-link"
                      to="/doglist"
                      role="button"
                    >
                      DogList
                    </NavLink>
                    <button
                      type="button"
                      className="btn btn-dark dropdown-toggle dropdown-toggle-split"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <span className="sr-only"></span>
                    </button>
                    <ul className="dropdown-menu">
                      {this.props.prop.map((d,k) => {
                        return (
                          <li key={k}>
                            <Link
                              exact='true'
                              className="dropdown-item"
                              to={`/doglist/${d.name.toLowerCase()}`}
                              key={k}
                            >
                              {d.name}
                            </Link>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <Outlet />
      </div>
    );
  }
}
