// TODO: add and export your own actions
import cities from '../data/cities';

export const setCities = () => {
  // In real life this would probably do some sort of API call
  // Sorting the cities
  const compareNames = (a, b) => {
    const nameA = a.name.toUpperCase(); // ignore upper and lowercase
    const nameB = b.name.toUpperCase(); // ignore upper and lowercase
    if (nameA < nameB) {
      return -1;
    }
    if (nameA > nameB) {
      return 1;
    }
    // names must be equal
    return 0;
  };

  const sortedCities = cities.sort(compareNames);

  return {
    type: "SET_CITIES",
    payload: sortedCities
  };
};

export const setActiveCity = (city) => {
  return {
    type: "SET_ACTIVE_CITY",
    payload: city
  };
};
