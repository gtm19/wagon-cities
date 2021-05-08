import React, { Component } from "react";

class CityList extends Component {
  static defaultProps = {
    cities: [
      { name: 'Paris', address: '16 Villa Gaudelet, 75011 Paris', slug: 'paris' },
      { name: 'London', address: '14-22 Elder St, London E1 6BT', slug: 'london' },
      { name: 'Berlin', address: 'Rudi-Dutschke-Straße 26, 10969 Berlin', slug: 'berlin' },
    ]
  };

  constructor(props) {
    super(props);

    this.state = {
      delete: "this" // TODO: delete thsis
    };
  }

  render() {
    return (
      <div className="cities">
        {
          this.props.cities.map((city) => {
            return (
              <a className="city" href="#">
                {city.name}
              </a>
            );
          })
        }
      </div>
    );
  }
}

export default CityList;
