import React from 'react';
import { Text } from 'react-native';
import { shallow } from 'enzyme';
import Button from './Button';

const props = {
  onPress: jest.fn(),
};


describe('<Button />', () => {
  it('Renderiza botão com TouchableOpacity', () => {
    const wrapper = shallow(<Button {...props}><Text>Texto</Text></Button>);
    expect(wrapper.find('TouchableOpacity').exists()).toBe(true);
    // console.log(wrapper.debug());
  });

  it('Testa o clique no botão com TouchableOpacity', () => {
    const wrapper = shallow(<Button {...props}><Text>Texto</Text></Button>);
    const touchable = wrapper.find('TouchableOpacity');
    touchable.props().onPress();
    expect(props.onPress).toHaveBeenCalled();
  });

  describe('Renderiza o botão com ripple', () => {
    beforeEach(() => {
      jest.mock('Platform', () => {
        const Platform = require.requireActual('Platform');
        Platform.OS = 'android';
        return Platform;
      });
    });

    it('Renderiza um botão com Ripple effect', () => {
      const wrapper = shallow(<Button {...props} ripple><Text>Texto</Text></Button>);
      expect(wrapper.find('DummyTouchableNativeFeedback').exists()).toBe(true);
    });

    it('Testa o clique no botão com DummyTouchableNativeFeedback', () => {
      const wrapper = shallow(<Button {...props} ripple><Text>Texto</Text></Button>);
      const touchable = wrapper.find('DummyTouchableNativeFeedback');
      touchable.props().onPress();
      expect(props.onPress).toHaveBeenCalled();
    });
  });
});
