import React from 'react';
import CityList from "../containers/city_list";

const App = () => {
  return (
    <div className="app">
      <CityList />
      <div className="active-city"> {/* TODO: replace this with ActiveCity */}
        Some more content
      </div>
    </div>
  );
};

export default App;
