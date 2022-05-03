import React from "react";
import "../style.css";
class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      keyword: "",
    };
  }
  onChangeInput = (e) => {
    this.setState({ keyword: e.target.value });
  };
  onFormSubmit = (e) => {
    e.preventDefault();
    this.props.request(this.state.keyword);
  };
  render() {
    return (
      <form className="forma" onSubmit={this.onFormSubmit}>
        <div className="ui icon input" style={{ width: "100%" }}>
          <input
            className="prompt"
            type="text"
            placeholder="Search..."
            onChange={this.onChangeInput}
          />
          <i className="search icon"></i>
        </div>
      </form>
    );
  }
}
export default SearchBar;
