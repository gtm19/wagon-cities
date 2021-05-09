import React, { Component } from 'react'
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

class ActiveCity extends Component {
  static defaultProps = {
    activeCity: { name: 'London', address: '14-22 Elder St, London E1 6BT', slug: 'london' }
  };

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

export default ActiveCity;
