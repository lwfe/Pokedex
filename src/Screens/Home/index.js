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

export default function Home({ navigation }) {
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
        placeholderTextColor="#263238"
        placeholder="Procurar pokemon"
      />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View>
          {pokemons
            .filter((pokemon) =>
              pokemon.name.toLowerCase().includes(search.toLowerCase())
            )
            .map((pokemons, index) => {
              return (
                <Card
                  key={index}
                  onPress={() => {
                    navigation.navigate("Details", {
                      url: pokemons.url,
                    });
                  }}
                >
                  <Image
                    source={{
                      uri: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${
                        index + 1
                      }.png`,
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
