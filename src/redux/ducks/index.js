import { combineReducers } from 'redux';
import budgetReducer from './budgetDucks';

const rootReducer = combineReducers({
  budget: budgetReducer
});

export default rootReducer;
