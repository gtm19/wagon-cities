import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

class City extends Component {
  render() {
    const { city } = this.props;
    return (
      <div>
        <a className="city" key={city.name} href="#">
          {city.name}
        </a>
      </div>
    )
  }
};

export default City;
