import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './index.css';
import Navbar from './Components/Navbar.jsx';
import Home from './pages/Home.jsx';
const App = () => {
  
  return (
    <main className='background1'>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </main>
  );
}

export default App;
