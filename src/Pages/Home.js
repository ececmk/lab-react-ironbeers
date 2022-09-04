import React from 'react'
import { Link } from 'react-router-dom';
import beersImage from '../assets/beers.png';
import randomBeerImage from '../assets/random-beer.png';
import newBeerImage from '../assets/new-beer.png';

function Home() {
  return (
    <div className='Page'>

            <img src={beersImage} alt='beer image'/>
            <Link to='/beers'><h2>All Beers</h2></Link>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eleifend nulla risus, eu congue libero faucibus non. Phasellus feugiat felis ac diam facilisis lacinia. Cras mauris lectus, finibus ut porttitor a, interdum eu urna. Praesent maximus iaculis massa, non suscipit tellus bibendum ac. Donec varius tempor magna, id tempus ante tempor id. Integer vulputate fermentum dolor eu vestibulum. Morbi sed neque blandit, molestie mauris non, commodo nibh.</p>


            <img src={randomBeerImage} alt='beer image'/>
            <Link to='/random-beer'><h2>Random Beer</h2></Link>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eleifend nulla risus, eu congue libero faucibus non. Phasellus feugiat felis ac diam facilisis lacinia. Cras mauris lectus, finibus ut porttitor a, interdum eu urna. Praesent maximus iaculis massa, non suscipit tellus bibendum ac. Donec varius tempor magna, id tempus ante tempor id. Integer vulputate fermentum dolor eu vestibulum. Morbi sed neque blandit, molestie mauris non, commodo nibh.</p>

  
            <img src={newBeerImage} alt='beer image'/>
            <Link to='/new-beer'><h2>New Beer</h2></Link>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eleifend nulla risus, eu congue libero faucibus non. Phasellus feugiat felis ac diam facilisis lacinia. Cras mauris lectus, finibus ut porttitor a, interdum eu urna. Praesent maximus iaculis massa, non suscipit tellus bibendum ac. Donec varius tempor magna, id tempus ante tempor id. Integer vulputate fermentum dolor eu vestibulum. Morbi sed neque blandit, molestie mauris non, commodo nibh.</p>
    
    </div>
  )
}

export default Home

