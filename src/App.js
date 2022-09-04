import './App.css';
import { Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Home from './Pages/Home';
import AllBeers from './Pages/AllBeers';
import RandomBeer from './Pages/Random-beer';
import NewBeer from './Pages/New-beer';
import SingleBeer from './Pages/SingleBeer';

function App() {

  const apiUrl = 'https://ih-beers-api2.herokuapp.com/beers';
  const [ beers, setBeers ] = useState([]);

  useEffect(() => {
    axios.get(apiUrl).then(response => setBeers(response.data)).catch(err => console.log(err));
  })


  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/>}/> 
        <Route path='/beers' element={<Beers beers={beers}/>}/> 
        <Route path='/random-beer' element={<RandomBeer/>}/> 
        <Route path='/new-beer' element={<NewBeer/>}/> 
        <Route path='/allbeers/:id' element={<SingleBeer beers={beers}/>}/>
      </Routes>
    </div>
  );
}

export default App;