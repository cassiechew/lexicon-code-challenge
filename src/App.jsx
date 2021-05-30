import './App.scss';
import { MovieList } from './containers/Movies';
import { Header } from './components/Header';


/**
 * Main application
 */
function App() {
    const contentToPass = "This is a price comparison website for movies!";

    return (
        <div className="app">
            <Header title="Prince's Theater" subtitle="Classic Movies At Home" content={contentToPass} />
            <div className="container__movie-list">
                <MovieList />
            </div>
        </div>
    );
}

export default App;
