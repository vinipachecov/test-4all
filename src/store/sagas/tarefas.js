import { put } from 'redux-saga/effects';
import * as tarefaActions from '../actions/tarefaActions';
import RequestMaker from '../../../utils/api/requestMaker';
import NavigationService from '../../navigation/NavigationService';

export function* getTarefasSaga() {
  const response = yield RequestMaker.instance.get('tarefa');
  yield put(tarefaActions.sendTarefas(response.data.lista));
}

export function* getTarefaDataSaga(action) {
  yield put(tarefaActions.loadingTarefa());
  const response = yield RequestMaker.instance.get(`tarefa/${action.tarefa}`);
  yield put(tarefaActions.sendTarefaData(response.data));
  NavigationService.navigate('TelaPrincipal');
}
