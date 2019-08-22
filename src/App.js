import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from "./components/home.js";
import Wishlist from "./components/wishlist.js";
import Photoss from "./components/photos.js";
import SinglePhoto from "./components/singlephoto";

class App extends Component {
  render() {
    var styles = {
      navbar: {
        display: "flex",
        justifyContent: "space-around",
        background: "white",
        height: "60px",
        alignItems: "center",
        boxShadow: "0px 6px 5px #eee",
        position: "fixed",
        width: "100%"
      },
      nav_item_home: {
        color: "#3c3c3c",
        textDecoration: "none",
        fontSize: "24px",
        fontFamily: "lato, sans-serif"
      },
      nav_item_wishlist: {
        textDecoration: "none",
        background: "#2288b9",
        fontSize: "24px",
        fontFamily: "lato,sans-serif",
        color: "white",
        padding: "5px 15px",
        borderRadius: "5px"
      }
    };
    return (
      <Router>
        <div style={styles.navbar}>
          <Link to="/" style={styles.nav_item_home}>
            Home
          </Link>
          <Link to="/wishlist" style={styles.nav_item_wishlist}>
            <span>WishList</span>
          </Link>
        </div>
        <Route exact path="/" component={Home} />
        <Route path="/wishlist" component={Wishlist} />
        <Route path={`/photos/:id`} component={Photoss} />
        <Route path={`/singlephoto/:id`} component={SinglePhoto} />
      </Router>
    );
  }
}

export default App;
