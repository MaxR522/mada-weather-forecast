import responseWeather from '../api/request';

const initialState = responseWeather().then((data) => {
  return data;
});

const weatherReducer = (state = initialState, action: any) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default weatherReducer;
