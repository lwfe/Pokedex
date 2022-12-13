import styled from "styled-components/native";
import { getStatusBarHeight } from "react-native-status-bar-height";

const statusbarHeight = getStatusBarHeight();

export const Scroll = styled.View`
  flex: 1;
  align-items: center;
`;

export const Container = styled.ScrollView`
  flex: 1;
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

export const Main = styled.View`
  width: 80%;
  align-items: center;
  margin-bottom: 30px;
`;
export const FavButton = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: 30px 0;
`;
export const FavIcon = styled.Image`
  margin: 0 3px;
`;

export const DetailsView = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
`;

export const DetailGroup = styled.View`
  align-items: center;
  justify-content: center;
`;
export const DetailsText = styled.Text`
  font-family: "FiraCode-Regular";
  font-size: 16px;
`;
export const DetailsTitle = styled.Text`
  font-family: "FiraCode-SemiBold";
  font-size: 20px;
`;

export const StatsView = styled.View`
  width: 80%;
  align-items: center;
  margin-bottom: 20px;
`;

export const StatBars = styled.View`
  width: 100%;
  align-items: center;
  justify-content: center;
`;

export const StatBar = styled.View`
  width: 100%;
  margin: 8px 0;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
`;

export const StatBarsText = styled.Text`
  width: 25%;
  font-family: "FiraCode-Regular";
  font-size: 14px;
`;

export const StatBarsSecondaryText = styled.Text`
  width: 10%;
  font-family: "FiraCode-Regular";
  font-size: 14px;
  text-align: center;
`;

export const ProgressBarWrapper = styled.View`
  width: 65%;
  height: 4px;
  background-color: #dfe4ea;
  border-radius: 4px;
`;
export const ProgressBarProgress = styled.View`
  height: 4px;
  background-color: green;
  border-radius: 4px;
  max-width: 100%;
`;
