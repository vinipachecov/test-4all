import { combineReducers } from 'redux';
import tarefaReducer from './tarefaReducer';

export default combineReducers({
  tarefaData: tarefaReducer,
});
