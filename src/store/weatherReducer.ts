import responseWeather from '../api/request';

const initialState = responseWeather().then((data) => {
  return data;
});

/**
 * Store for weathers
 * @param state
 * @param action
 * @returns
 */
const weatherReducer = (state = initialState, action: any) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default weatherReducer;
