import React, { useState, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { Container, Title } from "./styles";

import { SearchBar } from "../../Components/SearchBar";

export default function Home() {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon")
      .then((response) => response.json())
      .then((data) => setPokemons(data.results))
      .catch((err) => console.log(err));
  }, []);

  return (
    <Container>
      <StatusBar style="dark" />
      <Title>Pokedex</Title>
      <SearchBar
        placeholder="Digite o nome do pokemon"
        placeholdercolor="#627084"
      />
    </Container>
  );
}
