import styled from "styled-components/native";
import { getStatusBarHeight } from "react-native-status-bar-height";
import { Dimensions } from "react-native";

const windowWidth = Dimensions.get("window").width;
const statusbarHeight = getStatusBarHeight();

function responsibleImage(width) {
  let eightypw = width * 0.8;
  let eightypf = eightypw * 0.8;
}

export const Container = styled.SafeAreaView`
  flex: 1;
  align-items: center;
  margin-top: ${statusbarHeight}px;
`;

export const Title = styled.Text`
  font-family: "FiraCode-SemiBold";
  font-size: 24px;
  padding: 15px 0;
`;

export const View = styled.View`
  flex: 1;
  width: 80%;
  margin: 8px 0;
  align-items: center;
  justify-content: center;
`;

export const Card = styled.TouchableOpacity`
  background: #dfe4ea;
  margin: 5px 0;
  padding: 5px;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  border: 1px solid #263238;
`;

export const Image = styled.Image`
  width: ${(windowWidth * 0.64) / 2}px;
  height: ${(windowWidth * 0.64) / 2}px;
`;

export const PokeName = styled.Text`
  font-family: "FiraCode-Regular";
  font-size: 12px;
  max-width: 90%;
`;

export const Input = styled.TextInput`
  height: 40px;
  width: 100%;
  color: #263238;
  text-align: center;
  z-index: 0;
`;

export const SearchView = styled.View`
  width: 80%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border: 1px solid #263238;
  border-radius: 4px;
`;

export const PokeList = styled.FlatList`
  width: 100%;
`;

export const AIview = styled.View`
  flex: 1;
`;
