import React, {Component} from 'react';
import '../styles/App.css';
import Main from './Main.js'
import SideNav from './SideNav.js'
import NavBar from './NavBar.js'

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
    let contentWrapper = document.getElementById('page-content-wrapper');

    topNav.style.backgroundColor = "rgba(75, 172, 207, 0.5)"

    window.onscroll = () => {

      let getHeight = (div) => {
        return Math.max(div.scrollHeight, div.offsetHeight, div.clientHeight);
      };

      let rect = (div) => {
        return div.getBoundingClientRect();
      }
      let topNavHeight = getHeight(topNav);
      let bottomNavPosition = rect(middleNav).bottom - topNavHeight;
      let changeRate = (bottomNavPosition / document.body.offsetHeight * 100);
      middleNav.style.opacity = (changeRate / 100);
      topNav.style.backgroundColor = "rgba(75, 172, 207, " + (1 - changeRate / 100) + ")";

      if (middleNav.getBoundingClientRect().bottom <= 265) {
        //topNav.classList.add('top-nav-fade')
        this.setState({topSearchBar: "show"})
      } else {
        this.setState({topSearchBar: "hidden"})
        //topNav.classList.remove('top-nav-fade')
        //topNav.style.backgroundColor = "rgba(248, 248, 248, 0.5)";
      }
      if (bottomNavPosition <= 0) {
        bottomNav.classList.add('fixed-bottom-nav');
        contentWrapper.style.marginTop = "60px"
      } else {
        bottomNav.classList.remove('fixed-bottom-nav');
        contentWrapper.style.marginTop = "0px"
      }
    }
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
