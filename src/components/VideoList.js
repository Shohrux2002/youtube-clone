import React from "react";
import "../style.css";
import VideoItem from "./VideoItem";

class VideoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      videoData: [],
    };
  }
  rendeeList = () => {
    return this.props.data.data?.items.map((val) => {
      return (
        <div key={val.id.videoId}>
          <VideoItem
            data={val}
            func={this.props.videoFunc}
            addClass={this.props.addClass}
          />
        </div>
      );
    });
  };
  render() {
    return <div className="video-list"> {this.rendeeList()}</div>;
  }
}
export default VideoList;
