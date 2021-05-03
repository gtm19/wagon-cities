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
      <div className="col-md-4">
        <ul className="list-group">
          {
            this.props.cities.map((city) => {
              return (
                <li className="list-group-item">{city.name}</li>
              );
            })
          }
        </ul>
      </div>
    );
  }
}

export default CityList;
