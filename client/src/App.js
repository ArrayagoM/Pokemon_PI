import React, { useState, useEffect} from 'react';
import { allPokedex, IsLegendary, getFavorite } from './reducer/action'
import { useDispatch } from 'react-redux'; 
import Landing from './Components/LandingPage/Landing';
import { Routes, Route } from 'react-router-dom';
import Home from './Components/Home/Home';
import Initialpoke from './Components/initialPoke/initialPoke';
import Detail from './Components/Detail/Detail';
import AllPokemon from './Components/allPokemons/allPokmeons';
import Form from './Components/Form/Form';
import About from './Components/About/About';
import PokeLegen from './Components/PokemonLegendary/PokemonLegen';
import Favorite from './Components/Favorites/Favorites';



function App() {

const [loading, setLoading] = useState(true);
const dispatch = useDispatch();


useEffect(()=> {
  setLoading()
  dispatch(allPokedex());
  dispatch(IsLegendary());
  dispatch(getFavorite());
setLoading(false);
},[])

  return (
    <div className="App">
      {loading ? "" : "" }
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/home" element={<Home />} ></Route>
        <Route path='/initialPoke' element={<Initialpoke/>}/>
        <Route path='/legendarys' element={<PokeLegen/>}/>
        <Route path='/allPokemons' element={<AllPokemon/>}/>
        <Route path='/fav' element={<Favorite/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/detail/:id' element={<Detail/>}/>
        <Route path='/create' element={<Form/>}/>
      </Routes>
    </div>
  );
}

export default App;


