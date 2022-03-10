import { AnyAction } from 'redux';

const cities = JSON.parse(localStorage.getItem('cities') || '[]');

/**
 * Store for city name
 * @param state
 * @param action
 * @returns
 */
const cityReducer = (state = cities, action: AnyAction) => {
  switch (action.type) {
    case 'ADD_CITY':
      return [...state, action.payload];
    case 'DELETE_CITY':
      return state.filter((city: string) => city !== action.payload);
    default:
      return state;
  }
};

export default cityReducer;
