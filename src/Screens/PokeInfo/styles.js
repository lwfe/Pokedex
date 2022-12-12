import styled from "styled-components/native";
import { getStatusBarHeight } from "react-native-status-bar-height";

const statusbarHeight = getStatusBarHeight();

export const Container = styled.SafeAreaView`
  flex: 1;
  align-items: center;
  margin-top: ${statusbarHeight}px;
`;

export const Title = styled.Text``;
