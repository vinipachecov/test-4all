import React from 'react';
import { shallow } from 'enzyme';
import DadosLugar from './index';

const props = {
  listaBotoes: [
    {
      name: 'LIGAR',
      iconName: 'telephone',
      iconType: 'Foundation',
    },
    {
      name: 'SERVIÇOS',
      iconName: 'diamond',
      iconType: 'FontAwesome',
    },
    {
      name: 'ENDEREÇO',
      iconName: 'map-marker',
      iconType: 'FontAwesome',
    },
    {
      name: 'COMENTÁRIOS',
      iconName: 'comments',
      iconType: 'FontAwesome',
    },
    {
      name: 'FAVORITOS',
      iconName: 'star',
      iconType: 'FontAwesome',
    },
  ],
  tarefa: {
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
  onButtonListPress: jest.fn()
  ,
};
const wrapper = shallow(<DadosLugar {...props} />);

describe('<DadosLugar />', () => {
  it('Renderiza o nome da cidade ', () => {
    expect(wrapper.find('Text').at(0).children().text()).toEqual(props.tarefa.titulo.toUpperCase());
  });
});
