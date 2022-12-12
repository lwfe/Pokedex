import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import { Container, Title } from "./styles";

export default function PokeInfo({ route, navigation }) {
  const { pokeurl } = route.params;
  const [pokeinfo, setPokeInfo] = useState([]);

  useEffect(() => {
    fetch(pokeurl)
      .then((response) => response.json())
      .then((data) => setPokeInfo(data));
  }, []);

  return (
    <Container>
      <Title>name: {pokeinfo.name}</Title>
      <Title>heigth: {pokeinfo.height}</Title>
      <StatusBar style="auto" />
    </Container>
  );
}
