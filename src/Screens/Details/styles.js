import styled from "styled-components/native";
import { getStatusBarHeight } from "react-native-status-bar-height";

const statusbarHeight = getStatusBarHeight();

export const Container = styled.View`
  flex: 1;
  align-items: center;
`;

export const Header = styled.View`
  padding-top: ${statusbarHeight}px;
  width: 100%;
  height: 200px;
  border-bottom-left-radius: 30px;
  border-bottom-right-radius: 30px;
  border: 1px solid #263238;
  background: #76c9df;
  align-items: center;
`;

export const Info = styled.View`
  width: 90%;
  flex-direction: row;
  justify-content: space-between;
`;

export const Basic = styled.View`
  align-items: flex-start;
  justify-content: flex-start;
`;

export const BackButton = styled.TouchableOpacity`
  background: #fff;
  padding: 0 12px;
  border-radius: 8px;
  border: 1px solid #263238;
  margin: 10px 0;
`;
export const Icon = styled.Image`
  width: 30px;
  height: 30px;
`;

export const SubTitle = styled.Text`
  font-family: "FiraCode-Regular"
  font-size: 12px;
`;

export const Title = styled.Text`
  font-family: "FiraCode-SemiBold";
  font-size: 22px;
`;

export const PokeImg = styled.Image`
  width: 200px;
  height: 200px;
`;

export const TypesView = styled.View`
  flex-direction: row;
  margin-top: 15px;
`;
