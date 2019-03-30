import * as actionTypes from '../actions/actionTypes';

const initialState = {
  tarefas: [],
  tarefaSelected: null,
  tarefaData: null,
  loading: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.TAREFAS_RECEIVED:
      return {
        ...state,
        tarefas: action.tarefas.map((tarefa, index) => (({ tarefa, id: index.toString() }))),
      };
    case actionTypes.SELECT_TAREFA:
      return { ...state, tarefaSelected: action.tarefa };
    case actionTypes.SEND_TAREFA_DATA:
      return { ...state, tarefaData: action.tarefaData, loading: false };
    case actionTypes.LOADING_TAREFA:
      return {
        ...state,
        loading: true,
      };
    default:
      return state;
  }
};
