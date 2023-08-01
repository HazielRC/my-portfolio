import './App.css';
import './App-Mobile.css'
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from "./components/About"
import Portfolio from './components/Portfolio';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <About />
      <Portfolio />
    </div>
  );
}

export default App;
