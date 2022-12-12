import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import Tag from "../../Components/Tag";
import {
  Container,
  Header,
  Title,
  SubTitle,
  Info,
  PokeImg,
  Basic,
  BackButton,
  Icon,
  TypesView,
} from "./styles";

export default function Details({ route, navigation }) {
  const { url } = route.params;
  const [pokemon, setPokemon] = useState([]);
  const [types, setTypes] = useState([]);
  console.log(types);

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => setPokemon(data) || setTypes(data.types));
  }, []);

  return (
    <Container>
      <StatusBar style="dark" />
      <Header>
        <Info>
          <Basic>
            <BackButton onPress={() => navigation.goBack()}>
              <Icon source={require("../../../assets/icons/backbutton.png")} />
            </BackButton>
            <SubTitle>#{pokemon.id}</SubTitle>
            <Title>{pokemon.name}</Title>
            <TypesView>
              {types.map((type, index) => (
                <Tag key={index} name={type.type.name} />
              ))}
            </TypesView>
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
