import { useEffect, useState } from "react";
import axios from "axios";

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
    <li
      className={`${pokemon.type} py-20 sm:py-12 md:py-3 md:col-span-3 lg:col-span-2 shadow shadow-black rounded flex flex-col items-center`}
    >
      <img src={pokemon.img} className="bg-white" alt="pic of pokemon" />
      <h1 name="pokemonName">{props.name}</h1>
      <span className="p-1 my-2 bg-white rounded">{pokemon.type}</span>
    </li>
  );
}
