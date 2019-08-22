import React, { Component } from "react";
import { connect } from "react-redux";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class SinglePhoto extends Component {
  constructor(props) {
    super(props);
    this.state = {
      photos: [],
      photo: []
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/photos")
      .then(response => response.json())
      .then(json => {
        this.setState({
          photos: json
        });
      });
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.photos) {
      this.setState({ photos: nextProps.photos });
    }
  }
  render() {
    const { match } = this.props;
    var styles = {
      single_photo: {
        display: "flex",
        margin: "0 30px",
        paddingTop: "80px"
      },
      span: {
        border: "2px solid #2288b9",
        padding: "5px 15px",
        fontFamily: "lato,sans-serif",
        color: "#2288b9",
        fontWeight: "600"
      }
    };
    return (
      <Router>
        {this.state.photos
          .filter(el => el.id.toString() === match.params.id.toString())
          .map(el => (
            <div style={styles.single_photo}>
              <img src={el.url} />
              <div>
                <h1>{el.title}</h1>
                <img src={el.thumbnailUrl} />
                <span
                  style={styles.span}
                  onClick={() => {
                    this.props.history.push("/wishlist");
                    this.props.addPhoto(el);
                  }}
                >
                  Add to wishlist
                </span>
              </div>
            </div>
          ))}
      </Router>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addPhoto: x => {
      dispatch({
        type: "ADD_PHOTO",
        value: x
      });
      console.log(x);
    }
  };
};

export default connect(
  null,
  mapDispatchToProps
)(SinglePhoto);
