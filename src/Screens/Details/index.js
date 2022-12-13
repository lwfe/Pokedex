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
  Main,
  FavButton,
  DetailsText,
  DetailsView,
  FavIcon,
  DetailGroup,
  DetailsTitle,
  StatsView,
  StatBarsText,
  StatBars,
  StatBar,
  ProgressBarWrapper,
  ProgressBarProgress,
  StatBarsSecondaryText,
  ScrollView,
  Scroll,
} from "./styles";
import { backgroundColors, colors } from "../../../assets/colors";

export default function Details({ route, navigation }) {
  const { url } = route.params;
  const [loading, setLoading] = useState(true);
  const [pokemon, setPokemon] = useState([]);
  const [stats, setStats] = useState([]);
  const [types, setTypes] = useState([]);

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setPokemon(data);
        setTypes(data.types);
        setStats(data.stats);
        setLoading(false);
      });
  }, []);

  return loading ? (
    <></>
  ) : (
    <Container>
      <Scroll>
        <StatusBar style="dark" />
        <Header
          style={{
            backgroundColor: backgroundColors[types[0].type.name],
          }}
        >
          <Info>
            <Basic>
              <BackButton onPress={() => navigation.goBack()}>
                <Icon
                  source={require("../../../assets/icons/backbutton.png")}
                />
              </BackButton>
              <SubTitle>#{pokemon.id}</SubTitle>
              <Title>{pokemon.name}</Title>
              <TypesView>
                {types.map((type, index) => (
                  <Tag key={index} type={type.type.name} />
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

        <Main>
          <FavButton>
            <FavIcon source={require("../../../assets/icons/FavIcon.png")} />
            <Title>Favoritar</Title>
          </FavButton>
          <DetailsView>
            <DetailGroup>
              <DetailsText>{pokemon.height / 10}m</DetailsText>
              <DetailsTitle>Altura</DetailsTitle>
            </DetailGroup>
            <DetailGroup>
              <DetailsText>{pokemon.weight / 10}kg</DetailsText>
              <DetailsTitle>Peso</DetailsTitle>
            </DetailGroup>
          </DetailsView>
        </Main>

        <StatsView>
          <Title>Stats</Title>
          <StatBars>
            {stats.map((stat, index) => (
              <StatBar>
                <StatBarsText key={index}>{stat.stat.name}</StatBarsText>
                <ProgressBarWrapper>
                  <ProgressBarProgress
                    style={{
                      width: `${stat.base_stat}%`,
                      backgroundColor: colors[types[0].type.name],
                    }}
                  />
                </ProgressBarWrapper>
                <StatBarsSecondaryText>{stat.base_stat}</StatBarsSecondaryText>
              </StatBar>
            ))}
          </StatBars>
        </StatsView>
      </Scroll>
    </Container>
  );
}
