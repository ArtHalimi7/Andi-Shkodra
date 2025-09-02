import './index.css';
import Navbar from './Components/Navbar.jsx';
import Home from './pages/Home.jsx';
import RrethMeje from './pages/RrethMeje.jsx';
import Platforma from './pages/Platforma.jsx';
import Kontakti from './pages/Kontakti.jsx';

const App = () => {
  return (
    <main className='background1'>
      <Navbar />
      <div id="home">
        <Home />
      </div>
      <div id="rreth-meje">
        <RrethMeje />
      </div>
      <div id="platforma">
        <Platforma />
      </div>
      <div id="kontakti">
        <Kontakti />
      </div>
    </main>
  );
}

export default App;
