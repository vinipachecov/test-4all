import * as tarefaActions from '../actions/tarefaActions';
import reducers from './index';

const initialState = {
  tarefas: [],
  tarefaSelected: null,
  tarefaData: null,
  loading: false,
};
const tarefas = [
  'primeira',
  'segunda',
  'terceira',
];

const dadosDaTarefa = [
  {
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
  },
];


describe('tarefaReducer', () => {
  it('Começa com dados vazios ', () => {
    const { tarefaData } = reducers({}, {});
    expect(tarefaData).toEqual(initialState);
  });

  it('Deve receber a lista de tarefas no reducer', () => {
    const { tarefaData } = reducers({}, tarefaActions.sendTarefas(tarefas));
    expect(tarefaData.tarefas).toEqual(
      tarefas.map((tarefa, index) => ({ tarefa, id: index.toString() })),
    );
    expect(tarefaData.tarefas[0].id).toEqual('0');
  });

  it('Deve receber uma tarefa selecionada no reducer', () => {
    const { tarefaData } = reducers({}, tarefaActions.selectTarefa({ tarefa: tarefas[0], id: '0' }));
    expect(tarefaData.tarefaSelected).toEqual({ tarefa: tarefas[0], id: '0' });
  });

  it('Deve receber os dados de uma tarefa ', () => {
    const { tarefaData } = reducers({}, tarefaActions.sendTarefaData(dadosDaTarefa[0]));
    expect(tarefaData.tarefaData).toEqual(dadosDaTarefa[0]);
    expect(tarefaData.loading).toBe(false);
  });

  it('Deve receber o estado de Loading ', () => {
    const { tarefaData } = reducers({}, tarefaActions.loadingTarefa());
    expect(tarefaData.loading).toBe(true);
  });
});
