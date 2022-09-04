
import React from 'react';
import Header from '../components/Header';
import { Link } from 'react-router-dom';

function AllBeers({beers}) {
  return (
    <div>
        <Header/>
        <h1>All Beers</h1>
        {beers.map(beer => {
            return (
                <div>
                    <img src={beer.image_url} alt='beer image'/>
                    <Link to={`/beers/${beer._id}`}><h3>{beer.name}</h3></Link>   
                    <p>{beer.tagline}</p>
                    <p>{beer.description}</p>
                </div>
            )
        })}
    </div>
  )
}

export default AllBeers