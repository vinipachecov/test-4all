import * as actionTypes from './actionTypes';

export const getTarefas = () => ({
  type: actionTypes.GET_TAREFAS,
});

export const sendTarefas = tarefas => ({
  type: actionTypes.TAREFAS_RECEIVED,
  tarefas,
});

export const selectTarefa = tarefa => ({
  type: actionTypes.SELECT_TAREFA,
  tarefa,
});

export const sendTarefaData = tarefaData => ({
  type: actionTypes.SEND_TAREFA_DATA,
  tarefaData,
});

export const loadingTarefa = () => ({
  type: actionTypes.LOADING_TAREFA,
});
