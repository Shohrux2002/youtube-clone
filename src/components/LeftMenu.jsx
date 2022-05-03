import React from "react";
import "../style.css";
export default class LeftMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="left-menu">
        <div className="left-bar">
          <i class="fa-solid fa-house"></i>
          <p className="home-menu">Home</p>
        </div>
        <div className="left-bar">
          <i className="fa-solid fa-compass"></i>
          <p className="home-menu">Navigation</p>
        </div>
        <div className="left-bar">
          <i class="fa-brands fa-youtube"></i>
          <p className="home-menu">Short</p>
        </div>
        <div className="left-bar">
          <i class="fa-solid fa-rectangle-history"></i>
          <p className="home-menu">Follow</p>
        </div>
        <div className="left-bar">
          <i class="fa-solid fa-album-collection"></i>
          <p className="home-menu">Libary</p>
        </div>
      </div>
    );
  }
}
