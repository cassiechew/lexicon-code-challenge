import Enzyme, { shallow } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import App from './App';
import { MovieList } from './containers/Movies';
import { Header } from './components/Header';

Enzyme.configure({ adapter: new Adapter() });

describe('App Component', () => {
  it('renders Header Component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.containsMatchingElement(<Header />)).toEqual(true);
  });

  it('renders Movielist Container', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.containsMatchingElement(<MovieList />)).toEqual(true);
  });
});
