import { combineReducers } from 'redux';
import storyboardReducer from './storyboardReducer';

const rootReducer = combineReducers({
	storyboard: storyboardReducer
});

export default rootReducer;