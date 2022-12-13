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
  const [isLoading, setIsLoading] = useState(true);

  function fetchPokemons() {
    fetch("https://pokeapi.co/api/v2/pokemon")
      .then((response) => response.json())
      .then((data) => {
        setPokemons(data.results);
        setIsLoading(false);
      })
      .catch((err) => console.log(err));
  }

  useEffect(() => {
    fetchPokemons();
  }, []);

  return isLoading ? (
    <></>
  ) : (
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
              let url = pokemons.url.split("/");
              let id = url[url.length - 2];
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
                      uri: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`,
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
