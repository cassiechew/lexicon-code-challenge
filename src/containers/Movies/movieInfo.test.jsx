import Enzyme, { shallow } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import MovieInfo from './movieInfo';


Enzyme.configure({ adapter: new Adapter() });

describe('Movie Info Component', () => {
    it('renders the info div', () => {
        const wrapper = shallow(<MovieInfo />);
        expect(wrapper.hasClass('movie-container__data')).toEqual(true);
    });

    it('renders the movie template', () => {
        const wrapper = shallow(<MovieInfo />);
        expect(wrapper.text()).toContain('Movie');
        expect(wrapper.text()).toContain('Cinemaworld');
        expect(wrapper.text()).toContain('Filmworld');
    });
});