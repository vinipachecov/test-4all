import React from 'react';
import { shallow } from 'enzyme';
import BarraNavegacao from './index';

const leftPress = jest.fn();
const rightPress = jest.fn();
const cidade = 'Porto Alegre';
const bairro = 'Moinhos';
const props = {
  leftPress,
  cidade,
  bairro,
  rightPress,
};
const wrapper = shallow(<BarraNavegacao {...props} />);

describe('<BarraNavegacao />', () => {
  it('Renderiza', () => {
    // console.log(wrapper.debug());
    expect(wrapper.find('Styled(Header)').length).toEqual(1);
  });

  it('Aperta botão da esquerda', () => {
    const button = wrapper.find('Button');
    button.at(0).props().onPress();
    expect(leftPress).toHaveBeenCalled();
  });

  it('Aperta botão da direita', () => {
    const button = wrapper.find('Button');
    button.at(1).props().onPress();
    expect(rightPress).toHaveBeenCalled();
  });
});
