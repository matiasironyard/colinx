import React, {Component} from 'react';
import '../styles/App.css';
import Main from './Main.js'
import SideNav from './SideNav.js'
import NavBar from './NavBar.js'
import $ from 'jquery'

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      topSearchBar: "hidden",
      middleSearchBar: "show",
    }
  }

  componentDidMount() {
    $("#menu-toggle").click((e)=> {
      e.preventDefault();
      $("#wrapper").toggleClass("toggled");
    });

    let  mn = $(".bottom-nav"),
        src = $(".top-search"),
        mdl = $(".middle-nav"),
        mns = "main-nav-scrolled",
        hdr = $('.middle-nav').height();
        console.log('hdr', hdr)
        let self = this;

    $(window).scroll(function() {
      if( $(this).scrollTop() < 50 ) {
        self.setState({topSearchBar: "hidden", middleSearchBar: "show"})
      }
      if( $(this).scrollTop() > 285) {
        mn.addClass(mns);
        $('.middle-search-form-group').fadeOut()
        self.setState({ middleSearchBar: "hidden"})
      } else if ($(this).scrollTop() > 215){
        self.setState({topSearchBar: "show"})
      } else {
        mn.removeClass(mns);
        $('.middle-search-form-group').fadeIn()
        self.setState({topSearchBar: "hidden", middleSearchBar: "show"})
      }
    });

  }

  render() {
    return (
      <div className="container-fluid no-gutters">
        <div className="navbar-panel">
          <NavBar topSearchBar={this.state.topSearchBar} middleSearchBar={this.state.middleSearchBar}/>
        </div>
        <div id="wrapper" className="">
          <SideNav/>
          <div id="page-content-wrapper">
            <Main/>
          </div>
        </div>

      </div>
    );
  }
}

export default App;
