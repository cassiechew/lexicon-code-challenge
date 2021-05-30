import Enzyme, { shallow } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import Header from './header';


Enzyme.configure({ adapter: new Adapter() });

describe('Header Component', () => {
  it('renders title', () => {
    const wrapper = shallow(<Header title="Prince's Theater" />);
    expect(wrapper.text()).toContain("Prince's Theater");
  });
  
  it('renders subtitle', () => {
    const wrapper = shallow(<Header subtitle="Classic Movies At Home"/>);
    expect(wrapper.text()).toContain("Classic Movies At Home");
  });
});