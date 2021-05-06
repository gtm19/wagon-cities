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
      <div className="m-3 col-md-4">
        <ul className="list-group bg-light">
          {
            this.props.cities.map((city) => {
              return (
                <a href="#" className="list-group-item list-group-item-action list-group-item-light">
                  {city.name}
                </a>
              );
            })
          }
        </ul>
      </div>
    );
  }
}

export default CityList;
