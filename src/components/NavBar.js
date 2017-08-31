import React, {Component} from 'react';

class NavBar extends Component {

  render() {
    console.log('props', this.props)
    return (
      <div>

        <nav className="navbar navbar-default navbar-fixed-top top-nav">
          <div className="container-fluid">

            <div className="navbar-header">
              <span className="logo hidden-lg hidden-md hidden-sm">Supplier's Logo</span>
              <button type="button" className="navbar-toggle collapsed">
                <a href="#menu-toggle" className="btn btn-secondary" id="menu-toggle">
                  <span className="sr-only">Toggle navigation</span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                </a>
              </button>

            </div>

            <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
              <h4 className={`logo top-search col-xs-3 ${this.props.topSearchBar}`}>Supplier's Logo</h4>
              <div className="col-xs-6">

                <form className={`form-horizontal navbar-left top-search ${this.props.topSearchBar}`}>

                  <div className="form-group">
                    <div className="">
                      <div className="input-group">
                        <input type="text" className="form-control" placeholder="Search"/>
                        <span className="input-group-addon">
                          <a href="#">
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
                  <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
                    <a href="#">
                      <i className="fa fa-map-marker" aria-hidden="true"></i>
                      #123456</a>
                    <span className="caret"></span>
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <a href="#">Store 1</a>
                    </li>
                    <li>
                      <a href="#">Store 2</a>
                    </li>
                  </ul>
                </li>
                <li className="dropdown">
                  <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
                    <i className="fa fa-user-circle" aria-hidden="true"></i>
                    <span className="caret"></span>
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <a href="#">Configuration</a>
                    </li>
                    <li>
                      <a href="#">Profile</a>
                    </li>
                    <li role="separator" className="divider"></li>
                    <li>
                      <a href="#">Logout</a>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <nav className='navbar navbar-default  middle-nav hidden-xs'>
          <div className="container-fluid">
            <div className="col-xs-6 col-xs-offset-3">
              <h1 className="logo">Supplier</h1>
              <form className={`form-horizontal ${this.props.middleSearchBar}`}>
                <div className="form-group">
                  <div className="">
                    <div className="input-group middle-nav-input-group">
                      <input type="text" className="form-control" placeholder="Search"/>
                      <span className="input-group-addon">
                        <a href="#">
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

                <li role="presentation">
                  <a href="#">Item 1</a>
                </li>

                <li role="presentation">
                  <a href="#">Item 2</a>
                </li>

                <li role="presentation">
                  <a href="#">Item 3</a>
                </li>

                <li role="presentation">
                  <a href="#">Item 4</a>
                </li>

                <li role="presentation">
                  <a href="#">Item 5</a>
                </li>

                <li role="presentation">
                  <a href="#">Item 6</a>
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
