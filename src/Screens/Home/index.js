import React from "react";
import { StatusBar } from "expo-status-bar";
import { Container, Title } from "./styles";

import { SearchBar } from "../../Components/SearchBar";

export default function Home() {
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
