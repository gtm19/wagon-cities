import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import { setActiveCity } from "../actions/index";

class City extends Component {
  render() {
    const { city, activeCity } = this.props;
    let classes = "city list-group-item";

    if (city === activeCity) {
      classes += " selected";
    }

    return (
      <div onClick={() => this.props.setActiveCity(city)}>
        <li className={classes} key={city.name}>
          {city.name}
        </li>
      </div>
    )
  }
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    { setActiveCity },
    dispatch
  );
};

const mapStateToProps = (state) => {
  return {
    activeCity: state.activeCity
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(City);
