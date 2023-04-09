import NavBar from './components/NavBar';
import Home from './pages/Home';
import SocialLinks from './components/SocialLinks';
import About from './pages/About';
import Projects from './components/Projects';
import Contact from './pages/Contact';
import { Routes, Route } from 'react-router-dom';
import PageNotFound from './pages/PageNotFound';

function App() {
  return (
    <div className='w-full bg-gradient-to-b from-black via-black to-gray-800'>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='*' element={<PageNotFound />} />
      </Routes>
      <SocialLinks />
    </div>
  );
}

export default App;
