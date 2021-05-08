// TODO: add and export your own actions
import cities from '../data/cities';

const setCities = () => {

  // In real life this would probably do some sort of API call

  return {
    type: "SET_CITIES",
    payload: cities
  };
};

export { setCities };
