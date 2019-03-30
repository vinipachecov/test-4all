import React from 'react';
import { shallow } from 'enzyme';
import { TelaInicial } from './index';
import { tarefas } from '../../fixtures/fixtures';

describe('<TelaInicial />', () => {
  const props = {
    getTarefas: jest.fn(),
    loading: false,
    tarefas,
    selectTarefa: jest.fn(),
  };
  const wrapper = shallow(<TelaInicial {...props} />);
  it('Deve possuir uma lista de tarefas ', () => {
    expect(wrapper.find('FlatList').props().data).toEqual(props.tarefas);
  });
});
