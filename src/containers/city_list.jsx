import React, { Component } from "react";

class CityList extends Component {
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
