import React from 'react';
import CityList from "../containers/city_list";

const App = () => {
  return (
    <div className="app container-fluid">
      <CityList />
      <div className="m-3 col-md-8"> {/* TODO: replace this with ActiveCity */}
        Some more content
      </div>
    </div>
  );
};

export default App;
