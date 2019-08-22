import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      albums: [],
      photos: [],
      id: ""
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/albums")
      .then(response => response.json())
      .then(json =>
        this.setState({
          albums: json
        })
      );
  }

  render() {
    var styles = {
      albums: {
        display: "flex",
        flexWrap: "wrap",
        paddingTop: "80px",
        justifyContent: "center"
      },
      single_album: {
        width: "300px",
        height: "300px",
        background: "white",
        border: "1px solid #eee",
        margin: "20px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
      },
      title_album: {
        textDecoration: "none",
        color: "#3c3c3c",
        fontFamily: "lato, sans-serif",
        fontSize: "20px",
        textAlign: "center",
        padding: "0 20px"
      }
    };
    return (
      <div style={styles.albums}>
        {this.state.albums.map(el => {
          return (
            <div style={styles.single_album}>
              <Link to={`/photos/${el.id}`} style={styles.title_album}>
                {el.title}
              </Link>
            </div>
          );
        })}
      </div>
    );
  }
}

export default Home;
