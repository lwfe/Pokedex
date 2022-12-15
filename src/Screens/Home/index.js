import React, { useState, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import {
  Container,
  Title,
  View,
  Card,
  Image,
  PokeName,
  Input,
  SearchView,
  PokeList,
  AIview,
} from "./styles";
import { ActivityIndicator } from "react-native";

export default function Home({ navigation }) {
  const [pokemons, setPokemons] = useState([]);
  // const [search, onChangeSearch] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [nextUrl, setNextUrl] = useState("");

  function fetchPokemons() {
    fetch("https://pokeapi.co/api/v2/pokemon")
      .then((response) => response.json())
      .then((data) => {
        setNextUrl(data.next);
        setPokemons(data.results);
        setIsLoading(false);
      })
      .catch((err) => console.log(err));
  }

  function renderPokemons({ item }) {
    let url = item.url.split("/");
    let id = url[url.length - 2];
    return (
      <Card
        onPress={() => {
          navigation.navigate("Details", {
            url: item.url,
          });
        }}
      >
        <Image
          source={{
            uri: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`,
          }}
        />
        <PokeName>{item.name}</PokeName>
      </Card>
    );
  }

  function renderNextUrl() {
    fetch(nextUrl)
      .then((response) => response.json())
      .then((data) => {
        setPokemons(pokemons.concat(data.results));
        setNextUrl(data.next);
      })
      .catch((err) => {
        console.log(err);
      });
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
      {/* <SearchView>
        <Input
          value={search}
          onChangeText={onChangeSearch}
          placeholderTextColor="#263238"
          placeholder="Procurar pokemon"
        />
      </SearchView> */}
      <View contentContainerStyle={{ flex: 1 }}>
        <PokeList
          data={pokemons}
          columnWrapperStyle={{ justifyContent: "space-between" }}
          renderItem={renderPokemons}
          numColumns={2}
          keyExtractor={(item) => item.name}
          onEndReached={renderNextUrl}
          onEndReachedThreshold={0.5}
          ListFooterComponent={() => <ActivityIndicator />}
          ListFooterComponentStyle={{ padding: 20 }}
        />
      </View>
    </Container>
  );
}
