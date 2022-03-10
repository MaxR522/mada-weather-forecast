import { combineReducers, createStore, Reducer, Store } from 'redux';
import cityReducer from './cityReducers';
import weatherReducer from './weatherReducer';

const allReducer: Reducer = combineReducers({
  cities: cityReducer,
  weathers: weatherReducer,
});

const store: Store = createStore(allReducer);

export default store;
