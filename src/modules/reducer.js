import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import blockExplorerReducer from './blockExplorer/blockExplorerReducer';

export default combineReducers({
  routing: routerReducer,
  blockExplorer: blockExplorerReducer
});
