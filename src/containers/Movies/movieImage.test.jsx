import Enzyme, { shallow } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import MovieImage from './movieImage';


Enzyme.configure({ adapter: new Adapter() });

describe('Movie Image Component', () => {
    const test = {
        img: "img",
    }
    it('renders the image div', () => {
        const wrapper = shallow(<MovieImage img={test} />);
        expect(wrapper.hasClass('movie-container__img')).toEqual(true);
    });

    it('renders the image object', () => {
        const wrapper = shallow(<MovieImage img={test} />);
        expect(wrapper.containsMatchingElement(<img src="img" alt="" />)).toEqual(true);
    });
});