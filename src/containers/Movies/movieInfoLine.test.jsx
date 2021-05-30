import Enzyme, { shallow } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import MovieInfoLine from './movieInfoLine';


Enzyme.configure({ adapter: new Adapter() });

describe('MovieInfoLine Component', () => {
    it('renders the component', () => {
        const wrapper = shallow(<MovieInfoLine text="text" />);
        expect(wrapper.hasClass('movie-container__data__text')).toEqual(true);
    });
});