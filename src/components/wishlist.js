import React, { Component } from "react";
import { connect } from "react-redux";

class Wishlist extends Component {
  render() {
    {
      console.log(this.props.wishlist);
    }
    return (
      <div>
        {this.props.wishlist.map(el => {
          return (
            <div>
              <img src={el.url} />
            </div>
          );
        })}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    wishlist: state.addPhotoToWishlist
  };
};

export default connect(
  mapStateToProps,
  null
)(Wishlist);
