// TODO: add and export your own actions
import cities from '../data/cities';

export const setCities = () => {
  return fetch("https://raw.githubusercontent.com/gtm19/wagon-cities/main/src/data/cities.json")
    .then(response => response.json())
    .then((data) => {
      return {
        type: "SET_CITIES",
        payload: data.sort((a, b) => ((a.name > b.name) ? 1 : -1))
      };
    });
};

export const setActiveCity = (city) => {
  return {
    type: "SET_ACTIVE_CITY",
    payload: city
  };
};
