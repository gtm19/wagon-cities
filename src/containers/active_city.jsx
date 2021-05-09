import React from 'react';
import { connect } from "react-redux";

const LeWagonLogo = () => {
  return <img className="lwlogo" src="https://raw.githubusercontent.com/lewagon/fullstack-images/master/uikit/logo.png" />
};

const CityInfo = (props) => {
  const { activeCity } = props;

  if (activeCity) {
    const url = `https://www.lewagon.com/api/v1/cities/${activeCity.slug}/cover?width=900`;
    return (
      <div className="active-city">
        <h1>{activeCity.name}<LeWagonLogo /></h1>
        <h4>{activeCity.address}</h4>
        <img className="city-img" src={url} alt={`Le Wagon ${activeCity.name}`} />
      </div>
    );
  }
  return (
    <div className="active-city">
      <p>
        Please select a
        <LeWagonLogo />
        city
      </p>
    </div>);
};

const ActiveCity = (props) => {
  return <CityInfo activeCity={props.activeCity} />;
};

const mapStateToProps = (state) => {
  return {
    activeCity: state.activeCity
  };
};

export default connect(mapStateToProps)(ActiveCity);
