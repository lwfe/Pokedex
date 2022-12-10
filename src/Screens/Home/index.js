import React, { useState, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import {
  Container,
  Title,
  ScrollView,
  View,
  Card,
  Image,
  PokeName,
  Input,
} from "./styles";

export default function Home() {
  const [pokemons, setPokemons] = useState([]);
  const [search, onChangeSearch] = useState("");

  function fetchPokemons() {
    fetch("https://pokeapi.co/api/v2/pokemon")
      .then((response) => response.json())
      .then((data) => setPokemons(data.results))
      .catch((err) => console.log(err));
  }

  useEffect(() => {
    fetchPokemons();
  }, []);

  return (
    <Container>
      <StatusBar style="dark" />
      <Title>Pokedex</Title>
      <Input
        value={search}
        onChangeText={onChangeSearch}
        placeholder="Search"
      />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View>
          {pokemons.map((pokemons, index) => {
            return (
              <Card key={index}>
                <Image
                  source={{
                    uri: `https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/${pokemons.name}.png`,
                  }}
                />
                <PokeName>{pokemons.name}</PokeName>
              </Card>
            );
          })}
        </View>
      </ScrollView>
    </Container>
  );
}
