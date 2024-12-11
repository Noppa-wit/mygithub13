import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Carousel from './pages/Carousel';
import Proffer from './pages/Proffer';
import Explore from './pages/Explore';

function App() {
    return (
        <div className="App">
            <Navbar />
            <Carousel />
            <Proffer />
            <Explore />
        </div>
    );
}

export default App;
