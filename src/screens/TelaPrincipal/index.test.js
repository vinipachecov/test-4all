import React from 'react';
import { shallow } from 'enzyme';
import { TelaPrincipal } from './index';
import { tarefa } from '../../fixtures/fixtures';


const props = {
  tarefa,
  navigation: {
    navigate: jest.fn(),
    goBack: jest.fn(),
  },
};
describe('<TelaPrincipal/>', () => {
  const wrapper = shallow(<TelaPrincipal {...props} />);
  it('Deve chamar navigation.goBack()', () => {
    wrapper.find('BarraNavegacao').props().leftPress();
    expect(props.navigation.goBack).toHaveBeenCalled();
  });

  it('Imagem deve receber corretamente a url da tarefa', () => {
    expect(wrapper.find('Image').props().source).toEqual({ uri: props.tarefa.urlFoto });
  });

  it('Deve acionar o Modal ao clicar no botão de endereço', () => {
    const dadosLugar = wrapper.find('DadosLugar');
    expect(wrapper.state()).toEqual({ modalVisible: false });
    const enderecoButton = dadosLugar.dive().find('Button').at(2);
    enderecoButton.props().onPress();
    expect(wrapper.state()).toEqual({ modalVisible: true });
  });

  it('Deve chamar a funcao de navegacao ao clicar no botao de serviços', () => {
    const dadosLugar = wrapper.find('DadosLugar');
    const servicosButton = dadosLugar.dive().find('Button').at(1);
    servicosButton.props().onPress();
    expect(props.navigation.navigate).toHaveBeenCalled();
  });

  it('Deve chamar a função de abrir telefone ao aperta no botão de telefone', () => {
    wrapper.instance().onOpenPhone = jest.fn();
    const dadosLugar = wrapper.find('DadosLugar');
    const ligarButton = dadosLugar.dive().find('Button').at(0);
    ligarButton.props().onPress();
    expect(wrapper.instance().onOpenPhone).toHaveBeenCalled();
  });
});
