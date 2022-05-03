import React from "react";

export default class VideoDetail extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <iframe
          width="800"
          height="400"
          src={`https://www.youtube.com/embed/${this.props.dataId}`}
          title="Youtube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media"
        ></iframe>
        <p className="video-name">{this.props.stateApp.title}</p>
        <p className="text">{this.props.stateApp.description}</p>
        <p className="like">
          <i className="fa-solid fa-thumbs-up"></i>
          {"   "}189 thousand{"   "}
          <i className="fa-solid fa-thumbs-down"></i>
          {"   "}I don`t like
          <i className="fa-solid fa-share"></i>
          Share
          <i className="fa-solid fa-download"></i>
          Save
          <i className="fa-solid fa-ellipsis"></i>
        </p>
      </div>
    );
  }
}
