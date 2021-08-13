import { combineReducers } from 'redux';
import PlayerReducer from './Player';

export default combineReducers({
    player : PlayerReducer,
});