import { combineReducers } from 'redux';
import parameters from './parameters';
import inventary from './inventary';

const mundoSportApp = combineReducers({
  parameters,
  inventary,
});

export default mundoSportApp;
