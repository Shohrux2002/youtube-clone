import React from "react";
export default class VideoItem extends React.Component {
  constructor(props) {
    super(props);
    this.getChannal();
    this.state = {
      videoId: "",
    };
  }
  getChannal = async () => {
    let data = await fetch(
      "https://www.googleapis.com/youtube/v3/channels?part=snippet&id=UCBS7ypf4ccm6e_bu35EiAAA=items(id%2Csnippet%2Fthumbnails)&key=AIzaSyDdM1V_VUVwAnUzfc0NNMlJsQv_txGV95U"
    );
    let dataJson = await data.json();
    console.log(dataJson);
  };
  showDescription = () => {
    let i = 0;
    i++;
    if (i == 1) {
      document.documentElement.style.setProperty("--none", "none");
    } else {
      document.documentElement.style.setProperty("--none", "block");
    }
  };
  getIdClick = () => {
    console.log(this.props);
    this.props.func(
      this.props.data.id.videoId,
      this.props.data.snippet.title,
      this.props.data.snippet.description
    );
  };
  renderItem() {}
  render() {
    return (
      <div className="cart">
        <img
          className="video-img"
          src={this.props.data.snippet.thumbnails.medium.url}
          alt=""
        />
        <div className="video-data">
          <p
            className="video-name"
            onClick={() => {
              this.getIdClick();
              this.props.addClass();
              this.showDescription();
            }}
          >
            {this.props.data.snippet.title}
          </p>
          <div className="about">
            <p className="view">8view</p>
            <p className="kanal-nomi">Car VS</p>
            <p className="text">{this.props.data.snippet.description}</p>
          </div>
        </div>
      </div>
    );
  }
}
