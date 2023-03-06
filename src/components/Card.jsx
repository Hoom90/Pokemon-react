import { useEffect, useState } from "react";
import axios from "axios";
import Tilt from 'react-parallax-tilt';

export default function Card(props) {
  const [pokemon, setPokemon] = useState({});

  useEffect(() => {
    axios.get(props.url).then(({ data }) => {
      setPokemon({
        type: data.types[0].type.name,
        img: data.sprites.front_default,
      });
    });
  }, []);

  return (
    <Tilt tiltReverse={true}>
    <li
      className={`${pokemon.type} border border-gray-300 shadow-2xl rounded flex flex-col text-center gap-1` }
      data-tilt data-tilt-max="50" data-tilt-speed="400"
    >      
      <img src={pokemon.img} className="bg-white rounded-t" alt="pic of pokemon" />
      <h1 name="pokemonName">{props.name}</h1>
      <span className="p-1 mb-1 rounded-full mx-2 border border-gray-700 bg-white">{pokemon.type}</span>
    </li>
    </Tilt>
  );
}
