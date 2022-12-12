import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import {
  Container,
  Header,
  Title,
  SubTitle,
  Info,
  PokeImg,
  Basic,
} from "./styles";

export default function Details({ route }) {
  const { url } = route.params;
  const [pokemon, setPokemon] = useState([]);

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => setPokemon(data));
  }, []);

  return (
    <Container>
      <StatusBar style="dark" />
      <Header>
        <Info>
          <Basic>
            <SubTitle>#{pokemon.id}</SubTitle>
            <Title>{pokemon.name}</Title>
          </Basic>
          <PokeImg
            source={{
              uri: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`,
            }}
          />
        </Info>
      </Header>
    </Container>
  );
}
