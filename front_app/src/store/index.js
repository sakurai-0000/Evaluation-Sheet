import { combineReducers } from 'redux';

import evaluation from '../compornents/evaluationSheet/modules/reducer';

const rootReducer = combineReducers({
  evaluation
})

export default rootReducer;