import React from 'react';
import { shallow } from 'enzyme';
import Comentario from './index';


const props = {
  comentario: 'um commentario',
  titulo: 'o titulo',
  foto: 'https://www.foto.com',
  nota: 3,
  usuario: 'Luiz',
};

const wrapper = shallow(<Comentario {...props} />);

describe('<Comentario />', () => {
  it('Renderiza o nome do usuario', () => {
    expect(wrapper.find('Text').at(0).children().text()).toEqual(props.usuario);
  });

  it('Renderiza o titulo', () => {
    expect(wrapper.find('Text').at(1).children().text()).toEqual(props.titulo);
  });

  it('Renderiza o comentario', () => {
    expect(wrapper.find('Text').at(2).children().text()).toEqual(props.comentario);
  });

  it('Imagem recebe url da foto', () => {
    expect(wrapper.find('Image').prop('source')).toEqual({ uri: props.foto });
  });
});
