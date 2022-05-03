import React from "react";
import SearchBar from "./SearchBar";
import "../style.css";
export default class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <header className="header flex">
        <div className="logo flex">
          <i class="fa-solid fa-bars"></i>
          <img className="logo-img" src="../../download.webp" alt="logo" />
        </div>
        <div className="search flex">
          <SearchBar request={this.props.request} />
          <i class="fa-solid fa-microphone"></i>
        </div>
        <div className="accound flex">
          <i className="video icon"></i>
          <i className="th icon"></i>
          <i className="bell outline icon"></i>
          <p className="google-account">S</p>
        </div>
      </header>
    );
  }
}
