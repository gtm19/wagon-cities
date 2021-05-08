// TODO: add and export your own actions
import cities from '../data/cities';

export const setCities = () => {
  // In real life this would probably do some sort of API call

  return {
    type: "SET_CITIES",
    payload: cities
  };
};

export const setActiveCity = (city) => {
  return {
    type: "SET_ACTIVE_CITY",
    payload: city
  };
};
