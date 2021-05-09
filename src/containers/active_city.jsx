import React, { Component } from 'react'
import { connect } from "react-redux";
class ActiveCity extends Component {
  render() {
    const { activeCity } = this.props;
    const url = `https://www.lewagon.com/api/v1/cities/${activeCity.slug}/cover?width=900`;

    return (
      <div className="active-city">
        <h1>{activeCity.name}</h1>
        <h4>{activeCity.address}</h4>
        <img src={url} alt={`The Le Wagon image for the city of ${activeCity.name}`} />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    activeCity: state.activeCity
  };
};

export default connect(mapStateToProps)(ActiveCity);
