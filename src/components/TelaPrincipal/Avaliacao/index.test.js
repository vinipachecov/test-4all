import React from 'react';
import 'react-native';
import { shallow } from 'enzyme';
import Avaliacao from './index';

describe('<Avaliacao />', () => {
  it('Renderiza duas estrelas', () => {
    const numberStars = 2;
    const wrapper = shallow(<Avaliacao nota={numberStars} />);
    expect(wrapper.find('Styled(Icon)').length).toEqual(2);
  });

  it('Renderiza 5 estrelas', () => {
    const numberStars = 5;
    const wrapper = shallow(<Avaliacao nota={numberStars} />);
    expect(wrapper.find('Styled(Icon)').length).toEqual(5);
  });
});
