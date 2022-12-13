import React from "react";
import { View, Type, Icon } from "./styles";
import { colors } from "../../../assets/colors";

export default function Tag({ type }) {
  return (
    <View style={{ backgroundColor: colors[type] }}>
      <Type>{type}</Type>
    </View>
  );
}
