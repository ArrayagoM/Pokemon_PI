import './App.css';
import Landing from './Components/LandingPage/Landing';
import { Routes, Route } from 'react-router-dom';
import Home from './Components/Home/Home'
import Detail from './Components/Detail/Detail';
import About from './Components/About/About';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/home" element={<Home />} />
        <Route path='/about' element={<About/>}/>
        <Route path='/detail/:id' element={<Detail/>}/>
      </Routes>
    </div>
  );
}

export default App;
