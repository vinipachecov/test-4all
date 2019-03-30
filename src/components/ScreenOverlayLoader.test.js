import React from 'react';
import { shallow } from 'enzyme';
import ScreenOverlayLoader from './ScreenOverlayLoader';

describe('<ScreenOverlayLoader/>', () => {
  it('Deve renderizar o screenOverlayLoader', () => {
    const wrapper = shallow(<ScreenOverlayLoader loading />);
    expect(wrapper.find('Styled(Spinner)').exists()).toBe(true);
  });

  it('Não Deve renderizar o screenOverlayLoader', () => {
    const wrapper = shallow(<ScreenOverlayLoader loading={false} />);
    expect(wrapper.find('Styled(Spinner)').exists()).toBe(false);
  });
});
