import './App.scss';
import { MovieList } from './containers/Movies';
import { Header } from './components/Header';


function App() {
  const contentToPass = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation";

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
