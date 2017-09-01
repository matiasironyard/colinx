import React, { Component } from 'react';


class SideNav extends Component {
  render() {
    return (
      <div>

          <div id="sidebar-wrapper">

            <form className="form-horizontal">
              <div className="form-group">
                <div className="">
                  <div className="input-group">
                    <input type="text" className="form-control" placeholder="Search"/>
                    <span className="input-group-addon">
                      <a href="/">
                        <i className="fa fa-search" aria-hidden="true"></i>
                      </a>
                    </span>
                  </div>
                </div>
              </div>
            </form>

            <ul className="list-group">

              <li className="list-group-item">
                <a href="/">Item 1</a>
              </li>

              <li className="list-group-item">
                <a href="/">Item 2</a>
              </li>

              <li className="list-group-item">
                <a href="/">Item 3</a>
              </li>

              <li className="list-group-item">
                <a href="/">Item 4</a>
              </li>

              <li className="list-group-item">
                <a href="/">Item 5</a>
              </li>

              <li className="list-group-item">
                <a href="/">Item 6</a>
              </li>

            </ul>

            <ul className="list-group">
              <li role="separator" className="divider"></li>
              <li className="list-group-item">
                <span className="dropdown">
                  <a href="/" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
                    <span href="/"><i className="fa fa-map-marker" aria-hidden="true"></i> Store</span>
                    <span className="caret"></span>
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <a href="/">Store 1</a>
                    </li>
                    <li>
                      <a href="/">Store 2</a>
                    </li>
                  </ul>
                </span>
            </li>
            <li className="list-group-item">
              <span className="dropdown">
                <a href="/" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
                  <i className="fa fa-user-circle" aria-hidden="true"></i>
                  <span className="caret"></span>
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a href="/">Configuration</a>
                  </li>
                  <li>
                    <a href="/">Profile</a>
                  </li>
                  <li role="separator" className="divider"></li>
                  <li>
                    <a href="/">Logout</a>
                  </li>
                </ul>
              </span>
            </li>
            </ul>
          </div>

    </div>
    );
  }
}

export default SideNav;
