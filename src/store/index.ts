import { combineReducers, createStore, Reducer, Store } from 'redux';
import cityReducer from './cityReducers';
import weatherReducer from './weatherReducer';

// Combine all reducers
const allReducer: Reducer = combineReducers({
  cities: cityReducer,
  weathers: weatherReducer,
});

// Create store
const store: Store = createStore(allReducer);

export default store;
