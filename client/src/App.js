import Landing from './Components/LandingPage/Landing';
import { Routes, Route } from 'react-router-dom';
import Home from './Components/Home/Home'
import Detail from './Components/Detail/Detail';
import Form from './Components/Form/Form';
import About from './Components/About/About';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/home" element={<Home />} />
        <Route path='/about' element={<About/>}/>
        <Route path='/detail/:id' element={<Detail/>}/>
        <Route path='/create' element={<Form/>}/>
      </Routes>
    </div>
  );
}

export default App;
