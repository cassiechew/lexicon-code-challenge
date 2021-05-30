import Enzyme, { shallow } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { MovieList } from '.';


Enzyme.configure({ adapter: new Adapter() });

describe('MovieList Page', () => {
    it('renders the movieList div', () => {
        const wrapper = shallow(<MovieList />);
        expect(wrapper.hasClass('movie-list')).toEqual(true);
    });
});