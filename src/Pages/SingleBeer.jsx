import axios from "axios";
import { useState, useEffect } from "react";
import NavBar from "../components/NavBar";
import { useParams } from "react-router-dom";

const SingleBeer = () => {
  const [beer, setBeer] = useState([]);
  const id = useParams().id;
  useEffect(() => {
    axios
      .get(`https://ih-beers-api2.herokuapp.com/beers/${id}`)
      .then((response) => {
        setBeer(response.data);
      });
  }, []);


  return (
    <div>
      <NavBar />
      <div>
        <div>
          <img src={beer.image_url} alt="beer bottle" />
        </div>
        <div>
          <h2>{beer.name}</h2>
          <h2> {beer.attenuation_level}</h2>
        </div>
        <div>
          <h3>{beer.tagline}</h3>
          <p>{beer.first_brewed}</p>
        </div>
        <div>
          <p>{beer.description}</p>
          <p>{beer.contributed_by}</p>
        </div>
      </div>
    </div>
  );
};

export default SingleBeer;