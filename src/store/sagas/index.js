import { all, takeLatest } from 'redux-saga/effects';
import * as actionTypes from '../actions/actionTypes';
import * as tarefasSagas from './tarefas';

export default function* watchTarefas() {
  yield all([
    takeLatest(actionTypes.GET_TAREFAS, tarefasSagas.getTarefasSaga),
    takeLatest(actionTypes.SELECT_TAREFA, tarefasSagas.getTarefaDataSaga),
  ]);
}
