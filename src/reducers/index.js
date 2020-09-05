import counterReducer from './counter';
import logReducer from './isLogged';
import {combineReducers} from 'redux';

const allReducers = combineReducers({
   count: counterReducer,
   log: logReducer
});

export default allReducers;