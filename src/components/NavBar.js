import React, {Component} from 'react';

class NavBar extends Component {

  render() {
    return (
      <div>

        <nav className="navbar navbar-default navbar-fixed-top top-nav">
          <div className="container-fluid">

            <div className="navbar-header">
              <span className="mobile-logo hidden-lg hidden-md hidden-sm">Shopsy</span>
              <button type="button" className="navbar-toggle collapsed">
                <a href="#menu-toggle" className="btn btn-secondary menu-toggle" id="menu-toggle">
                  <span className="sr-only">Toggle navigation</span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                </a>
              </button>

            </div>

            <div className="collapse navbar-collapse">
              <h2 className={`mobile-logo top-search col-xs-3 ${this.props.topSearchBar}`}>Shopsy</h2>
              <div className="col-xs-6  col-lg-6 ">

                <form className={`form-horizontal navbar-left top-search ${this.props.topSearchBar}`}>

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
              </div>

              <ul className="nav navbar-nav navbar-right">
                <li className="dropdown">
                  <a href="/" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
                    <span href="/">
                      <i className="fa fa-map-marker" aria-hidden="true"></i>
                      Store</span>
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
                </li>
                <li className="dropdown">
                  <a className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
                    <span href="/"><i className="fa fa-user-circle" aria-hidden="true"></i></span>
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
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <nav className='navbar navbar-default  middle-nav hidden-xs'>
          <div className="container-fluid">
            <div className="col-xs-6 col-xs-offset-3 col-lg-6 col-lg-offset-3">
              <h1 className="logo">Shopsy</h1>
              <form className={`form-horizontal ${this.props.middleSearchBar}`}>
                <div className="form-group middle-search-form-group">
                  <div className="">
                    <div className="input-group middle-nav-input-group">
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
            </div>
          </div>
        </nav>

        <nav className='row navbar navbar-default  bottom-nav hidden-xs'>
          <div className="container-fluid">
            <div className="row">
              <ul className="nav nav-pills nav-justified">

                <li className="nav-btn" role="presentation">
                  <a className="bottom-nav-btn" href="/">Link</a>
                </li>

                <li className="nav-btn" role="presentation">
                  <a className="bottom-nav-btn"  href="/">Link</a>
                </li>

                <li className="nav-btn" role="presentation">
                  <a className="bottom-nav-btn"  href="/">Link</a>
                </li>

                <li className="nav-btn" role="presentation">
                  <a className="bottom-nav-btn"  href="/">Link</a>
                </li>

                <li className="nav-btn" role="presentation">
                  <a className="bottom-nav-btn"  href="/">Link</a>
                </li>

                <li className="nav-btn" role="presentation">
                  <a className="bottom-nav-btn"  href="/">Link</a>
                </li>

              </ul>
            </div>

          </div>
        </nav>

      </div>
    );
  }
}

export default NavBar;
