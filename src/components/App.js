import React from "react";
import axios from "axios";
import VideoList from "./VideoList";
import Header from "./Header";
import LeftMenu from "./LeftMenu";
import VideoDetail from "./VideoDetail";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputKey: "",
      videoList: [],
      videoId: "",
      grid: "",
      title: "",
      description: "",
    };
  }
  getDate = async (kalitSuz) => {
    const key = "AIzaSyDdM1V_VUVwAnUzfc0NNMlJsQv_txGV95U";
    const data = await axios.get(
      `https://www.googleapis.com/youtube/v3/search`,
      {
        params: {
          part: "snippet",
          type: "video",
          maxResults: 10,
          q: kalitSuz,
          key: key,
        },
      }
    );

    this.setState({ videoList: data });
  };
  getVideoId = (id, title, description) => {
    this.setState({
      videoId: id,
      title: title,
      description: description,
    });
  };
  componentDidUpdate() {
    console.log(this.state);
  }
  addClass = () => {
    this.setState({ grid: "grid" });
  };
  showVideo = () => {
    if (this.state.videoId) {
      return <VideoDetail dataId={this.state.videoId} stateApp={this.state} />;
    }
  };

  render() {
    return (
      <>
        <Header request={this.getDate} />
        <LeftMenu />
        <div className={this.state.grid}>
          {this.showVideo()}
          <VideoList
            addClass={this.addClass}
            data={this.state.videoList}
            videoFunc={this.getVideoId}
          />
        </div>
      </>
    );
  }
}
export default App;
