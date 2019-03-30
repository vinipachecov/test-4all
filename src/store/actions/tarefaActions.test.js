import * as ActionTypes from './actionTypes';
import * as tarefaActions from './tarefaActions';

describe('Tarefa Actions', () => {
  let action;
  const tarefa = {
    id: 'ultimo',
    cidade: 'Porto Alegre',
    urlFoto: 'http://dev.4all.com:3003/cidade.jpg',
    urlLogo: 'http://dev.4all.com:3003/logometro.png',
    titulo: 'Cidade',
    telefone: '5144114411',
    texto: 'A metropolis is a large city or urban area which is a significant economic, political, and cultural center for a country or region, and an important hub for regional or international connections, commerce, and communications.',
    endereco: 'Rua. Cândido Silveira, 178',
    latitude: -30.0209728,
    longitude: -51.1921976,
    comentarios:
    [{
      urlFoto: 'http://dev.4all.com:3003/usuario5.jpeg',
      nome: 'Usuario asd',
      nota: 3,
      titulo: 'Comentário Título',
      comentario: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus finibus consequat nulla, a laoreet ipsum blandit ac. Donec vitae convallis nisi. Integer tincidunt nisi ac nibh posuere, in finibus turpis eleifend.',
    },
    ],
  };
  it(`${tarefaActions.getTarefas}`, () => {
    action = {
      type: ActionTypes.GET_TAREFAS,
    };
    expect(action).toEqual(tarefaActions.getTarefas());
  });

  it(`${tarefaActions.loadingTarefa}`, () => {
    action = {
      type: ActionTypes.LOADING_TAREFA,
    };
    expect(action).toEqual(tarefaActions.loadingTarefa());
  });

  it(`${tarefaActions.selectTarefa}`, () => {
    action = {
      type: ActionTypes.SELECT_TAREFA,
      tarefa,
    };
    expect(action).toEqual(tarefaActions.selectTarefa(tarefa));
  });

  it(`${tarefaActions.sendTarefaData}`, () => {
    action = {
      type: ActionTypes.SEND_TAREFA_DATA,
      tarefaData: tarefa,
    };
    expect(action).toEqual(tarefaActions.sendTarefaData(tarefa));
  });
});
