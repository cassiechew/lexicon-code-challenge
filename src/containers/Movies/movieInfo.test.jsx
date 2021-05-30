import Enzyme, { shallow } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import MovieInfo from './movieInfo';


Enzyme.configure({ adapter: new Adapter() });

describe('Movie Info Component', () => {
    const test = {
        name: "name",
        img: "img",
        cwldp: "cwldp",
        fwldp: "fwldp",
    }

    it('renders the info div', () => {
        const wrapper = shallow(<MovieInfo info={test} />);
        expect(wrapper.hasClass('movie-container__data')).toEqual(true);
    });
});