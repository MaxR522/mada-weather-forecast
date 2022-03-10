import { AnyAction } from 'redux';
import requestWeather from '../api/request';

// cities from localStorage
const cities = JSON.parse(localStorage.getItem('cities') || '[]');

const initialState = requestWeather(cities).then((data) => {
  return data;
});

/**
 * Store for weathers
 * @param state
 * @param action
 * @returns
 */
const weatherReducer = (state = initialState, action: AnyAction) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default weatherReducer;
