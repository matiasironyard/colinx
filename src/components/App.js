import React, {Component} from 'react';
import '../styles/App.css';
import Main from './Main.js'
import SideNav from './SideNav.js'
import NavBar from './NavBar.js'
import $ from 'jquery'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      topSearchBar: "hidden",
      middleSearchBar: "show"
    }
  }

  componentDidMount() {
    let menuToggle = document.querySelector(".menu-toggle");
    let wrapper = document.getElementById("wrapper");

    menuToggle.addEventListener('click', evt => {
      wrapper.classList.toggle('toggled');
    });

    let topNav = document.querySelector('.top-nav');
    let bottomNav = document.querySelector('.bottom-nav');
    let middleNav = document.querySelector('.middle-nav');

    window.onscroll = () => {
      if (middleNav.getBoundingClientRect().bottom <= 132) {
        topNav.style.backgroundColor = "#f8f8f8";
        this.setState({topSearchBar: "show"})
      } else {
        this.setState({topSearchBar: "hidden"})
        topNav.style.backgroundColor = "rgba(248, 248, 248, 0.5)";
      }
      if (window.pageYOffset > 270) {
        bottomNav.classList.add('fixed-bottom-nav');
      } else {
        bottomNav.classList.remove('fixed-bottom-nav');
      }
    }
  }

  render() {
    console.log('stat', this.state)
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
