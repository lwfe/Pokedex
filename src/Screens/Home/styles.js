import styled from "styled-components/native";
import { getStatusBarHeight } from "react-native-status-bar-height";

const statusbarHeight = getStatusBarHeight();

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

export const ScrollView = styled.ScrollView`
  width: 80%;
  margin: 8px 0;
`;

export const View = styled.View`
  flex: 1;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
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
  width: 150px;
  height: 150px;
`;

export const PokeName = styled.Text`
  font-family: "FiraCode-Regular";
  font-size: 12px;
  max-width: 90%;
`;

export const Input = styled.TextInput`
  height: 40px;
  width: 80%;
  border: 1px solid #263238;
  border-radius: 4px;
  color: #263238;
  text-align: center;
`;
