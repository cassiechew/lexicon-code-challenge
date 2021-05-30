import Enzyme, { shallow } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import Movie from './movie';
import MovieImage from './movieImage';
import MovieInfo from './movieInfo';


Enzyme.configure({ adapter: new Adapter() });

describe('Movie Component', () => {
    it('renders the movie component', () => {
        const wrapper = shallow(<Movie />);
        expect(wrapper.containsMatchingElement(<MovieImage />)).toEqual(true);
        expect(wrapper.containsMatchingElement(<MovieInfo />)).toEqual(true);
    });

    it('renders the movie div', () => {
        const wrapper = shallow(<Movie />);
        expect(wrapper.hasClass('movie-container')).toEqual(true);
    });
});