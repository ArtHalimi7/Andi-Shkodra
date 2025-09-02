import './index.css';
import Navbar from './Components/Navbar.jsx';
import Home from './pages/Home.jsx';
import RrethMeje from './pages/RrethMeje.jsx';
import Platforma from './pages/Platforma.jsx';
import Kontakti from './pages/Kontakti.jsx';
import Motto from './components/Motto.jsx';
import Footer from './components/Footer.jsx';
import VideoDisplay from './components/VideoDisplay.jsx';


const App = () => {
  return (
    <main className='background1'>
      <Navbar />
      <div id="home">
        <Home />
      </div>
      <div id="video">
        <VideoDisplay />
      </div>
      <div id="rreth-meje">
        <RrethMeje />
      </div>
      <div id="platforma">
        <Platforma />
      </div>
      <div id="motto">
        <Motto />
      </div>
      <div id="kontakti">
        <Kontakti />
      </div>
      <div id='footer'>
        <Footer />
      </div>
    </main>
  );
}

export default App;
