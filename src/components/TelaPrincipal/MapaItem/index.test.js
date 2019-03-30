import React from 'react';
import { shallow } from 'enzyme';
import MapaItem from './index';

const props = {
  latitude: -30.0209728,
  endereco: 'Rua. Cândido Silveira, 178',
  longitude: -51.1921976,
};
const wrapper = shallow(<MapaItem {...props} />);

describe('<MapaItem />', () => {
  it('renderiza o mapa', () => {
    expect(wrapper.find('MapView').exists()).toBe(true);
  });
  it('Renderiza o endereço', () => {
    expect(wrapper.find('Text').exists()).toBe(true);
    expect(wrapper.find('Text').children().text()).toEqual(props.endereco);
  });
});
