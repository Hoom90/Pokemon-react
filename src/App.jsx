import React, { useEffect, useState } from "react";
import axios from "axios";
import CardList from "./components/CardList";
import Search from "./components/Search";

const API_URL = "https://pokeapi.co/api/v2/pokemon?limit=50&offset=0";

export default function App() {
  const [items, setItems] = useState([]);

  const fetchItems = async () => {
    const { results } = (await axios.get(API_URL)).data;
    setItems(results);
  };

  const handleSearchCard = (name) =>{
    let filter = name
    let li = document.querySelectorAll('ul > li')
    for (let i = 0;i < li.length;i++) {

      let textVal = li[i].children[1].innerHTML || li[i].children[1].textContent
        if (textVal.indexOf(filter) > -1) {
            li[i].style.display = "flex";
        } else {
            li[i].style.display = "none";
        }
      
    }
  }

  useEffect(() => {
    fetchItems();
  }, []);

  return (
    <div className="container m-auto">
      <Search searchCard={handleSearchCard} />
      <CardList items = {items}/>  
    </div>
  );
}
