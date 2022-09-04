import React from 'react'
import Header from '../components/Header'
import axios from 'axios';
import { useEffect, useState } from 'react';

function RandomBeer() {
  const [randomBeer, setRandomBeer] = useState([]);

  const apiURL = `https://ih-beers-api2.herokuapp.com/beers/random`;

  useEffect(() => {
      axios
      .get(apiURL)
      .then(beer => {
          setRandomBeer(beer.data)})
      .catch(err => console.log(err))}, 
  []);

return (
  <div className="container">
      <Header />
      <div>
         <div><img src={randomBeer.image_url}/></div>
          <div>
              <h2>{randomBeer.name}</h2><p>{randomBeer.attenuation_level}</p>
              <p>{randomBeer.tagline}</p><p>{randomBeer.first_brewed}</p>
              </div>
              <article>{randomBeer.description}</article><br></br>
              <p>Created by: {randomBeer.contributed_by}</p>
          
      </div>
  </div>
)
}

export default RandomBeer