import React from 'react';
import { shallow } from 'enzyme';
import { TelaServicos } from './index';

describe('<TelaServicos />', () => {
  const props = {
    navigation: {
      navigate: jest.fn(),
      goBack: jest.fn(),
    },
  };
  const wrapper = shallow(<TelaServicos {...props} />);
  it('Deve renderizar o título da tela ', () => {
    expect(wrapper.find('Text').children().text()).toEqual('Tela de serviços');
  });

  it('Deve acionar a navegação de volta a clicar no botão esquerdo do Header', () => {
    wrapper.instance().onHeaderLeftPress = jest.fn(() => props.navigation.goBack());
    wrapper.find('Styled(Button)').props().onPress();
    expect(props.navigation.goBack).toHaveBeenCalled();
  });
});
